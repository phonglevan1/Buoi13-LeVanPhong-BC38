/**
 *
* INPUT: lương 1 ngày, số ngày làm
*PROCESS:(pseudo code)
    *  1. lấy input (hand code) lương 1 ngày =100; số ngày làm = 30;
    *  2. công thức tính tiền : lương 1 ngày * số ngày làm;
    *  3. in kết quả
*OUTPUT: lương
*/
function wage() {
    var workDays = +document.getElementById("txt-workday").value;
    var salaryPerDay = +document.getElementById("txt-wageday").value;
    var totalSalary = 0;
    totalSalary = workDays * salaryPerDay;
    if (workDays >= 0 && salaryPerDay>=0) {

        document.getElementById("wage").innerHTML = ("Tổng lương là: " + totalSalary.toLocaleString('vi-VN') + " VNĐ");
    }
    else {
        document.getElementById("wage").innerHTML = "Nhập không đúng";
    }
}