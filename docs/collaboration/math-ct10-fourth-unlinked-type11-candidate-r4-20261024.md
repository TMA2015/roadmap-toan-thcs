# CT10 Dạng 11 — intersection of a line and parabola (candidate only)

**Status:** `AUTHOR_DRAFT_NOT_APPROVED`; **NOT** deployed, not an edit to the 87 approved Written items.  
**Teaching basis:** CT10 §5 Dạng 11 original source; **transfer/extension**, explicitly requires CT12 knowledge of quadratic equations.  
**Reason for new proposal:** `10-CH-01` exists in legacy `bai-tap.md` source but the site's `hooks/topic_markdown_fixes.py` replaces that learner-visible page with the interactive-only player at build time. It is **not a valid deep link**. The canonical Written catalog does not contain a CT10 line–parabola intersection item, and the CT10 Practice manifest lacks a specific line–parabola skill tag. Do not claim this item already appears in the active site.

**Provisional review ID:** `CAND-CT10-TYPE11-R4` (NOT production exercise ID).

**Đề bài:** Cho parabol `(P): y=x²` và đường thẳng `(d): y=-x+2`. Tìm tọa độ tất cả các giao điểm và giải thích ý nghĩa của nghiệm phương trình thu được.

**Định hướng tư duy:** Tại điểm chung, cùng hoành độ cho cùng tung độ. Lập một phương trình, tìm `x`, sau đó **thay lại để tìm `y`** và kiểm tra các cặp tọa độ.

**Gợi ý 1:** Cho hai biểu thức của `y` bằng nhau.  
**Gợi ý 2:** `x²=-x+2 ⇒ x²+x-2=0`; hãy phân tích thành nhân tử.

**Lời giải:** `x²+x-2=(x+2)(x-1)=0` nên `x=-2` hoặc `x=1`. Thay vào `y=x²`: nếu `x=-2` thì `y=4`; nếu `x=1` thì `y=1`. Giao điểm là `A(-2;4)` và `B(1;1)`. Hai nghiệm thực phân biệt ứng với hai giao điểm khác nhau. Kiểm tra trên đường thẳng: `-(-2)+2=4`, `-1+2=1`.

**Rubric minh họa 1.0:** lập phương trình hoành độ 0.25; giải đúng 2 nghiệm 0.25; suy ra và đối chiếu đủ hai tung độ 0.25; kết luận đủ hai tọa độ và số giao điểm 0.25.

**Review gate:** SGK S1 exact layer; CT12 prerequisite evidence; independent NotebookLM item coverage/key/rubric/level check; owner release; canonical Written Library `exercise_id` allocation and metadata. Challenge must not gate CT10 Core Readiness.
