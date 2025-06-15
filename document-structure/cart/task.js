const cartProducts = document.querySelector('.cart__products'); 
const quantityControls = document.querySelectorAll('.product__quantity-control');
const addCartButtons = document.querySelectorAll('.product__add');
const cartTitle = document.querySelector('.cart__title');

quantityControls.forEach(control => {
    control.addEventListener('click', () => {
        const product = control.closest('.product');
        const valueElement = product.querySelector('.product__quantity-value');

        let currentValue = parseInt(valueElement.textContent);

        if(control.classList.contains('product__quantity-control_inc')) {
            currentValue++;
        } else if(currentValue > 1) {
            currentValue--;
        }

        valueElement.textContent = currentValue;
    });
});

addCartButtons.forEach(addButton => {
    addButton.addEventListener('click', () => {
        const product = addButton.closest('.product');
        const productId = product.dataset.id;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
        const imageSrc = product.querySelector('.product__image').src;

        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if(existingProduct) {
            let countElement = existingProduct.querySelector('.cart__product-count');
            const cartImage = existingProduct.querySelector('.cart__product-image');
            countElement.textContent = parseInt(countElement.textContent) + quantity;
            cartImage.src = imageSrc;
        } else {
            const newProduct = document.createElement('div');
            newProduct.classList.add('cart__product');
            newProduct.dataset.id = productId;

            newProduct.innerHTML = `
                <div class="cart__product-count">${quantity}</div>
                <img class="cart__product-image" src="${imageSrc}">
                <button class="cart__product-remove"></button>
            `;

            cartProducts.appendChild(newProduct);
        }

        if(cartProducts.children.length > 0) {
            cartTitle.computedStyleMap.display = 'block';
        }
    });
});

cartProducts.addEventListener('click', (e) => {
    if(e.target.classList.contains('cart__product-remove')) {
        const productRemove = e.target.closest('.cart__product');
        productRemove.remove();

        if(cartProducts.children.length === 0) {
            cartTitle.computedStyleMap.display = 'none';
        }
    }
});
