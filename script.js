let parentElement = document.querySelector(".buttons");
let calcScreen = document.querySelector(".screen");
let result;
let calcNumbers;
let numbers = [];

const Calculate = function () {
  parentElement.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest(".calcBtn");
    if (!target) return;

    if (target.textContent === "=") {
      calcScreen.textContent = eval(calcNumbers);
      numbers = [];
      numbers.push(calcScreen.textContent);
    } else if (target.textContent === "C") {
      numbers = [];
      calcScreen.textContent = "0";
    } else {
      numbers.push(target.textContent);
      calcNumbers = numbers.join("");
      calcScreen.textContent = calcNumbers;
    }
  });
};

Calculate();
