import { numberWithCommas, removeCommas } from "../script/numbeWithComma.js";
import { countDays, dateFormat } from "./countDays.js";


const checkAll_box = document.getElementById('checkbox-selectAll');
const checkAll_box1 = document.getElementById('checkbox-selectAll1');

const checkbox = document.getElementsByClassName('checkbox-select');


const right_content_footer = document.getElementById("right-content-footer");
const no_cart_list = document.getElementById("no-cart-list");


const submit_cart_checkout = document.getElementById("submit-cart-checkout");
const cart_selected_num = document.getElementById("cart-selected-num");


if (checkbox.length > 0) {
    right_content_footer.style.display = "flex";

    no_cart_list.style.display = "none";
} else {
    right_content_footer.style.display = "none";

    no_cart_list.style.display = "flex";
}

import { dateSwap } from "./dateHandle.js";

const checkin_date = document.getElementsByClassName("checkin_date");
const checkout_date = document.getElementsByClassName("checkout_date");
const total_days = document.getElementsByClassName("total_days");


dateSwap();

function getDays() {
    for (let i = 0; i < total_days.length; i++) {
        total_days[i].innerHTML =
            countDays(checkin_date[i].value,
                checkout_date[i].value);
    }
}
getDays();


submit_cart_checkout.setAttribute("disabled", 'disabled');
submit_cart_checkout.style.opacity = "0.5";

const moneys_1_day = document.getElementsByClassName('money-1-day');
const room_total_money = document.querySelectorAll('.room-total-money-text');

const MoneyShow = document.getElementById('footer-all-money-text');

let checkNum = 0;
let MoneyNum = parseInt(MoneyShow.innerText);


function room_total_moneyCal() {
    for (let i = 0; i < moneys_1_day.length; i++) {
        room_total_money[i].innerHTML = numberWithCommas(parseInt(removeCommas(moneys_1_day[i].innerHTML)) * parseInt(total_days[i].innerHTML));
        moneys_1_day[i].innerHTML = numberWithCommas(moneys_1_day[i].innerHTML);
    }
}
room_total_moneyCal();


function selectAll_totalMoney() {
    let money = 0;
    for (let i = 0; i < room_total_money.length; i++) {
        money = money + (parseInt(removeCommas(moneys_1_day[i].innerHTML)) * parseInt(total_days[i].innerHTML));
    }
    MoneyShow.innerHTML = numberWithCommas(money);
    return money;
}


function checkAll() {

    if (checkAll_box.checked === true) {
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === false) {
                checkbox[i].checked = true;
                checkNum = checkbox.length;
            }
        }
        MoneyNum = selectAll_totalMoney();
        submit_cart_checkout.removeAttribute("disabled");
        submit_cart_checkout.style.opacity = "1";
        checkAll_box1.checked = true;

    }
    else {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            checkNum = 0;

        }
        MoneyNum = 0;
        submit_cart_checkout.setAttribute("disabled", "disabled");
        submit_cart_checkout.style.opacity = "0.5";
        checkAll_box1.checked = false;
    }
    MoneyShow.innerHTML = numberWithCommas(MoneyNum);

    cart_selected_num.innerHTML = checkNum;
}

function checkAll1() {
    if (checkAll_box1.checked === true) {
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === false) {
                checkbox[i].checked = true;
                checkNum = checkbox.length;
            }
        }
        MoneyNum = selectAll_totalMoney();
        submit_cart_checkout.removeAttribute("disabled");
        submit_cart_checkout.style.opacity = "1";
        checkAll_box.checked = true;

    }
    else {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            checkNum = 0;

        }
        MoneyNum = 0;
        submit_cart_checkout.setAttribute("disabled", "disabled");
        submit_cart_checkout.style.opacity = "0.5";
        checkAll_box.checked = false;
    }
    MoneyShow.innerHTML = numberWithCommas(MoneyNum);

    cart_selected_num.innerHTML = checkNum;
}


checkAll_box.addEventListener('click', checkAll);

checkAll_box1.addEventListener('click', checkAll1);

cart_selected_num.innerHTML = checkNum;

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', function (e) {
        if (checkbox[i].checked === true) {
            checkNum = checkNum + 1;

            cart_selected_num.innerHTML = checkNum;

            MoneyNum = MoneyNum + (parseInt(removeCommas(moneys_1_day[i].innerHTML)) * parseInt(total_days[i].innerHTML));
            MoneyShow.innerHTML = numberWithCommas(MoneyNum);

            submit_cart_checkout.removeAttribute("disabled");
            submit_cart_checkout.style.opacity = "1";
        } else {
            checkNum = checkNum - 1;

            cart_selected_num.innerHTML = checkNum;

            MoneyNum = MoneyNum - (parseInt(removeCommas(moneys_1_day[i].innerHTML)) * parseInt(total_days[i].innerHTML));
            MoneyShow.innerHTML = numberWithCommas(MoneyNum);


            if (checkNum === 0) {
                submit_cart_checkout.style.opacity = "0.5";
                submit_cart_checkout.setAttribute("disabled", "disabled");
            }
        }
        if (checkNum === checkbox.length) {
            checkAll_box.checked = true;
            checkAll_box1.checked = true;

            MoneyNum = selectAll_totalMoney();

            submit_cart_checkout.style.opacity = "1";
            submit_cart_checkout.removeAttribute("disabled");
        } else {
            checkAll_box.checked = false;
            checkAll_box1.checked = false;
        }
    });
}
function final_Func() {
    getDays();
    room_total_moneyCal();
    if (checkAll_box.checked === true) {
        MoneyNum = selectAll_totalMoney();
    } else {
        MoneyNum = 0;
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === true) {
                MoneyNum = MoneyNum + (parseInt(removeCommas(moneys_1_day[i].innerHTML)) * parseInt(total_days[i].innerHTML));
            }
        }
        MoneyShow.innerHTML = numberWithCommas(MoneyNum);
    }
}
for (let i = 0; i < checkin_date.length; i++) {
    checkin_date[i].addEventListener('change', function (e) {
        final_Func();
    });

    checkout_date[i].addEventListener('change', function (e) {
        final_Func();
    });
}




// function checkbox_click(event) {
//     let test = event.target.parentElement.children[0];
//     let moneyWrap = event.target.parentElement.nextElementSibling.children[0];
//     while (!moneyWrap.classList.contains("cart-room-money")) {
//         moneyWrap = moneyWrap.nextElementSibling;
//     }
//     moneyWrap = moneyWrap.children[1].children[0].innerHTML;

//     if (test.checked == true) {
//         checkNum = checkNum + 1;
//         MoneyNum = MoneyNum + parseInt(removeCommas(moneyWrap));

//         cart_selected_num.innerHTML = checkNum;
//         submit_cart_checkout.style.opacity = "1";
//         submit_cart_checkout.removeAttribute("disabled");
//         // submit_cart_checkout.setAttribute("disabled", 'disabled')

//     } else {
//         checkNum = checkNum - 1;

//         MoneyNum = MoneyNum - parseInt(removeCommas(moneyWrap));

//         cart_selected_num.innerHTML = checkNum;

//         if (checkNum === 0) {
//             submit_cart_checkout.style.opacity = "0.5";
//             submit_cart_checkout.setAttribute("disabled", "disabled");
//         }
//     }
//     if (checkNum === checkbox.length) {
//         checkAll_box.checked = true;
//         checkAll_box1.checked = true;
//         submit_cart_checkout.style.opacity = "1";
//         submit_cart_checkout.removeAttribute("disabled");
//         // submit_cart_checkout.setAttribute("disabled", 'disabled')
//     } else {
//         checkAll_box.checked = false;
//         checkAll_box1.checked = false;
//         // submit_cart_checkout.style.opacity = "0.5"
//     }
//     MoneyShow.innerHTML = MoneyNum;

//     MoneyShow.innerHTML = numberWithCommas(MoneyNum);


// }



window.addEventListener('load', function () {
    checkAll_box.checked = false;
    checkAll_box1.checked = false;
    checkNum = 0;
    MoneyNum = 0;
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
});

