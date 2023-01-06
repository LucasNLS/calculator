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
  return (num1 / num2).toFixed(5);
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
      return divide(num1, num2);
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
    first = true;
    sign = true;
  } else if (classes[1] === "sign") {
    if (sign == true) {
      input.textContent = "-" + input.textContent;
      sign = false;
    } else if (sign == false) {
      input.textContent = input.textContent.slice(1);
      sign = true;
    }
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
        if (
          calculate[0] != undefined ||
          (calculate[0] == undefined && oper === "divid")
        ) {
          calculate.push(0);
          input.textContent += "0";
        }
        break;
    }
  } else if (classes[2] === "op") {
    console.log("here");
    if (first == true) {
      result = convertToNum(calculate);
      clearCalculate();
      input.textContent = "";
      resultdiv.textContent = "" + result;
      first = false;
      oper = classes[1];
    } else if (afterEqual == true && classes[1] === "percent") {
      console.log("here");
      result = (result / 100).toFixed(5);
      resultdiv.textContent = "" + result;
    } else if (afterEqual == true) {
      oper = classes[1];
      afterEqual = false;
    } else {
      second = convertToNum(calculate);
      clearCalculate();
      input.textContent = "";
      result = operator(result, oper, second);
      resultdiv.textContent = "" + result;
      oper = classes[1];
    }
    switch (oper) {
      case "divid":
        input.textContent = "/ ";
        break;
      case "mul":
        input.textContent = "* ";
        break;
      case "sub":
        input.textContent = "- ";
        break;
      case "add":
        input.textContent = "+ ";
        break;
    }
  } else if (classes[1] === "equal") {
    if (calculate.length > 0 && oper != undefined) {
      second = convertToNum(calculate);
      clearCalculate();
      input.textContent = "";
      result = operator(result, oper, second);
      resultdiv.textContent = "" + result;
      afterEqual = true;
    } else if (second == undefined && calculate.length == 0) {
      input.textContent = "";
      result = operator(result, oper, result);
      resultdiv.textContent = "" + result;
      afterEqual = true;
    }
  }
}

function convertToNum(numList) {
  const numrev = numList.reverse();
  let number = 0;
  for (let i = 0; i < numrev.length; i++) {
    number += numrev[i] * Math.pow(10, i);
  }
  if (sign == false) {
    number = number * -1;
  }
  return number;
}

function clearCalculate() {
  while (calculate.length > 0) {
    calculate.pop();
  }
}

let calculate = [];
const buttons = document.querySelectorAll(".button");
const input = document.querySelector("#input");
const resultdiv = document.querySelector("#result");
let first = true;
let second = undefined;
let oper = undefined;
let result = 0;
let afterEqual = false;
let sign = true;

buttons.forEach((button) => button.addEventListener("click", logText));
