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

function displayNumber() {
  console.log("displayNumber");
  document.querySelector("#showNumber").textContent = number;
  let message = `The number is ${number}`;
  console.log(message);
  document.querySelector("#message").textContent = message;
}
