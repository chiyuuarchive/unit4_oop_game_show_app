/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * styling.js */

//Styling the title
const title = document.querySelector(".title");
title.style.color = "#E2D8D8";
title.textContent = "Movie hunter"

//Styling the start page. Add a radial gradient.
const overlay = document.querySelector("#overlay");
overlay.style.backgroundColor = "#332E2E";


//Give the start page a subheader 
const startMessage = document.querySelector("#game-over-message");
startMessage.style.fontFamily = "Courier New";
startMessage.style.color = "#C1B7B7";
startMessage.style.margin = "40px"

//Styling the body
const body = document.querySelector("body");
body.style.backgroundColor = "#332E33";

//Styling the header
const header = document.querySelector(".header")
header.style.color = "#E7E7E7";
header.textContent = "Guess wrong and you have to watch the movie...";
header.style.fontFamily = "Courier New";
header.style.marginRight = "20px";
header.style.marginLeft = "20px";


//Responsive elements (with regards to the viewport)
if (window.matchMedia("(max-width: 700px)").matches) {
    title.style.fontSize = "300%";
    
    startMessage.style.fontSize = "150%";
    startMessage.textContent = "Guess the right movie"

    header.style.fontSize = "180%";

    header.style.fontSize = "150%";
    header.style.marginTop = "70px";
    header.style.marginRight = "20px";
    header.style.marginLeft = "20px";
    
}
else {
    title.style.letterSpacing = "15px";

    startMessage.style.fontSize = "200%";
    startMessage.textContent = "~ Guess the right movie ~"

    header.style.fontSize = "250%";
    header.style.marginTop = "60px";
    header.style.marginRight = "5px";
    header.style.marginLeft = "5px";
}

/**
 * A function that styles the page according to the outcome of the game.
 * @param {string} input - string value of "win" or "lose" 
 * @param {string} spoiler . the active phrase
 */
function styleInterface(input, spoiler) {
    const overlay = document.querySelector("#overlay");
    const title = document.querySelector(".title");
    const message = document.querySelector("#game-over-message");
    const button = document.querySelector("#btn__reset");
    
    title.style.fontFamily = "Courier";
    title.style.fontSize = "35px";    
    
    if (input === "win") {
        title.style.color = "#ECECEC";
        title.textContent = "You guessed right!";

        title.style.fontSize = "50px"    
        
        overlay.style.backgroundColor = "#26903B";

        message.style.color = "#6F4F4F4";
        message.style.letterSpacing = "5px";
        message.textContent = "Still hungry for more?"

        message.style.fontSize = "30px";
        message.style.marginTop = "40px";
        message.style.marginBottom = "50px";

        button.textContent = "Click here";
        
    }

    if (input === "lose") {
        title.style.color= "#6A80BE";
        title.textContent = "The movie you have to watch:";

        overlay.style.backgroundColor = "#00112B";

        message.style.color = "#FF5733"
        message.style.fontFamily = "Times New Roman";
        message.textContent = `${spoiler.toUpperCase()}`;

        message.style.fontSize = "45px";
        message.style.letterSpacing = "10px";
        message.style.marginTop = "80px";

        button.style.display = "none";
        button.disabled = true; 
    }
}