const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', function() {
    let card1; 
    let card2; 
    let card3; 
    let card4;
    let deck; 
    let round;
    let turn;

    beforeEach(() => {
        card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');
        card4 = new Card(4, 'What does Batman drive?', ['The Batmobile', 'A Unicycle', 'Nails'], 'The Batmobile');
        deck = new Deck([card1, card2, card3, card4]);
        round = new Round(deck);
        turn = new Turn(card1, 'Bruce Wayne')
    })

    it('Should be a function', function() {
        expect(Round).to.be.a('function')
    });

    it('Should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round)
    });

    it('Should have a deck of cards', function() {
        expect(round.deck).to.equal(deck)
    });

    it('Should return the first card in the deck', function() {
        expect(round.returnCurrentCard()).to.equal(card1)
    })

    it('Should keep track of how many turns have been taken', function() {
        expect(round.turns).to.equal(0)

        round.takeTurn();

        expect(round.turns).to.equal(1)
    })

    it('Should instantiate a new Turn', function() {
       expect(turn).to.be.an.instanceOf(Turn)
    })

    it('Should keep track of incorrect guesses', function() {
       expect(round.incorrectGuesses).to.deep.equal([])

       round.takeTurn('Clark Kent')

       expect(round.incorrectGuesses).to.deep.equal([1])

       round.takeTurn('The Joker')

       expect(round.incorrectGuesses).to.deep.equal([1])

    })

    it('Should evaluate the guess and return appropriate feedback when taking a turn', function() {
        expect(round.takeTurn('Bruce Wayne')).to.equal('Correct!')
        expect(round.takeTurn('Poison Ivy')).to.equal('Incorrect!')
    })

    it('Should calcuate percentage of correct guesses', function() {
        round.takeTurn('Bruce Wayne');
        round.takeTurn('Poison Ivy');

        expect(round.calculatePercentage()).to.equal(50)

        round.takeTurn('Alfred');
        round.takeTurn('The Batmobile');

        expect(round.calculatePercentage()).to.equal(25)
    })

    it('Should declare when the round is over', function() {
        round.takeTurn('Bruce Wayne')
        round.takeTurn('Cat Woman')

        expect(round.endRound()).to.equal('**Round over!** You answered 50% of the questions correctly!')
    })
})