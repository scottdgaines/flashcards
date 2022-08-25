const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');

describe('Round', function() {

    it.skip('Should be a function', function() {
        expect(Round).to.be.a('function')
    });

    it.skip('Should be an instance of the class Round', function() {
        let round = new Round();

        expect(round).to.be.an.instanceOf(Round)
    });

    it.skip('Should be instantiated with a deck of cards', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);

        let round = new Round(deck);

        expect(round.deck).to.equal(deck)
        expect(round.currentCard).to.equal(deck.card[0])
    });

    it.skip('Should return the current card being played', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);

        let round = new Round(deck);

        let currentCard = round.returnCurrentCard()

        expect(currentCard).to.equal(round.deck[0])
    })

    it.skip('Should instantiate a new Turn', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);

        let round = new Round(deck);

        let guess = 

        round.takeTurn(guess)


    })

    it.skip('Should keep track of how many turns have been taken', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);

        let round = new Round(deck);

        round.takeTurn();

        expect(round.turns).to.equal(1);

        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(3);
    })


})