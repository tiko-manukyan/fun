function init() {
    generateFeatured();
}

const generateFeatured = () => {
    getProducts(4)
        .then((res) => res.json())
        .then((res) => generateProductsHtml(res));
}

const generateProductsHtml = (products) => {
    products.map((product) => {
        console.log(product)
        const el = document.createElement('div');
        el.classList.add('product');
        el.innerHTML = `<img src="${product.image}" >
              <p><b>${product.title}</b></p>
                <div class="info">
                    <span>$${product.price}</span>
                    <span>${product.category}</span>
                </div>`;
        document.querySelector('.slides').append(el);
    });
};

const getProducts = (limit = 10) => fetch(`https://fakestoreapi.com/products?limit=${limit}`)

init();


