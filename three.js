'use strict'
 
const button = document.querySelector("button");
button.addEventListener("click", toggleDisplay);
 
function toggleDisplay() {
  const demo = document.querySelector("#moya");
  demo.classList.toggle("hidden");
}

document.getElementById("animate-button").addEventListener("click", function() {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value;
  let emoji = '';

  if (inputValue === 'サンタクロース') {
      emoji = '🎅';
  } else if (inputValue === 'クリスマスツリー') {
      emoji = '🎄';
  } else if (inputValue === 'トナカイ') {
      emoji = '🦌';
  }

  if (emoji) {
      const container = document.getElementById("animation-container");
      
      const intervalId = setInterval(() => {
          const element = document.createElement("div");
          element.className = 'emoji';
          element.textContent = emoji;
          element.style.left = Math.random() * 100 + "vw";
          container.appendChild(element);

          setTimeout(() => {
              container.removeChild(element);
          }, 3000);
      }, 300); 

      setTimeout(() => {
          clearInterval(intervalId);
      }, 10000);
  }
});
