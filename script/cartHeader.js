import { numberWithCommas, removeCommas } from "../script/numbeWithComma.js";
const cart_item_money = document.getElementsByClassName("cart-item-money");

for(let i = 0 ;i < cart_item_money.length ;i++){
    cart_item_money[i].innerHTML = numberWithCommas(cart_item_money[i].innerHTML)
}