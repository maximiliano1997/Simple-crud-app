const products = [
    new Product('Tomatoes', 28, 4, 1),
    new Product('Grapes', 155, 6, 1),
    new Product('Oranges', 15, 3, 1),
    new Product('Milk', 0, 1, 0),
    new Product('Apples', 22, 3, 1),
    new Product('Pumpkin', 33, 18, 3),
    new Product('Soya', 0, 1, 0),
]

const getProducts = () => {
    return products
}

function createProduct(name, stock, price, status){
    let newProduct = new Product(name, stock, price, status);
    products.push(newProduct)
    return newProduct;
}

function updateProduct(i, newName, newStock, newPrice, newStatus){
    products[i].name = newName;
    products[i].stock = newStock;
    products[i].price = newPrice;
    products[i].status = newStatus;
}

function deleteProduct(i){
   products.splice(i, 1);
}