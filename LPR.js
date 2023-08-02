function fromDate() {
    var modalElement = document.getElementById('modal-root');
    var fromDateElement = document.getElementById('dtp-control-1');
    var isOpen = false;
    fromDateElement.addEventListener('click', function () {
        if (!isOpen) {
            modalElement.style.display = 'block';
            isOpen = true;
        } else {
            modalElement.style.display = 'none';
            isOpen = false;
        }
        var inputTo = document.getElementById('input-text-2');
        if (inputTo) {
            inputTo.removeEventListener('click', inputDateTime);
        }

        // Thêm sự kiện click vào inputFrom để cập nhật ngày khi chọn ngày trong lịch
        var inputFrom = document.getElementById('input-text-1');
        if (inputFrom) {
            inputFrom.addEventListener('click', function () {
                inputDateTime(inputFrom);
            });
        }
    });
}

function toDate() {
    var modalElement = document.getElementById('modal-root');
    var toDateElement = document.getElementById('dtp-control-2');
    var isOpen = false;
    toDateElement.addEventListener('click', function () {
        if (!isOpen) {
            modalElement.style.display = 'block';
            resizeModal();
            isOpen = true;
        } else {
            modalElement.style.display = 'none';
            isOpen = false;
        }
        var inputFrom = document.getElementById('input-text-1');
        if (inputFrom) {
            inputFrom.removeEventListener('click', inputDateTime);
        }

        // Thêm sự kiện click vào inputTo để cập nhật ngày khi chọn ngày trong lịch
        var inputTo = document.getElementById('input-text-2');
        if (inputTo) {
            inputTo.addEventListener('click', function () {
                inputDateTime(inputTo);
            });
        }
    });
}

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

function showYearTable() {
    var yearTable = document.querySelector('.m-calendar.year');
    var years = Array.from(yearTable.querySelectorAll('.year-content')).map((div) => parseInt(div.textContent));

    var yearContents = yearTable.querySelectorAll('.year-content');
    yearContents.forEach(function (div) {
        div.addEventListener('click', function (event) {
            var selectedYear = parseInt(event.target.textContent);
            currentYear = selectedYear;
        });
    });
}

function getDaysInMonth(year, month) {
    var lastdayofMonth = new Date(year, month + 1, 0).getDate();
    return lastdayofMonth;
}

function getStartDayInMonth(year, month) {
    var startday = new Date(year, month, 1).getDay();
    return startday;
}

function activeCurrentDay(day) {
    var day1 = new Date().toDateString();
    var day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'current-value' : '';
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function updateDate() {
    var monthCL = document.querySelector('.month');
    var yearCL = document.querySelector('.year');
    var currentMonthDate = new Date(currentYear, currentMonth, 1);
    var currentMonthName = currentMonthDate.toLocaleString('vi-VN', {
        month: 'long',
    });

    var daysInMonth = getDaysInMonth(currentYear, currentMonth);
    var startDay = currentMonthDate.getDay();

    var dateCL = document.getElementById('tbody-calendar');
    var dayCount = 1;
    var rows = dateCL.getElementsByTagName('tr');

    monthCL.textContent = currentMonthName;
    yearCL.textContent = currentYear;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        for (var j = 0; j < cells.length; j++) {
            var td = cells[j];
            var div = td.querySelector('.day-content');
            td.classList.remove('prev-month', 'next-month');

            if (i === 0 && j < startDay) {
                td.classList.add('prev-month');
                var prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
                var prevDay = prevMonthDays - (startDay - j) + 1;
                div.textContent = prevDay;
            } else if (dayCount > daysInMonth) {
                td.classList.add('next-month');
                var nextDay = dayCount - daysInMonth;
                div.textContent = nextDay;
                dayCount++;
            } else {
                div.textContent = dayCount;
                if (activeCurrentDay(dayCount)) {
                    td.classList.add('current-value');
                } else {
                    td.classList.remove('current-value');
                }
                dayCount++;
            }
        }
    }
}

function buttonGroup() {
    var buttonGroups = document.querySelectorAll('.button-group'); // trả về 1 nodelist
    buttonGroups.forEach(function (buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            changeMonth(event);
            updateDate();
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
        console.log(currentMonth);
    } else if (target.classList.contains('fa-angle-double-right')) {
        currentYear += 1;
    }
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
    var inputFrom = document.getElementById('input-text-1');
    var inputTo = document.getElementById('input-text-2');
    var currentDate = getCurrentDate();
    var currentTime = updateTime();
    if (inputFrom) {
        inputFrom.value = currentDate + ' ' + currentTime;
    }
    if (inputTo) {
        inputTo.value = currentDate + ' ' + '23:59';
    }
}

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

function showCalendarTab() {
    var calendar = document.querySelector('.tabs .m-calendar.month');
    var calendarYear = document.querySelector('.tabs .m-calendar.year');
    var timeTab = document.querySelector('.tabs .m-time');
    calendar.style.display = 'none';
    calendarYear.style.display = 'none';
    timeTab.style.display = 'none';
    var monthButton = document.querySelector('.current-date .month');
    var yearButton = document.querySelector('.current-date .year');

    monthButton.addEventListener('click', function () {
        showMonthCalendar();
        var monthItems = document.querySelectorAll('.m-calendar.month .month-item');
        monthItems.forEach(function (item) {
            item.addEventListener('click', function (event) {
                var selectedMonthContent = event.target.textContent;
                var calendarTab = document.querySelector('.m-calendar.tab');
                calendarTab.style.display = 'inline-block';
                var tabMonthContent = calendarTab.querySelector('.month');
                tabMonthContent.textContent = selectedMonthContent;
                var selectedMonthIndex = Array.from(monthItems).indexOf(event.currentTarget);
                currentMonth = selectedMonthIndex;
                updateDate();
                var calendarMonth = document.querySelector('.m-calendar.month');
                calendarMonth.style.display = 'none';
            });
        });
    });
    yearButton.addEventListener('click', function () {
        showYearCalendar();
    });
}
function showMonthCalendar() {
    var calendarTab = document.querySelector('.tabs .m-calendar.tab');
    var calendar = document.querySelector('.tabs .m-calendar.month');
    var calendarYear = document.querySelector('.tabs .m-calendar.year');
    var timeTab = document.querySelector('.tabs .m-time');
    calendarTab.style.display = 'none';
    calendar.style.display = 'inline-block';
    calendarYear.style.display = 'none';
    timeTab.style.display = 'none';
}

function showYearCalendar() {
    var calendarTab = document.querySelector('.tabs .m-calendar.tab');
    var calendar = document.querySelector('.tabs .m-calendar.month');
    var calendarYear = document.querySelector('.tabs .m-calendar.year');
    var timeTab = document.querySelector('.tabs .m-time');
    calendarTab.style.display = 'none';
    calendar.style.display = 'none';
    calendarYear.style.display = 'inline-block';
    timeTab.style.display = 'none';
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
    var calendarMonth = document.querySelector('.tabs .m-calendar.month');
    var calendarYear = document.querySelector('.tabs .m-calendar.year');
    var calendarTab = document.querySelector('.tabs .m-calendar.tab');
    var timeTab = document.querySelector('.tabs .m-time');
    var calendarButton = document.querySelector('.ion-calendar');
    var timeButton = document.querySelector('.ion-clock');
    if (target.classList.contains('ion-clock')) {
        calendarButton.classList.remove('active');
        timeButton.classList.add('active');
        calendarTab.style.display = 'none';
        calendarMonth.style.display = 'none';
        calendarYear.style.display = 'none';
        timeTab.style.display = 'block';
        updateTime(); // Update time immediately
        setInterval(updateTime, 1000); // Update time every second
    } else if (target.classList.contains('ion-calendar')) {
        calendarButton.classList.add('active');
        timeButton.classList.remove('active');
        calendarTab.style.display = 'block';
        timeTab.style.display = 'none';
        calendarMonth.style.display = 'none';
        calendarYear.style.display = 'none';
    }
}

// GET NGAY THANG CHON TRONG BANG

function inputDateTime(inputElement) {
    var tdElements = document.querySelectorAll('.m-calendar.tab tbody td');
    tdElements.forEach(function (tdElement) {
        tdElement.addEventListener('click', function () {
            var clickedDayContent = tdElement.querySelector('div').textContent;
            var month = currentMonth + 1;
            var year = currentYear;
            var formattedDate = clickedDayContent + '/' + month + '/' + year + ' ' + updateTime();
            hideModal();
            inputElement.value = formattedDate;
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

window.onload = function () {
    showCalendarTab();
    fromDate();
    toDate();
    buttonGroup();
    fillCurrentDate();
    updateDate();
    optionGroup();
    inputDateTime();
};
