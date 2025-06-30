const textEditor = document.querySelector('#editor');
const savedText = localStorage.getItem('editText');

if(savedText) {
    textEditor.value = savedText;
}

textEditor.addEventListener('input', () => {
    localStorage.setItem('editText', textEditor.value);
});