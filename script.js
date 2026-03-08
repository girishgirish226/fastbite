let cart=JSON.parse(localStorage.getItem("cart")) || []

function addCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}

function loadCart(){

let div=document.getElementById("cart")

if(!div) return

cart.forEach(item=>{

let p=document.createElement("p")

p.innerText=item.name+" ₹"+item.price

div.appendChild(p)

})

}

loadCart()

async function checkout(){

await fetch("/order",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

items:cart

})

})

alert("Order placed")

localStorage.clear()

}