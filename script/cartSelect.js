const checkAll_box = document.getElementById('checkbox-selectAll');
const checkbox = document.getElementsByClassName('checkbox-select');
const money = document.getElementsByClassName('cart-room-money-text');
const MoneyShow = document.getElementById('footer-all-money-text');
let checkNum = 0;
let MoneyNum = parseInt(MoneyShow.innerText);
checkAll_box.addEventListener('click', function (e) {
    if (checkAll_box.checked === true) {
        for (let i = 0 ; i < checkbox.length; i++) {
            checkbox[i].checked = true;
            checkNum = checkbox.length;

            MoneyNum = MoneyNum + parseInt(money[i].innerHTML)
        }
    }
    else {
        for (let i = 0 ; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            checkNum = 0;

            MoneyNum = MoneyNum - parseInt(money[i].innerHTML)
        }
    }
    MoneyShow.innerHTML = MoneyNum

});

function checkbox_click(event){
    let test = event.target.parentElement.children[0];
    // console.log(test);
    let moneyWrap = event.target.parentElement.nextElementSibling.children[0];
    while(!moneyWrap.classList.contains("cart-room-money")){
        moneyWrap = moneyWrap.nextElementSibling
    }
    moneyWrap = moneyWrap.children[1].children[0].innerHTML;
    // console.log(moneyWrap.innerHTML)
    if(test.checked == true){
        checkNum = checkNum + 1;
        MoneyNum = MoneyNum + parseInt(moneyWrap)
        // console.log(checkNum);
    }else{
        checkNum = checkNum - 1;
        MoneyNum = MoneyNum - parseInt(moneyWrap)
        // MoneyNum = MoneyNum - money[i]
        // console.log(checkNum);
    }
    if(checkNum === checkbox.length){
        checkAll_box.checked = true
    }else{
        checkAll_box.checked = false
    }
    MoneyShow.innerHTML = MoneyNum

    // console.log(MoneyNum)
}
for(let i = 0 ; i < checkbox.length; i++){
    checkbox[i].addEventListener('click', checkbox_click);

}