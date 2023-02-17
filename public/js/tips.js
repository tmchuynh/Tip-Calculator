var billTotal = document.getElementById("billTotal");
var customTip = document.getElementById("customTip");
var numOfPeople = document.getElementById("numOfPeople");

function getInputValue(el) {
    let value = el.value;
    console.log(value);
}

function reset() {
    billTotal.value = "";
    customTip.value = "";
    numOfPeople.value = "";
}


$(document).ready(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        alert("enter was pressed");
    }
});