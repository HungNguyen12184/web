// function fromDate() {
//     var modalElement = document.getElementById('modal-root');
//     var fromDateElement = document.getElementById('dtp-control-1');
//     var isOpen = false;
//     fromDateElement.addEventListener('click', function () {
// if (!isOpen) {
//     modalElement.style.display = 'block';
//     isOpen = true;
// } else {
//     modalElement.style.display = 'none';
//     isOpen = false;
// }
//     });
//     inputDateTime(fromDateElement, false);
// }
// function toDate() {
//     var modalElement = document.getElementById('modal-root');
//     var toDateElement = document.getElementById('dtp-control-2');
//     var isOpen = false;
//     toDateElement.addEventListener('click', function () {
// if (!isOpen) {
//     modalElement.style.display = 'block';
//     resizeModal();
//     isOpen = true;
// } else {
//     modalElement.style.display = 'none';
//     isOpen = false;
// }
//     });
//     inputDateTime(toDateElement, true);
// }

function toDate() {
    var modalElement = document.getElementById('modal-root');
    var fromDateElement = document.getElementById('dtp-control-1');
    var toDateElement = document.getElementById('dtp-control-2');
    var fromDateInputElement = document.getElementById('input-text-1');
    var toDateInputElement = document.getElementById('input-text-2');
    var isOpen = false;
    fromDateElement.addEventListener('click', function () {
        modalElement.style.display = 'block';
        selectedInput = fromDateInputElement;
        if (!isOpen) {
            modalElement.style.display = 'block';
            isOpen = true;
        } else {
            modalElement.style.display = 'none';
            isOpen = false;
        }
        inputDateTime();
    });
    toDateElement.addEventListener('click', function () {
        modalElement.style.display = 'block';
        selectedInput = toDateInputElement;
        if (!isOpen) {
            modalElement.style.display = 'block';
            resizeModal();
            isOpen = true;
        } else {
            modalElement.style.display = 'none';
            isOpen = false;
        }
        inputDateTime();
        resizeModal();
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

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

//lấy thứ bắt đầu của tháng
// function getStartDayInMonth(year, month) {
//     var startday = new Date(year, month, 1).getDay();
//     return startday;
// }

function activeCurrentDay(day) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();

    return currentYear === currentYear && currentMonth === currentMonth && day === currentDay;
}

// tao ngay thang
// function updateDate() {
//     var monthCL = document.querySelector('.month');
//     var yearCL = document.querySelector('.year');
//     var currentMonthDate = new Date(currentYear, currentMonth, 1);
//     var currentMonthName = currentMonthDate.toLocaleString('vi-VN', {
//         month: 'long',
//     });

//     var daysInMonth = getDaysInMonth(currentYear, currentMonth);
//     var startDay = currentMonthDate.getDay();

//     var dateCL = document.getElementById('tbody-calendar');
//     var dayCount = 1;
//     var rows = dateCL.getElementsByTagName('tr');

//     monthCL.textContent = currentMonthName;
//     yearCL.textContent = currentYear;

//     for (var i = 0; i < rows.length; i++) {
//         var cells = rows[i].getElementsByTagName('td');
//         for (var j = 0; j < cells.length; j++) {
//             var td = cells[j];
//             var div = td.querySelector('.day-content');
//             td.classList.remove('prev-month', 'next-month');

//             if (i === 0 && j < startDay) {
//                 td.classList.add('prev-month');
//                 var prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
//                 var prevDay = prevMonthDays - (startDay - j) + 1;
//                 div.textContent = prevDay;
//             } else if (dayCount > daysInMonth) {
//                 td.classList.add('next-month');
//                 var nextDay = dayCount - daysInMonth;
//                 div.textContent = nextDay;
//                 dayCount++;
//             } else {
//                 div.textContent = dayCount;
//                 if (activeCurrentDay(dayCount)) {
//                     td.classList.add('current-value');
//                 } else {
//                     td.classList.remove('current-value');
//                 }
//                 dayCount++;
//             }
//         }
//     }
//     var monthButton = document.querySelector('.current-date .month');
//     var yearButton = document.querySelector('.current-date .year');

//     monthButton.textContent = currentMonthName;
//     yearButton.textContent = currentYear;
// }

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
    var dateCL = document.getElementById('tbody-calendar');
    var rows = dateCL.getElementsByTagName('tr');
    monthCL.textContent = currentMonthName;
    yearCL.textContent = currentYear;
    var a = [];
    // Tính toán ngày của tháng trước
    var prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
    var firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    for (var i = 0; i < firstDayOfWeek; i++) {
        a.push(prevMonthDays - firstDayOfWeek + i + 1);
    }
    // Tính toán ngày của tháng hiện tại
    for (var i = 1; i <= daysInMonth; i++) {
        a.push(i);
    }
    // Tính toán ngày của tháng sau
    var remainingDays = 42 - a.length;
    for (var i = 1; i <= remainingDays; i++) {
        a.push(i);
    }
    for (var i = 0; i < rows.length; i++) {
        // Điền giá trị vào từng div trong bảng lịch dựa vào mảng a
        for (var i = 0; i < rows.length; i++) {
            // Lấy danh sách các ô (td) trong từng dòng
            var cells = rows[i].querySelectorAll('.day-content');
            for (var j = 0; j < cells.length; j++) {
                var div = cells[j];
                div.classList.remove('prev-month', 'next-month');
                var value = a[i * 7 + j];
                // Lấy giá trị từ mảng a theo chỉ số i * 7 + j
                var value = a[i * 7 + j];
                div.textContent = value;
                if (value <= 0 || value > daysInMonth) {
                    div.classList.add(value < 0 ? 'prev-month' : 'next-month');
                } else {
                    if (activeCurrentDay(value)) {
                        div.classList.add('current-value');
                    } else {
                        div.classList.remove('current-value');
                    }
                }
            }
        }
    }
}

function activeCurrentDay(day) {
    var day1 = new Date().toDateString();
    var day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'current-value' : '';
}

// tao ngay thang

function buttonGroup() {
    var buttonGroups = document.querySelectorAll('.button-group');
    buttonGroups.forEach(function (buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            var updatedDate = changeMonth(event, currentMonth, currentYear);
            currentMonth = updatedDate.currentMonth;
            currentYear = updatedDate.currentYear;
            updateDate();
        });
    });
}

function changeMonth(event, currentMonth, currentYear) {
    var target = event.target;
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
    return { currentMonth, currentYear };
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
    var currentTime = updateTimeDefaul();
    if (inputFrom) {
        inputFrom.value = currentDate + ' ' + currentTime;
    }
    if (inputTo) {
        inputTo.value = currentDate + ' ' + '23:59';
    }
}

//GET GIO PHUT
function updateTimeDefaul() {
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
        var yearItems = document.querySelectorAll('.m-calendar.year .year-item');
        yearItems.forEach(function (item) {
            item.addEventListener('click', function (event) {
                var selectedYearContent = event.target.textContent;
                var calendarTab = document.querySelector('.m-calendar.tab');
                calendarTab.style.display = 'inline-block';
                var tabYearContent = calendarTab.querySelector('.year');
                tabYearContent.textContent = selectedYearContent;
                var selectedYear = parseInt(selectedYearContent);
                currentYear = selectedYear;
                updateDate();
                var calendarYear = document.querySelector('.m-calendar.year');
                calendarYear.style.display = 'none';
            });
        });
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
    var timeTab = document.querySelector('.tabs .m-time');
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
    } else if (target.classList.contains('ion-calendar')) {
        calendarButton.classList.add('active');
        timeButton.classList.remove('active');
        calendarTab.style.display = 'block';
        timeTab.style.display = 'none';
        calendarMonth.style.display = 'none';
        calendarYear.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', optionGroup);

// GET NGAY THANG CHON TRONG BANG

function inputDateTime() {
    var tdElements = document.querySelectorAll('.m-calendar.tab tbody td');
    tdElements.forEach(function (tdElement) {
        tdElement.addEventListener('click', function (event) {
            var clickedDayContent = tdElement.querySelector('div').textContent;
            var updatedDate = changeMonth(event, currentMonth, currentYear);
            currentMonth = updatedDate.currentMonth;
            currentYear = updatedDate.currentYear;
            var formattedDate =
                clickedDayContent + '/' + (currentMonth + 1) + '/' + currentYear + ' ' + updateShowTime();
            if (selectedInput) {
                selectedInput.value = formattedDate;
            }
            updateDate();
            hideModal();
        });
    });
}
//TAO BANG DU LIEU
const tableData = [
    {
        stt: 1,
        hinh_toan_canh: 'scr/2023-07-28T16_53_19.png',
        hinh_bien_so: 'scr/2023-07-28T16_53_12.png',
        do_chinh_xac: '90%',
        chi_tiet: 'TruongSon_KOMOTA_2',
    },
    {
        stt: 2,
        hinh_toan_canh: 'scr/2023-07-28T16_53_29.png',
        hinh_bien_so: 'scr/2023-07-28T16_53_23.png',
        do_chinh_xac: '80%',
        chi_tiet: 'TruongSon_KOMOTA_3',
    },
    {
        stt: 3,
        hinh_toan_canh: 'scr/2023-07-28T16_53_36.png',
        hinh_bien_so: 'scr/2023-07-28T16_53_32.png',
        do_chinh_xac: '70%',
        chi_tiet: 'TruongSon_KOMOTA_4',
    },
    {
        stt: 4,
        hinh_toan_canh: 'scr/2023-07-28T16_53_56.png',
        hinh_bien_so: 'scr/2023-07-28T16_53_51.png',
        do_chinh_xac: '60%',
        chi_tiet: 'TruongSon_KOMOTA_5',
    },
    {
        stt: 5,
        hinh_toan_canh: 'scr/2023-07-28T16_54_08.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_02.png',
        do_chinh_xac: '50%',
        chi_tiet: 'TruongSon_KOMOTA_6',
    },
    {
        stt: 6,
        hinh_toan_canh: 'scr/2023-07-28T16_54_15.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_11.png',
        do_chinh_xac: '40%',
        chi_tiet: 'TruongSon_KOMOTA_7',
    },
    {
        stt: 7,
        hinh_toan_canh: 'scr/2023-07-28T16_54_27.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_19.png',
        do_chinh_xac: '30%',
        chi_tiet: 'TruongSon_KOMOTA_8',
    },
    {
        stt: 8,
        hinh_toan_canh: 'scr/2023-07-28T16_54_37.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_32.png',
        do_chinh_xac: '20%',
        chi_tiet: 'TruongSon_KOMOTA_9',
    },
    {
        stt: 9,
        hinh_toan_canh: 'scr/2023-07-28T16_54_45.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_41.png',
        do_chinh_xac: '10%',
        chi_tiet: 'TruongSon_KOMOTA_10',
    },
    {
        stt: 10,
        hinh_toan_canh: 'scr/2023-07-28T16_55_00.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_49.png',
        do_chinh_xac: '25%',
        chi_tiet: 'TruongSon_KOMOTA_11',
    },
    {
        stt: 11,
        hinh_toan_canh: 'scr/2023-07-28T16_55_00.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_49.png',
        do_chinh_xac: '35%',
        chi_tiet: 'TruongSon_KOMOTA_12',
    },
    {
        stt: 12,
        hinh_toan_canh: 'scr/2023-07-28T16_54_45.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_41.png',
        do_chinh_xac: '86%',
        chi_tiet: 'TruongSon_KOMOTA_13',
    },
    {
        stt: 13,
        hinh_toan_canh: 'scr/2023-07-28T16_54_45.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_41.png',
        do_chinh_xac: '96%',
        chi_tiet: 'TruongSon_KOMOTA_14',
    },
    {
        stt: 14,
        hinh_toan_canh: 'scr/2023-07-28T16_54_37.png',
        hinh_bien_so: 'scr/2023-07-28T16_54_32.png',
        do_chinh_xac: '69%',
        chi_tiet: 'TruongSon_KOMOTA_15',
    },
    {
        stt: 15,
        hinh_toan_canh: 'scr/2023-07-28T16_53_36.png',
        hinh_bien_so: 'scr/2023-07-28T16_53_32.png',
        do_chinh_xac: '79%',
        chi_tiet: 'TruongSon_KOMOTA_16',
    },
    {
        stt: 16,
        hinh_toan_canh: 'scr/2023-07-28T16_53_19.png',
        hinh_bien_so: 'scr/2023-07-28T16_53_12.png',
        do_chinh_xac: '59%',
        chi_tiet: 'TruongSon_KOMOTA_17',
    },
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
        <div class="image-container">
        <img crossorigin="anonymous" class="image-content" src="${tableData[i].hinh_toan_canh}" alt="" style="height: 5rem; object-fit: cover;">
        </div>
        </div>
        <div class="flex flex-shrink-0"></div>
        </div>
    </div>
    <div class="dg-row-item row--horizontal-border" style="flex: 0 0 290px; width: 290px;">
        <div class="dg-cell dg-cell--align-left">
        <div class="flex flex-grow flex-shrink flex-basis-0 justify-center overflow-hidden css-0">
        <div class="image-container">
        <img crossorigin="anonymous" class="image-content" src="${tableData[i].hinh_bien_so}" alt="" style="height: 5rem; object-fit: cover;"></div>
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
        <div class="flex flex-grow flex-shrink flex-basis-0 justify-center items-center overflow-hidden">
        <button class="btn btn--default btn-fill btn--round btn--sm btn--only-icon btn--icon-sm">
            <span class="btn__content relative justify-center items-center">
            <i class="fas fa-info" style="font-size: 20px; color: inherit; background-color: transparent;"></i>
            </span>
        </button>
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
    //chuyển đổi một giá trị phần trăm thành một giá trị số dựa trên giá trị tối đa đã cho.
    function percentageToValue(percentage, maxValue) {
        return Math.round((percentage * maxValue) / 100);
    }

    function handleSliderMove(sliderContainer, event) {
        var slider = sliderContainer.querySelector('.slider__range-thumb');
        var sliderRect = sliderContainer.getBoundingClientRect(); //getBoundingClientRect là một phương thức trong JavaScript Object Model (DOM) giúp lấy ra thông tin về kích thước và vị trí của một phần tử trên trang web. Phương thức này trả về một DOMRect object chứa các thuộc tính như width, height, top, bottom, left, và right. Bạn có thể sử dụng getBoundingClientRect để thao tác với phần tử này trong JavaScript."
        var offsetX = event.clientX - sliderRect.left;
        var percentage = (offsetX / sliderRect.width) * 100;
        percentage = Math.min(Math.max(percentage, 0), 100);

        var maxValueHour = 24;
        var maxValueMinute = 60;
        var sliderType = sliderContainer.id;
        var hourPercentage;
        var minutePercentage;
        var now = new Date();
        var currentHour = now.getHours();
        var currentMinute = now.getMinutes();

        if (sliderType === 'slider-hour') {
            hourPercentage = percentage;
            minutePercentage = (currentMinute / 60) * 100;
        } else if (sliderType === 'slider-minute') {
            hourPercentage = (currentHour / 24) * 100;
            minutePercentage = percentage;
        }
        var selectedHourValue = percentageToValue(hourPercentage, maxValueHour);
        var selectedMinuteValue = percentageToValue(minutePercentage, maxValueMinute);
        slider.style.left = percentage + '%';
        var showtime = document.querySelector('.showtime');
        var hourElement = showtime.querySelector('#hour');
        var minuteElement = showtime.querySelector('#minute');
        hourElement.textContent = selectedHourValue;
        minuteElement.textContent = selectedMinuteValue;
        updateShowTime(selectedHourValue, selectedMinuteValue);
    }

    function sliderTime(sliderContainer, maxValue) {
        var slider = sliderContainer.querySelector('.slider__range-thumb');
        var isMouseDown = false;
        if (slider) {
            slider.addEventListener('mousedown', function (event) {
                isMouseDown = true;
                document.addEventListener('mousemove', function (event) {
                    if (isMouseDown) {
                        handleSliderMove(sliderContainer, event, maxValue);
                    }
                });
                document.addEventListener('mouseup', function () {
                    isMouseDown = false;
                });
            });
        }
    }

    var hourSliderContainer = document.getElementById('slider-hour');
    sliderTime(hourSliderContainer, 24);

    var minuteSliderContainer = document.getElementById('slider-minute');
    sliderTime(minuteSliderContainer, 60);
    updateTime();
});

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var hourSliderContainer = document.getElementById('slider-hour');
    var minuteSliderContainer = document.getElementById('slider-minute');
    var hourSliderThumb = hourSliderContainer.querySelector('.slider__range-thumb');
    var minuteSliderThumb = minuteSliderContainer.querySelector('.slider__range-thumb');
    var hourPercentage = (hours / 24) * 100;
    var minutePercentage = (minutes / 60) * 100;
    hourSliderThumb.style.left = hourPercentage + '%';
    minuteSliderThumb.style.left = minutePercentage + '%';
    updateShowTime(hours, minutes);
}

function updateShowTime(selectedHour, selectedMinute) {
    var showtime = document.querySelector('.showtime');
    var hourElement = showtime.querySelector('#hour');
    var minuteElement = showtime.querySelector('#minute');
    hourElement.textContent = selectedHour.toString().padStart(2, '0');
    minuteElement.textContent = selectedMinute.toString().padStart(2, '0');
}

// collasp
function buttonView() {
    var buttonGroups = document.querySelectorAll('.buttonView'); // trả về 1 nodelist
    buttonGroups.forEach(function (buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            changeWidth(event);
        });
    });
}

function changeWidth(event) {
    var tableList = document.getElementById('tablelist');
    var mapView = document.querySelector('.map-view');
    var target = event.target;
    if (target.classList.contains('fa-list')) {
        if (tableList.style.width === '100%') {
            tableList.style.width = '50%';
            mapView.style.width = '50%';
        } else {
            tableList.style.width = '100%';
            mapView.style.width = '0%';
        }
    } else if (target.classList.contains('fa-columns')) {
        tableList.style.width = '50%';
        mapView.style.width = '50%';
    } else if (target.classList.contains('fa-map')) {
        if (mapView.style.width === '100%') {
            mapView.style.width = '50%';
            tableList.style.width = '50%';
        } else {
            mapView.style.width = '100%';
            tableList.style.width = '0%';
        }
    }
}

window.onload = function () {
    showCalendarTab();
    toDate();
    buttonGroup();
    fillCurrentDate();
    updateDate();
    optionGroup();
    showCurrentPageData(1);
    buttonView();
};
