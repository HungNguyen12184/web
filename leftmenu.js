var loadportal_item = [
    {
        image: './scr/around-the-world.png',
        label: 'Trung tâm điều hành',
    },
    {
        image: './scr/customer.png',
        label: 'Tổng quan hệ thống',
    },
    {
        image: './scr/document.png',
        label: 'Quản lý vụ việc',
    },
    {
        image: './scr/logo.png',
        label: 'Sự kiện',
    },
    {
        image: './scr/car-insurance.png',
        label: 'Nhận dạng biển số xe',
    },
    {
        image: './scr/face-id.png',
        label: 'Nhận dạng gương mặt',
    },
    {
        image: './scr/algorithm.png',
        label: 'Nhận dạng tổng hợp',
    },
    {
        image: './scr/map.png',
        label: 'Khai thác bản đồ',
    },
    {
        image: './scr/spying.png',
        label: 'Giám sát hành trình',
    },
    {
        image: './scr/laptop.png',
        label: 'Kênh liên lạc',
    },
];

// window.onload = function () {
//     loadmain();
// };

function test_btn_click() {
    console.log('Test thử');
}

function hlook() {
    var value = document.getElementById('fname').value;
    var nhap = value;
    if (nhap === 'Hung') {
        alert('Đúng');
    } else {
        alert('Sai');
    }
}
var cars = ['BWM', 'HONDA', 'KIA', 'FORD', 'MITSU', 'MITSU XPANDER'];

function lstfilter() {
    var nhap = document.getElementById('fname').value;
    var nhapcar = nhap;
    var listcar = cars.filter(function checkCar(car, index, array) {
        return car === nhapcar;
    });
    if (listcar.length > 0) {
        alert('Xe có trong bãi');
    } else {
        alert('Xe bán hết');
    }
}

function lsteach() {
    var nhap = document.getElementById('fname').value;
    var nhapcar = nhap;
    var listcar1 = cars.forEach(function myCar(car, index, array) {
        return car === nhapcar;
    });
    if (listcar1.length > 0) {
        console.log('Xe có trong hãng', nhapcar);
    } else {
        console.log('xe không có trong hãng', nhapcar);
    }
}

function lstsearch() {
    var nhap = document.getElementById('fname').value;
    var nhapcar = nhap;
    for (var i = 0; i < cars.length; i++) {
        if (cars[i] === nhapcar);
        break;
    }
    console.log('XE có trong bãi');
}
function openform() {
    window.location.href = 'main.html';
}

function Theme() {
    var elemnet = document.body;
    elemnet.classList.toggle('dark-mode');
}

// document.getElementsByClassName().onclick = function(){
//     closesidebar();
// }
var isClose = false;
function closesidebar() {
    if (!isClose) document.getElementById('siderbar').style.width = '1rem';
    else document.getElementById('siderbar').style.width = '12rem';
    isClose = !isClose;
}

// function getlabel(){
//     var itemlist = document.getElementsByClassName("portal-label").value;
//     label = itemlist;

// }

// function loadmain() {
//     for (let i in loadportal_item) {
//         let portal_item = document.createElement('a');
//         portal_item.className = 'portal-item';
//         portal_item.setAttribute('hrel', '');
//         portal_item.innerHTML = `
//           <div class="item-center">
//              <div class="image-container portal-item_image">
//               <img class="image-content" src ="${loadportal_item[i].image}" id="logo" alt="" style="object-fit: cover;">
//               </div>
//               <div class="portal-label">${loadportal_item[i].label}</div>
//              </div>
//           `;
//         document.getElementById('fun_top').appendChild(portal_item);
//     }
//     var portal = document.querySelector('.portal-item');
// }
window.oninput = function () {
    searchLabel();
};

function searchLabel() {
    var inputsearch = document.getElementById('search');
    inputsearch.addEventListener('input', function () {
        var textsearch = inputsearch.value.trim().toLowerCase();
        var label_items = document.getElementsByClassName('portal-item');
        for (var i = 0; i < label_items.length; i++) {
            var label = loadportal_item[i].label.toLowerCase();
            if (label === textsearch) {
                label_items[i].style.display = 'block';
            } else {
                label_items[i].style.display = 'none';
            }
        }
    });
}
/*------------------LPR------------------------*/
//  function hideModalWhenFullHeightVisible() {
//     var fullHeightElement = document.querySelector('.full-height');
//     var modalElement = document.getElementById('modal-root');
//     if (fullHeightElement && modalElement) {
//         var fullHeightVisible = window.getComputedStyle(fullHeightElement).display !== 'none';
//         var modalVisible = window.getComputedStyle(modalElement).display !== 'none';
//         if (fullHeightVisible && modalVisible) {
//         modalElement.style.display = 'none';
//         }
//     }
// }

//  hideModalWhenFullHeightVisible();

//

// Add the event listener to the window

// function showCalendarTable() {
//     var controlCalds = document.querySelectorAll('.dtp-container');
//     var modalElement = document.getElementById('modal-root');
//     controlCalds.forEach(function (controlCald) {
//         controlCald.addEventListener('click', function () {
//             modalElement.style.display = 'block';
//             displayInfo();
//             buttonGroup();
//             optionGroup();
//             inputDateTime();
//         });
//     });
// }
// window.addEventListener('click', showCalendarTable);
function fromDate() {
    var modalElement = document.getElementById('modal-root');
    var fromDateElement = document.getElementById('dtp-control-1');
    fromDateElement.addEventListener('click', function () {
        modalElement.style.display = 'block';
        displayInfo();
        optionGroup();
        buttonGroup();
        // inputDateTime();
    });
}
window.addEventListener('click', fromDate);

function toDate() {
    var modalElement = document.getElementById('modal-root');
    var toDateElement = document.getElementById('dtp-control-2');
    toDateElement.addEventListener('click', function () {
        modalElement.style.display = 'block';
        displayInfo();
        optionGroup();
        buttonGroup();
        //inputDateTime();
        resizeModal();
    });
}
window.addEventListener('click', toDate);

function hideModal() {
    var modalElement = document.getElementById('modal-root');
    modalElement.style.display = 'none';
}
function resizeModal() {
    var modalMainElement = document.querySelector('.overlay-main');
    if (modalMainElement) {
        modalMainElement.style.width = '20rem';
        modalMainElement.style.maxWidth = '90%';
        modalMainElement.style.height = 'auto';
        modalMainElement.style.maxHeight = '90%';
        modalMainElement.style.minWidth = '20rem';
        modalMainElement.style.left = '271px';
        modalMainElement.style.top = '616px';
    }
}

// window.addEventListener('click', fromDate);
// window.addEventListener('click', toDate);

function showCalendar() {
    var mCalendar = document.querySelector('.m-calendar');
    mCalendar.style.display = 'none';
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function displayInfo() {
    var monthCL = document.querySelector('.month');
    var yearCL = document.querySelector('.year');
    var currentMonthName = new Date(currentYear, currentMonth).toLocaleString('vi-VN', {
        month: 'long',
    }); /* chuyển đổi 1 dối tượng date thành 1 chuoi bieu dien ngôn ngữ theo cấu hình vùng*/
    monthCL.innerText = currentMonthName;
    yearCL.innerText = currentYear;
    renderDate();

    monthCL.addEventListener('click', function () {
        showMonthTable();
    });

    yearCL.addEventListener('click', function () {
        showYearTable();
    });
}

function showMonthTable() {
    var monthTable = document.createElement('div');
    monthTable.className = 'm-calendar';
    monthTable.innerHTML = '<table><tbody></tbody></table>';

    var tableBody = monthTable.querySelector('tbody');
    var months = new Array(
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
    );

    for (var i = 0; i < months.length; i++) {
        if (i % 3 === 0) {
            var row = document.createElement('tr');
            tableBody.appendChild(row);
        }
        // var monthCal = document.querySelector("tbody");
        var cell = document.createElement('td');
        var div = document.createElement('div');
        cell.className = 'month-item';
        div.className = 'month-content';
        div.textContent = months[i];
        cell.appendChild(div);
        row.appendChild(cell);
    }

    var monthYearElement = document.querySelector('.tab');
    monthYearElement.innerHTML = '';
    monthYearElement.appendChild(monthTable);
}

function showYearTable() {
    var yearTable = document.createElement('div');
    yearTable.className = 'year-table';
    yearTable.innerHTML = '<table><tbody></tbody></table>';
    var tableBody = yearTable.querySelector('tbody');
    var startYear = currentYear - 7; // lấy năm trước năm hiện tại
    var endYear = currentYear + 7;
    var yearCount = 0;
    var row = document.createElement('tr');
    tableBody.appendChild(row);

    for (var i = startYear; i <= endYear; i++) {
        if (yearCount % 3 === 0 && yearCount !== 0) {
            row = document.createElement('tr');
            tableBody.appendChild(row);
        }
        var cell = document.createElement('td');
        var div = document.createElement('div');
        cell.className = 'year-item';
        div.className = 'year-content';
        div.textContent = i;
        cell.appendChild(div);
        row.appendChild(cell);
        yearCount++;
    }

    var monthYearElement = document.querySelector('.tab');
    monthYearElement.innerHTML = '';
    monthYearElement.appendChild(yearTable);
}
//lấy số ngày của tháng
function getDaysInMonth() {
    var lastdayofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    return lastdayofMonth;
}
//lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    var startday = new Date(currentYear, currentMonth, 1).getDay();
    return startday;
}

var monthYearElement = document.getElementsByClassName('current-date');
for (var i = 0; i < monthYearElement.length; i++) {
    monthYearElement[i].textContent = new Date(currentYear, currentMonth).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
    });
}

function activeCurrentDay(day) {
    var day1 = new Date().toDateString();
    var day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'current-value' : '';
}

function renderDate() {
    var dateCL = document.querySelector('tbody');
    var daysInMonth = getDaysInMonth();
    var startDay = getStartDayInMonth();
    dateCL.innerHTML = '';
    var dayCount = 1;

    for (var i = 0; i < 6; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
            var td = document.createElement('td');
            var div = document.createElement('div');
            div.className = 'day-content';

            if (i === 0 && j < startDay) {
                td.className = 'prev-month';
                var prevDay = daysInMonth - (startDay - j);
                div.textContent = prevDay;
            } else if (dayCount > daysInMonth) {
                td.className = 'next-month';
                div.textContent = dayCount - daysInMonth;
                dayCount++;
            } else {
                div.textContent = dayCount;
                if (activeCurrentDay(dayCount)) {
                    td.className += ' current-value';
                }
                dayCount++;
            }
            td.appendChild(div);
            tr.appendChild(td);
        }

        dateCL.appendChild(tr);
    }
}

function buttonGroup() {
    var buttonGroups = document.querySelectorAll('.button-group'); // trả về 1 nodelist
    buttonGroups.forEach(function (buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            changeMonth(event);
        });
    });
}

function changeMonth(event) {
    var target = event.target; // currentTarget trả về phần tử xảy ra xự kiện click class cha
    if (target.classList.contains('fa-angle-left')) {
        currentMonth -= 1;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        }
    } else if (target.classList.contains('fa-angle-double-left')) {
        currentYear -= 1;
    } else if (target.classList.contains('fa-angle-right')) {
        currentMonth += 1;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
    } else if (target.classList.contains('fa-angle-double-right')) {
        currentYear += 1;
    }

    displayInfo();
    inputDateTime();
}

// GET NGAY HIEN TAI DIEN VAO FROM
function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var formattedDate = day + '/' + month + '/' + year;
    return formattedDate;
}
function fillCurrentDate() {
    var inputElements = document.querySelectorAll('.input-text');
    if (inputElements) {
        var currentDate = getCurrentDate();
        var currentTime = updateTime();
        inputElements.forEach(function (inputElement) {
            inputElement.value = currentDate + ' ' + currentTime;
        });
    }
}

document.addEventListener('DOMContentLoaded', fillCurrentDate);
//GET GIO PHUT
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');

    var timeSpans = document.querySelectorAll('.showtime .time');
    timeSpans[0].textContent = hours;
    timeSpans[1].textContent = minutes;
    var formattedTime = hours + ':' + minutes;
    return formattedTime;
}
// CHUYEN DOI TAB NGAY VA GIO
function optionGroup() {
    var buttonGroups = document.querySelectorAll('.option'); // trả về 1 nodelist
    buttonGroups.forEach(function (buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            changeDayTime(event);
        });
    });
}
function changeDayTime(event) {
    var target = event.target;
    var calendarTab = document.querySelector('.tabs .m-calendar');
    var timeTab = document.querySelector('.tabs .m-time');
    var calendarButton = document.querySelector('.ion-calendar');
    var timeButton = document.querySelector('.ion-clock');
    if (target.classList.contains('ion-clock')) {
        calendarButton.classList.remove('active');
        timeButton.classList.add('active');
        calendarTab.style.display = 'none';
        timeTab.style.display = 'block';
        updateTime(); // Update time immediately
        setInterval(updateTime, 1000); // Update time every second
    } else if (target.classList.contains('ion-calendar')) {
        calendarButton.classList.add('active');
        timeButton.classList.remove('active');
        calendarTab.style.display = 'block';
        timeTab.style.display = 'none';
    }
}

// GET NGAY THANG CHON TRONG BANG

function inputDateTime() {
    var tdElements = document.querySelectorAll('.m-calendar tbody td');
    tdElements.forEach(function (tdElement) {
        tdElement.addEventListener('click', function () {
            var clickedDayContent = tdElement.querySelector('div').textContent;
            var currentDate = new Date();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();
            var formattedDate = clickedDayContent + '/' + month + '/' + year + ' ' + updateTime();
            var inputElements = document.querySelectorAll('.input-text');
            if (inputElements) {
                inputElements.forEach(function (inputElement) {
                    inputElement.value = formattedDate;
                });
            }
            hideModal();
        });
    });
}

//TAO BANG DU LIEU
const tableData = [
    { stt: 1, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '90%', chi_tiet: 'TruongSon_KOMOTA_2' },
    { stt: 2, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '80%', chi_tiet: 'TruongSon_KOMOTA_3' },
    { stt: 3, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '70%', chi_tiet: 'TruongSon_KOMOTA_4' },
    { stt: 4, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '60%', chi_tiet: 'TruongSon_KOMOTA_5' },
    { stt: 5, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '50%', chi_tiet: 'TruongSon_KOMOTA_6' },
    { stt: 6, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '40%', chi_tiet: 'TruongSon_KOMOTA_7' },
    { stt: 7, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '30%', chi_tiet: 'TruongSon_KOMOTA_8' },
    { stt: 8, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '20%', chi_tiet: 'TruongSon_KOMOTA_9' },
    { stt: 9, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '10%', chi_tiet: 'TruongSon_KOMOTA_10' },
    { stt: 10, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '25%', chi_tiet: 'TruongSon_KOMOTA_11' },
    { stt: 11, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '35%', chi_tiet: 'TruongSon_KOMOTA_12' },
    { stt: 12, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '86%', chi_tiet: 'TruongSon_KOMOTA_13' },
    { stt: 13, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '96%', chi_tiet: 'TruongSon_KOMOTA_14' },
    { stt: 14, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '69%', chi_tiet: 'TruongSon_KOMOTA_15' },
    { stt: 15, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '79%', chi_tiet: 'TruongSon_KOMOTA_16' },
    { stt: 16, hinh_toan_canh: '', hinh_bien_so: '', do_chinh_xac: '59%', chi_tiet: 'TruongSon_KOMOTA_17' },
];

var itemsPerPage = 8;
var totalPage = Math.ceil(tableData.length / itemsPerPage); //math.ceil là làm tròn số làm tròn lên số nguyên lớn nhất
var currentPage = 1;

function showCurrentPageData(page) {
    currentPage = page;
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = currentPage * itemsPerPage;
    var dataBody = document.querySelector('.dg-body');
    dataBody.innerHTML = '';
    // Hiển thị dữ liệu mới vào bảng
    for (var i = startIndex; i < endIndex; i++) {
        var row = document.createElement('div');
        row.className = 'dg-row selectable-row';
        row.innerHTML = `
    <div class="dg-row-item row--horizontal-border dg-freeze" style="flex: 0 0 50px; width: 50px; left: 0px;">
        <div class="dg-cell">
        <span class="auto-number">${tableData[i].stt}</span>
        </div>
    </div>
    <div class="dg-row-item row--horizontal-border" style="flex: 0 0 270px; width: 270px;">
        <div class="dg-cell dg-cell--align-left">
        <div class="flex flex-grow flex-shrink flex-basis-0 justify-center overflow-hidden css-0">
        <div class="image-container">${tableData[i].hinh_toan_canh}</div>
        </div>
        <div class="flex flex-shrink-0"></div>
        </div>
    </div>
    <div class="dg-row-item row--horizontal-border" style="flex: 0 0 290px; width: 290px;">
        <div class="dg-cell dg-cell--align-left">
        <div class="flex flex-grow flex-shrink flex-basis-0 justify-center overflow-hidden css-0">
        <div class="image-container">${tableData[i].hinh_bien_so}</div>
        </div>
        <div class="flex flex-shrink-0"></div>
        </div>
    </div>
    <div class="dg-row-item row--horizontal-border" style="flex: 0 0 112px; width: 112px;">
        <div class="dg-cell dg-cell--align-left">
        <div class="flex flex-grow flex-shrink flex-basis-0 justify-center item-center overflow-hidden h-full">
        <span class="tb tb1">${tableData[i].do_chinh_xac}</span>
        </div>
        <div class="flex flex-shrink-0"></div>
        </div>
    </div>
    <div class="dg-row-item row--horizontal-border" style="flex: 1 1 0%; min-width: 646px;">
        <div class="dg-cell dg-cell--align-left">
        <div class="flex flex-grow flex-shrink flex-basis-0 flex-col justify-center item-center gap-4 h-full overflow-hidden">
            <span class="m-0 hd hd-6"></span>
            <span class="tb tb1"></span>
            <span class="tb tb1">${tableData[i].chi_tiet}</span>
            <span class="tb tb1"></span>
        </div>
        <div class="flex flex-shrink-0"></div>
        </div>
    </div>
    <div class="dg-row-item row--horizontal-border dg-freeze-end" style="flex: 0 0 70px; width: 70px;">
        <div class="dg-cell">
        <div class="flex flex-grow flex-shrink flex-basis-0 justify-center item-center overflow-hidden">
            <button class="btn btn--default btn--fill btn--rount bt--sm btn--only-icon btn--icon-sm"></button>
        </div>
        </div>
    </div>
    `;

        dataBody.appendChild(row);
    }
    paginGroup();
}

function paginGroup() {
    var buttonGroups = document.querySelectorAll('.pagination'); // trả về 1 nodelist
    buttonGroups.forEach(function (buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            changePage(event);
        });
    });
}

function updateCurrentPage() {
    var currentPageSpan = document.querySelector('.pagination .btn_text');
    if (currentPageSpan) {
        currentPageSpan.textContent = currentPage.toString();
    }
}

function changePage(event) {
    var target = event.target;
    if (target.classList.contains('fa-angle-left')) {
        if (currentPage > 1) {
            currentPage--;
            updateCurrentPage();
            showCurrentPageData(currentPage);
        }
    } else if (target.classList.contains('fa-angle-double-left')) {
        updateCurrentPage();
        showCurrentPageData(1);
    } else if (target.classList.contains('fa-angle-right')) {
        if (currentPage < totalPage) {
            currentPage++;
            updateCurrentPage();
            showCurrentPageData(currentPage);
        }
    } else if (target.classList.contains('fa-angle-double-right')) {
        updateCurrentPage();
        showCurrentPageData(totalPage);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showCurrentPageData(1);
});
