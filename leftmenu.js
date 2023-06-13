
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


function lstsearch() {
    var nhap = document.getElementById("fname").value;
    var nhapcar = nhap;
    var listcar = cars.filter(function checkCar(car) { return car === nhapcar; });
    if (listcar.length > 0) {
        alert("Đúng");
    }
    else {
        alert("sai");
    }
}



