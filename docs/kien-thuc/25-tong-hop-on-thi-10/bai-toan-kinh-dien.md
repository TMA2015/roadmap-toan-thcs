# Bài toán kinh điển: học phương pháp từ lời giải

> Đây là **bộ bài mẫu có hướng dẫn từng bước**, không phải phần mẹo làm đề. Mỗi bài có ý tưởng nhận dạng, lời giải, cách tự kiểm tra và bài biến thể. Hãy tự thử ít nhất 5–10 phút rồi mở lời giải. Được biên soạn mới, chờ rà soát học thuật độc lập trước khi coi là ngân hàng chuẩn.

## A. Số và Đại số

### Mẫu A1. Rút gọn biểu thức căn: đặt ẩn phụ và giữ điều kiện

Cho \(x\geq0,\ x\ne1\),
\[
A=\frac{\sqrt{x}+1}{\sqrt{x}-1}-\frac{\sqrt{x}-1}{\sqrt{x}+1}.
\]
Rút gọn \(A\) và tìm \(x\) để \(A=8/3\).

**Vì sao chọn cách này?** Hai mẫu \(\sqrt{x}-1\) và \(\sqrt{x}+1\) là hai biểu thức liên hợp; đặt \(t=\sqrt{x}\) khiến phép biến đổi rõ hơn.

??? success "Lời giải mẫu và lý do từng bước"

    1. **Điều kiện:** \(x\geq0,\ x\ne1\); đặt \(t=\sqrt{x}\) thì \(t\geq0,\ t\ne1\).
    2. **Quy đồng đúng mẫu:** \(A=((t+1)^2-(t-1)^2)/((t-1)(t+1))\).
    3. **Nhận dạng hiệu hai bình phương:** tử bằng \(4t\), mẫu bằng \(t^2-1\), nên \(A=4\sqrt{x}/(x-1)\).
    4. **Giải phương trình đã quy đổi:** \(4t/(t^2-1)=8/3\) dẫn tới \(2t^2-3t-2=0\), hay \((2t+1)(t-2)=0\).
    5. **Đối chiếu điều kiện:** nghiệm \(t=-1/2\) loại vì \(t\geq0\); \(t=2\) nhận, vậy \(x=4\). Thay lại được \(A=8/3\).

**Bẫy sai:** Không được viết \(\sqrt{x^2}=x\) khi chưa biết dấu của \(x\); không được bỏ \(x\ne1\) sau rút gọn.

**Tự biến đổi:** Thay \(A=8/3\) bằng \(A=0\). Từ \(4\sqrt{x}/(x-1)=0\), kết quả là \(x=0\), hợp điều kiện.

### Mẫu A2. Viète: tính biểu thức đối xứng không giải từng nghiệm

Cho \(x_1,x_2\) là nghiệm của \(t^2-5t+6=0\). Tính \(x_1^2+x_2^2\) và \(1/x_1+1/x_2\).

??? success "Lời giải mẫu và lý do từng bước"

    1. Theo Viète, \(S=x_1+x_2=5\), \(P=x_1x_2=6\).
    2. Dùng hằng đẳng thức \(x_1^2+x_2^2=S^2-2P=25-12=13\).
    3. Vì \(P=6\ne0\), hai nghiệm đều khác 0. Do đó \(1/x_1+1/x_2=S/P=5/6\).
    4. Kiểm tra phụ: phương trình có nghiệm \(2,3\), cho \(4+9=13\) và \(1/2+1/3=5/6\).

**Bẫy sai:** Không áp dụng phép chia \(S/P\) nếu chưa bảo đảm \(P\ne0\).

**Biến thể:** Với \(t^2-7t+10=0\), tính \(x_1^2+x_2^2=29\), \(1/x_1+1/x_2=7/10\).

### Mẫu A3. Lập hệ từ hai loại vé: kiểm nghiệm ngữ cảnh

Có 30 vé; vé học sinh 25 nghìn đồng, người lớn 40 nghìn đồng; tổng 990 nghìn đồng. Tính số vé mỗi loại.

??? success "Lời giải mẫu và lý do từng bước"

    Đặt \(h,n\) là số vé học sinh/người lớn, nguyên không âm. Theo số lượng: \(h+n=30\). Theo số tiền: \(25h+40n=990\). Thế \(h=30-n\), được \(750+15n=990\), nên \(n=16,\ h=14\). Kiểm tra tổng vé \(14+16=30\), doanh thu \(350+640=990\). **Kết luận:** 14 vé học sinh, 16 vé người lớn.

**Bẫy sai:** Cùng một đơn vị nghìn đồng trong cả hai vế; nghiệm đếm vé phải nguyên không âm.

## B. Hình học

### Mẫu H1. Đường cao trong tam giác vuông: vì sao có ba hệ thức?

Cho \(\triangle ABC\) vuông tại \(C\), \(H\) là hình chiếu vuông góc của \(C\) lên \(AB\).

??? success "Lời giải mẫu: chứng minh, không học vẹt công thức"

    1. \(\triangle ACH\) và \(\triangle ABC\) đồng dạng: góc \(A\) chung, \(\angle AHC=\angle ACB=90^\circ\). Từ \(AC/AB=AH/AC\), suy ra \(AC^2=AH\cdot AB\).
    2. Tương tự \(\triangle BCH\sim\triangle BAC\), suy ra \(BC^2=BH\cdot AB\).
    3. Hai tam giác \(\triangle ACH\) và \(\triangle CBH\) đồng dạng: đều vuông tại \(H\), các góc nhọn tương ứng bù nhau với cùng một góc của tam giác lớn. Từ \(AH/CH=CH/BH\), suy ra \(CH^2=AH\cdot BH\).
    4. Đối chiếu bằng diện tích: \(AC\cdot BC=AB\cdot CH\).

**Bẫy sai:** Đừng hoán đổi nhầm hình chiếu: \(AC\) luôn đi với \(AH\), còn \(BC\) đi với \(BH\).

**Thử ngay:** \(AB=13,\ AC=5\). Tính \(BC=12,\ AH=25/13,\ BH=144/13,\ CH=60/13\).

### Mẫu H2. Hai đường cao tạo một tứ giác nội tiếp

Tam giác \(ABC\) nhọn. \(D\) là chân đường cao từ \(B\) xuống \(AC\), \(E\) là chân đường cao từ \(C\) xuống \(AB\). Chứng minh \(B,C,D,E\) cùng nằm trên một đường tròn.

??? success "Lời giải mẫu: tìm đường kính ẩn"

    1. Vì \(BD\perp AC\) và \(DC\subset AC\), ta có \(\angle BDC=90^\circ\).
    2. Vì \(CE\perp AB\) và \(BE\subset AB\), ta có \(\angle BEC=90^\circ\).
    3. Theo định lý đảo góc nội tiếp chắn nửa đường tròn, cả \(D\) và \(E\) đều nằm trên đường tròn đường kính \(BC\). Do đó \(B,C,D,E\) cùng nằm trên đường tròn ấy.
    4. Hệ quả: \(\angle BDE=\angle BCE\) vì cùng chắn cung \(BE\).

**Bẫy sai:** Hai góc vuông cần chắn **cùng đoạn \(BC\)**; không chỉ nói chung chung “có hai góc vuông nên nội tiếp”.

### Mẫu H3. Hai tiếp tuyến từ một điểm ngoài đường tròn

Cho \(P\) ở ngoài đường tròn tâm \(O\), kẻ hai tiếp tuyến \(PA,PB\) tại \(A,B\). Chứng minh \(PA=PB\), \(P,A,O,B\) nội tiếp và \(PO\perp AB\).

??? success "Lời giải mẫu: kết nối tam giác vuông – tứ giác nội tiếp"

    1. Bán kính vuông góc với tiếp tuyến: \(OA\perp PA\) và \(OB\perp PB\).
    2. Hai tam giác vuông \(OAP,OBP\) có cạnh huyền \(OP\) chung và \(OA=OB\), nên bằng nhau theo cạnh huyền–cạnh góc vuông. Suy ra \(PA=PB\).
    3. Vì \(\angle PAO=\angle PBO=90^\circ\), bốn điểm \(P,A,O,B\) thuộc đường tròn đường kính \(PO\).
    4. Trong hai tam giác bằng nhau, \(OP\) là đường trung trực của đoạn nối hai tiếp điểm \(AB\); vì vậy \(PO\perp AB\).

**Bẫy sai:** Không suy ra \(PO\perp AB\) chỉ từ \(OA=OB\); cần thêm \(PA=PB\) hoặc tính đối xứng của hai tam giác.

## C. Tối ưu hóa và tự kiểm tra tư duy

### Mẫu T1. Cùng tổng, tích lớn nhất khi hai số bằng nhau

Với \(a,b>0,\ a+b=10\), tìm giá trị lớn nhất của \(ab\).

??? success "Lời giải mẫu"

    Từ \((a-b)^2\geq0\) suy ra \((a+b)^2\geq4ab\). Do \(a+b=10\), \(ab\leq25\). Dấu bằng khi \(a=b=5\), thỏa điều kiện. Vậy giá trị lớn nhất là **25**.

**Bẫy sai:** Phải chỉ ra trường hợp dấu bằng có thể xảy ra trong miền nghiệm; nếu không, ta mới chứng minh được một cận trên chứ chưa chứng minh được giá trị lớn nhất.

---

## Tự đánh giá sau mỗi bài mẫu

Không đánh dấu “đã hiểu” chỉ vì vừa đọc lời giải. Hãy đóng phần giải, tự viết lại lập luận **vì sao** chọn công cụ, rồi làm một biến thể có dữ liệu khác.

Tiếp theo: [Luyện tập Toán và kỹ năng tách riêng](bai-tap.md) · [Đề đủ 120 phút](de-thi-tong-hop-01.md) · [Tự kiểm tra Toán học](tu-kiem-tra.md).
