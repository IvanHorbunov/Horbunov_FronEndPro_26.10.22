// =====1=====
const array = [1, 'qwe', 3, 'asd', undefined, 5, 10]
let numLength = 0;
let sum = 0

function calc() {
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i])) {
      numLength += 1
      sum += array[i]
    }
      av = sum / numLength
  }
  return av
}

let average = calc();
document.write(average)
document.write("<br> <br>");


// =====2=====
const OPERATIONS = {
  PLUS: "+",
  MINUS: "-",
  MULTY: "*",
  DIV: "/",
  MODUL: "%",
  DEGREE: "^",
}

const userOperation = prompt(`Choose math method: ${Object.values(OPERATIONS)}`)
const x = Number(prompt("First number"))
const y = Number(prompt("Second number"))

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const onPlus = (x, y) => x + y;
const onMinus = (x, y) => x - y;
const onMulty = (x, y) => x * y;
const onDIV = (x, y) => x / y;
const onMODUL = (x, y) => x % y;
const onDEGREE = (x, y) => x ^ y;

/**
 *
 * @param {OPERATIONS} znak
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

const getOperationMethod = (znak) => {
    switch (znak) {
        case '':
            return alert("Please, enter operation method")
        case null:
            return alert("Please, enter operation method")
        case OPERATIONS.PLUS:
            return onPlus
        case OPERATIONS.MINUS:
            return onMinus
        case OPERATIONS.MULTY:
            return onMulty
        case OPERATIONS.DIV:
            return onDIV
        case OPERATIONS.MODUL:
            return onMODUL
        case OPERATIONS.DEGREE:
            return onDEGREE
        default:
            throw Error(`There is no operation: ${znak}`)
    }
}

const doMath = (znak, x, y) => {
    const calculate = getOperationMethod(znak)
    return calculate(x, y)
};

const result = doMath(userOperation, x, y);
document.write(`${x} ${userOperation} ${y} = ${result}<br><br>`)


// =====3=====
let arrLength = Number(prompt("Enter the length of the main array"))
let arr = []

let newArray = () => {
  for (let i = 0; i < arrLength; i++) {
    arr.push([]);
    let intArr = Number(prompt(`Enter the length of internal arrays: ${(i + 1)} internal array`))
    for (let j = 0; j < intArr; j++) {
      let value = prompt(`Enter the value of the elements: ${j + 1} value`)
      arr[i].push([value])
    }
  }
}

newArray()
console.log(arr)


// =====4=====
let removeChar = (str, char1, char2) => {
    str = prompt("Enter what you want")
    char1 = prompt("First character to delete")
    char2 = prompt("Second character to delete")
    let newStr = ""
    for (i = 0; i < str.length; i++) {
        if (str[i] !== char1 && str[i] !== char2) {
          newStr += str[i]
        }
    }
    return newStr
}
let res = removeChar()
document.write(res)


















