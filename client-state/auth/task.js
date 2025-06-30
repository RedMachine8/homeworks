const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const userIdSpan = document.getElementById('user_id');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', () => {
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

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if(data.success) {
                localStorage.setItem('user_id', user_id);
                welcome.classList.add('welcome_active');
                form.classList.remove('signin_active')
                userIdSpan.textContent = data.user_id;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
};

const storeUserId = localStorage.getItem('user_id');
if(storeUserId) {
    welcomeBlock.classList.add('welcome_active');
    userIdSpan.textContent = storeUserId;
    signinForm.classList.remove('signin_active');
}