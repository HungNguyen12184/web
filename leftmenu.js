
var loadportal_item = [
    {
        image:'/scr/around-the-world.png',
        label:'Trung tâm điều hành'
    },
    {
        image:'/scr/customer.png',
        label:'Tổng quan hệ thống'
    },
    {
        image:'/scr/document.png',
        label:'Quản lý vụ việc'
        
    },
    {
        image:'/scr/logo.png',
        label:'Sự kiện' 
    },
    {
        image:'/scr/car-insurance.png',
        label:'Nhận dạng biển số xe'
    },
    {
        image:'/scr/face-id.png',
        label: 'Nhận dạng gương mặt'
    },
    {
        image:'/scr/algorithm.png',
        label:'Nhận dạng tổng hợp'
    },
    {
        image:'/scr/map.png',
        label:'Khai thác bản đồ'
    },
    {
        image:'/scr/spying.png',
        label:'Giám sát hành trình'
    },
    {
        image:'/scr/laptop.png',
        label:'Kênh liên lạc'
    }

]
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

var isClose=false
function closesidebar() {

    if(!isClose)
        document.getElementById("siderbar").style.width = "1rem";
        else
        document.getElementById("siderbar").style.width = "12rem";
        isClose=!isClose

}


// function getlabel(){
//     var itemlist = document.getElementsByClassName("portal-label").value;
//     label = itemlist;

// }

function loadmain(){
    
     for (let i in loadportal_item){
        let portal_item  = document.createElement("a")
        portal_item.classList.add('portal_item')
        portal_item.setAttribute("hrel","")
        portal_item.innerHTML= `
        <div class="item-center">
           <div class="image-container portal-item_image">
            <img class="image-content" src ="${loadportal_item[i].image}" id="logo" alt="" style="object-fit: cover;">
            </div>
            <div class="portal-label">${loadportal_item[i].label}</div>
           </div>
        `
        document.getElementById("fun_top").appendChild(portal_item)
     } 

}

function searchLabel(){
   var inputsearch = document.getElementById("search");
   inputsearch.addEventListener('input', function(){
   var searchtext = inputsearch.value.trim().toLowerCase();
    for ( var i = 0; i < loadportal_item.length; i++)
    {
         var textlabel =loadportal_item[i].label;
         if( textlabel === searchtext){
            portal_item.classList.remove('hide')
         }
        else{
           portal_item.classList.add('hide')
         }
   }
});



   

 

}  