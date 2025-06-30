const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const findCookie = pairs.find(p => p.startsWith(name + '=')); 
    return findCookie;
}

if(!getCookie('modalClosed')) {
    modal.classList.add('modal_active');
}

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modalClosed', 'true');
});