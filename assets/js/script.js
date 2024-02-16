const tiklananUrunId = JSON.parse(localStorage.getItem("idgetir")) || [];
let tiklananUrun1;

async function getData(){
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const data =  await response.json();
        // console.log(data);
        return data;
    
    }
const container = document.querySelector(".container")
const value = JSON.parse(localStorage.getItem("ilksayfa")); 

async function localeKaydedildiMi(){
  if(localStorage.getItem("idgetir")){
    tiklananUrun1 = JSON.parse(localStorage.getItem("idgetir"))
  }else{
    tiklananUrun1 ={tiklananurun:0}
  }
  return tiklananUrun1
}

async function changeHTML(){
  let yeniId =  await localeKaydedildiMi()
  const response = await fetch(`https://dummyjson.com/products/${yeniId}`)
  const product =  await response.json()
     container.innerHTML += `
    <div class="header">
        <div class="header-navBar">
            <img src="assets/img/sneakers.png">
            <a href="#"></a>
            <a href="about.html">Collections</a>    
            <a href="about.html">Women</a>
            <a href="about.html">About</a>
            <a href="about.html">Contact</a>
        </div>
    
        <div class="header-sag">
              <div class="sepet" onclick="openNav()" ><img src="assets/img/Shape.png"></div>
              <div class="profil"><img src="assets/img/Oval.jpg" ></div>  
        </div>
    </div>
    
 <div class="myDiv">

    <div class="myDiv-left">

        <div class="bigFoto">
                <img src="${product.images[0]}" >
        </div>

        <div class="smallFotos">

        </div>

    </div>


    <div class="myDiv-right">
         
        <h2 class="sneaker">${product.title}</h2>
        <h3 class="fall">${product.brand}</h3>
        <h5 class="these">${product.description}</h5>

        <div class="price">
               <div class="discounted-price">
                <h3>$</h3>
                <h4>${product.price}</h4>
               </div>
               <button class="discounte">${product.discountPercentage}</button>                  
        </div>

        <div class="addToBasket">
              <div class="total">
                  <button class="stock-in"><span>-</span></button>
                  <h5>0</h5>
                  <button class="stock-up"><span>+</span></button>
              </div>

              <div class="basket">
                <h5>Add to cart</h5>
              </div>
        </div>
    </div>


   
 </div>

`







const fotos = document.querySelector(".smallFotos")
const discounte = document.querySelector(".discounte")
const stockIn = document.querySelector(".stock-in")
const stockUp = document.querySelector(".stock-up")
const basket = document.querySelector(".basket")
const bigFoto = document.querySelector(".bigFoto")
const carouselKapat = document.querySelector(".carousel-kapat")



stockIn.addEventListener("click", UrunAzalt)
stockUp.addEventListener("click", UrunArtır)
discounte.addEventListener("click",indirimUygula)
basket.addEventListener("click", sepeteEklendi)
bigFoto.addEventListener("click", caroselShow)
carouselKapat.addEventListener("click",carouselKapali)


async function fotolar(){
  let yeniId =  await localeKaydedildiMi()
  const response = await fetch(`https://dummyjson.com/products/${yeniId}`)
  const product =  await response.json()
  const imgs = product.images
  for (const img of imgs) {
        fotos.innerHTML += `
      <img src="${img}">  
    `
  }
}
fotolar();
}

const carousel = document.querySelector(".dialog-carousel")
const bigFotoCarousel = document.querySelector(".carousel-bigFoto")
const smallFotoCarousel = document.querySelector(".carousel-smallFotos")

async function myCaorusel(){
  let yeniId =  await localeKaydedildiMi()
  const response = await fetch(`https://dummyjson.com/products/${yeniId}`)
  const product =  await response.json()
  const imgs = product.images
  for (const img of imgs) {
    smallFotoCarousel.innerHTML += `
      <img src="${img}">  
    `
  }
  bigFotoCarousel.innerHTML = `
                <div class="geri">
                  <span><</span>
                </div> 
                <img src="${product.images[0]}">
                <div class="ileri">
                  <span>></span>
                </div>`


}
              
              
              
const geribtn = document.querySelector(".geri")
geribtn.addEventListener("click", birOncekiFoto)
 function birOncekiFoto(){
  console.log("gfd");
 }



const ileriBtn = document.querySelectorAll(".ileri")
ileriBtn.addEventListener("click", birSonrakiFoto)
async function birSonrakiFoto(){
  let yeniId =  await localeKaydedildiMi()
  const response = await fetch(`https://dummyjson.com/products/${yeniId}`)
  const product =  await response.json()
  const imgs = product.images
  for(let i = 0; i < imgs.length; i++){
    bigFotoCarousel.innerHTML = `    
        <div class="geri">
        <span><</span>
      </div> 
      <img src="${imgs[i]}">
      <div class="ileri">
        <span>></span>
      </div>
    `
  }

}
myCaorusel();




function carouselKapali(){
  carousel.close();
}

function caroselShow(){
  carousel.showModal();
}



const canvasOpen = document.querySelector(".canvasOpen")




function openNav(){
const canvasOpen = document.querySelector(".canvasOpen")
  canvasOpen.classList.add("openCanvas")
}

async function guncelSepet(){
  let yeniId =  await localeKaydedildiMi()
  const response = await fetch(`https://dummyjson.com/products/${yeniId}`)
  const product =  await response.json()
  const fiyat = product.price
     canvasOpen.innerHTML += `
     <h1  class="cart" >Cart</h1>
     <img src="${product.images[0]}" >
     <h2 class="canvas-model
     ">${product.brand}</h2>
     <h1 class="canvas-fiyat" >${fiyat}</h1>
     <h2 class="canvas-title">${product.title}</h2>
     
     `


}
guncelSepet();

function indirimUygula(){
    const ilkFiyat = document.querySelector("h4")
    const sonFiyat = document.querySelector(".discounted-price h3")
      ilkFiyat.classList.add("cizgi")
      const sonuc = ilkFiyat.textContent / 2;
       sonFiyat.innerHTML=`${sonuc}`
}  


const myDialog = document.querySelector("#myDialog")
const dialoguKapat = document.querySelector("#dialogKapat")
dialoguKapat.addEventListener("click", closeDialog)

function closeDialog(){
  myDialog.close();
}



function sepeteEklendi(){
  myDialog.showModal()
  console.log("dıoghdfoıgh");
}







function UrunAzalt(){
   const toplamAdet = document.querySelector(".total h5")
  if(toplamAdet.textContent > 0){
    toplamAdet.textContent= toplamAdet.textContent - 1
  }
  alinanUrunKadarFiyat()
}


function UrunArtır(){
  const toplamAdet = document.querySelector(".total h5")
  toplamAdet.textContent =parseInt(toplamAdet.textContent) + 1;  
  alinanUrunKadarFiyat()
}



async function alinanUrunKadarFiyat(){
  let yeniId =  await localeKaydedildiMi()
  const response = await fetch(`https://dummyjson.com/products/${yeniId}`)
  const product =  await response.json()
  const fiyat = product.price;
  const ilkFiyat = document.querySelector("h4")
  const toplamAdet = document.querySelector(".total h5")
    const fiyatiDegistir =  fiyat * toplamAdet.textContent;
    ilkFiyat.innerHTML =`${fiyatiDegistir}`
}





changeHTML();


