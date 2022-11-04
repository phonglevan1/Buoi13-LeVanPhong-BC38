/**
 *
* INPUT: Giá USD hiện tại, số USD muốn đổi
*PROCESS:(pseudo code)
    *  1. lấy input (hand code) Giá USD hiện tại =23500; số USD muốn đổi = 2;
    *  2. công thức quy đổi : Giá USD hiện tại * số USD muốn đổ;
    *  3. in kết quả
*OUTPUT: số tiền sau quy đổi
*/
function exchange() {
    var usd = document.getElementById("txt-USD").value;
    var totalMoney = 0;
    totalMoney = 23500 * usd;
    if (usd >= 0) {
        document.getElementById("intoMoney").innerHTML="số tiền sau quy đổi là: " + totalMoney.toLocaleString('vi-VN') + " VNĐ";
    }
    else{
        document.getElementById("intoMoney").innerHTML="Nhập sai";
    }
}