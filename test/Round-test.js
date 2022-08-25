const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Turn.js');

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

        expect(round.deck).to.equal([card1, card2, card3])
        expect(round.currentCard).to.equal(card1)
    });

    it.skip('Should return the current card being played', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard()

        expect(currentCard).to.equal(card1)
    })

    it.skip('Should keep track of how many turns have been taken', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        expect(round.turns).to.equal(0);
        
        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(2)
    })

    it.skip('Should instantiate a new Turn', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard()
        let round1 = round.takeTurn(currentCard, 'Clark Kent')

        expect(round1).to.be.an.instanceOf(Turn)
    })

    it.skip('Should update the current card when taking a turn', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard();

        let round1 = round.takeTurn(currentCard, 'Clark Kent');

        expect(currentCard).to.equal(card2);

        let round2 = round.takeTurn(currentCard, 'The Joker');

        expect(currentCard).to.equal(card3)
    })

    it.skip('Should record number of incorrect guesses when taking a turn', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard()

        expect(round.incorrectGuesses.length).to.equal(0)

        let round1 = round.takeTurn(currentCard, 'Clark Kent')

        expect(round.incorrectGuesses.length).to.equal(1)

        let round2 = round.takeTurn(currentCard, 'Bruce Wayne')

        expect(round.incorrectGuesses.length).to.equal(1)
    })

    it.skip('Should evaluate the guess and return appropriate feedback when taking a turn', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard();
        let round1 = round.takeTurn(currentCard, 'Clark Kent')

        expect(round1).to.equal('Incorrect!')

        let round2 = round.takeTurn(currentCard, 'Bruce Wayne')
        
        expect(round2).to.equal('Correct!')
    })

    it.skip('Should calcuate percentage of correct guesses', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');
        let card4 = new Card(4, 'What does Batman drive?', ['The Batmobile', 'A Unicycle', 'A Blimp'], 'The Batmobile');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard();

        let round1 = round.takeTurn(currentCard, 'Clark Kent');
        let round2 = round.takeTurn(currentCard, 'The Joker');

        expect(round.turns).to.equal(2);
        expect(round.incorrectGuesses.length).to.equal(1);

        let round3 = round.takeTurn(currentCard, 'Alfred');
        let round4 = round.takeTurn(currentCard, 'A Unicycle')

        let percentage = round.calculatePercentage()

        expect(round.turns).to.equal(4);
        expect(round.incorrectGuesses.length).to.equal(2)
        expect(percentage).to.equal(.5)
    })

    it.skip('Should declare when the round is over and what percentage of questions were answered correctly', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        let currentCard = round.returnCurrentCard();
        let round1 = round.takeTurn(currentCard, 'Clark Kent');
        let round2 = round.takeTurn(currentCard, 'The Joker');

        let percentage = round.calculatePercentage();

        let endOfRound = round.endRound(percentage);

        expect(endOfRound).to.equal('**Round over!** You answered 50% of the questions correctly!')
    })

})