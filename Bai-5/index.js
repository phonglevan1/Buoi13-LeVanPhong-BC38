/**
 *
* INPUT: Nhập vào 1 số có 2 chữ số
*PROCESS:(pseudo code)
    *  1. lấy input (hand code) tách input thành 2 số
    *  2. công thức: 
        *  số thứ nhất: Math.floor(number / 10);
        *  số thứ hai:  số % 10;
    *  3. in kết quả
*OUTPUT: tổng 2 số
*/
function total() {
    var number = document.getElementById("txt-number").value;
    var numberOne = 0;
    var numberTwo = 0;
    var total = 0
    if (number >= 10 && number <= 99) {
        numberTwo = number % 10;
        numberOne = Math.floor(number / 10);
        total = numberOne + numberTwo;
       document.getElementById("result").innerHTML=("Tổng là: " + total);
    }
    else{
        document.getElementById("result").innerHTML = "Nhập bào một số có hai chữ số";
    }
}
