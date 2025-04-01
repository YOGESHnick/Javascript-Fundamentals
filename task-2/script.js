let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;

function appendToDisplay(value) {
  if (["+", "-", "*", "/"].includes(value)) {
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
    } else {
      firstOperand = calculate(
        firstOperand,
        parseFloat(currentInput),
        operator
      );
    }
    operator = value;
    currentInput = "";
    display.value = firstOperand + " " + operator;
  } else {
    currentInput += value;
    display.value = currentInput;
  }
}

function clearDisplay() {
  display.value = "";
  currentInput = "";
  firstOperand = null;
  operator = "";
}

function calculateResult() {
  if (firstOperand !== null && operator !== "") {
    let secondOperand = parseFloat(currentInput);
    let result = calculate(firstOperand, secondOperand, operator);
    display.value = result;
    currentInput = result.toString();
    firstOperand = null;
    operator = "";
  }
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error";
    default:
      return b;
  }
}
