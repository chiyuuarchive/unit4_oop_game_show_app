/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on the game board.
    */
    addPhraseToDisplay() {
        const ul = document.querySelector("#phrase ul");
        
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement("li");
           
            if (/^[a-z]$/.test(`${this.phrase.charAt(i)}`)) {
                li.className = `hide letter ${this.phrase.charAt(i)}`; 
            }
            else {
                li.className = "space"; 
            }
            li.innerHTML = `${this.phrase.charAt(i)}`;
            ul.appendChild(li);
        }
    }

    /**
     * Checks if letter selected by the player matches a letter in the phrase.
     * @param {string} letter - Letter to check.
     * @return {boolean} Return a true or false value.
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
    * Displays passed letter on screen after a match is found.
    * @param {string} letter - Letter to display.
    */
    showMatchedLetter(letter) {
        const activeLetters = document.querySelectorAll(`.${letter}`);
        for (let i = 0; i < activeLetters.length; i++) {
                activeLetters[i].classList.replace("hide", "show");
        }
    }
}