const rotators = document.querySelectorAll('.rotator');


rotators.forEach(rotator => {
    initRotators(rotator);
});

function initRotators(rotator) {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;
        let interval;
        let timerId;
        
        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            cases[currentIndex].classList.add('rotator__case_active');
        }

        timerId = setInterval(rotate, 1000);
}