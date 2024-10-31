'use strict'

const button = document.querySelector("button");
button.addEventListener("click", toggleDisplay);

function toggleDisplay() {
  const demo = document.querySelector("#moya");
  demo.classList.toggle("hidden");
}
