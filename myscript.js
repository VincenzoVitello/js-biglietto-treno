let miles = prompt ('quanti km percorrerai?');
let age = prompt ('quanti anni hai?');

if(age < 18){
    scount = 20;
}else if(age >= 65){
    scount = 45;
}else{
    scount = 0;
}

let price = 0.21 * miles;
let discount = (price / 100) * scount;
let discountedPrice = (price - discount);

document.getElementById('ticket_price').innerHTML = discountedPrice.toFixed(2)+ '€';