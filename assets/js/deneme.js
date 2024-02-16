
const BASE_URL = "https://dummyjson.com";

// https://dummyjson.com/products
// UTILITY BASED

function qs(element){
  const htmlElement = document.querySelector(element);
  return htmlElement;
}



async function getItems(endpoint){
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const items = await response.json();
  return items;
}

async function postItems(endpoint, bodyObject){
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObject)
  });
  const items = await response.json();
  return items;
}

async function putItems(endpoint, bodyObject){
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObject)
  });
  const updatedItem = await response.json();
  return updatedItem;
}

// async function testFunction(){
//   const updatedProduct = await putItems("products/5", {
//     title: "Selam"
//   });
//   console.log(updatedProduct);
// }

// testFunction();


const productsBox = qs("#products");

async function editProduct(e){
  const productId = parseInt(e.target.dataset.productid);
  
  const answer = prompt("Güncellemek istediğin başlık nedir?");
  const updatedProduct = await putItems(`products/${productId}`, {
    title: answer,
  })
  e.target.parentElement.querySelector("span").textContent = updatedProduct.title;
}

function deleteProduct(e){
  const productId = parseInt(e.target.dataset.productid);
  console.log(productId);
}

async function listProducts(){
  const items = await getItems("products");
  const products = items.products;
  console.log(products);
  for (const product of products) {
    productsBox.innerHTML += `<li data-productid="${product.id}"><span>${product.title}</span> <button data-productid="${product.id}" class="edit-btn">Düzenle</button> <button data-productid="${product.id}" class="delete-btn">Sil</button></li>`
  }
  bindEvents(".edit-btn", "click", editProduct);
  bindEvents(".delete-btn", "click", deleteProduct);
}


function bindEvents(selector, eventType, cbFunction){
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener(eventType, cbFunction)
  }
  
}


async function addProduct(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData);
  const response = await postItems("products/add", formObj);
  console.log(response);
  productsBox.innerHTML += `<li>${response.title}</li>`
  e.target.reset();
}

const addProductForm = qs("#add-product-form");
addProductForm.addEventListener("submit", addProduct);

listProducts();