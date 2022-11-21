const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
const length = 16
let symbol = "";


function generateKey(length, characters) {
    for (let i = 0; i < length; i++) {
      symbol += characters[Math.round(Math.random() * (characters.length - 1))];
    }
    return symbol
}


const key = generateKey(length, characters);
console.log(key);
