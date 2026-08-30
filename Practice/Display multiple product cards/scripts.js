let productContainer = document.getElementById("product");

let products = [
    {
        name: "Laptop",
        price: 65000,
        stock: 5
    },
    {
        name: "Mouse",
        price: 500,
        stock: 0
    },
    {
        name: "Keyboard",
        price: 1200,
        stock: 10
    }
];

function showProducts(products) {

    products.forEach(function(product) {

        let status;

        if (product.stock > 0) {
            status = "In Stock";
        } else {
            status = "Out of Stock";
        }

        productContainer.innerHTML += `
            <div>
                <h2>Name: ${product.name}</h2>
                <p>Price: ₹${product.price}</p>
                <p>${status}</p>
            </div>
        `;
    });

}

showProducts(products);