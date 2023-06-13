
function test_btn_click() {
    console.log("Test thử");
}

function hlook() {
    var value = document.getElementById("fname").value;
    var nhap = value;
    if (nhap === "Hung") {
        alert("Đúng");
    }
    else {
        alert("Sai");
    }
}
var cars = ["BWM", "HONDA", "KIA", "FORD", "MITSU", "MITSU XPANDER"];
function checkCar(car) {
    return car = document.getElementById("fname").value; // trả về giá trị car từ textbox nhập
}

function lstsearch() {
    var nhap = document.getElementById("fname").value;
    var nhapcar = nhap;
    if (nhapcar === cars.filter(checkCar)) {
        alert("Đúng");
    }
    else {
        alert("sai");
    }
}



