// ====1====
for (let i = 20; i <= 30; i += 0.5) {
    document.write(i + ", ")
    if (i === 30) {
      document.write("<br>")
    } 
} document.write("<br>")

// ====2====
const dollToHrn = 27
for (let i = 10; i <= 100; i += 10) {
    document.write(i * dollToHrn + ", ")
    if (i === 100) {
      document.write("<br>")
    } 
} document.write("<br>")

// ====3====
function printSquares(n) {
  let square = 0
  let odd = 1
  for (let x = 0; x < n; x++) {
      document.write(square + " ")
      square = square + odd
      odd = odd + 2
    if (square === 121) {
      break
    }
  }
} 
let userNum = 88;
printSquares(userNum);
document.write("<br>"); document.write("<br>")

//  ====4====
let prNum = true
for (let i = 2; i < userNum; i++) {
  if (userNum % i === 0) {
    prNum = false;
    break;
  }
}
if (prNum) {
  document.write(`${userNum} - prime number`);
} else {
  document.write(`${userNum} - not a prime number`);
} document.write("<br>"); document.write("<br>");

// ====5====
for (let i = 1; i < userNum; i++) {
  if (userNum % 3 === 0) {
    document.write(`${userNum} can be obtained`);
    break;
  } else {
    document.write(`${userNum} can not be obtained`);
    break;
  }
}
