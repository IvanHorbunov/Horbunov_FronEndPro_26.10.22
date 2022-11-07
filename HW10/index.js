// ====1====
let i = 1
for (let i = 10; i <= 20; i++) {
    document.write(i + ", ")
    if (i === 20) {
        document.write("<br>")
    } 
} document.write("<br>");

// ====2====
for (let i = 10; i <= 20; i++) {
    document.write(i * i + ", ")
    if (i === 20) {
      document.write("<br>")
    }
} document.write("<br>");

// ====3====
const mult = 7
for (let i = 10; i <= 20; i++) {
  document.write(i * mult + ", ")
  if (i === 20) {
    document.write("<br>")
  }
} document.write("<br>");

// ====4====
let sum = 0
for (let i = 1; i <= 15; i++) {
    sum += i
    document.write(sum + ", ")
    if (i === 15) {
      document.write("<br>")
    }
} document.write("<br>");

// ====5====
let dob = 1
for (let i = 15; i <= 35; i++) {
    dob *= i
    document.write(dob + ", ")
    if (i === 35) {
      document.write("<br>")
    }
} document.write("<br>");

// ====6====
const numOfDig = 500
let suma = 0
for (let i = 1; i <= 500; i++) {
    suma += i
}
document.write(suma / numOfDig + ",<br>")
document.write("<br>");

// ====7====
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        document.write(i + ", ")
    } if (i === 80) {
        document.write("<br>")
    }
} document.write("<br>");

// ====8====
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        document.write(i + ", ")
    } if (i === 200) {
      document.write("<br>")
    }
} document.write("<br>");

// ====9, 10, 11====
let natNum = 888
let div = 0
let evenDiv = 0
for (let i = 2; i * 2 <= natNum; i++) {
  if (natNum % i == 0) {
    document.write(i + ", ")
    if (i % 2 === 0) {
      div++
      evenDiv += i
    }
  }
}
document.write(`<br> ${div}, <br> ${evenDiv}, <br><br>`);

// ====12====
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let multTab = i * j 
        document.write(`${multTab} `)
    }
    document.write("<br>")
}