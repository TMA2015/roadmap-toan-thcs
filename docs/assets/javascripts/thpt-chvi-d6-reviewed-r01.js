
/* ChVI D6 public remediation R01. Academic source: Git blob 396585c59f902f6b4078b4b494adf53d1793f252.
 * Only SGK ChVI formative modal; zero canonical items duplicated, zero readiness/mastery access. */
(function(root){
 "use strict";
 const version="THPT-G10-CHVI-D6-20261030-R01";
 const cards=[
  {
    "help_id": "HELP-G10-B15-01",
    "lesson": "15",
    "title": "Một đầu vào có đúng một đầu ra",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em cho rằng một bảng *không phải hàm số* vì có hai dòng cùng giá trị đầu vào, hoặc kết luận đó là hàm số dù cùng một đầu vào có hai kết quả khác nhau."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Với từng giá trị đầu vào \\(x\\) nằm trong tập xác định, em hãy liệt kê tất cả giá trị \\(y\\) đi kèm. Việc \\(x\\) xuất hiện nhiều lần **không tự động** làm sai điều kiện hàm số; vấn đề là nó có gắn với **hai đầu ra khác nhau hay không**."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Hàm số gán cho **mỗi** \\(x\\) thuộc tập xác định **đúng một** \\(y=f(x)\\). Nhiều đầu vào có thể cho cùng một đầu ra; không yêu cầu ánh xạ một-một. Điểm \\((x;y)\\) nằm trên đồ thị khi \\(y=f(x)\\) và \\(x\\) thuộc tập xác định."
      },
      {
        "label": "TỰ SỬA",
        "text": "Chọn một \\(x\\) bất kỳ, so các cặp có cùng hoành độ. Nếu có hai tung độ khác nhau, chỉ ra *chính cặp mâu thuẫn*; nếu không có mâu thuẫn, kiểm lại mọi \\(x\\) được liệt kê trước khi kết luận."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "Mở lại `THPT-G10-B15-C01`, rồi tự đọc một đồ thị ở Bài 15 để kiểm tra tiêu chí điểm thuộc đồ thị; làm lại trước khi tự chọn xem gợi ý/lời giải, không dùng kết quả này làm bài thi Readiness."
      }
    ],
    "item_ids": [
      "THPT-G10-B15-C01"
    ],
    "outcomes": [
      "B15_OUT_01",
      "B15_OUT_03"
    ]
  },
  {
    "help_id": "HELP-G10-B15-02",
    "lesson": "15",
    "title": "Tập xác định trước bảng biến thiên và mô hình",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em xét đồng biến trên cả trục số dù hàm không xác định ở một số điểm, hoặc chấp nhận biểu thức có căn âm/mẫu bằng 0."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Viết riêng mọi điều kiện cần thiết: \\(A(x)\\ge0\\) khi có \\(\\sqrt{A(x)}\\), \\(B(x)\\ne0\\) khi có mẫu \\(B(x)\\), và miền giá trị thực tế khi \\(x\\) là thời gian/chiều dài/số lượng."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Tập xác định là **giao** của các điều kiện; khi nói hàm tăng/giảm phải chỉ rõ **khoảng thuộc tập xác định** và so hai đầu vào \\(x_1<x_2\\) theo đúng miền. Với hàm từng đoạn, chọn công thức theo điều kiện của nhánh, chú ý dấu \\(<,\\le\\) tại điểm ghép."
      },
      {
        "label": "TỰ SỬA",
        "text": "Lập bảng có ba cột: điều kiện toán, miền thực tế, kết luận tập xác định. Sau đó mới chọn những cặp \\(x_1,x_2\\) trong cùng khoảng xét biến thiên; không so giá trị qua khoảng trống không xác định."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "`THPT-G10-B15-C02` và `THPT-G10-B15-P01` (tập xác định), `B15-P03` (biến thiên), `B15-P02`/`P04` (hàm từng đoạn, mô hình); thực hiện theo thứ tự miền → công thức → kết luận."
      }
    ],
    "item_ids": [
      "THPT-G10-B15-C02",
      "THPT-G10-B15-P01",
      "THPT-G10-B15-P02",
      "THPT-G10-B15-P03",
      "THPT-G10-B15-P04"
    ],
    "outcomes": [
      "B15_OUT_02",
      "B15_OUT_04",
      "B15_OUT_05"
    ]
  },
  {
    "help_id": "HELP-G10-B16-01",
    "lesson": "16",
    "title": "Hàm bậc hai: đỉnh, trục và chiều biến thiên",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em tính đỉnh bằng \\(-b/a\\), hoặc cứ thấy \\(a<0\\) lại nói hàm nghịch biến trên toàn trục số."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Xác nhận hàm có dạng \\(f(x)=ax^2+bx+c\\), **\\(a\\ne0\\)**. Đặt \\(x_0=-b/(2a)\\) rồi mới tính \\(y_0=f(x_0)\\)."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Trục đối xứng \\(x=x_0\\). Với \\(a>0\\), hàm giảm trên \\(( -\\infty,x_0 )\\), tăng trên \\((x_0,+\\infty)\\), có giá trị nhỏ nhất \\(f(x_0)\\). Với \\(a<0\\), chiều biến thiên đổi lại và \\(f(x_0)\\) là giá trị lớn nhất."
      },
      {
        "label": "TỰ SỬA",
        "text": "Viết đủ ba dòng: \\(a\\) và dấu, \\(x_0\\), bảng chiều biến thiên hai bên \\(x_0\\); thử hai giá trị ở hai bên đỉnh để tự kiểm hướng biến thiên."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "Quay về Bài 16 SGK Core R4 và phần Practice liên quan; làm lại câu gốc với cùng ID canonical của trang đang mở, **không tạo bản sao**."
      }
    ],
    "item_ids": [],
    "outcomes": [
      "B16_OUT_01",
      "B16_OUT_02",
      "B16_OUT_04"
    ]
  },
  {
    "help_id": "HELP-G10-B16-02",
    "lesson": "16",
    "title": "Vẽ parabol và chọn miền ứng dụng",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em vẽ parabol thiếu trục đối xứng, chọn hai điểm không đối xứng qua trục, hoặc lấy nghiệm \\(x\\) âm cho thời gian thực tế \\(t\\ge0\\)."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Kiểm \\(a\\ne0\\), tọa độ đỉnh \\((x_0,f(x_0))\\), giao trục tung \\((0,c)\\), giao trục hoành **chỉ khi phương trình \\(f(x)=0\\) có nghiệm thực**."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Dấu \\(a\\) quyết định hướng mở; trục \\(x=x_0\\) quyết định cặp điểm đối xứng. Một mô hình thực tế có **miền hợp lí riêng**, có thể chỉ là một đoạn của đồ thị toán học; giá trị cực trị trong miền hạn chế phải xét cả đỉnh (nếu thuộc miền) và các biên thích hợp."
      },
      {
        "label": "TỰ SỬA",
        "text": "Vẽ trục, đỉnh, một cặp điểm đối xứng, rồi giới hạn lại phần đồ thị phù hợp ngữ cảnh; ghi đơn vị trên trục và nêu tại sao loại một giá trị ngoài miền."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "Trang Bài 16 SGK mục vẽ đồ thị và bài toán mô hình; đối chiếu hình SVG gốc; tự giải trước khi mở gợi ý luyện tập."
      }
    ],
    "item_ids": [],
    "outcomes": [
      "B16_OUT_03",
      "B16_OUT_05"
    ]
  },
  {
    "help_id": "HELP-G10-B17-01",
    "lesson": "17",
    "title": "Bảng dấu tam thức và trường hợp nghiệm kép",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em cho rằng \\(f(x)\\) đổi dấu khi đi qua nghiệm kép, hoặc cho dấu của \\(f(x)\\) bằng dấu \\(\\Delta\\)."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Trước hết xác định \\(a\\ne0\\), \\(\\Delta=b^2-4ac\\), số nghiệm thực và dấu của \\(a\\)."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Nếu \\(\\Delta<0\\), tam thức mang dấu của \\(a\\) trên toàn \\(\\mathbb R\\). Nếu \\(\\Delta=0\\), có nghiệm kép \\(x_0\\) và \\(f(x)=a(x-x_0)^2\\): bằng 0 tại \\(x_0\\), mang dấu của \\(a\\) ở hai bên **không đổi dấu**. Nếu \\(\\Delta>0\\), dấu theo \\(a\\) ngoài hai nghiệm, ngược dấu \\(a\\) giữa hai nghiệm."
      },
      {
        "label": "TỰ SỬA",
        "text": "Kẻ trục theo nghiệm thực từ nhỏ tới lớn; thử dấu của \\(a\\) ở ngoài, rồi ghi dấu khoảng giữa theo trường hợp \\(\\Delta\\); đánh dấu vị trí bằng 0 tách khỏi khoảng âm/dương."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "`THPT-G10-B17-C01`, `THPT-G10-B17-C02` — tập trung \\(\\Delta=0\\) và quy tắc dấu."
      }
    ],
    "item_ids": [
      "THPT-G10-B17-C01",
      "THPT-G10-B17-C02"
    ],
    "outcomes": [
      "B17_OUT_01",
      "B17_OUT_02"
    ]
  },
  {
    "help_id": "HELP-G10-B17-02",
    "lesson": "17",
    "title": "Bất phương trình và miền hợp lí",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em viết nghiệm của \\(f(x)>0\\) nhưng vẫn lấy hai điểm \\(f(x)=0\\), hoặc bỏ điều kiện chiều dài dương của bài toán rào vườn."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Phân biệt rõ dấu \\(>,\\ge,<,\\le\\) rồi lập bảng dấu theo \\(a\\), \\(\\Delta\\) và nghiệm. Đọc riêng ràng buộc \\(x>0\\), các cạnh khác \\(>0\\) trong bài toán thực tế."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Bất phương trình **nghiêm ngặt** loại nghiệm tại \\(f(x)=0\\); loại \\(\\ge,\\le\\) nhận các nghiệm bằng 0 nếu thuộc miền. Trường hợp tham số muốn \\(ax^2+bx+c>0\\) với mọi \\(x\\) phải kiểm điều kiện phù hợp: điển hình \\(a>0\\) và \\(\\Delta<0\\), không nhầm với \\(\\Delta\\le0\\) khi dấu nghiêm ngặt."
      },
      {
        "label": "TỰ SỬA",
        "text": "Ghi ba dòng: miền xác định/ngữ cảnh, bảng xét dấu, giao với điều kiện; thay nghiệm biên vào biểu thức để quyết định lấy hay bỏ."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "`THPT-G10-B17-P02`, `THPT-G10-B17-P03`, `THPT-G10-B17-P04`; kiểm tra kết luận bằng cách thay giá trị đại diện."
      }
    ],
    "item_ids": [
      "THPT-G10-B17-P02",
      "THPT-G10-B17-P03",
      "THPT-G10-B17-P04"
    ],
    "outcomes": [
      "B17_OUT_03",
      "B17_OUT_04",
      "B17_OUT_05"
    ]
  },
  {
    "help_id": "HELP-G10-B18-01",
    "lesson": "18",
    "title": "Điều kiện và nghiệm ngoại lai của phương trình chứa căn",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em bình phương hai vế ngay khi chưa xét căn xác định, rồi nhận mọi nghiệm của phương trình bình phương thành nghiệm ban đầu."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Liệt kê từng biểu thức \\(\\sqrt{A(x)}\\): cần \\(A(x)\\ge0\\). Nếu hai vế đều là căn, **cả hai** biểu thức dưới căn đều phải không âm."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Phép bình phương có thể sinh nghiệm ngoại lai nếu không kiểm điều kiện/dấu. Với \\(\\sqrt{A(x)}=\\sqrt{B(x)}\\) trên số thực: cần \\(A(x)\\ge0, B(x)\\ge0\\), sau đó \\(A(x)=B(x)\\), cuối cùng thử lại. \\(\\sqrt{u^2}=|u|\\), không phải luôn bằng \\(u\\)."
      },
      {
        "label": "TỰ SỬA",
        "text": "Viết tập điều kiện đầu, tìm nghiệm phương trình suy ra, **giao** nghiệm với tập điều kiện và thay từng giá trị vào phương trình gốc để loại ngoại lai."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "`THPT-G10-B18-C02`, `THPT-G10-B18-P03` (căn=căn) cùng `B18-C01`/`P01` (kiểm dấu khi căn=biểu thức); không dùng đáp án demo như bằng chứng độc lập."
      }
    ],
    "item_ids": [
      "THPT-G10-B18-C01",
      "THPT-G10-B18-C02",
      "THPT-G10-B18-P01",
      "THPT-G10-B18-P03"
    ],
    "outcomes": [
      "B18_OUT_01",
      "B18_OUT_03"
    ]
  },
  {
    "help_id": "HELP-G10-B18-02",
    "lesson": "18",
    "title": "Căn bằng biểu thức, điều kiện dấu và mô hình",
    "stages": [
      {
        "label": "TRIỆU CHỨNG",
        "text": "Em giải \\(\\sqrt{A(x)}=B(x)\\) bằng \\(A(x)=B(x)^2\\) nhưng không yêu cầu \\(B(x)\\ge0\\), hoặc lấy nghiệm khiến chiều dài thực tế không dương."
      },
      {
        "label": "XÁC ĐỊNH LỖI",
        "text": "Ghi đồng thời \\(A(x)\\ge0\\), \\(B(x)\\ge0\\) (trên số thực), cùng miền các đại lượng thực tế như \\(x>0\\), trước khi giải."
      },
      {
        "label": "KIẾN THỨC CHỐT",
        "text": "Trong số thực, \\(\\sqrt{A(x)}=B(x)\\) **tương đương** với \\(B(x)\\ge0\\) và \\(A(x)=B(x)^2\\) (điều kiện \\(A(x)\\ge0\\) khi đó tự theo sau, nhưng nên ghi ban đầu để hiểu căn). Khi quay lại bài toán đo đạc, nghiệm phải thỏa cả ý nghĩa hình học và đơn vị đo."
      },
      {
        "label": "TỰ SỬA",
        "text": "Tách bước toán và bước kiểm ngữ cảnh: (i) giải phương trình sau khi bình phương, (ii) kiểm dấu vế phải, (iii) thay lại phương trình gốc, (iv) kiểm chiều dài/thời gian thuộc miền thực tế."
      },
      {
        "label": "LUYỆN LẠI",
        "text": "`THPT-G10-B18-P02`, `THPT-G10-B18-P04`; kiểm từng điều kiện trước khi kết luận."
      }
    ],
    "item_ids": [
      "THPT-G10-B18-P02",
      "THPT-G10-B18-P04"
    ],
    "outcomes": [
      "B18_OUT_02",
      "B18_OUT_04"
    ]
  }
];
 const labels=["TRIỆU CHỨNG","XÁC ĐỊNH LỖI","KIẾN THỨC CHỐT","TỰ SỬA","LUYỆN LẠI"];
 const forLesson=lesson=>cards.filter(c=>c.lesson===String(lesson));
 const validate=()=>{
  const err=[],ids=new Set();
  for(const c of cards){
   if(ids.has(c.help_id))err.push("duplicate "+c.help_id);
   ids.add(c.help_id);
   if(c.stages.length!==5||c.stages.some((s,i)=>s.label!==labels[i]))err.push("stages "+c.help_id);
  }
  return {valid:!err.length,errors:err,count:ids.size};
 };
 function inline(parent,src){
  // Render a limited Markdown subset using textContent, never innerHTML.
  const re=/\*\*([^*]+)\*\*|\x60([^\x60]+)\x60|\*([^*]+)\*/g;
  let i=0,m;
  while((m=re.exec(src))){
   if(m.index>i)parent.append(document.createTextNode(src.slice(i,m.index)));
   const tag=m[1]?"strong":m[2]?"code":"em";
   const node=document.createElement(tag);
   node.textContent=m[1]||m[2]||m[3];parent.append(node);i=re.lastIndex;
  }
  if(i<src.length)parent.append(document.createTextNode(src.slice(i)));
 }
 function mount(host,lesson,onPickItem){
  if(!host?.closest("dialog")||
     !/\/(?:thpt-preview|thpt)\/sgk\/chuong-vi\/luyen-tap\/?/.test(location.pathname))return false;
  const list=forLesson(lesson);
  if(list.length!==2||host.querySelector("[data-thpt-chvi-d6]"))return false;
  const wrapper=document.createElement("section");wrapper.className="thpt-chvi-d6";
  wrapper.dataset.thptChviD6="1";wrapper.setAttribute("aria-label","Hỗ trợ D6 Bài "+lesson);
  const all=document.createElement("details"),summary=document.createElement("summary");
  all.className="thpt-chvi-d6-main";
  summary.textContent="Hỗ trợ khi làm sai · 2 hướng tự sửa Bài "+lesson;
  all.append(summary);
  const note=document.createElement("p");note.className="thpt-chvi-d6-caption";
  note.textContent="Chỉ dành cho học và luyện tập công khai · Không chấm điểm · Không dùng trong Tự kiểm tra";
  all.append(note);
  for(const c of list){
   const section=document.createElement("details");section.className="thpt-chvi-d6-card";
   section.dataset.helpId=c.help_id;
   const title=document.createElement("summary");title.textContent=c.title;section.append(title);
   const ol=document.createElement("ol");
   for(const step of c.stages){
    const li=document.createElement("li"),strong=document.createElement("strong"),p=document.createElement("p");
    strong.textContent=step.label;p.className="thpt-chvi-d6-stage";inline(p,step.text);
    li.append(strong,p);ol.append(li);
   }
   section.append(ol);
   if(c.item_ids.length){
    const links=document.createElement("div");links.className="thpt-chvi-d6-targets";
    const desc=document.createElement("p");desc.textContent="Luyện lại câu canonical đã có:";
    links.append(desc);
    const status=document.createElement("p");status.setAttribute("role","status");
    for(const id of c.item_ids){
     const button=document.createElement("button");button.type="button";
     button.dataset.thptChviD6Target=id;button.textContent="Mở "+id.replace("THPT-G10-","");
     button.addEventListener("click",()=>{
      if(typeof onPickItem==="function"&&onPickItem(id))return;
      status.textContent="Câu "+id+" ở nhóm Core/Luyện tập khác. Bài đang mở vẫn được giữ nguyên.";
     });
     links.append(button);
    }
    links.append(status);section.append(links);
   }else{
    const hint=document.createElement("p");hint.className="thpt-chvi-d6-caption";
    hint.textContent="Luyện lại trong nội dung Bài 16 đang mở; không tạo item hoặc điều hướng sang ngân hàng khác.";
    section.append(hint);
   }
   all.append(section);
  }
  wrapper.append(all);host.append(wrapper);
  if(root?.MathJax?.typesetPromise)root.MathJax.typesetPromise([wrapper]).catch(()=>{});
  return true;
 }
 const api=Object.freeze({version,academic_scope:"SGK_CHVI_D6_PUBLIC_SUPPORT_ONLY",credit:false,
   cards:Object.freeze(cards.map(x=>Object.freeze(x))),validate,forLesson,mount});
 if(typeof module!=="undefined"&&module.exports)module.exports=api;
 if(root)root.THPT_CHVI_D6_REVIEWED=api;
})(typeof window!=="undefined"?window:undefined);
