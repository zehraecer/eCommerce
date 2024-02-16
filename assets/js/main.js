
const BASE_URL = "https://dummyjson.com";
// let tiklananurun = JSON.parse(localStorage.getItem("idgetir")) || null;


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















// async function getFetch(){
//     const response = await fetch("https://dummyjson.com/products?limit=100")
//     const data = await response.json();
//     return data ;
// }
// const homePage = document.querySelector(".myDiv-homePage");


// async function getVeriler(){
//     const veriler = await getFetch();
//     const datalar = veriler.products
//     // console.log(datas);
//     for (const data of datalar) {
//         homePage.innerHTML +=  `
        // <div data-id="${data.id}" class="myHtml">
        //         <h5>${data.description}</h5>
        //         <img src="${data.images[0]}">
        //         <h4>${data.category}</h4>     
        //         <h2>${data.price}</h2>
        // </div>

   
//         `

//     }
//     localStorage.setItem("anasayfa", JSON.stringify(datalar));
    
    
// }

// getVeriler();



// const myPage = document.querySelector(".myDiv");
// myPage.addEventListener("click", urunler)

// async function urunler(){
//     const veriler = await getFetch();
//     const data = veriler.products
//     const veri = data
//     console.log(veriler.id);

// }



// const myHtml = document.querySelector("body")
// const birinciSayfa = document.querySelector(".myDiv-homePage")

// const selectedProductId = this.currentTarget.dataset.id;
// console.log(selectedProductId);



// birinciSayfa.addEventListener("click", ayrintiGetir)

// async function ayrintiGetir(e){
//     e.preventDefault();
//     console.log(this.childNodes);
//    birinciSayfa.remove("myDiv")
//    myHtml.classList.add("ikinciSayfa")
        
// const storedData = JSON.parse(localStorage.getItem("anasayfa"));
      
// const selectedProductData = storedData.find(item => item.id === selectedProductId);
//         const ikinciSayfa = document.querySelector(".ikinciSayfa")
//         ikinciSayfa.innerHTML=`
//         <div class="header">
//         <div class="header-navBar">
//             <img src="assets/img/sneakers.png">
//             <a href="#"></a>
//             <a href="#">Men</a>
//             <a href="#">Women</a>
//             <a href="#">About</a>
//             <a href="#">Contact</a>
//         </div>
        
//         <div class="header-sag">
//            <div class="sepet"><img src="assets/img/Shape.png"></div>
//           <div class="profil"><img src="assets/img/Oval.jpg" ></div>  
//         </div>
//    </div>

//      <div class="myDiv">

//         <div class="myDiv-left">

//             <div class="bigFoto">
//                     <img src="assets/img/Rectangle.png" >
//             </div>

//             <div class="smallFotos">
//                 <img src="" >
//                 <img src="assets/img/image-product-2-thumbnail.jpg">
//                 <img src="assets/img/image-product-3-thumbnail.jpg">
//                 <img src="assets/img/image-product-4-thumbnail.jpg">
//             </div>

//         </div>


//         <div class="myDiv-right">
             
//             <h2 class="sneaker"></h2>
//             <h3 class="fall">Fall Limited Edition Sneakers</h3>
//             <h5 class="these">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</h5>

//             <div class="price">
//                    <div class="discounted-price">
//                     <h3>$125.00</h3>
//                     <h4>$250.00</h4>
//                    </div>
//                    <button class="discounte">50%</button>                  
//             </div>

//             <div class="addToBasket">
//                 <div class="total">
//                     <button class="stock-in"><span>-</span></button>
//                     <h5>0</h5>
//                     <button class="stock-up"><span>+</span></button>
//                 </div>

//                 <div class="basket">
//                   <img src="assets/img/icon-cart.svg">
//                   <h5>Add to cart</h5>
//                 </div>
//             </div>
//         </div>


//      </div>
//         `

// }