# ChVII release-stage parity and UI notes (29/10/2026)

Sources: reviewed candidate PR #614 head `c122935b783efb9dc5f32452d37d0cad405a3a80`. Rebased onto latest `main` `3ad8d87297f3dcc2e65b3d29350ba1ef933e3043` after PR #617–#619. This is a release candidate, not new Academic PASS.

Scope: B19–22 D1–D2; 32 canonical formative + 4 Written (1 Anchor), D5 3 independently reviewed SVG assets. SGK 10 KNTT tập 2 pp29–58; SBT pp27–49. D6/completeness and Chapter Readiness activation still gated; no Mastery or held-out item release.

D5 DELTA_A_UI: removed only the outdated `DRAFT — hình tự dựng, chưa qua Academic review` footer from 3 original reviewed SVGs. Mathematical SVG geometry, lines, curves, labels, positions and accessibility tags remain identical. QA guard reconstructs each exact original footer and checks its original Git blob SHA against the NotebookLM-review-locked receipt. This is source-equivalent visual cleanup, NOT a new Academic PASS for the modified byte snapshot.

Student-facing lesson review details removed below; original metadata retained here.

## Archived admin notice 1

```
B19 introduction (archived): <p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
```

## Archived admin notice 2

```
B20 introduction (archived): <p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
```

## Archived admin notice 3

```
B21 introduction (archived): <p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
```

## Archived admin notice 4

```
B22 introduction (archived): <p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
```

## Archived admin notice 5

```
B22 original reviewer note (archived): 
!!! warning "Phạm vi học thuật B22"
    Câu ứng viên \`THPT-G10-B22-C01\` có nội dung **tâm sai** được reviewer phân loại chuyên sâu, nên **không đưa vào Core bắt buộc** của SGK. Các ví dụ và bài luyện công khai không được dùng làm Readiness độc lập.
```

## Archived admin notice 6

```
ChVII overview note 1: <p class="thpt-r4-lead">Bốn bài SGK nối tiếp nhau: phương trình đường thẳng → góc và khoảng cách → đường tròn → ba đường conic. Phần kiến thức dựa trên snapshot D1–D2 đã được NotebookLM kiểm tra. Đây là đợt tích hợp học liệu mới vào Golden R4, chưa có đánh giá thành thạo chính thức.</p>
```

## Archived admin notice 7

```
ChVII overview note 2: <p class="thpt-r4-lead">Các bài luyện tập sử dụng <strong>một ID canonical cho mỗi câu</strong>; có thể xem gợi ý hoặc lời giải, vì vậy <strong>không tự ghi điểm/mastery</strong>. Câu kiểm tra độc lập đã review vẫn được giữ riêng, không đưa lên GitHub công khai.</p>
```

## Archived admin notice 8

```
ChVII source/QA note: 
!!! note "Phạm vi nguồn và nghiệm thu"
    SGK Toán 10 KNTT tập 2, trang in 29–58; SBT trang 27–49. NotebookLM đã review D1–D2 của B19–B22 và D3–D4 theo các snapshot riêng, nhưng trang học mới phải qua QA và nghiệm thu. Chương VII không tự được coi là đã phát hành đầy đủ Readiness. Chuyên đề Toán THPT xuyên lớp là hành trình riêng và không được suy rộng PASS từ chương SGK.
```

## Archived admin notice 9

```
Written intro: <p class="thpt-r4-lead">Bốn bài tự luận đã nhận review học thuật trong batch D3/D4 Chương VII–VIII (28/10/2026): mỗi bài có <strong>một ID canonical duy nhất</strong>; bài mỏ neo Bài 21 chỉ là <strong>một nhãn</strong> của Written. Tự giải trên giấy rồi mới mở lời giải và rubric. <strong>Không tự động chấm điểm hay cộng Skill Mastery.</strong></p>
```

## Archived admin notice 10

```
Written review label: <p class="thpt-r4-eyebrow">THPT-G10-CHVII-W19-01 · BÀI TỰ LUẬN · REVIEWED D3/D4 20261028</p>
```

## Archived admin notice 11

```
Written review label: <p class="thpt-r4-eyebrow">THPT-G10-CHVII-W20-01 · BÀI TỰ LUẬN · REVIEWED D3/D4 20261028</p>
```

## Archived admin notice 12

```
Written review label: <p class="thpt-r4-eyebrow">THPT-G10-CHVII-W21-ANCHOR-01 · BÀI MỎ NEO · WRITTEN · REVIEWED D3/D4 20261028</p>
```

## Archived admin notice 13

```
Written review label: <p class="thpt-r4-eyebrow">THPT-G10-CHVII-W22-01 · BÀI TỰ LUẬN · REVIEWED D3/D4 20261028</p>
```

## Archived admin notice 14

```
Written review footnote: <p class="thpt-r4-footnote">Nguồn: bốn item Written trong snapshot D3/D4 được NotebookLM review (63 ứng viên gốc, nhận phân tầng lại). Chưa tuyên bố học liệu chương hoàn chỉnh hoặc cấp Academic PASS mới.</p>
```
