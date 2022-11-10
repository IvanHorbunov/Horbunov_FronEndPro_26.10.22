const userArr = +prompt("Enter how many elements should be?")
let array = []
array.push(userArr)

for (i = 0; i < userArr; i++) {
    array[i] = prompt("Enter an element (what you want)");
}

let newArr = array.sort((a, b) => {
    return a - b
})
let newArr2 = newArr.sort()
let newArr3 = newArr2.splice(1, 3)

if (userArr === "0") {
  alert("Сan't be zero");
} else if (userArr === null) {
    alert("You didn't enter numbers");
} else if (userArr > 0) {
    document.write(`${array}`);
} else {
    alert("You must enter the number of elements");
}

