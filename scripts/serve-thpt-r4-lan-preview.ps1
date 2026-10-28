<#
.SYNOPSIS
    Local, non-production THPT R4 MkDocs preview for desktop/iPhone/iPad QA.
.DESCRIPTION
    Starts the exact alternate config mkdocs.thpt-preview.yml.
    Installs only into repo-local .venv-thpt-r4, never changes deployment settings.
    LAN mode intentionally makes the preview accessible to trusted devices on same Wi-Fi.
#>
param(
    [ValidateRange(1024,65535)][int]$Port = 8000,
    [switch]$LocalOnly
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$config = Join-Path $root "mkdocs.thpt-preview.yml"
if (-not (Test-Path -LiteralPath $config)) {
    throw "Cannot find mkdocs.thpt-preview.yml. Open the THPT R4 branch checkout or extracted archive before running this script."
}

$pythonCommand = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCommand) {
    throw "Python 3 is required. Install Python 3 (and enable the python command), then rerun this script."
}

$venv = Join-Path $root ".venv-thpt-r4"
$venvPython = Join-Path $venv "Scripts\python.exe"
Push-Location $root
try {
    if (-not (Test-Path -LiteralPath $venvPython)) {
        Write-Host "[THPT R4] Creating isolated Python environment..."
        & python -m venv $venv
        if ($LASTEXITCODE -ne 0) { throw "Failed to create Python virtual environment." }
    }
    Write-Host "[THPT R4] Checking MkDocs Material inside isolated environment..."
    & $venvPython -m pip install "mkdocs-material>=9,<10"
    if ($LASTEXITCODE -ne 0) { throw "MkDocs Material installation failed." }

    $hostAddress = if ($LocalOnly) { "127.0.0.1" } else { "0.0.0.0" }
    Write-Host ""
    Write-Host "-----------------------------------------------"
    Write-Host "THPT R4 Preview (local only; no GitHub deploy)"
    Write-Host "Desktop: http://127.0.0.1:$Port/thpt-preview/"
    if (-not $LocalOnly) {
        $ips = @(Get-NetIPConfiguration -ErrorAction SilentlyContinue |
            Where-Object { $_.IPv4Address -and $_.IPv4DefaultGateway } |
            ForEach-Object { $_.IPv4Address.IPAddress } |
            Where-Object { $_ -and $_ -notmatch "^127\." } |
            Select-Object -Unique)
        foreach ($ip in $ips) {
            Write-Host "Same trusted Wi-Fi: http://$($ip):$Port/thpt-preview/"
        }
        if ($ips.Count -eq 0) {
            Write-Host "To open from iPhone/iPad, run ipconfig and use the PC's Wi-Fi IPv4 address with port $Port."
        }
        Write-Host "Use ONLY on a trusted private network. If Windows asks, allow Python on PRIVATE networks only."
    }
    Write-Host "Press Ctrl+C to stop. No learner data is recorded by this preview."
    Write-Host "-----------------------------------------------"
    Write-Host ""
    & $venvPython -m mkdocs serve -f "mkdocs.thpt-preview.yml" -a "$($hostAddress):$Port"
    if ($LASTEXITCODE -ne 0) { throw "MkDocs preview exited with an error." }
}
finally {
    Pop-Location
}
