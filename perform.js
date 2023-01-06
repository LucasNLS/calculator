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
    case "divid":
      return div(num1, num2);
      break;
    case "mul":
      return multiply(num1, num2);
      break;
  }
}

function logText(e) {
  const classes = this.classList.value.split(" ");
  if (classes[1] === "clear") {
    input.textContent = "";
    resultdiv.textContent = "0";
    while (calculate.length > 0) {
      calculate.pop();
    }
    first = undefined;
    oper = undefined;
    second = undefined;
  } else if (classes[2] === "number") {
    switch (classes[1]) {
      case "one":
        calculate.push(1);
        input.textContent += "1";
        break;
      case "two":
        calculate.push(2);
        input.textContent += "2";
        break;
      case "three":
        calculate.push(3);
        input.textContent += "3";
        break;
      case "four":
        calculate.push(4);
        input.textContent += "4";
        break;
      case "five":
        calculate.push(5);
        input.textContent += "5";
        break;
      case "six":
        calculate.push(6);
        input.textContent += "6";
        break;
      case "seven":
        calculate.push(7);
        input.textContent += "7";
        break;
      case "eight":
        calculate.push(8);
        input.textContent += "8";
        break;
      case "nine":
        calculate.push(9);
        input.textContent += "9";
        break;
      case "zero":
        if (calculate[0] != undefined) {
          calculate.push(0);
          input.textContent += "0";
        }
        break;
    }
  } else if (classes[2] === "op") {
    if (first == undefined) {
      first = convertToNum(calculate);
      console.log(first);
      while (calculate.length > 0) {
        calculate.pop();
      }
      oper = classes[1];
      console.log(oper);
    }
  } else if (classes[1] === "equal") {
    console.log("here");
    if (second == undefined && oper != undefined) {
      console.log("goes through here");
      result = operator(first, oper, first);
      console.log(result);
      resultdiv.textContent = "" + result;
    } else {
    }
  }
  //  switch (classes[1]){
  //    case 'one':
  //       calculate.push(1);
  //}
  //input.textContent += `${classes[1]} `;
}

function convertToNum(numList) {
  const numrev = numList.reverse();
  let number = 0;
  for (let i = 0; i < numrev.length; i++) {
    number += numrev[i] * Math.pow(10, i);
  }
  return number;
}

let calculate = [];
//console.log(operator(1, "add", 2));
const buttons = document.querySelectorAll(".button");
const input = document.querySelector("#input");
const resultdiv = document.querySelector("#result");
let first = undefined;
let second = undefined;
let oper = undefined;
let result = 0;

buttons.forEach((button) => button.addEventListener("click", logText));
