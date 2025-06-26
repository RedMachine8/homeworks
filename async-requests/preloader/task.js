const loaderItem = document.querySelector('.loader');
const itemsContainer = document.querySelector('#items');

function createItem(code, value) {
    itemsContainer.insertAdjacentHTML('beforeend', `
        <div class="item">
            <div class="item__code">
                ${code}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>    
    `);
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loaderItem.classList.remove('loader_active');
        const valutes = JSON.parse(xhr.responseText).response.Valute;
        for(const valute in valutes) {
            createItem(valutes[valute].CharCode, valutes[valute].Nominal);
        }
    }
});
 
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();