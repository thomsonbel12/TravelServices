import { numberWithCommas, removeCommas } from "../script/numbeWithComma.js";
const cart_item_money = document.getElementsByClassName("cart-item-money");
const total_cart_room = document.getElementsByClassName("total_cart_room")

for(let i = 0; i < total_cart_room.length ;i++){
    total_cart_room[i].innerHTML = cart_item_money.length
}

for(let i = 0 ;i < cart_item_money.length ;i++){
    cart_item_money[i].innerHTML = numberWithCommas(cart_item_money[i].innerHTML)
}