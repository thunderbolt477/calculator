let num1 = 1;
let num2 = 2;
let operation;
let display;

let numbers = document.querySelectorAll(".btn-number");
let operators = document.querySelectorAll(".btn-operation");
let equals = document.getElementById("equals");

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const assignValue = (num) => {
  if (num1 === "") {
    return (num1 = num);
  } else {
    return (num2 = num);
  }
};

const assignOperation = (op) => {
  return (operation = op);
};

// numbers.onclick = function () {
//   console.log(numbers);
// };

numbers.forEach((div) => {
  div.addEventListener("click", function () {
    let divID = this.id;
    console.log(divID);
  });
});

function setOperation(operator) {
  operation = operator;
  console.log(operation);
}

// operators.forEach((div) => {
//   div.addEventListener("click", function () {
//     let operation = this.id;
//     console.log(operation);
//   });
// });

// function solve(num1, num2, operation) {
//   if (operation === "add") {
//     return add(num1, num2);
//   } else if (operation === "subtract") {
//     return subtract(num1, num2);
//   } else if (operation === "multiply") {
//     return multiply(num1, num2);
//   } else {
//     return divide(num1, num2);
//   }
// }

let solution = equals.addEventListener("click", function () {
  let result;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operation === "add") {
    result = add(num1, num2);
  } else if (operation === "subtract") {
    result = subtract(num1, num2);
  } else if (operation === "multiply") {
    result = multiply(num1, num2);
  } else {
    result = divide(num1, num2);
  }
  console.log(result);
});

console.log(solution);
