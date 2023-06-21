
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

function lstfilter() {
    var nhap = document.getElementById("fname").value;
    var nhapcar = nhap;
    var listcar = cars.filter(function checkCar(car, index, array) { return car === nhapcar; });
    if (listcar.length > 0) {
        alert("Xe có trong bãi");
    }
    else {
        alert("Xe bán hết");
    }
}


function lsteach() {
    var nhap = document.getElementById("fname").value;
    var nhapcar = nhap;
    var listcar1 = cars.forEach(function myCar(car, index, array) {
        return car === nhapcar;
    });
    if (listcar1.length > 0) {
        console.log("Xe có trong hãng", nhapcar);
    }
    else {
        console.log("xe không có trong hãng", nhapcar);
    }

}



function lstsearch() {
    var nhap = document.getElementById("fname").value;
    var nhapcar = nhap;
    for (var i = 0; i < cars.length; i++) {
        if (cars[i] === nhapcar);
        break;
    }
    console.log("XE có trong bãi");

}
function openform() {
    window.location.href = "main.html";
}

function Theme() {
    var elemnet = document.body;
    elemnet.classList.toggle("dark-mode")
}
