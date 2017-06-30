var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createCards() {
    var gameBoard = document.getElementById("game-board");
    var createCards= [];

    for (var i = 0; i < cards.length; i++){
        createCards[i] = document.createElement('div');
        createCards[i].className = 'card';
        createCards[i].id = i;
        createCards[i].setAttribute("data-card", cards[i]);
        createCards[i].addEventListener("click", isTwoCards);
        createCards[i].innerHTML = '<img src="images/joker.png" alt="Joker Deck"/>';
        
        gameBoard.appendChild(createCards[i]);   
    }
}

function isTwoCards() {
    var dataCard = this.getAttribute('data-card');    
    this.innerHTML = '<img src="images/' + dataCard + '.png" alt="' + dataCard + '"/>';
    
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay[0], cardsInPlay[1]);
        cardsInPlay = [];
    }
}

function isMatch(cardOne, cardTwo) {    
    if(cardOne.innerHTML === cardTwo.innerHTML && cardOne.id != cardTwo.id) {
        console.log("Matched!");
        cardOne.removeEventListener("click", isTwoCards);
        cardTwo.removeEventListener("click", isTwoCards);
    }
    else {
        console.log("No match");
        setTimeout(function() {
            cardOne.innerHTML = '<img src="images/joker.png" alt="Joker Deck"/>';    
            cardTwo.innerHTML = '<img src="images/joker.png" alt="Joker Deck"/>';    
        }, 1000);   
    }
}

createCards();
console.log("JS file is connected to HTML! Woo!");