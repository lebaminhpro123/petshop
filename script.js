const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElementry
        var productImg = product.queryselector("img").src
        var producrName = product.queryselector(".product-item-text h1").innerText
        var productPrice = product.queryselector("product-item-text p span").innerText
        //console.log(productPrice,index)
        addcart(productImg,producrName,productPrice)
    })
})
function addcart(productImg, productionName,productPrice){
    var addtr = document.createElement("tr")
    var trcontent='<tr> <td style="display: flex;align-items: center;" ><img style="width:70px" src="'+productImg+'" alt=""'>+producrName+'<td><span>'+productPrice+'</span> <sup>d</sup></td><td><input value="i" min="0" type="number" style="width:30px; outline:none; text-align: center;" ></td><td class="cart-delete" style="cursor: pointer;">Xóa</td></tr>' 
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
}

function cartotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var cartTotal = document.querySelector(".total-price")
    var priceT = document.queryselector(".cart-priceT")
    var priceT = document.querySelector(".cart-priceT")
    var total = 0
    for(var i=0; i<cartItem.length;i++){

    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector("td span").innerHTML
    totalx = tal + inputValue*productPrice
    total = Math.round(totalx);
    }
    cartTotal.innerHTML =(total * 1000).toLocaleString('de-DE')
    priceT.innerHTML=(total * 1000).toLocaleString('de-DE')
    deletecartitem()
    inputChange()
    
}

function deletecartitem(){
    var btnItem =document.querySelectorAll(".cart-delete")
    for(var i=0;i<btnItem.length;i++){
        btnItem[i].addEventListener("click",function(event){
        var deleteBtn = event.target
        var cartparent = deleteBtn.parentElement
        cartparent.remove()
        carttotal()
        })
    }
}
function inputChange(){
    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
const cartBtn = document.querySelector(" .fa-times")
const cartshow = document.querySelector(".fas fa-shopping-cart")
cartshow.addEventListener("click", function(){
    document.querySelector(".cart").style.right="0"
})
cartBtn.addEventListener("click", function(){
    document.querySelector(".cart").style.right="-100%"
})