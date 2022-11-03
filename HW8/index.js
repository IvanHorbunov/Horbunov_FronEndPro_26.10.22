const userBirthDate = Number(prompt("What is your year of birth?"))
const userCity = prompt("City where you were born")
const userFavSport = prompt("What is your favourite sport?")
const userSportQuestion = "Cool! Do you want to become";

let userAge = 18
let userTown = "Town"
let userSport = "Sport"

if (isNaN(userBirthDate)) {
    userAge = "Wrong number"
} else if (userBirthDate === 0) {
    userAge = "It is a pity that you did not want to enter your year of birth"
} else {
    userAge = new Date().getFullYear() - userBirthDate;
}


if (!userCity) {
    userTown = "It is a pity that you did not want to enter your city"
} else {
    if (userCity === "Kyiv") {
        userTown = "You live in the capital of Ukraine"
    } else if (userCity === "Washington") {
        userTown = "You live in the capital of United States of America"
    } else if (userCity === "London") {
        userTown = "You live in the capital of Great Britain"
    } else {
        userTown = `You live in ${userCity}`
    }
}


if (!userFavSport) {
    userSport = "It is a pity that you did not want to enter your favourite sport"
} else {
    if (userFavSport === "Football") {
        userSport = `${userSportQuestion} Leo Messi?`;
    } else if (userFavSport === "Tennis") {
        userSport = `${userSportQuestion} Novak Djokovic?`;
    } else if (userFavSport === "Basketball") {
        userSport = `${userSportQuestion} Michael Jordan?`;
    } else {
        userSport = `${userSportQuestion} professional ${userFavSport} player?`;
    }
}

alert(`${userAge}
${userTown}
${userSport}`);