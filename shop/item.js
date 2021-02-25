const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('item');
const getProducts = () => fetch(`https://fakestoreapi.com/products/${itemId}`);
let product;

getProducts()
    .then((res) => res.json())
    .then(res => {
        product = res;
        generateHTML(res);
    });

const generateHTML = (product) => {
    for (let key in product) {
        const el = document.getElementById(key);
        if (el) {
            if (key === 'image') {
                el.setAttribute('src', product[key])
            }
            else if (key === 'price') {
                el.innerHTML = product[key].toFixed(2);
            } else {
                el.innerHTML = product[key];
            }
        }
    }
}

const updateCartIndicator = () => {
    const num = document.querySelector('.count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    num.innerHTML = cart.length;
}

const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIndicator();
}

updateCartIndicator();
