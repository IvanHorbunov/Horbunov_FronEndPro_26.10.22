let num = +prompt("Enter your number")
let degree = +prompt("Enter your degree")

/**
 * 
 * @param {number} num 
 * @param {number} degree 
 * @returns {number}
 */

const pow = (num, degree) => {
  if (degree === 1) {
    return num;
  } else if (degree === 0) {
        return 1;
  } else if (degree < 0) {
        return (1 / num) * pow(num, degree + 1);
  } else {
        return num * pow(num, degree - 1);
  }
}

document.write(pow(num, degree));