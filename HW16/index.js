// =====1=====
const array = [1, "qwe", 3, undefined, 5, "asd", 10]
let sum = 0;
let arrLength = 0;
const average = () => {
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i])) {
      arrLength += 1;
      sum += array[i];
      }
    }
    let newArr = sum / arrLength
    return newArr
}
let result = average()
document.write(`${result}<br><br>`);


// =====2=====
const OPERATIONS = {
  PLUS: "+",
  MINUS: "-",
  MULTY: "*",
  DIV: "/",
  MODUL: "%",
  DEGREE: "^",
}
const userOperation = prompt(`Choose your method: ${Object.values(OPERATIONS)}`)
const x = Number(prompt("First number"))
const y = Number(prompt("Second number"))

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const onPlus = (x, y) => x + y
const onMinus = (x, y) => x - y
const onMulty = (x, y) => x * y
const onDiv = (x, y) => x / y;
const onModul = (x, y) => x % y;
const onDegree = (x, y) => x ^ y;

const getOperationMethod = (znak) => {
    switch (znak) {
        case null:
            return alert("Error, choose right method")
        case "":
            return alert("Error, choose right method");
        case OPERATIONS.PLUS:
            return onPlus
        case OPERATIONS.MINUS:
            return onMinus
        case OPERATIONS.MULTY:
            return onMulty
        case OPERATIONS.DIV:
            return onDiv
        case OPERATIONS.MODUL:
            return onModul
        case OPERATIONS.DEGREE:
                return onDegree
        default:
            throw Error(`There is no operation ${znak}`)
    }
}

/**
 *
 * @param {OPERATIONS} znak
 * @param {number} x
 * @param {number} y
 * @returns
 */
const calculator = (znak, x, y) => {
    const calculate = getOperationMethod(znak)
    return calculate (x, y)
}

const calcResult = calculator(userOperation, x, y);
document.write(`${x} ${userOperation} ${y} = ${calcResult} <br><br>`);


// =====3=====
let mainArr = Number(prompt("Enter the length of the main array"))
let arr = []

let dimArr = () => {
  for (let i = 0; i < mainArr; i++) {
    arr.push([])
    let innArr = prompt(`Enter the length of the inner array: ${(i + 1)} inner array`)
    for (let j = 0; j < innArr; j++) {
      let value = prompt(`Enter value: ${(j + 1)} value`)
      arr[i].push([value])
    }
  }

  console.log(arr)
}

let arrResult = dimArr()


// =====4=====
function removeChar(str, char1, char2) {
    let newStr = ""
    str = prompt("Enter what you want")
    char1 = prompt("Enter first character to delete")
    char2 = prompt("Enter second character to delete")
    if (str === null) {
        alert("Error, you must enter something")
    } else if (str === "") {
        alert("Error, you must enter something");
    } else
    for (i = 0; i < str.length; i++) {
        if (str[i] !== char1 && str[i] !== char2) {
          newStr += str[i];
        }
    }
    return newStr
}

let res = removeChar();
document.write(res);
