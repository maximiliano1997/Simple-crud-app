const products = [
    new Product('Tomatoes', 55, 4, 1),
    new Product('Milk', 155, 6, 1),
    new Product('Orange', 15, 3, 1),
    new Product('Soya', 0, 1, 0),
]

const getProducts = () => {
    return products
}

function createProduct(name, stock, price, status){
    let newProduct = new Product(name, stock, price, status);
    products.push(newProduct)
    return newProduct
}