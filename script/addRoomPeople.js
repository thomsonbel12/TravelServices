const nguoiLonMinus = document.getElementsByClassName("minusAdult");
const nguoiLonAdd = document.getElementsByClassName("addAdult");
const nguoilonValue = document.getElementsByClassName('adults');

const treEmMinus = document.getElementsByClassName("minusChild");
const treEmAdd = document.getElementsByClassName("addChild");
const treEmValue = document.getElementsByClassName('children');

let adultValue;
let childValue;

function addAdult(e) {
    let textPeopleWrap = e.target;
    while (!textPeopleWrap.classList.contains("input-add-room-people")) {
        textPeopleWrap = textPeopleWrap.parentElement;
    }
    while (!textPeopleWrap.classList.contains("input-people-room-text")) {
        textPeopleWrap = textPeopleWrap.previousElementSibling;
    }
    textPeopleWrap = textPeopleWrap.children[1].children[0];
    let adultdNum = textPeopleWrap.children[0];

    adultValue = adultdNum.innerHTML

    adultdNum.innerHTML = adultValue;


    let btnWrap = e.target;
    while (!btnWrap.classList.contains("input-add-btn")) {
        btnWrap = btnWrap.parentElement;
    }
    btnWrap.children[1].innerHTML = parseInt(btnWrap.children[1].innerHTML) + 1;
    adultValue = btnWrap.children[1].innerHTML;

    adultdNum.innerHTML = adultValue;

}
function minusAdult(e) {
    let btnWrap = e.target;
    while (!btnWrap.classList.contains("input-add-btn")) {
        btnWrap = btnWrap.parentElement;
    }

    adultValue = btnWrap.children[1].innerHTML;
    if (adultValue <= 1) {
        adultValue = 1;
    }
    else {
        btnWrap.children[1].innerHTML = parseInt(btnWrap.children[1].innerHTML) - 1;
        adultValue = btnWrap.children[1].innerHTML;
    }

    let textPeopleWrap = e.target;
    while (!textPeopleWrap.classList.contains("input-add-room-people")) {
        textPeopleWrap = textPeopleWrap.parentElement;
    }
    while (!textPeopleWrap.classList.contains("input-people-room-text")) {
        textPeopleWrap = textPeopleWrap.previousElementSibling;
    }
    textPeopleWrap = textPeopleWrap.children[1].children[0];
    let adultdNum = textPeopleWrap.children[0];
    adultdNum.innerHTML = adultValue;
}


function addChild(e) {
    let btnWrap = e.target;
    while (!btnWrap.classList.contains("input-add-btn")) {
        btnWrap = btnWrap.parentElement;
    }
    childValue = btnWrap.children[1].innerHTML;
    btnWrap.children[1].innerHTML = parseInt(btnWrap.children[1].innerHTML) + 1;
    childValue = btnWrap.children[1].innerHTML;

    let textPeopleWrap = e.target;
    while (!textPeopleWrap.classList.contains("input-add-room-people")) {
        textPeopleWrap = textPeopleWrap.parentElement;
    }
    while (!textPeopleWrap.classList.contains("input-people-room-text")) {
        textPeopleWrap = textPeopleWrap.previousElementSibling;
    }
    textPeopleWrap = textPeopleWrap.children[1].children[0];
    let childNum = textPeopleWrap.children[1];
    childNum.innerHTML = childValue;
}
function minusChild(e) {
    let btnWrap = e.target;
    while (!btnWrap.classList.contains("input-add-btn")) {
        btnWrap = btnWrap.parentElement;
    }

    childValue = btnWrap.children[1].innerHTML;
    if (childValue <= 0) {
        childValue = 0;
    }
    else {
        btnWrap.children[1].innerHTML = parseInt(btnWrap.children[1].innerHTML) - 1;
        childValue = btnWrap.children[1].innerHTML;
    }


    let textPeopleWrap = e.target;
    while (!textPeopleWrap.classList.contains("input-add-room-people")) {
        textPeopleWrap = textPeopleWrap.parentElement;
    }
    while (!textPeopleWrap.classList.contains("input-people-room-text")) {
        textPeopleWrap = textPeopleWrap.previousElementSibling;
    }
    textPeopleWrap = textPeopleWrap.children[1].children[0];
    let childNum = textPeopleWrap.children[1];
    childNum.innerHTML = childValue;

}

// tăng giảm Người lớn
for (let i = 0; i < nguoiLonAdd.length; i++) {
    nguoiLonAdd[i].addEventListener('click', addAdult);
    nguoiLonMinus[i].addEventListener('click', minusAdult);
}
// Tăng giảm trẻ em
for (let i = 0; i < treEmAdd.length; i++) {
    treEmAdd[i].addEventListener('click', addChild);
    treEmMinus[i].addEventListener('click', minusChild);
}



