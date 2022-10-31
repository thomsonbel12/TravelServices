import {numberWithCommas, removeCommas} from "../script/numbeWithComma.js"



const checkAll_box = document.getElementById('checkbox-selectAll');
const checkAll_box1 = document.getElementById('checkbox-selectAll1');

const checkbox = document.getElementsByClassName('checkbox-select');
const money = document.getElementsByClassName('cart-room-money-text');
const MoneyShow = document.getElementById('footer-all-money-text');
let checkNum = 0;
let MoneyNum = parseInt(MoneyShow.innerText);

const right_content_footer = document.getElementById("right-content-footer");
const no_cart_list = document.getElementById("no-cart-list")


const submit_cart_checkout = document.getElementById("submit-cart-checkout")
const cart_selected_num = document.getElementById("cart-selected-num")


if(checkbox.length > 0){
    right_content_footer.style.display = "flex"

    no_cart_list.style.display = "none"
}else{
    right_content_footer.style.display = "none"

    no_cart_list.style.display = "flex"
}


// submit_cart_checkout.removeAttribute("disabled")
submit_cart_checkout.setAttribute("disabled", 'disabled')
submit_cart_checkout.style.opacity = "0.5"

cart_selected_num.innerHTML = checkNum



for(let i = 0; i< money.length;i++){
    money[i].innerHTML = numberWithCommas(money[i].innerHTML)
}


checkAll_box.addEventListener('click', function (e) {
    if (checkAll_box.checked === true) {
        for (let i = 0 ; i < checkbox.length; i++) {
            if(checkbox[i].checked === false){
                checkbox[i].checked = true;
                checkNum = checkbox.length;
                
                MoneyNum = MoneyNum + parseInt(removeCommas(money[i].innerHTML))
            }    
        }
        submit_cart_checkout.removeAttribute("disabled")
        submit_cart_checkout.style.opacity = "1"
        checkAll_box1.checked = true

    }
    else {
        for (let i = 0 ; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            checkNum = 0;

            MoneyNum = MoneyNum - parseInt(removeCommas(money[i].innerHTML))
        }
        submit_cart_checkout.setAttribute("disabled", "disabled")
        submit_cart_checkout.style.opacity = "0.5"
        checkAll_box1.checked = false
    }
    MoneyShow.innerHTML = numberWithCommas(MoneyNum);

    cart_selected_num.innerHTML = checkNum

});

checkAll_box1.addEventListener('click', function (e) {
    if (checkAll_box1.checked === true) {
        for (let i = 0 ; i < checkbox.length; i++) {
            if(checkbox[i].checked === false){
                checkbox[i].checked = true;
                checkNum = checkbox.length;
                
                MoneyNum = MoneyNum + parseInt(removeCommas(money[i].innerHTML))
            }    
        }
        submit_cart_checkout.removeAttribute("disabled")
        submit_cart_checkout.style.opacity = "1"
        checkAll_box.checked = true
    }
    else {
        for (let i = 0 ; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            checkNum = 0;

            MoneyNum = MoneyNum - parseInt(removeCommas(money[i].innerHTML))
        }
        submit_cart_checkout.setAttribute("disabled", "disabled")
        submit_cart_checkout.style.opacity = "0.5"
        checkAll_box.checked = false

    }
    MoneyShow.innerHTML = numberWithCommas(MoneyNum);
    cart_selected_num.innerHTML = checkNum

});

function checkbox_click(event){
    let test = event.target.parentElement.children[0];
    let moneyWrap = event.target.parentElement.nextElementSibling.children[0];
    while(!moneyWrap.classList.contains("cart-room-money")){
        moneyWrap = moneyWrap.nextElementSibling
    }
    moneyWrap = moneyWrap.children[1].children[0].innerHTML;

    if(test.checked == true){
        checkNum = checkNum + 1;
        MoneyNum = MoneyNum + parseInt(removeCommas(moneyWrap))

        cart_selected_num.innerHTML = checkNum
        submit_cart_checkout.style.opacity = "1"
        submit_cart_checkout.removeAttribute("disabled")
        // submit_cart_checkout.setAttribute("disabled", 'disabled')

    }else{
        checkNum = checkNum - 1;

        MoneyNum = MoneyNum - parseInt(removeCommas(moneyWrap))

        cart_selected_num.innerHTML = checkNum

        if(checkNum === 0){
            submit_cart_checkout.style.opacity = "0.5"
            submit_cart_checkout.setAttribute("disabled", "disabled")
        }
    }
    if(checkNum === checkbox.length){
        checkAll_box.checked = true
        checkAll_box1.checked = true
        submit_cart_checkout.style.opacity = "1"
        submit_cart_checkout.removeAttribute("disabled")
        // submit_cart_checkout.setAttribute("disabled", 'disabled')
    }else{
        checkAll_box.checked = false
        checkAll_box1.checked = false
        // submit_cart_checkout.style.opacity = "0.5"
    }
    MoneyShow.innerHTML = MoneyNum

    MoneyShow.innerHTML = numberWithCommas(MoneyNum);


}
for(let i = 0 ; i < checkbox.length; i++){
    checkbox[i].addEventListener('click', checkbox_click);

}