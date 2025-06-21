const loaderItem = document.querySelector('.loader');
const itemsContainer = document.querySelector('#items');

function createItem(code, value) {
    const item = document.createElement('div');
    item.classList.add('item');

    const codeElem = document.createElement('div');
    codeElem.classList.add('item__code');
    codeElem.textContent = code;

    const valueElem = document.createElement('div');
    valueElem.classList.add('item__value');
    valueElem.textContent = value;

    const currencyElem = document.createElement('div');
    currencyElem.classList.add('item__currency');
    currencyElem.textContent = 'руб.';

    item.appendChild(codeElem);
    item.appendChild(valueElem);
    item.appendChild(currencyElem);

    return item;
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loaderItem.classList.remove('loader_active');
        const valutes = JSON.parse(xhr.responseText).response.Valute;
        for(const valute in valutes) {
            const newItem = createItem(valutes[valute].CharCode, valutes[valute].Nominal);
            itemsContainer.appendChild(newItem);
        }
    }
});
 
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();