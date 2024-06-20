"use strict";

const cardOwner = document.querySelector(".jane");
const cardHolder = document.querySelector("#name");
const noCard = document.querySelector("#number");
const number1 = document.querySelector(".cardno");
const holderCvv = document.querySelector(".cv");
const inputCvv = document.querySelector("#cvv");
const submitForm = document.querySelector(".continue");
const finish = document.querySelector(".finish");

cardHolder.oninput = cardname;
function cardname() {
  cardOwner.textContent = cardHolder.value;
}

inputCvv.oninput = cardcvv;
function cardcvv() {
  holderCvv.textContent = inputCvv.value;
}

noCard.oninput = cardnumber;
function cardnumber() {
  number1.textContent = noCard.value;
}

submitForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (cardHolder.value.length < 1 || cardHolder.value === " ") {
    cardHolder.style.borderColor = "red";
  } else {
    cardHolder.style.borderColor = "2px solid green";
  }
  if (noCard.value.length < 16) {
    noCard.style.borderColor = "red";
    document.querySelector(".error").style.display = "block";
  } else {
    noCard.style.borderColor = "2px solid green";
  }
  if (inputCvv.value.length < 3) {
    inputCvv.style.borderColor = "red";
    document.querySelector(".error2").style.display = "block";
  } else {
    noCard.style.borderColor = "2px solid green";
  }
  if (
    cardHolder.value.length > 1 &&
    noCard.value.length >= 16 &&
    inputCvv.value.length === 3
  ) {
    document.querySelector(".thankyou").style.display = "block";
    document.querySelector("form").style.display = "none";
  }
});

noCard.addEventListener("keyup", function (e) {
  if (e.keycode !== 8) {
    if (
      this.value.length === 4 ||
      this.value.length === 9 ||
      this.value.length === 14
    ) {
      this.value += " ";
    }
  }
});
finish.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
  console.log("working");
});
