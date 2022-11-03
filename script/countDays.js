
//a simple date formatting function
function dateFormat(inputDate) {
    var newdate = inputDate.split("-").reverse().join("-");
    return newdate;
}



function countDays(checkin_date, checkout_date){
    let checkin = new Date(dateFormat(checkin_date));
    let checkout = new Date(dateFormat(checkout_date));
    // console.log(checkin)
    // console.log(checkout)
    let days = checkout.getTime() - checkin.getTime();

    return (Math.ceil(days / (1000 * 3600 * 24))) + 1;


}

export {dateFormat, countDays}
// console.log(countDays("22-10-2022", "24-10-2022"))