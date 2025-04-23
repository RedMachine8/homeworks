const timerElement = document.getElementById('timer');
let startTimer = parseInt(timerElement.textContent);

function updateTimer() {
    startTimer--;
    timerElement.textContent = startTimer;

    if(startTimer === 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

const timerInterval = setInterval(updateTimer, 1000);