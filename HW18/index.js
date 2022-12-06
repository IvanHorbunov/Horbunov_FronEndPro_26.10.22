let result = 0

const sumFunc = () => {
  return function (add) {
    result += add;
    return result;
  };
}

let sum = sumFunc();


document.write(`sum(3) = ${sum(3)} <br>`)
document.write(`sum(5) = ${sum(5)} <br>`);
document.write(`sum(20) = ${sum(20)}`)

