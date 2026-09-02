let productContainer = document.getElementById("products");

let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1200 },
    { name: "Monitor", price: 15000 }
];

function showProducts(products) {

    let newProducts = products.filter(function(product) {
        return product.price > 1000;
    });

    newProducts.forEach(function(product) {

        productContainer.innerHTML += `
            <div class="product">

                <h2>${product.name}</h2>

                <p>Price: ₹${product.price}</p>

            </div>
        `;

    });
}

showProducts(products);