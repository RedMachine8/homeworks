document.addEventListener('DOMContentLoaded', () => {
    const divElements = Array.from(document.querySelectorAll('.reveal'));

    document.addEventListener('scroll', () => {
        divElements.forEach(elem => {
            const {top, bottom} = elem.getBoundingClientRect();
            if(top > 0 || bottom > window.innerHeight) {
                elem.classList.add('reveal_active');
            } else {
                elem.classList.remove('reveal_active');
            }
        });
    });
});