const timerElement = document.getElementById('timer');
let startTimer = parseInt(timerElement.textContent);

function pad(num) {
    return String(num).padStart(2, '0');
}

function updateTimer() {
    const hhTimer = new Date(startTimer * 1000).toISOString().slice(11, 19);
    timerElement.textContent = hhTimer;
    if(startTimer === 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
    startTimer--;
}

const timerInterval = setInterval(updateTimer, 1000);