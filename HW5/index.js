let operator = prompt("write operator: 'add, sub, mult, div'");
let firstNumber = prompt("First number");
firstNumber = Number(firstNumber);
let secondNumber = prompt("Second number");
secondNumber = Number(secondNumber);
let result = 0;
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Wrong number!");
} else {
  if (operator == "add") {
    result = firstNumber + secondNumber;
    alert(firstNumber + "+" + secondNumber + "=" + result);
  } else if (operator == "sub") {
    result = firstNumber - secondNumber;
    alert(firstNumber + "-" + secondNumber + "=" + result);
  } else if (operator == "mult") {
    result = firstNumber * secondNumber;
    alert(firstNumber + "*" + secondNumber + "=" + result);
  } else if (operator == "div") {
    result = firstNumber / secondNumber;
    alert(firstNumber + "/" + secondNumber + "=" + result);
    }
}