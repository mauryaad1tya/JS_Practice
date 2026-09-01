let productContainer = document.getElementById("products");

let products = [
    {
        name: "Laptop",
        price: 65000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1200
    }
];

function applyDiscount(products) {

    let discountedProducts = products.map(function(product) {

        let discountedPrice =
            product.price - (product.price * 10) / 100;

        return {
            ...product,
            discountedPrice: discountedPrice
        };
    });

    return discountedProducts;
}


let result = applyDiscount(products);


result.forEach(function(product) {

    productContainer.innerHTML += `
        <div class="product">

            <h2>${product.name}</h2>

            <p>Original Price: ₹${product.price}</p>

            <p class="discount">
                Discounted Price: ₹${product.discountedPrice}
            </p>

        </div>
    `;

});