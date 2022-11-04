/**
 *
* INPUT: chiều dài, chiều rộng
*PROCESS:(pseudo code)
    *  1. lấy input (hand code) chiều dài =10; chiều rộng = 2;
    *  2. công thức: 
        *  chu vi: chiều dài * chiều rộng;
        *  diện tích : (chiều dài + chiều rộng)/2;
    *  3. in kết quả
*OUTPUT: chu vi, diện tích
*/
function rectangle() {
    var longs = +document.getElementById("txt-longs").value;
    var widths = +document.getElementById("txt-widths").value;;
    var perimeter = 0;
    var area = 0;
    perimeter = longs * widths;
    area = (longs + widths) *2;
    if (longs>0 && widths>0) {
        document.getElementById("perimeter").innerHTML="Chu Vi: " + perimeter;
        document.getElementById("area").innerHTML="Diện tích: " + area;
    }
    else{
        document.getElementById("perimeter").innerHTML=("Nhập lại");
        document.getElementById("area").innerHTML=("");
    }
}