let firstNumber = prompt("First number");
firstNumber = Number(firstNumber)
let secondNumber = prompt("Second number");
secondNumber = Number(secondNumber);
alert(
    firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber) + "\n" +
    firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber) + "\n" +
    firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber) + "\n" +
    firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber)
);