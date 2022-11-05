import { dateFormat, countDays } from "./countDays.js";
import { numberWithCommas, removeCommas } from "../script/numbeWithComma.js";
import { dateSwap } from "./dateHandle.js";
const checkin_date = document.getElementsByClassName("checkin_date");
const checkout_date = document.getElementsByClassName("checkout_date");
const total_days = document.getElementsByClassName("total_days");

dateSwap();
// console.log(checkin_date)    

function getDays(){
    for (let i = 0; i < total_days.length; i++) {
        total_days[i].innerHTML =
            countDays(checkin_date[i].value,
                checkout_date[i].value);
    }
}
getDays();




const moneys_1_day = document.querySelectorAll('.money-1-day');
const room_total_money = document.querySelectorAll('.room-total-money-text');

const room_contents = document.getElementsByClassName("room-content");
const total_rooms = document.getElementById('total_rooms');
const submit_book = document.getElementById('submit_book');
total_rooms.innerHTML = room_contents.length;

if (room_contents.length === 0) {
    submit_book.setAttribute("disabled", "disabled");
    submit_book.style.opacity = "0.5";
    // submit_book.style.hove
}

const total_money_text = document.getElementById("total_money");
let total_money = 0;
function total_moneyCal(){
    for (let i = 0; i < room_total_money.length; i++) {
        room_total_money[i].innerHTML = parseInt(moneys_1_day[i].innerHTML) * parseInt(total_days[i].innerHTML);
        total_money += parseInt(room_total_money[i].innerHTML);
    }
    return total_money;
}
total_moneyCal();
total_money_text.innerHTML = numberWithCommas(total_money);

function room_total_moneyCal(){
    for (let i = 0; i < moneys_1_day.length; i++) {
        room_total_money[i].innerHTML = numberWithCommas(room_total_money[i].innerHTML);
        moneys_1_day[i].innerHTML = numberWithCommas(moneys_1_day[i].innerHTML);
    }
}
room_total_moneyCal()

export {total_moneyCal}

