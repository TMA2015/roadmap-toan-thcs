# Thư viện hình & QA Practice

> Trang này là **thư viện QA nội bộ** cho hình minh họa trong Practice Bank. Đây không phải nội dung bài học dành cho học sinh. Ở giai đoạn hiện tại gallery tập trung vào diagram của Practice; hình trong các trang bài học sẽ được mở rộng vào gallery ở giai đoạn sau.

Nguyên tắc bắt buộc: **“Hình minh họa, không nhất thiết theo tỉ lệ” chỉ cho phép sai khác về tỉ lệ độ dài/kích thước; không cho phép sai quan hệ hình học cốt lõi** như vuông góc, song song, thẳng hàng, điểm thuộc đường tròn, tiếp tuyến, trung điểm hoặc thứ tự điểm.


## Chuẩn mới cho hình học từ 2026

Từ giai đoạn này, mọi hình học mới nên đi theo quy trình:

`đề bài → diagram spec → kiểm tra quan hệ → dựng SVG → semantic QA → xuất bản`

### Thứ tự ưu tiên nguồn hình

1. **SVG tự dựng theo spec đã kiểm định** – mặc định cho hình học tĩnh.
2. **GeoGebra** – khi thao tác kéo/thả giúp hiểu bản chất.
3. **Hình nguồn ngoài** – chỉ là giải pháp tạm nếu chưa thể dựng chính xác.

Mục tiêu là giảm dần hình Internet để toàn bộ Roadmap có phong cách đồng nhất.

### Không chấp nhận các lỗi sau

- vẽ gần vuông góc rồi gắn ký hiệu vuông góc;
- vẽ gần tiếp tuyến nhưng đường thực tế cắt đường tròn;
- điểm được ghi là thuộc đường tròn nhưng tọa độ không nằm trên đường tròn;
- ba điểm được giả thiết thẳng hàng nhưng SVG không thẳng hàng;
- đổi thứ tự điểm trên đoạn/tia;
- hình vô tình thể hiện thêm một quan hệ mà đề không cho và chưa chứng minh;
- đặt nhãn che giao điểm hoặc làm học sinh hiểu sai cấu hình.

### Kiểm tra kép với bài hình học khó

Với bài vận dụng cao/thi chuyên, hình và lời giải là hai đối tượng QA riêng:

- **Lời giải:** cần một kiểm tra độc lập thứ hai khi khả thi.
- **Hình:** cần kiểm tra semantic dựa trên diagram spec, không dựa vào lời giải hoặc cảm giác thị giác.

Mẫu spec dùng tại `content-staging/templates/geometry-item.md`; SVG khởi tạo thống nhất nằm tại `docs/assets/diagrams/_template/geometry-diagram-template.svg`.

<div class="diagram-qa-toolbar">
  <label>Chuyên đề
    <select id="diagram-qa-topic"><option value="all">Tất cả 13–25</option></select>
  </label>
  <label>Tìm ID / kỹ năng / nội dung
    <input id="diagram-qa-search" type="search" placeholder="Ví dụ: tiếp tuyến, GEO19V1_005">
  </label>
  <strong id="diagram-qa-count">Đang tải…</strong>
</div>

<div id="diagram-qa-grid" class="diagram-qa-grid"></div>

<style>
.diagram-qa-toolbar{display:flex;gap:1rem;flex-wrap:wrap;align-items:end;margin:1rem 0 1.4rem}.diagram-qa-toolbar label{display:flex;flex-direction:column;gap:.3rem;font-size:.85rem}.diagram-qa-toolbar select,.diagram-qa-toolbar input{min-width:14rem;padding:.45rem .6rem;border:1px solid var(--md-default-fg-color--lightest);border-radius:.35rem;background:var(--md-default-bg-color);color:var(--md-default-fg-color)}.diagram-qa-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:1rem}.diagram-qa-card{border:1px solid var(--md-default-fg-color--lightest);border-radius:.55rem;padding:.85rem;background:var(--md-default-bg-color)}.diagram-qa-card h3{margin:.1rem 0 .35rem;font-size:1rem}.diagram-qa-meta{font-size:.78rem;opacity:.75;margin-bottom:.55rem}.diagram-qa-question{font-size:.9rem;min-height:3.2rem}.diagram-qa-card figure{margin:.65rem 0 0}.diagram-qa-card img{width:100%;height:auto;max-height:300px;object-fit:contain;border:1px solid var(--md-default-fg-color--lightest);border-radius:.4rem;background:white}.diagram-qa-card figcaption{font-size:.75rem;opacity:.75;margin-top:.3rem}.diagram-qa-alt{font-size:.76rem;margin-top:.35rem;opacity:.8}.diagram-qa-error{padding:1rem;border:1px solid #c62828;border-radius:.4rem}
</style>

<script>
(async () => {
  const grid = document.getElementById('diagram-qa-grid');
  if (!grid) return;
  const count = document.getElementById('diagram-qa-count');
  const topicSelect = document.getElementById('diagram-qa-topic');
  const search = document.getElementById('diagram-qa-search');
  const manifests = [
    '13-goc-va-duong-thang-v1.manifest.json',
    '14-tam-giac-v1.manifest.json',
    '15-duong-dong-quy-v1.manifest.json',
    '16-tu-giac-v1.manifest.json',
    '17-thales-dong-dang-v1.manifest.json',
    '18-he-thuc-luong-v1.manifest.json',
    '19-duong-tron-v1.manifest.json',
    '20-hinh-hoc-tong-hop-v1.manifest.json',
    '21-thong-ke-v1.manifest.json',
    '22-dai-luong-dac-trung-v1.manifest.json',
    '23-xac-suat-v1.manifest.json',
    '24-bai-toan-thuc-te-v1.manifest.json',
    '25-tong-hop-on-thi-10-v1.manifest.json'
  ];
  const cards = [];
  try {
    for (const file of manifests) {
      const manifestUrl = new URL(`../../assets/data/practice/${file}`, location.href);
      const manifest = await fetch(manifestUrl).then(r => { if (!r.ok) throw new Error(`${r.status} ${manifestUrl}`); return r.json(); });
      const labels = manifest.skill_labels || {};
      for (const source of manifest.sources || []) {
        const chunkUrl = new URL(source, manifestUrl);
        const chunk = await fetch(chunkUrl).then(r => { if (!r.ok) throw new Error(`${r.status} ${chunkUrl}`); return r.json(); });
        for (const q of chunk.questions || []) {
          if (!q.diagram || !q.diagram.src) continue;
          const skill = (q.tags?.skill || [])[0] || '';
          cards.push({
            id:q.id,
            topic:manifest.topic?.id || '',
            topicTitle:manifest.topic?.title || '',
            skill,
            skillLabel:labels[skill] || skill,
            question:q.question || '',
            alt:q.diagram.alt || '',
            caption:q.diagram.caption || '',
            src:new URL(q.diagram.src, manifestUrl).href
          });
        }
      }
    }
    const topics = [...new Map(cards.map(c => [c.topic, c.topicTitle])).entries()];
    for (const [id,title] of topics) {
      const opt=document.createElement('option'); opt.value=id; opt.textContent=`${id.slice(0,2)}. ${title}`; topicSelect.appendChild(opt);
    }
    const esc = s => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const render = () => {
      const wantedTopic = topicSelect.value;
      const needle = search.value.trim().toLowerCase();
      const shown = cards.filter(c => (wantedTopic==='all' || c.topic===wantedTopic) && (!needle || `${c.id} ${c.skillLabel} ${c.question} ${c.alt}`.toLowerCase().includes(needle)));
      count.textContent = `${shown.length}/${cards.length} hình`;
      grid.innerHTML = shown.map(c => `<article class="diagram-qa-card"><h3>${esc(c.id)} · ${esc(c.skillLabel)}</h3><div class="diagram-qa-meta">${esc(c.topicTitle)}</div><div class="diagram-qa-question">${esc(c.question)}</div><figure><img loading="lazy" src="${esc(c.src)}" alt="${esc(c.alt)}"><figcaption>${esc(c.caption)}</figcaption></figure><div class="diagram-qa-alt"><strong>ALT:</strong> ${esc(c.alt)}</div></article>`).join('');
    };
    topicSelect.addEventListener('change', render); search.addEventListener('input', render); render();
  } catch (err) {
    grid.innerHTML = `<div class="diagram-qa-error">Không tải được gallery: ${String(err)}</div>`;
    count.textContent = 'Lỗi tải dữ liệu';
  }
})();
</script>
