//this project is a portfolio peice that solidifies my knowledge i have learnt so far.
//the mixed message app uses JS and node.js to output a random string of messages when the user runs the program. 
//the topic i have chosen is mood brightener texts. the program will consist of 3 different data banks.

const databank = {
    group1: [
        "Some random starter message",
        "haha this is so random",
        "You never know what your gonna get",
        "do you wanna know"
    ],
    group2: [
        "so you reached my lair",
        "life is a spiritual journey",
        "This is not very creative of me",
        "if this feeling flows both ways?"
    ],
    group3: [
        "this finise of life is what makes it so important",
        "gonna have to do better then this",
        "booooooo",
        "it doesnt"
    ]
}
const randomizeIndex = (length) => {
    return Math.floor(Math.random() * length);
}

const message = `${databank.group1[randomizeIndex(databank.group1.length)]} , ${databank.group2[randomizeIndex(databank.group2.length)]} , ${databank.group3[randomizeIndex(databank.group3.length)]}` ;
console.log(message);