/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game.
    * @return {array} An array of phrases that could be used in the game.
    */
    createPhrases() {
        const newPhrases = [
            "The Lighthouse", 
            "Midsommar", 
            "Hereditary", 
            "Beau",
            "Munchausen"];
        let phrases = [];
        newPhrases.forEach(newPhrase => phrases.push(new Phrase(newPhrase)));
        return phrases;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user.
    */
    startGame() {
        this.resetGame();

        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property.
    * @return {object} Phrase object chosen to be used.
    */
    getRandomPhrase() {
        const maxNum = this.phrases.length;
        const rndNum = Math.floor(Math.random()*maxNum);
        const selectedPhrase = this.phrases[rndNum];
        return selectedPhrase;

    }

    /**
    * Increases the value of the missed property.
    * Removes a life from the scoreboard.
    * Checks if player has remaining lives and ends game if player is out.
    */
    removeLife() {

        if (this.missed === 4) {
            this.gameOver();
        }
        else {
            const lifepoints = document.querySelectorAll(".tries img");
            lifepoints[this.missed].src = "images/lostHeart.png";
            this.missed++;
        }
    }

    /**
    * Checks for winning move.
    * @return {boolean} True if user wins the game. False if not. 
    */
    checkForWin() {
        const lis = document.querySelector("#phrase ul").children;

        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains("hide")) {
                return false;
            }
        }
        return this.gameOver(true);
    }

    /**
    * Displays "game over" message.
    * @param {boolean} gameWon - Input if game is won. 
    */
    gameOver(gameWon) {
        const message = document.querySelector("#game-over-message");
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "inherit";
        
        if (gameWon) {
            overlay.classList.replace("start", "win");
            styleInterface("win");
        }

        if (!gameWon) {
            let spoiler = this.activePhrase.phrase;
            overlay.classList.replace("start", "lose");
            styleInterface("lose", spoiler); 
        }  
    }

    /**
    * Reset the game by reverting the display to its initial stage.
    */
    resetGame() {
        document.querySelector("#phrase ul").innerHTML = "";
        document.querySelector("#overlay").className = "start";
        this.missed = 0;
        this.activePhrase = null;

        const lifepoints = document.querySelectorAll(".tries img");
        const keyButtons = document.querySelectorAll(".key");
        
        for (let i = 0; i < lifepoints.length; i++) {
            lifepoints[i].src = "images/liveHeart.png";
        } 
        for (let i = 0; i < keyButtons.length; i++) {
            keyButtons[i].className = "key";
            keyButtons[i].disabled = false;
        }
    }

    /**
    * Handles interactions based on event input.
    * @param {element} button - element of which an event is registered. 
    */
    handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;

        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            button.classList.add("chosen");
            this.checkForWin();   
        }
        else {
            this.removeLife();
            button.classList.add("wrong");
        }
    }
}