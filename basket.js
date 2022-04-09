let openBasketMenu = document.querySelector(".basket-btn");
let basketMenu = document.querySelector(".basket-menu");
let closeBasketMenu = document.querySelector(".close-basket-menu");
let basketMenuBody = document.querySelector(".basket__body");
let basketMenuProducts = document.querySelector(".basket-menu__products");

let totalPrice = 0

let Prices = {
      
};
openBasketMenu.addEventListener("click", (e) => {
  basketMenu.style.width = "400px";
  basketMenuBody.style.display = "flex";
});

closeBasketMenu.addEventListener("click", (e) => {
  basketMenu.style.width = "0px";
  basketMenuBody.style.display = "none";
});


setTimeout(console.clear(), 1000);

let mainQttCont = 0
let mainQttContArr = []

let productsInBasket = document.querySelector(".product__counter")
let productsInBasketCount = 0

document.addEventListener("click", (e) => {
  let clickedEl = e.target;

  if (clickedEl.classList.contains("addToBasket")) {
    let productCard = clickedEl.parentNode.parentNode;
    let productImage =
      productCard.children[0].children[0].children[0].getAttribute("src");
    let productName = productCard.children[1].innerText;
    let productPrice = productCard.children[2].innerText;
    let product_quantity = 1
    
    Prices[`price_${mainQttCont}`] = productPrice

    let product = document.createElement("div");
    product.innerHTML = `<div class="product">
        <div class="product__description">
          <div class="product__image"><img src="${productImage}" alt=""></div>
          
          <div class="product__description-sub-column">
            <div class="product__description-sub">
              <p class="product__name">${productName}</p>
            <div data-basket-close-menu="close" class="product__delete">✕</div>
            </div>
            
            <hr />
            
            <div class="product__settings">
              <div class="product__quantity">
                <p class="product__quantity-text">Quantity</p>
                <div class="product__calc_quantity_wrap">
                  <button data-qtt-plus="${"_" + mainQttCont}" class="product__calc_quantity_plus">+</button>
                  <div data-qtt-count="${"_" + mainQttCont}" class="product__calc_quantity_value">${product_quantity}</div>
                  <button data-qtt-minus="${"_" + mainQttCont}" class="product__calc_quantity_minus">-</button>
                </div>
              </div>
              <div class="product_price-block">
                <div class="product__price-text">Price</div>
                <div  data-qtt-price="${"_" + mainQttCont}" class="product__price">${productPrice}</div>
              </div>
  
            </div>
          </div>
        </div>  
      </div>`;

      if (mainQttContArr.length < 1) {
        basketMenuBody.insertAdjacentHTML("beforeend", `<div class="product__buttons">
        <div class="product__total">
          <p class="product__total-text">TOTAL:</p>
          <p id="total" data-total="total" class="product__total-price"></p>
        </div>
        <button type="submit" class="product__check-out">Go to checkout</button>
      </div>`)
      totalPrice = totalPrice + Number(productPrice.slice(0, -5))
      }
    
      let getTotalPrice = document.getElementsByClassName("product__price")
      let getTotal = document.querySelector(".product__total-price")
    
      for (let index = 0; index < getTotalPrice.length; index++) {
        totalPrice = totalPrice + Number(getTotalPrice[index].textContent.slice(0, -5));
    }
    
    getTotal.textContent = totalPrice + ".00 €"
    console.log(totalPrice);

    productsInBasket.innerText = ++productsInBasketCount
    mainQttContArr.push(mainQttCont)  
    mainQttCont++

    basketMenuProducts.appendChild(product);
    
    
  } else if (clickedEl.parentNode.classList.contains("addToBasket")) {
    let productCard = clickedEl.parentNode.parentNode.parentNode;
    let productImage =
      productCard.children[0].children[0].children[0].getAttribute("src");
    let productName = productCard.children[1].innerText;
    let productPrice = productCard.children[2].innerText;
    let product_quantity = 1
    Prices[`price_${mainQttCont}`] = productPrice

    let product = document.createElement("div");
    product.innerHTML = `<div class="product">
        <div class="product__description">
          <div class="product__image"><img src="${productImage}" alt=""></div>
          
          <div class="product__description-sub-column">
            <div class="product__description-sub">
              <p class="product__name">${productName}</p>
            <div data-basket-close-menu="close" class="product__delete">✕</div>
            </div>
            
            <hr />
            
            <div class="product__settings">
              <div class="product__quantity">
                <p class="product__quantity-text">Quantity</p>
                <div class="product__calc_quantity_wrap">
                  <button data-qtt-plus="${"_" + mainQttCont}" class="product__calc_quantity_plus">+</button>
                  <div data-qtt-count="${"_" + mainQttCont}" class="product__calc_quantity_value">${product_quantity}</div>
                  <button data-qtt-minus="${"_" + mainQttCont}" class="product__calc_quantity_minus">-</button>
                </div>
              </div>
              <div class="product_price-block">
                <div class="product__price-text">Price</div>
                <div  data-qtt-price-total="${"_" + mainQttCont}" class="product__price">${productPrice}</div>
              </div>
  
            </div>
          </div>
        </div>
        
        <br>  
<hr style="height: 5px">
        <br>
      </div>`;

      if (mainQttContArr.length < 1) {
        basketMenuBody.insertAdjacentHTML("beforeend", `
        
        <div class="product__buttons">
        <div class="product__total">
          <p class="product__total-text">TOTAL:</p>
            <p id="total" name="totalPrice" data-total="total" class="product__total-price"></p>
        </div>
        <a href="./My Shopping Basket.html" ><button type="submit" class="product__check-out">Go to checkout</button></a>
        <input type="hidden" name="act" value="order">
      </div>
`)
      totalPrice = totalPrice + Number(productPrice.slice(0, -5))
      }
      
      let getTotalPrice = document.getElementsByClassName("product__price")
      let getTotal = document.querySelector(".product__total-price")      
    for (let index = 0; index < getTotalPrice.length; index++) {
        totalPrice = totalPrice + Number(getTotalPrice[index].textContent.slice(0, -5));
    }
    
    getTotal.textContent = totalPrice + ".00 €"
    console.log(totalPrice);

    productsInBasket.innerText = ++productsInBasketCount
    mainQttContArr.push(mainQttCont)
    mainQttCont++

    basketMenuProducts.appendChild(product);
   

}
});

basketMenu.addEventListener("click", (e) => {
  let clickedEl = e.target;
  
    
  if (clickedEl.hasAttribute("data-basket-close-menu")) {
    clickedEl.parentNode.parentNode.parentNode.parentNode.remove();
    productsInBasket.innerText = --productsInBasketCount
    mainQttContArr.pop()
    console.log();

    if (mainQttContArr.length == 0) {
      basketMenuBody.children[basketMenuBody.children.length - 1].remove()
    }
  }

  if(clickedEl.hasAttribute("data-qtt-plus")){
    let currInpPlus = clickedEl.getAttribute("data-qtt-plus")
    let getTotal = document.querySelector(".product__total-price")   
    let currPrice = document.querySelector(`[data-qtt-price-total=${currInpPlus}]`)
    let productPrice = Number(currPrice.innerText.slice(0, -5))
    
    let currInp = document.querySelector(`[data-qtt-count=${currInpPlus}]`)
    let productQtt = Number(currInp.textContent)
    let firstPrice = Number(Prices["price" + currInpPlus].slice(0, -1))
    
    currInp.innerHTML = ++productQtt
    currPrice.innerHTML = productPrice + firstPrice + ".00 €"
    totalPrice = totalPrice + firstPrice
    getTotal.innerHTML = totalPrice + ".00 €"
    console.log(totalPrice);
   
    

  }else if(clickedEl.hasAttribute("data-qtt-minus")){
    let currInpMinus = clickedEl.getAttribute("data-qtt-minus")
  
    let currPrice = document.querySelector(`[data-qtt-price-total=${currInpMinus}]`)
    let productPrice = Number(currPrice.textContent.slice(0, -5))
    let getTotal = document.querySelector(".product__total-price")
    let currInp = document.querySelector(`[data-qtt-count=${currInpMinus}]`)
    let productQtt = Number(currInp.textContent)
    let firstPrice = Number(Prices["price" + currInpMinus].slice(0, -1))
   

    
    if (productQtt > 1) {
        currInp.innerHTML = --productQtt
        currPrice.innerHTML = productPrice - firstPrice + ".00 €"
        totalPrice = totalPrice - firstPrice
        getTotal.innerHTML = totalPrice + ".00 €" 
        
        //total.innerHTML = productPrice - firstPrice + "€" 
    }

    
  }
});

let clear = setTimeout(console.clear, 3000);


{/* 
<button type="submit" class="product__check-out">Go to checkout</button> 
<div class="product__buttons">
<div class="product__total">
<p class="product__total-text">TOTAL:</p>
<p  data-qtt-price-total="${"_" + mainQttCont}"  class="product__total-price">${productPrice}</p>
</div>          
<button type="submit" class="product__check-out">Go to checkout</button>
        </div>*/}