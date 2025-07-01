const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const signInForm = document.getElementById('signin');
const userIdSpan = document.getElementById('user_id');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    const dataUser = JSON.stringify({
        login: login,
        password: password
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dataUser);
})

xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    if(data.success) {
        localStorage.setItem('user_id', data.user_id);
        welcome.classList.add('welcome_active');
        signInForm.classList.remove('signin_active')
        userIdSpan.textContent = data.user_id;
    } else {
        alert('Неверный логин/пароль');
    }
};

const storeUserId = localStorage.getItem('user_id');
if(storeUserId) {
    welcome.classList.add('welcome_active');
    userIdSpan.textContent = storeUserId;
    signInForm.classList.remove('signin_active');
}