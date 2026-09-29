# CĐ19 R2 — triển khai dựa trên nguồn đã phản biện (29/09/2026)

- **Nguồn khóa:** PR #170, branch head `275749b59c528f0bf6b324018db516b65d250ed3`, file `content-staging/reviews/MATH-CORE19-20-R1-20260929/08_SOURCE_CD19_R2_NOTEBOOKLM.txt`, Git blob `358a0461ea70ee587432d1ad8773c52973edfa8a`. Nguồn CĐ19 gốc: bài giảng `75c9baa052c1ef91bee54e65edcb3dee513007d2`, workspace `240e6622a22a98105555f6924006f10b3c400cdb`, bank 15 câu `91e61257efa72ef0691eb5db1af42c7b2cd287ff`.
- **Nguồn phản biện:** receipt `content-staging/reviews/MATH-CORE19-20-R1-20260929/12_CD19_R2_FINAL_RECEIPT.md` trong PR #170. R1 7/7 trên năm bài giảng và hai câu; targeted R2 xác nhận nội dung sửa ở core1, core2 và hai ID chuẩn 016/017; không yêu cầu sửa thêm. Bản chép đây đối chiếu R2 từng trường, không tự nhận độc lập review lần nữa.
- **Phạm vi mới:** 5 teaching_copy đúng nguyên văn nguồn R2; thêm duy nhất `GEO19MICRO_016/017`, một assessed skill riêng mỗi câu. Phần hints hai câu mới là phần biên tập bổ sung, self-audited, không có trong kết quả NotebookLM R2.
- **Bất biến:** 15 câu gốc giữ nguyên toàn bộ record và thứ tự; card ID, assessed skill, readiness, Practice Room và learner history bất biến. Không kiểm định lại 15 câu gốc từ kết quả R2. Câu Core có trợ giúp, không phải readiness.
- **Đồ họa:** không có hình/SVG mới và không sinh giả thiết từ hình. SVG hiện có trong bài đầy đủ cần kiểm tra trực quan desktop/mobile riêng; text review không phải visual QA.
- **Đối chiếu đáp án:** reviewer source ghi 016 và 017 có answer index 0. Gói triển khai giữ nguyên đúng thứ tự và index, không hoán đổi phương án. Câu 016 dùng C=2πR; 017 dùng cặp góc đối tứ giác lồi tổng 180°.

## Nội dung ứng viên đã khóa để đối chiếu

```text
[E] FIVE NEW TEACHING-COPY CANDIDATES, REQUIRE R1 INDEPENDENT REVIEW:
CARD geo19-core-1 — NEW CANDIDATE, NOT DEPLOYED
source_sections: §3.0/3.2/3.6A
key_idea: Đường kính (hoặc đường thẳng qua tâm) vuông góc với một dây thì đi qua trung điểm của dây đó; ngược lại, đường kính đi qua trung điểm của một dây không đi qua tâm thì vuông góc với dây đó. Trong cùng một đường tròn, hai dây bằng nhau chắn hai cung nhỏ bằng nhau. Chu vi C=2πR và độ dài cung l=(n/360)·2πR=nπR/180.
worked_example.problem: Trong (O;5 cm), dây AB không là đường kính, OM⊥AB tại M, OM=3 cm. Tính AB và chu vi.
worked_example.solution: MA=√(25−9)=4 cm do tam giác OMA vuông; M là trung điểm AB nên AB=8 cm; C=10π cm.
misconception: Áp dụng định lí đảo cho dây là đường kính; dùng πR thay vì 2πR.
summary: Dây–tâm cần giả thiết; chu vi dùng bán kính.
source_reference: docs/kien-thuc/19-duong-tron/index.md
review_status: DRAFT_AWAITING_INDEPENDENT_REVIEW

CARD geo19-core-2 — NEW CANDIDATE, NOT DEPLOYED
source_sections: §3.0/3.3
key_idea: So khoảng cách tâm–đường thẳng với R; hai đường tròn so d với R+r và |R−r|. R=r,d=0 là trùng nhau chứ không là tiếp xúc trong.
worked_example.problem: Cho (O;5 cm), đường thẳng a cách O 3 cm và đường tròn thứ hai bán kính 3 cm cách O 4 cm. Tìm vị trí.
worked_example.solution: a cắt (O) tại hai điểm vì 3<5. Hai đường tròn cắt nhau tại hai điểm vì |5−3|=2<4<8=5+3.
misconception: Nhầm tiếp xúc ngoài với cắt hai điểm; bỏ sót trường hợp trùng nhau.
summary: So sánh các khoảng cách theo đúng ranh giới.
source_reference: docs/kien-thuc/19-duong-tron/index.md
review_status: DRAFT_AWAITING_INDEPENDENT_REVIEW

CARD geo19-core-3 — NEW CANDIDATE, NOT DEPLOYED
source_sections: §3.1/3.3A
key_idea: Góc nội tiếp bằng nửa cung bị chắn KHÔNG chứa đỉnh góc. Cung nhỏ/lớn cần chỉ rõ; góc chắn nửa đường tròn là 90°.
worked_example.problem: Cung nhỏ AB=110°, C trên cung lớn AB (C≠A,B). Tính ∠ACB.
worked_example.solution: ∠ACB chắn cung nhỏ AB, nên bằng 110°/2=55°.
misconception: Lấy cung có đỉnh C, hoặc lấy bằng luôn góc ở tâm.
summary: Chọn đúng cung bị chắn trước khi tính.
source_reference: docs/kien-thuc/19-duong-tron/index.md
review_status: DRAFT_AWAITING_INDEPENDENT_REVIEW

CARD geo19-core-4 — NEW CANDIDATE, NOT DEPLOYED
source_sections: §3.0/3.4
key_idea: Tứ giác lồi có một cặp góc đối tổng 180° thì nội tiếp được đường tròn. Ngoại tiếp tam giác: giao trung trực và cách đều ba đỉnh; nội tiếp: giao phân giác và cách đều ba cạnh.
worked_example.problem: Tứ giác lồi ABCD có ∠BAD=68°, ∠BCD=112°. Kết luận tính nội tiếp.
worked_example.solution: Hai góc A và C đối nhau, 68°+112°=180°. Theo dấu hiệu đảo, bốn đỉnh cùng thuộc một đường tròn.
misconception: Nhầm tính chất với đảo, nhầm tâm nội tiếp/ngoại tiếp.
summary: Kết luận chỉ từ cặp góc đối và vị trí hợp lệ.
source_reference: docs/kien-thuc/19-duong-tron/index.md
review_status: DRAFT_AWAITING_INDEPENDENT_REVIEW

CARD geo19-core-5 — NEW CANDIDATE, NOT DEPLOYED
source_sections: §3.0/3.6A
key_idea: Đa giác đều phải đều cạnh lẫn góc. Cung l=(n/360)2πR; quạt S=(n/360)πR²; vành khuyên đồng tâm S=π(R²−r²), R>r.
worked_example.problem: R=6 cm; quạt góc 120°; vành khuyên đồng tâm bán kính ngoài 6 cm, trong 4 cm. Tính ba đại lượng.
worked_example.solution: l=4π cm; S_quạt=12π cm²; S_vành=π(36−16)=20π cm².
misconception: Nhầm bán kính/đường kính, chu vi/diện tích, vành/quạt.
summary: Tách rõ độ dài và diện tích.
source_reference: docs/kien-thuc/19-duong-tron/index.md
review_status: DRAFT_AWAITING_INDEPENDENT_REVIEW


[F] TWO NEW QUESTION CANDIDATES, ORIGINAL 15 IDs UNCHANGED:
GEO19MICRO_016 / proposed card=geo19-core-1 / target=do-dai-duong-tron
Một đường tròn có bán kính 7 cm. Độ dài đường tròn là:
0 (A): 14π cm
1 (B): 7π cm
2 (C): 49π cm
3 (D): 28π cm
ANSWER_INDEX=0
EXPLANATION: C=2πR=2π·7=14π cm; 49π là diện tích, không là chu vi.
NOT APPROVED/NOT PRESENT IN BANK

GEO19MICRO_017 / proposed card=geo19-core-4 / target=dau-hieu-noi-tiep
ABCD là tứ giác lồi không suy biến với bốn đỉnh phân biệt. Biết ∠ABC=110° và ∠ADC=70°. Kết luận nào đúng?
0 (A): ABCD nội tiếp được một đường tròn
1 (B): ABCD bắt buộc là hình chữ nhật
2 (C): ABCD bắt buộc là hình thoi
3 (D): ABCD không thể nội tiếp một đường tròn
ANSWER_INDEX=0
EXPLANATION: B,D là hai góc đối, tổng 180°, đủ điều kiện nội tiếp cho tứ giác lồi.
NOT APPROVED/NOT PRESENT IN BANK
```
