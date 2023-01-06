function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  if (num2 == 0) {
    return "UNDEFINED";
  }
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function operator(num1, operator, num2) {
  switch (operator) {
    case "add":
      return add(num1, num2);
      break;
    case "sub":
      return sub(num1, num2);
      break;
    case "div":
      return div(num1, num2);
      break;
    case "mul":
      return multiply(num1, num2);
      break;
  }
}

function logText(e) {
  const classes = this.classList.value.split(" ");
  if (classes[1] === "equal") {
    input.textContent = "";
    //Calculate what is on div
  } else {
    if (classes[2] === "number") {
      switch (classes[1]) {
        case "one":
          calculate.push(1);
          input.textContent += "1";
        case "two":
          calculate.push(1);
          input.textContent += "1";
        case "three":
          calculate.push(1);
          input.textContent += "1";
        case "four":
          calculate.push(1);
          input.textContent += "1";
      }
    }
    //  switch (classes[1]){
    //    case 'one':
    //       calculate.push(1);
    //}
    //input.textContent += `${classes[1]} `;
  }
  console.log(calculate);
}

let calculate = [];
//console.log(operator(1, "add", 2));
const buttons = document.querySelectorAll(".button");
const input = document.querySelector("#input");

buttons.forEach((button) => button.addEventListener("click", logText));
