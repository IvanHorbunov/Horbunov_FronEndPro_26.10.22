const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// =====1=====
let sum = 0
let amount = array.filter((elem) => elem > 0)

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i]
  }
}

document.write(`${sum}<br>`)
document.write(`${amount.length}<br><br>`)


// =====2=====
let min = Math.min(...array)
let minIndex = array.indexOf(min) + 1

document.write(`${min}<br>`)
document.write(`${minIndex}<br><br>`)


// =====3=====
let max = Math.max(...array)
let maxIndex = array.indexOf(max) + 1

document.write(`${max}<br>`)
document.write(`${maxIndex}<br><br>`)


// =====4=====
let negAmount = array.filter((elem) => elem < 0)
document.write(`${negAmount.length}<br><br>`)


// =====5=====
let oddPosAmount = array.filter((elem) => elem > 0 && elem % 2 !== 0)
document.write(`${oddPosAmount.length}<br><br>`)


// =====6=====
let evenPosAmount = array.filter((elem) => elem > 0 && elem % 2 === 0)
document.write(`${evenPosAmount.length}<br><br>`)


// =====7=====
let evenPosSum = 0

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i]%2 === 0) {
    evenPosSum += array[i]
  }
}

document.write(`${evenPosSum}<br><br>`)


// =====8=====
let oddPosSum = 0

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    oddPosSum += array[i]
  }
}

document.write(`${oddPosSum}<br><br>`)


// =====9=====
mult = 1

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    mult *= array[i]
  }
}

document.write(`${mult}<br><br>`)


// =====10=====
const newArr = array.map((value) => (value === max ? value : 0))
console.log(newArr);