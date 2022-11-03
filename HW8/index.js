const userBirthDate = Number(prompt("What is your year of birth?"))
const userCity = prompt("City where you were born")
const userFavSport = prompt("What is your favourite sport?")


if (isNaN(userBirthDate)) {
    userAge = "Wrong number"
} else if (userBirthDate === 0) {
    userAge = "It is a pity that you did not want to enter your year of birth"
} else {
    userAge = 2022 - userBirthDate
}


if (userCity === null || userCity === "") {
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


if (userFavSport === null || userFavSport === "") {
    userSport = "It is a pity that you did not want to enter your favourite sport"
} else {
    if (userFavSport === "Football") {
        userSport = "Cool! Do you want to become Leo Messi?"
    } else if (userFavSport === "Tennis") {
        userSport = "Cool! Do you want to become Novak Djokovic?"
    } else if (userFavSport === "Basketball") {
        userSport = "Cool! Do you want to become Michael Jordan?"
    } else {
        userSport = `Cool! Do you want to become professional ${userFavSport} player?`
    }
}

alert(`${userAge}
${userTown}
${userSport}`);