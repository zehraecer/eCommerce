const BASE_URL = "https://dummyjson.com";
let tiklananurun = JSON.parse(localStorage.getItem("idgetir")) || null;


async function getItems(endpoint){
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    const items = response.json();
    // console.log(items);
    return items;
}


const homePage = document.querySelector(".myDiv-homePage");

async function listItems(){
    const items = await getItems("products")
    const products = items.products
    console.log(products);
    for (const product of products) {
        homePage.innerHTML += `
        <a href="index.html">  <div data-id="${product.id}" class="myHtml">
        <h5 data-id="${product.id}">${product.description}</h5>
        <img src="${product.images[0]}">
        <h4 data-id="${product.id}">${product.category}</h4>     
        <h2 data-id="${product.id}">${product.price}$</h2>
        
        </div>
        </a>
        `
    }
    localStorage.setItem("ilksayfa", JSON.stringify(products))
    const myPage = document.querySelectorAll(".myHtml");
    for (const btn of myPage) {
        btn.addEventListener("click", idGetir)
        console.log("skjfhdjkg");
    }
}



function idGetir(e){
    console.log(e.target.dataset.id);
    tiklananurun = e.target.dataset.id 
    localStorage.setItem("idgetir",JSON.stringify(tiklananurun))
}

listItems();



