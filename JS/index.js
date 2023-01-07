const body = document.querySelector('body');
const tbody = document.querySelector('tbody');

const valueName = document.querySelector('#valueName').value;
const valueStock = document.querySelector('#valueStock').value;
const valuePrice = document.querySelector('#valuePrice').value;
const valueStatus = document.querySelector('#valueStatus').value;

const addBtn = document.querySelector('#addBtn')

body.onload = () => {
    // alert("Hola")
    createProduct(getProducts());
}



const creationOfProduct = (products) => {

    const trs = [];

    products.forEach((product, i) => {
      const tr = createTable(product)
      trs.push(tr);
})

tbody.append(...trs)
   // Meter trs al tbody
}

function createTable(product){
    
    

    const tr = document.createElement('tr');

    const tdDelete = document.createElement('td');
    const iDelete = document.createElement('i');
    iDelete.className = "";
    tdDelete.appendChild(iDelete);

    const tdUpdate = document.createElement('td');
    const iUpdate = document.createElement('i');
    iUpdate.className = "";
    tdUpdate.appendChild(iUpdate);

    const tdName = document.createElement('td');
    tdName.innerHTML = product.name;
    const tdStock = document.createElement('td');
    tdStock.innerHTML = product.stock
    const tdPrice = document.createElement('td');
    tdPrice.innerHTML = product.price
    const tdStatus = document.createElement('td');
    tdStatus.innerHTML = product.status

    //meter tds dentro de tr
    tr.append(tdDelete, tdUpdate, tdName, tdStock, tdPrice, tdStatus)

    // Guardar tr
    return tr;
}


addBtn.addEventListener('click', clickAddBtn);
function clickAddBtn(x){
    const valueName = document.querySelector('#valueName').value;
    const valueStock = document.querySelector('#valueStock').value;
    const valuePrice = document.querySelector('#valuePrice').value;
    const valueStatus = document.querySelector('#valueStatus').value;

       
    let newProduct = createProduct(valueName, valueStock, valuePrice, valueStatus);
    const table = createTable(newProduct);
    tbody.appendChild(table);
    x.preventDefault() 
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