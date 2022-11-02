import {dateFormat, countDays} from "./countDays.js"

const checkin_date = document.getElementsByClassName("checkin_date")
const checkout_date = document.getElementsByClassName("checkout_date")
const total_days = document.getElementsByClassName("total_days")



for(let i = 0 ;i < total_days.length ; i++){
    let checkin = new Date(dateFormat(checkin_date[i].innerHTML)).getTime();
    let checkout = new Date(dateFormat(checkout_date[i].innerHTML)).getTime();
    let temp

    if(checkin > checkout){
        temp = checkin_date[i].innerHTML;
        checkin_date[i].innerHTML = checkout_date[i].innerHTML
        checkout_date[i].innerHTML = temp;
    }

    total_days[i].innerHTML = 
            countDays(checkin_date[i].innerHTML, 
                      checkout_date[i].innerHTML)
}

