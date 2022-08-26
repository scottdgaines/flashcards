const Turn = require("./Turn")

class Round {
    constructor(deck) {
        this.deck = deck,
        this.turns = 0,
        this.incorrectGuesses = []
    }

    returnCurrentCard = () => {
        return this.deck.cards[this.turns]
    }

    takeTurn = (guess) => {
        let currentTurn = new Turn(this.deck.cards[this.turns], guess)

        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards[this.turns].id)
        }
       
        this.turns++
        this.returnCurrentCard()
        return currentTurn.giveFeedback()
    }

    calculatePercentage = () => {
        let percentage = this.incorrectGuesses.length / this.turns * 100
        return percentage
    }

    endRound = () => {
        return `**Round over!** You answered ${this.calculatePercentage()}% of the questions correctly!`
    }
}

module.exports = Round