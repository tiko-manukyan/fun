
const body = document.querySelector('tbody');

const clearHtml = () => {
    const productsHtml = document.querySelectorAll('.product-row');
    productsHtml.forEach((el) => body.removeChild(el));
}


const fun = () => {
    clearHtml();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.map((product, index) => {
        const tr = document.createElement('tr');
        tr.classList.add('product-row')
        tr.innerHTML = ` <td>
            <div>
                <img
                    src="${product.image}">
            </div>
            <div class="cart-info">
                <p>${product.title}</p>
                <p onclick="del(${index})">Delete</p>
            </div>
        </td>
        <td>$${product.price}</td>
        <td><input type="number"></td>
        <td>$${product.price}</td>`;
        body.append(tr);
    });
}

fun();

const del = (de) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(de, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    fun();
}

