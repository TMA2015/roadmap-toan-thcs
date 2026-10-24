/* Four illustrative R0 template fixtures. Not S1 curriculum, not THPT lessons.
   Author-facing representation only: one component schema across four profiles. */
window.THPTTemplateR0=Object.freeze({
  schema:"math-thpt-template-r0",
  academic_status:"DEMO_ONLY_NOT_SOURCE_APPROVED",
  design_version:"0.1.0",
  allowed_components:[
    "definition","formula","condition","theorem","worked-example","step-flow",
    "compare","diagram","data-table","insight","warning","practice-links"
  ],
  profiles:{
    A:{
      name:"A · Đại số & phương trình",subject:"Đại số",topic:"Ví dụ trình bày: phương trình tích",grade:"Lớp 10 · dữ liệu minh họa",
      goals:["Xác định điều kiện hợp lệ của phép biến đổi","Trình bày đầy đủ nghiệm và thử lại"],prerequisite:"Phép nhân đa thức → quy tắc tích bằng 0",
      map:["Cấu trúc","Phép biến đổi","Giải và kiểm tra"],
      concepts:[
        {name:"Biểu thức và điều kiện",blocks:[
          {type:"definition",title:"Biểu thức đang xét",body:"Xét phương trình minh họa x² − 5x + 6 = 0 với x thuộc tập số thực."},
          {type:"formula",title:"Nhận dạng",expr:"x² − 5x + 6 = (x − 2)(x − 3)"},
          {type:"condition",body:"Không được chia hai vế cho x − 2 hoặc x − 3 trước khi xét trường hợp nhân tử bằng 0."},
          {type:"compare",title:"Hai cách trình bày tương ứng",items:[["Dạng tổng", "x² − 5x + 6 = 0"],["Dạng nhân tử", "(x − 2)(x − 3) = 0"]]}
        ]},
        {name:"Phép biến đổi",blocks:[
          {type:"theorem",title:"Quy tắc tích bằng 0",body:"Khi tích hai số thực bằng 0, có ít nhất một thừa số bằng 0."},
          {type:"step-flow",title:"Luồng suy luận",steps:["Đưa về một vế","Phân tích thành nhân tử","Cho từng nhân tử bằng 0","Đối chiếu nghiệm"]}
        ]}
      ],
      methods:[
        {name:"Giải bằng nhân tử",blocks:[
          {type:"worked-example",title:"Ví dụ giải đầy đủ",prompt:"Giải x² − 5x + 6 = 0.",steps:["x² − 5x + 6 = 0 ⇔ (x − 2)(x − 3) = 0","Suy ra x − 2 = 0 hoặc x − 3 = 0","Vậy x = 2 hoặc x = 3; thử lại cả hai giá trị trong phương trình ban đầu."],conclusion:"Tập nghiệm S = {2; 3}."},
          {type:"practice-links",status:"NOT_PUBLISHED"}
        ]},
        {name:"Kiểm tra nghiệm",blocks:[
          {type:"worked-example",title:"Kiểm tra từng nghiệm",prompt:"Thử hai giá trị tìm được.",steps:["x = 2: 4 − 10 + 6 = 0","x = 3: 9 − 15 + 6 = 0"],conclusion:"Cả hai thỏa mãn."},
          {type:"warning",body:"Ví dụ này chỉ để kiểm tra cách trình bày, không phải bài đã đối chiếu S1."}
        ]}
      ]
    },
    B:{
      name:"B · Hàm số, đồ thị & giải tích",subject:"Hàm số",topic:"Ví dụ trình bày: đọc parabol",grade:"Lớp 10 · dữ liệu minh họa",
      goals:["Đọc quan hệ công thức – điểm – đồ thị","Giải thích đỉnh và trục đối xứng"],prerequisite:"Tọa độ phẳng → bảng giá trị",
      map:["Công thức","Giá trị và đồ thị","Đặc điểm"],
      concepts:[
        {name:"Hàm số và điều kiện",blocks:[
          {type:"definition",title:"Công thức ví dụ",body:"Xét hàm số y = x² − 2x − 3."},
          {type:"formula",title:"Dạng đỉnh",expr:"y = (x − 1)² − 4"},
          {type:"condition",body:"Trong ví dụ này x nhận mọi giá trị thực; không suy diễn điều kiện này cho mọi hàm số khác."}
        ]},
        {name:"Bảng giá trị & đồ thị",blocks:[
          {type:"data-table",title:"Một số giá trị đúng theo công thức",columns:["x","−1","0","1","2","3"],rows:[["y","0","−3","−4","−3","0"]]},
          {type:"diagram",diagram:"function-graph",title:"Parabol có đỉnh (1; −4)",caption:"Đồ thị nối các điểm đúng theo y = (x − 1)² − 4; trục nét đứt biểu thị x = 1.",aside:"Quan hệ trực quan: các điểm x = 0 và x = 2 có cùng tung độ −3, đối xứng qua x = 1."}
        ]},
        {name:"Các đặc điểm",blocks:[
          {type:"insight",title:"Quan hệ cần nhận ra",body:"Dạng bình phương cho thấy y ≥ −4 và y nhỏ nhất khi x = 1 trong ví dụ này."},
          {type:"formula",title:"Tọa độ đỉnh",expr:"I(1; −4)"}
        ]}
      ],
      methods:[
        {name:"Lập bảng – vẽ đồ thị",blocks:[
          {type:"step-flow",title:"Đọc và dựng theo trình tự",steps:["Xác định công thức và miền xét","Chọn các giá trị x thích hợp","Tính y đúng theo công thức","Đặt điểm lên hệ trục có tỉ lệ","Kiểm tra trục đối xứng và đỉnh"]},
          {type:"practice-links",status:"NOT_PUBLISHED"}
        ]},
        {name:"Kiểm tra điểm",blocks:[
          {type:"worked-example",title:"Kiểm tra điểm thuộc đồ thị",prompt:"Điểm (3; 0) có thuộc đồ thị không?",steps:["Thay x = 3 vào y = 3² − 2·3 − 3","Nhận được y = 9 − 6 − 3 = 0"],conclusion:"Có, điểm (3; 0) thuộc đồ thị."}
        ]}
      ]
    },
    C:{
      name:"C · Hình học & vectơ",subject:"Hình học",topic:"Ví dụ trình bày: tam giác vuông",grade:"Hình học · dữ liệu minh họa",
      goals:["Đọc hình với giả thiết rõ ràng","Trình bày chứng minh hoặc tính toán đúng trình tự"],prerequisite:"Tam giác vuông → diện tích → định lý Pythagore",
      map:["Giả thiết","Hình chuẩn","Suy luận"],
      concepts:[
        {name:"Cấu hình",blocks:[
          {type:"theorem",title:"Giả thiết và kết luận",body:"Trong hình minh họa, tam giác ABC vuông tại A; AB = 3, AC = 4. Cần tính BC và diện tích."},
          {type:"diagram",diagram:"right-triangle",title:"Hình dựng đúng tỉ lệ 3–4–5",caption:"Góc vuông được ký hiệu tại A. Nét chính và cỡ chữ nhãn dùng cùng chuẩn SVG.",aside:"Không suy từ cảm giác nhìn hình để kết luận; ký hiệu vuông góc và độ dài đã cho mới là căn cứ."}
        ]},
        {name:"Quan hệ hình học",blocks:[
          {type:"formula",title:"Hệ thức cần sử dụng",expr:"BC² = AB² + AC²"},
          {type:"warning",body:"Độ dài cạnh huyền phải dương; không lấy nghiệm âm khi tính độ dài."}
        ]}
      ],
      methods:[
        {name:"Tính cạnh huyền",blocks:[
          {type:"worked-example",title:"Tính BC có giải thích",prompt:"Cho AB = 3 và AC = 4.",steps:["Theo định lý Pythagore: BC² = AB² + AC²","Suy ra BC² = 3² + 4² = 25","BC = 5 (vì BC là độ dài, BC > 0)"],conclusion:"BC = 5."},
          {type:"practice-links",status:"NOT_PUBLISHED"}
        ]},
        {name:"Tính diện tích",blocks:[
          {type:"worked-example",title:"Dựa vào hai cạnh vuông",prompt:"Tính diện tích tam giác ABC.",steps:["Hai cạnh AB và AC vuông góc","S = 1/2 × AB × AC = 1/2 × 3 × 4"],conclusion:"S = 6 đơn vị diện tích."}
        ]}
      ]
    },
    D:{
      name:"D · Thống kê, xác suất & mô hình hóa",subject:"Dữ liệu",topic:"Ví dụ trình bày: bảng tần số",grade:"Thống kê · dữ liệu minh họa",
      goals:["Chuyển dữ liệu sang bảng, hình chính xác","Tính toán và diễn giải có điều kiện"],prerequisite:"Thu thập dữ liệu → đếm → trung bình",
      map:["Dữ liệu","Tần số","Diễn giải"],
      concepts:[
        {name:"Dữ liệu có nguồn",blocks:[
          {type:"definition",title:"Bộ dữ liệu giả lập",body:"Bốn giá trị quan sát do ví dụ tạo ra: 2, 3, 3, 4. Đây KHÔNG phải khảo sát học sinh hay số liệu chính thức."},
          {type:"data-table",title:"Bảng tần số",columns:["Giá trị","2","3","4"],rows:[["Tần số","1","2","1"]]}
        ]},
        {name:"Bảng ↔ biểu đồ",blocks:[
          {type:"diagram",diagram:"frequency-bars",title:"Biểu đồ tần số cùng thang",caption:"Các cột thể hiện tần số 1–2–1 từ đúng bốn số liệu giả lập.",aside:"Biểu đồ giúp so sánh tần số ngay bằng chiều cao các cột, thay vì chép lại một poster toàn chữ."}
        ]},
        {name:"Mô tả & giới hạn",blocks:[
          {type:"formula",title:"Số trung bình",expr:"(2 + 3 + 3 + 4) ÷ 4 = 3"},
          {type:"insight",title:"Diễn giải",body:"Trung bình và trung vị của bộ dữ liệu này đều bằng 3; không suy ra đặc điểm của quần thể từ bốn số giả lập."}
        ]}
      ],
      methods:[
        {name:"Lập bảng tần số",blocks:[
          {type:"step-flow",title:"Quy trình thực hiện",steps:["Ghi rõ bộ dữ liệu và đơn vị","Liệt kê giá trị khác nhau","Đếm đúng mỗi giá trị","Kiểm tra tổng tần số bằng số quan sát","Vẽ biểu đồ với trục và tỉ lệ rõ"]},
          {type:"practice-links",status:"NOT_PUBLISHED"}
        ]},
        {name:"Tính và diễn giải",blocks:[
          {type:"worked-example",title:"Kiểm tra số trung bình",prompt:"Tính số trung bình của 2, 3, 3, 4.",steps:["Tổng các giá trị bằng 12","Có 4 quan sát nên 12 ÷ 4 = 3"],conclusion:"Trung bình là 3, chỉ mô tả bộ dữ liệu minh họa."},
          {type:"warning",body:"Không gắn nhãn 'đại diện toàn trường' hoặc 'xác suất chắc chắn' cho dữ liệu giả lập này."}
        ]}
      ]
    }
  }
});
