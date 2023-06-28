
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
var isClose=false
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

function closesidebar() {

    if(!isClose)
        document.getElementById("siderbar").style.width = "50px";
        else
        document.getElementById("siderbar").style.width = "12rem";
        isClose=!isClose

}


// function getlabel(){
//     var itemlist = document.getElementsByClassName("portal-label").value;
//     label = itemlist;

// }
 
function loadmain(){
    var portal = document.querySelector(".portal-item");
    let portal_item  = document.createElement("a")
    portal_item.className = "portal-item"
    
    document.getElementById("fun_top").appendChild(portal_item)

}

function searchLabel(){
   var inputsearch = document.getElementById("search");
   inputsearch.addEventListener('input', function(){
   var searchtext = inputsearch.value.trim().toLowerCase();
   var label = document.getElementsByClassName("portal-label");
    for ( var i = 0; i < label.length; i++)
    {
         var itemlabel = label[i].innerText.toLowerCase();
         if(itemlabel === searchtext){
            
         }
        else{
           document.getElementsByClassName("item-center").style.display = 'none';
         }
   }
});



   

 

}  