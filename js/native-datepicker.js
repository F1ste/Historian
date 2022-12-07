const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const input = document.getElementById('datePicker');

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = 'По дате размещения';
selected_date_element.dataset.value = '';

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS

function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
	if (selected_date_element.dataset.value != '' && !selected_date_element.classList.contains('_active')) {
		selected_date_element.classList.toggle('_active');
	}
	if (e.target.className == 'date-picker custom-input' || 
	e.target.className == 'date-picker custom-input open' ||
	e.target.className == 'selected-date' || 
	e.target.className == 'day' || 
	e.target.className == 'selected-date _active') {
		date_picker_element.classList.toggle('open');
	};

}
window.addEventListener('click', function (e) {
    if (!date_picker_element.contains(e.target) && dates_element.classList.contains('active')) {
        // Ниже код, который нужно выполнить при срабатывании события.
        date_picker_element.classList.toggle('open');
		dates_element.classList.toggle('active');
    }
});

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function getWeekDay(date) { // get weekday number 0 - monday, 6 - sunday
	let day = date.getDay();
	if (day == 0) day = 7; // current sunday (0) must be last weekday
	return day - 1;
}
  
function populateDates (e) {
	let wd = new Date(year, month);
	lastDateOfMonth = new Date(year, month+1, 0).getDay();
	days_element.innerHTML = '';
	let amount_days;
	for (let i = 0; i < getWeekDay(wd); i++) {
		//amount days of this month in this case mean amount days of prev month
		if (month == 0 || month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10){
			amount_days = 31;
		}
		else if (month == 2) {
			const isLeap = new Date(year, 1, 29).getMonth() === 1;
			amount_days = isLeap ? 29 : 28;
		}
		else{
			amount_days = 30;
		} 
		//end case
		const day_element = document.createElement('div');
		day_element.classList.add('prev-month-day');
		days_element.prepend(day_element);
		day_element.textContent = amount_days - i;
	}
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        amount_days = 31;
    }
	else if (month == 1) {
        const isLeap = new Date(year, 1, 29).getMonth() === 1;
        amount_days = isLeap ? 29 : 28;
	}
    else{
        amount_days = 30;
    }

	
	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date((year) + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;
			input.value = selectedDate;

			populateDates();
			dates_element.classList.toggle('active');
		});

		days_element.appendChild(day_element);
	}
	if (lastDateOfMonth != 0) {
		let j = 1;
        for (let i = 0; i < 7 - lastDateOfMonth; i++) {
			const day_element = document.createElement('div');
			day_element.classList.add('next-month-day');
			day_element.textContent = j++;
			days_element.appendChild(day_element);

			
        }
    }
	
}

// HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}