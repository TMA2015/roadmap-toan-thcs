/* Student-friendly local file backup/restore, explicitly confirmed and no server. */
(() => {
  "use strict";
  if(typeof document==="undefined")return;
  const api=()=>window.MathLocalProgressBackup;
  const el=(tag,css="",label=null)=>{
    const node=document.createElement(tag);if(css)node.className=css;
    if(label!==null)node.textContent=String(label);return node;
  };
  const fmt=n=>new Intl.NumberFormat("vi-VN").format(n);
  const saveFile=(doc,kind="math-progress")=>{
    const day=new Date().toISOString().slice(0,10);
    const content=JSON.stringify(doc,null,2);
    const url=URL.createObjectURL(new Blob([content],{type:"application/json;charset=utf-8"}));
    const a=document.createElement("a");a.href=url;a.download=kind+"-"+day+".json";
    document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),10000);
  };
  function init(root) {
    if(root.dataset.backupReady)return;
    root.dataset.backupReady="true";
    const core=api();
    if(!core){root.append(el("p","mpd-warning","Không tải được công cụ sao lưu. Chức năng học tập vẫn hoạt động bình thường."));return;}
    let verified=null,preBackupRequested=false,preBackupSignature=null;
    const storageSignature=()=>JSON.stringify(core.KEYS.map(k=>[k,localStorage.getItem(k)]));
    const status=el("p","mpd-status","Chưa có tệp được chọn.");status.setAttribute("role","status");
    const exportSection=el("section","mpd-panel");
    exportSection.append(el("h2","","Sao lưu tiến độ ra máy"));
    exportSection.append(el("p","","Tạo một tệp JSON chứa dữ liệu học tập trên trình duyệt này. Có thể lưu ở PC hoặc điện thoại và chuyển sang thiết bị khác. Không gửi tệp lên máy chủ."));
    const exportButton=el("button","mpd-action mpd-primary","Tải tệp sao lưu");
    exportButton.type="button";
    const exportStatus=el("p","mpd-hint","");
    exportButton.addEventListener("click",async()=>{
      exportButton.disabled=true;
      try{const backup=await core.buildBackup(localStorage);saveFile(backup);
        exportStatus.textContent="Đã yêu cầu trình duyệt lưu tệp. Hãy kiểm tra thư mục tải về và giữ tệp ở nơi riêng tư.";
      }catch(err){exportStatus.textContent="Chưa thể sao lưu: "+err.message;}
      finally{exportButton.disabled=false;}
    });
    exportSection.append(exportButton,exportStatus);

    const restoreSection=el("section","mpd-panel");
    restoreSection.append(el("h2","","Khôi phục từ tệp"));
    restoreSection.append(el("p","","Chọn tệp đã sao lưu. Hệ thống kiểm tra tính toàn vẹn, sau đó hiển thị chính xác những vùng dữ liệu sẽ được thêm hoặc thay thế trước khi thực hiện."));
    const fileLabel=el("label","mpd-file-label","Chọn tệp sao lưu (.json)");
    const file=el("input");file.type="file";file.accept=".json,application/json";
    fileLabel.append(file);
    const modeLabel=el("label","mpd-file-label","Cách khôi phục");
    const mode=el("select");
    for(const [v,t] of [
      ["missing","Chỉ thêm dữ liệu chưa có (an toàn nhất)"],
      ["replace","Thay thế dữ liệu trùng (cần sao lưu dữ liệu hiện tại)"]
    ]){const o=el("option","",t);o.value=v;mode.append(o);}
    modeLabel.append(mode);
    const preview=el("div","mpd-restore-preview");
    const beforeButton=el("button","mpd-action","1. Tải bản dự phòng dữ liệu hiện tại");
    beforeButton.type="button";beforeButton.hidden=true;beforeButton.disabled=true;
    const confirmLabel=el("label","mpd-checkbox");
    const consent=el("input");consent.type="checkbox";
    confirmLabel.append(consent,el("span","","Tôi đã lưu tệp dự phòng và đồng ý thay thế các dữ liệu trùng được liệt kê."));
    confirmLabel.hidden=true;
    const restoreButton=el("button","mpd-action mpd-primary","Khôi phục dữ liệu");
    restoreButton.type="button";restoreButton.disabled=true;
    function refresh(){
      preview.replaceChildren();
      const has=Boolean(verified);
      if(!has){restoreButton.disabled=true;beforeButton.hidden=true;confirmLabel.hidden=true;return;}
      const plan=core.planRestore(verified,localStorage,mode.value);
      const list=el("ul","mpd-restore-list");
      for(const [label,arr] of [
        ["Thêm mới",plan.add],
        ["Thay thế",plan.replace],
        ["Trùng và giống hệt",plan.identical],
        ["Bỏ qua vì dữ liệu đang có khác tệp",plan.conflicts]
      ]){
        const item=el("li");item.textContent=label+": "+arr.length+" vùng dữ liệu";
        if(arr.length){
          const details=el("details");details.append(el("summary","","Xem danh sách"));
          const ul=el("ul");
          for(const k of arr)ul.append(el("li","",k));
          details.append(ul);item.append(details);
        }
        list.append(item);
      }
      preview.append(el("p","mpd-hint","Tệp tạo ngày "+verified.created_at.slice(0,10)+" · "+Object.keys(verified.entries).length+" vùng dữ liệu"),list);
      if(plan.conflicts.length){
        preview.append(el("p","mpd-warning",plan.conflicts.length+" vùng dữ liệu trên máy này khác với tệp nhập và sẽ KHÔNG được chuyển. Để thay thế, chọn chế độ Thay thế, tải bản dự phòng hiện tại và xác nhận. Hệ thống không tự gộp lịch sử."));
      } else if(!plan.add.length&&!plan.replace.length){
        preview.append(el("p","mpd-hint","Không có dữ liệu mới để chuyển. Các vùng trong tệp đã giống dữ liệu hiện tại."));
      }
      const destructive=plan.replace.length>0;
      beforeButton.hidden=!destructive;beforeButton.disabled=!destructive;
      confirmLabel.hidden=!destructive;
      restoreButton.disabled=!(plan.add.length+plan.replace.length)||(destructive&&(!preBackupRequested||!consent.checked));
    }
    file.addEventListener("change",async()=>{
      verified=null;preBackupRequested=false;preBackupSignature=null;consent.checked=false;status.textContent="Đang kiểm tra tệp...";refresh();
      try{
        const f=file.files?.[0];if(!f)throw Error("Chưa chọn tệp.");
        if(f.size>core.MAX_BYTES)throw Error("Tệp vượt giới hạn 12 MB.");
        const raw=await f.text();
        if(new TextEncoder().encode(raw).length>core.MAX_BYTES)throw Error("Tệp vượt giới hạn 12 MB.");
        verified=await core.validateBackup(JSON.parse(raw));
        status.textContent="Tệp hợp lệ. Xem trước thay đổi ở dưới trước khi khôi phục.";
      }catch(err){verified=null;status.textContent="Không thể dùng tệp này: "+err.message;}
      refresh();
    });
    mode.addEventListener("change",()=>{preBackupRequested=false;preBackupSignature=null;consent.checked=false;refresh();});
    consent.addEventListener("change",refresh);
    beforeButton.addEventListener("click",async()=>{
      try{
        const signature=storageSignature();
        const doc=await core.buildBackup(localStorage);
        if(storageSignature()!==signature)throw Error("Dữ liệu đã thay đổi trong lúc tạo bản dự phòng. Hãy thử lại.");
        saveFile(doc,"math-progress-before-replace");
        preBackupSignature=signature;
        preBackupRequested=true;
        status.textContent="Đã yêu cầu tải bản dự phòng. Kiểm tra tệp đã lưu trước khi đánh dấu xác nhận.";
      }catch(err){preBackupRequested=false;preBackupSignature=null;status.textContent="Không thể sao lưu dữ liệu hiện tại; đã chặn ghi đè: "+err.message;}
      refresh();
    });
    restoreButton.addEventListener("click",()=>{
      if(!verified)return;
      const plan=core.planRestore(verified,localStorage,mode.value);
      const destructive=plan.replace.length>0;
      if(destructive&&(!preBackupRequested||!consent.checked))return;
      if(destructive&&preBackupSignature!==storageSignature()){
        preBackupRequested=false;preBackupSignature=null;consent.checked=false;
        status.textContent="Dữ liệu trên máy đã thay đổi sau khi tải bản dự phòng. Cần tải bản dự phòng mới trước khi thay thế.";
        refresh();return;
      }
      const question=destructive
        ?"Thay thế "+plan.replace.length+" vùng dữ liệu hiện có? Hãy xác nhận tệp dự phòng đã được lưu trước khi tiếp tục."
        :"Thêm "+plan.add.length+" vùng dữ liệu còn thiếu từ tệp đã kiểm tra? Dữ liệu đang có được giữ nguyên.";
      if(!window.confirm(question))return;
      try{
        const result=core.applyRestore(verified,localStorage,mode.value,destructive&&preBackupRequested&&consent.checked);
        status.textContent="Khôi phục thành công "+result.written+" vùng dữ liệu."+
          (result.conflicts.length?" Đã bỏ qua "+result.conflicts.length+" vùng có dữ liệu khác nhau; phần này CHƯA được chuyển.":"")+
          " Hãy tải lại những bài học đang mở ở tab khác để xem dữ liệu mới.";
        document.dispatchEvent(new Event("math-progress-restored"));
        verified=null;file.value="";preBackupRequested=false;preBackupSignature=null;consent.checked=false;refresh();
      }catch(err){status.textContent="Không thể khôi phục: "+err.message;}
    });
    restoreSection.append(fileLabel,modeLabel,status,preview,beforeButton,confirmLabel,restoreButton);
    const caution=el("p","mpd-warning","Tệp sao lưu có thể chứa lịch sử học tập. Giữ tệp riêng tư. Khôi phục không gộp hay chấm lại điểm; mỗi vùng dữ liệu được giữ nguyên. Trình duyệt khác hoặc thiết bị khác không tự đồng bộ.");
    restoreSection.append(caution);
    root.append(exportSection,restoreSection);
  }
  const boot=()=>document.querySelectorAll("[data-math-progress-backup]").forEach(init);
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);
  else boot();
})();
