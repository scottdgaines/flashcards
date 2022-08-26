const chai = require('chai');
const Turn = require('../src/Turn.js');
const expect = chai.expect;
const Card = require('../src/Card.js')

describe('Turn', function() {
    let turn;
    let card; 

    beforeEach(() => {
        card = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        turn = new Turn(card, 'Bruce Wayne')
    })

    it('Should be a function', function() {        
        expect(Turn).to.be.a('function')
    });

    it('Should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn)
    });

    it('Should have a property for the card currently in play', function() {
        expect(turn.card).to.equal(card)
    });

    it('Should be able to reference a different card', function() {  
        expect(turn.card).to.equal(card)
    })

    it('Should have a property for player\'s guess', function() {
        expect(turn.guess).to.equal('Bruce Wayne')
    });

    it('Should be able to accept a different guess', function() {
        let turn = new Turn(card, 'Clark Kent')

        expect(turn.guess).to.equal('Clark Kent')
    });

    it('Should return the player\'s guess', function() {
        expect(turn.returnGuess()).to.equal('Bruce Wayne')
    });

    it('Should return the current card in play', function() {
        expect(turn.returnCard()).to.equal(card)
    });

    it('Should return a boolean value indicating if the player\'s guess matches the answer on the card', function() {
        let turn1 = new Turn(card, 'Bruce Wayne');
        let turn2 = new Turn(card, 'Clark Kent');
       
        let guess1 = turn1.evaluateGuess();
        let guess2 = turn2.evaluateGuess();

        expect(guess1).to.equal(true);
        expect(guess2).to.equal(false)
    });

    it('Should provide the player with feedback based on their answer', function() {
        let turn1 = new Turn(card, 'Bruce Wayne');
        let turn2 = new Turn(card, 'Clark Kent');

        let feedback1 = turn1.giveFeedback();
        let feedback2 = turn2.giveFeedback();

        expect(feedback1).to.equal('Correct!');
        expect(feedback2).to.equal('Incorrect!')
    })
})