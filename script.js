let parentElement = document.querySelector(".buttons");
let calcScreen = document.querySelector(".screen");
let numbers = [];
let calcNumbers;

const Calculate = function () {
  parentElement.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest(".calcBtn");
    if (!target) return;

    if (target.textContent === "C") {
      numbers = [];
      calcScreen.textContent = "0";
    } else if (target.textContent === "=") {
      calcScreen.textContent = eval(calcNumbers);
    } else {
      numbers.push(target.textContent);
      calcNumbers = numbers.join("");

      calcScreen.textContent = calcNumbers;
    }
  });
};

Calculate();
