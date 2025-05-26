const fontSizeElem = document.querySelectorAll('.font-size');
const book = document.querySelector('.book__content');
const textColorControls = document.querySelectorAll('.book__control_color .color');
const bgColorControls = document.querySelectorAll('.book__control_background .color');



fontSizeElem.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        fontSizeElem.forEach(elem => elem.classList.remove('font-size_active'));
        elem.classList.add('font-size_active');

        const size = elem.dataset.size;
        book.classList.remove('book_fs-small', 'book_fs-big');

        if(size === 'big') {
            book.classList.add('book_fs-big');
        } else if(size === 'small') {
            book.classList.add('book_fs-small');
        }
    });
});

textColorControls.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        textColorControls.forEach(elem => elem.classList.remove('color_active'));
        elem.classList.add('color_active');

        const colorText = elem.dataset.textColor;
        book.classList.remove('book_color-gray', 'book_color-whitesmoke');

        if(colorText === 'gray') {
            book.classList.add('book_color-gray');
        } else if(colorText === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        }
    });
});

bgColorControls.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        bgColorControls.forEach(elem => elem.classList.remove('color_active'));
        elem.classList.add('color_active');

        const colorBg = elem.dataset.bgColor;
        book.classList.remove('book_bg-black', 'book_bg-gray');

        if(colorBg === 'black') {
            book.classList.add('book_bg-black');
        } else if(colorBg === 'gray') {
            book.classList.add('book_bg-gray');
        }
    });
});
