let productCard = document.getElementById("productCard");

let product = {
    name: "Laptop",
    price: 65000,
    stock: 10,
    image: "https://via.placeholder.com/200"
};

function showProduct(product) {

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <h2>${product.name}</h2>

        <p>Price: ₹${product.price}</p>

        <p>Stock: ${product.stock}</p>
    `;
}

showProduct(product);