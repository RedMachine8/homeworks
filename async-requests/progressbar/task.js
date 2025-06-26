const progress = document.getElementById('progress');
const form = document.getElementById('form');

const xhr = new XMLHttpRequest();
xhr.upload.onprogress = function(e) {
    const percent = (e.loaded / e.total) * 100;
    progress.value = percent;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    
    const formDataFile = new FormData();
    formDataFile.append('file', file);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formDataFile);
});