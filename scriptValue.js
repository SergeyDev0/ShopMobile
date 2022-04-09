let price = document.querySelector('.price-quality');
let price512 = 120;
let price256 = 70;
let price128 = 30;
let btnPrice128 = document.querySelector('.price-button128');
let btnPrice256 = document.querySelector('.price-button256');
let btnPrice512 = document.querySelector('.price-button512');
let btnAdd = document.querySelector('.btn-addBasket');
let colorNew;
// Берём основную цену
if(window.location.pathname == '/Apple%20iPhone%2013%20Pro%20Max%205G%20Dual%20eSIM%201TB%206GB%20RAM%20Silver,%20The%20best%20price%20in%20EU.html'){
let startPrice = price.textContent = 799;
let startPriceNum = Number(startPrice);
let nameObject = document.querySelector('.product-name').textContent;
localStorage.setItem('name', nameObject);

// Меняем цену при клике
btnPrice128.addEventListener('click', function(){
    price.textContent = startPriceNum + price128;
    let priceLast = startPriceNum + price128;
    memory = '128GB';
    return [localStorage.setItem('memory', memory), localStorage.setItem('LastPrice', priceLast)];
});
btnPrice256.addEventListener('click', function(){
    price.textContent = startPriceNum + price256;
    let priceLast = startPriceNum + price256;
    memory = '256GB';
    return [localStorage.setItem('memory', memory), localStorage.setItem('LastPrice', priceLast)];
});
btnPrice512.addEventListener('click', function(){
    price.textContent = startPriceNum + price512;
    let priceLast = startPriceNum + price512;
    memory = '512GB';
    return [localStorage.setItem('memory', memory), localStorage.setItem('LastPrice', priceLast)];
});
// Цвет
let green = document.querySelector('.color-green');
let pink = document.querySelector('.color-pink');
let blue = document.querySelector('.color-blue');
let midnight = document.querySelector('.color-midnight');
let starlight = document.querySelector('.color-starlight');
let red = document.querySelector('.color-red');
let color;

green.addEventListener('click', function(){
    color = 'Green';
    return localStorage.setItem('color', color);
});

pink.addEventListener('click', function(){
    color = 'Pink';
    return localStorage.setItem('color', color);
});

blue.addEventListener('click', function(){
    color = 'Blue';
    return localStorage.setItem('color', color);
});

midnight.addEventListener('click', function(){
    color = 'Midnight';
    return localStorage.setItem('color', color);
});

starlight.addEventListener('click', function(){
    color = 'Starlight';
    return localStorage.setItem('color', color);
});

red.addEventListener('click', function(){
    color = 'Red';
    return localStorage.setItem('color', color);
});
btnAdd.addEventListener('click', function(){
    return localStorage.setItem('price', price)
})
};
if(window.location.pathname == '/bigPhone.html'){
// Имя продукта
let nameObj = localStorage.getItem('name');
let color = localStorage.getItem('color');
let memory = localStorage.getItem('memory');
let priceBasket = document.querySelector('.price-quality-basket');
let LastPrice = localStorage.getItem('LastPrice');
priceBasket.textContent = LastPrice;
document.querySelector('.basket__product-name').textContent = nameObj + ' ' + memory + ' ' + color;
}
