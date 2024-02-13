const topBtn = document.getElementsByClassName("top");
topBtn[0].addEventListener('click', function () {
    window.scroll(0, 0)
})

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-cart');
    const addToFavButtons = document.querySelectorAll('.add-fav');

    const cartCountElement = document.getElementById('cart-count');
    const favCountElement = document.getElementById('fav-count');

    let cartCount = 0;
    let favCount = 0;

    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    function updateFavCount() {
        favCountElement.textContent = favCount;
    }

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            cartCount++;
            updateCartCount();
        });
    });

    addToFavButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            favCount++;
            updateFavCount();
        });
    });
});
const menuButton = document.getElementsByClassName("menu-button-img");
const menuLinks = document.getElementsByClassName("menu-links");
menuButton[0].addEventListener("click", function() {
    menuLinks[0].classList.toggle('active')
})

