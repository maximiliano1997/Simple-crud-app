const body = document.querySelector('body');
const tbody = document.querySelector('tbody');

const valueName = document.querySelector('#valueName')
const valueStock = document.querySelector('#valueStock')
const valuePrice = document.querySelector('#valuePrice')
const valueStatus = document.querySelector('#valueStatus')

const addBtn = document.querySelector('#addBtn')

body.onload = () => {
    // alert("Hola")
    creationOfProduct(getProducts());
}



const creationOfProduct = (products) => {

    const trs = [];

    products.forEach((product, i) => {
      const tr = createTable(product, i)
      trs.push(tr);
})

// Meter trs al tbody
tbody.append(...trs)
   
}

function clearTable() {
    tbody.innerHTML = "";
}

function createTable(product, i){
    

    // Delete Icon
    const tdDelete = document.createElement('td');
    const iDelete = document.createElement('i');
    iDelete.className = "fa-solid fa-trash-can deleteBtn";
    tdDelete.appendChild(iDelete);
    iDelete.addEventListener('click', () => {
        deleteProduct(i);
        clearTable();
        creationOfProduct(getProducts(), i)

    })

    // Update Icon
    const iUpdate = document.createElement('i');
    iUpdate.className = "fas fa-pen editBtn";
    iUpdate.addEventListener('click', () => {
        valueName.value = product.name
        valueStock.value = product.stock
        valuePrice.value = product.price 
        valueStatus.value = product.status

        addBtn.textContent = "UPDATE PRODUCT";
        // addBtn.style.color = "#333";
        addBtn.style.backgroundColor = "#00FF0099";
        // addBtn.style.fontSize = "19px";

        // iUpdate.removeEventListener('click', clickAddBtn);
        // addBtn.addEventListener('click', (event) => handleAddBtn(event, i));
        addBtn.onclick = (event) => handleAddBtn(event, i);
    })
    const tdUpdate = document.createElement('td');
    tdUpdate.appendChild(iUpdate);

    // Name
    const tdName = document.createElement('td');
    tdName.textContent = product.name;
    const tdStock = document.createElement('td');
    // Stock
    tdStock.textContent = product.stock
    // Price
    const tdPrice = document.createElement('td');
    tdPrice.textContent = product.price
    // Status
    const tdStatus = document.createElement('td');
    tdStatus.textContent = product.status

    const tr = document.createElement('tr');
    //meter tds dentro de tr
    tr.append(tdDelete, tdUpdate, tdName, tdStock, tdPrice, tdStatus)

    // Guardar tr
    return tr;
}




// Add product
addBtn.onclick = clickAddBtn;
function clickAddBtn(event){
    const valueInName = valueName.value
    const valueInStock = valueStock.value
    const valueInPrice = valuePrice.value
    const valueInStatus = valueStatus.value

    const i = getProducts().length;
    let newProduct = createProduct(valueInName, valueInStock, valueInPrice, valueInStatus);
    const table = createTable(newProduct, i);
    tbody.append(table);
    alert("PRODUCT SUCCESSFULLY ADDED")

    iUpdate.removeEventListener()
    event.preventDefault() 
}


// H davnports - the higher arithmetic
// how to prove it  - a structured approach
// introduction to modern cryptography
// Elliptic Curves, second edition dale husemoller
// Calculus with analytic geometry
// introduction to linear algebra  gilber strang
// elementary number theory - david burton
// abstract algebra -
// multivariable calculus

function handleAddBtn(event, i) { 
    
    const valueInName = valueName.value
    const valueInStock = valueStock.value
    const valueInPrice = valuePrice.value
    const valueInStatus = valueStatus.value

    
    updateProduct(i, valueInName, valueInStock, valueInPrice, valueInStatus);
    clearTable()

    // const p = getProducts()
    creationOfProduct(getProducts(), i)

    // clear values on inputs
    valueName.value = ""
    valueStock.value = ""
    valuePrice.value = ""
    valueStatus.value = ""

    addBtn.textContent = "ADD PRODUCT";
    addBtn.style.backgroundColor = "";

    alert("PRODUCT SUCCESSFULLY UPDATED")
    event.preventDefault();
}