/**
* INPUT: Nhập vào 5  số thực a, b, c, d, e
*PROCESS:(pseudo code)
    *  1. lấy input (hand code) a = 1, b = 2, c = 3, b =4, e = 5;
    * công thức: (a + b + c + d + e)/5;
*OUTPUT: Giá trị trung bình
*/
function total() {
    var num_1 = +document.getElementById("txt-num-1").value;
    var num_2 = +document.getElementById("txt-num-2").value;
    var num_3 = +document.getElementById("txt-num-3").value;
    var num_4 = +document.getElementById("txt-num-4").value;
    var num_5 = +document.getElementById("txt-num-5").value;
    var total = 0;
    total = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
        document.getElementById("total").innerHTML="Tổng là: " + total;
}