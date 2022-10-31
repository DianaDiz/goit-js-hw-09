


import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStartRef = document.querySelector('[data-start]');
btnStartRef.setAttribute('disabled', false);

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
// console.log(days);
let timerDeadline = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        timerDeadline = selectedDates[0].getTime();
        console.log(timerDeadline);
        if (timerDeadline < Date.now()) {
            alert('Please choose a date in the future');
            btnStartRef.setAttribute('disabled', true);
        } else {
            btnStartRef.toggleAttribute('disabled');
        }
        btnStartRef.addEventListener('click', onBtnStart);
    },
};

flatpickr("#datetime-picker", options);

function onBtnStart() {
// event.preventDefault();
btnStartRef.setAttribute('disabled', false);
let intervalId = setInterval(() => {
    const delta = timerDeadline - Date.now();

    console.log("🚀 ~ delta", delta);

    if (delta < 1000) {
        clearInterval(intervalId)
    };

    const data = convertMs(delta);
    // console.log(data);
    days.textContent = addLeadinZero(data.days);
    hours.textContent = addLeadinZero(data.hours);
    minutes.textContent = addLeadinZero(data.minutes);
    seconds.textContent = addLeadinZero(data.seconds);
    }, 1000)   
}

function convertMs(delta) {
        const days = Math.floor(delta / 1000 / 60 / 60 / 24);
        const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(delta / 1000 / 60) % 60;
        const seconds = Math.floor(delta / 1000) % 60;
        return { days, hours, minutes, seconds };
}
    
function addLeadinZero(value) {
        return String(value).padStart(2, '0');
}