var billTotal = document.getElementById("billTotal");
var customTip = document.getElementById("customTip");
var numOfPeople = document.getElementById("numOfPeople");
var tip_amount = document.querySelector(".tip_amount");
var total_amount = document.querySelector(".total_amount");

var bill = billTotal.value;
var tip = customTip.value;
var people = numOfPeople.value;
var tip_;

function getTipButton(el) {
    customTip.value = "";
    let tips = el.textContent;
    tips = tips.replace("%", "")
    tip_ = tips;
    console.log(tip_.replace("%", ""));
}

function getInputValue(el) {
    let value = el.value;
    console.log(value);
    if (el.classList.contains("error")) {
        return;
    }
    else {
        calculate();
    }
}

function reset() {
    billTotal.value = "";
    customTip.value = "";
    numOfPeople.value = "";
}

function submit() {
    calculate();
}

$(document).ready(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        alert("enter was pressed");
    }
});

$(document).ready(function () {
    $('.body input[type="text"]').blur(function () {
        if ($(this).val() == "0") {
            console.log("cant be 0")
        }
        else if ($(this).val()) {
            $(this).removeClass("error");
        }
    });
});

function calculate() {
    var bill = billTotal.value;
    var tip;
    if (customTip.value == "") {
        tip = tip_;
        console.log(tip);
    }
    else {
        tip = customTip.value;
    }
    var people = numOfPeople.value;
    var totalTip = (bill * tip / 100) / people;
    var total = (bill / people) + totalTip;
    total_amount.textContent = "$" + total.toFixed(2);
    tip_amount.textContent = "$" + totalTip.toFixed(2);
    console.log(tip_amount.textContent);
    console.log(total);
}