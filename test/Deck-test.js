const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {
    let card1;
    let card2;
    let card3;
    let card4;
    let cards;
    let deck;

    beforeEach(() => {
        card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');
        card4 = new Card(4, 'What does Batman drive?', ['The Batmobile', 'A Unicycle', 'Nails'], 'The Batmobile');
        cards = [card1, card2, card3, card4];
        deck = new Deck(cards)
    });

    it('Should be a function', function() {
        expect(Deck).to.be.a('function')
    });

    it('Should be an instance of the Deck class', function() {
        expect(deck).to.be.an.instanceOf(Deck)
    });

    it('Should have an array of cards by default', function() {
        expect(deck.cards).to.equal(cards)
    });

    it('Should keep track of how many cards are in the deck', function() {
        expect(deck.countCards()).to.equal(4)
    })
})