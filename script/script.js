function openModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'none';
}
// находим кнопку и счетчик по классу
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
//инициализируем счетчик
let count = 0;

//увеличиваем счетчик при нажатии на кнопку "в корзину"
    addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
    });
});
