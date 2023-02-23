"use-strict";

let number = 0;

window.addEventListener("load", startApp);

function startApp() {
  console.log("starting app");
  document.querySelector("#btn-increment").addEventListener("click", plus);
  document.querySelector("#btn-decrement").addEventListener("click", minus);
}

function plus() {
  console.log("plussing");
  console.log(number);
  number = number + 1; //eller  number++;
  console.log(number);
  displayNumber();
  //   document.querySelector("#btn-increment").removeEventListener("click", plus);
}

function minus() {
  console.log("minussing");
  console.log(number);
  number--;
  console.log(number);
  displayNumber();
  //   document.querySelector("#btn-increment").removeEventListener("click", minus);
}
let message2 = "";

function displayNumber() {
  console.log("displayNumber");
  document.querySelector("#showNumber").textContent = number;
  let message = `The number is ${number}`;
  console.log(message);
  document.querySelector("#message").textContent = message;

  if (number > 10) {
    document.querySelector("#message").textContent = "The number is above 10";
  } else if (number == 10) {
    document.querySelector("#message").textContent = "The number is 10";
  } else {
    document.querySelector("#message").textContent = "The number is below 10";
  }

  if (number > 10) {
    message2 = "The number is above 10";
  } else if (number == 10) {
    message2 = "The number is 10";
  } else {
    message2 = "The number is below 10";
  }
  
  document.querySelector("#message2").textContent = message2;
}

let num = 4;
console.log(num);

if (num >= 5) {
  console.log("Tallet er større eller lig med 5");
}

// når man sammenligner i if sætnigner skal man bruge to = (==)

let fullName = "Hanne";

if (fullName == "Hanne") {
  console.log(" Ja det er Hanne!");
} else {
  console.log("Nej, det er ikke Hanne");
}
