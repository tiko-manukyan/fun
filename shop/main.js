function init() {
    generateFeatured();
}

const generateFeatured = () => {
    getProducts()
        .then((res) => res.json())
        .then((res) => generateProductsHtml(res));
}

const generateProductsHtml = (products) => {
    products.map((product) => {
        const el = document.createElement('div');
        el.classList.add('product');
        el.innerHTML = `<a href="item.html?item=${product.id}"><img src="${product.image}" >
              <p><b>${product.title}</b></p>
                <div class="info">
                    <span>$${product.price.toFixed(2)}</span>
                    <span>${product.category}</span>
                </div>
</a>`;
        document.querySelector('.slides').append(el);
    });
};

const getProducts = () => fetch(`https://fakestoreapi.com/products`)

init();


