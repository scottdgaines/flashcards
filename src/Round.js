const Turn = require("./Turn")

class Round {
    constructor(deck) {
        this.deck = deck,
        this.currentCard = deck.cards[0],
        this.turns = 0
    }

    returnCurrentCard = () => {
        return this.currentCard
    }

    takeTurn = (currentCard, guess) => {
        this.turns += 1
        this.currentCard = deck.cards
        let turn = new Turn(currentCard, guess)
        return turn
    }
}

module.exports = Round