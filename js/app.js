/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// List of variables
let game;
const button = document.querySelector("#btn__reset");
const keyButtons = document.querySelectorAll(".key");

button.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
    
});


//Listening the click events on each onscreen key buttons.
for (let i = 0; i < keyButtons.length; i++) {
    keyButtons[i].addEventListener("click", (e) => {
        game.handleInteraction(e.target);
    });
}

//Listening to key down events and when certain conditions are fulfilled, call on the object methods.
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" &&
        button.disabled == false && 
        overlay.style.display !== "none") 
        {
            game = new Game();
            game.startGame();
        }    
    
    if (overlay.style.display == "none") {
        for(let i = 0; i < keyButtons.length; i++) {
            if (keyButtons[i].textContent === e.key && keyButtons[i].disabled == false) {
                game.handleInteraction(keyButtons[i]);
            }
        }
    }
})