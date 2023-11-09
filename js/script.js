var allProducts = document.querySelectorAll(".product .product-info button ");
var showprice = document.querySelector("#showprice");
var yourproduct = document.querySelector(".your-product ");
var prices = document.querySelector("#total-price span")
var totalPrice= 0 
allProducts.forEach(button => {
  button.addEventListener('click', function(event) {
    var counter = document.getElementById('myCounter');
    counter.innerHTML = +(counter.innerHTML) + 1;
  });
});
allProducts.forEach( function (item){
    item.onclick =function(){
        totalPrice +=  +(item.getAttribute("price"))
        yourproduct.innerHTML +='<div class="copy"><div class="product-info"> <img src="./images/'+item.title+'.jpg" alt="dw"> <span class=info>'+item.name+' </span></div><div class="poduct-price">'+ item.value+' </div></div>'
        if (yourproduct.innerHTML !=""){
            showprice.style.display = "block"
        }
    }
})
showprice.onclick = function (){
    prices.innerHTML=totalPrice+" "+"$"
}