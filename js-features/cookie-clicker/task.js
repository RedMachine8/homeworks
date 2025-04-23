const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
const clickSpeedElement = document.getElementById('clicker__speedClick');
let counter = parseInt(counterElement.textContent);
let isGrowing = true;
let lastClickTime = null;
let clickSpeed = 0;

cookieElement.onclick = () => {
    counter++;
    counterElement.textContent = counter;
    
    const currentTime = new Date();
    if(lastClickTime !== null) {
        clickSpeed = 1 / ((currentTime - lastClickTime) / 1000);
    }
    lastClickTime = currentTime;
    clickSpeedElement.textContent = clickSpeed.toFixed(2);

    if(isGrowing) {
        cookieElement.width = 250;
    } else {
        cookieElement.width = 200;
    }
    isGrowing = !isGrowing;
}