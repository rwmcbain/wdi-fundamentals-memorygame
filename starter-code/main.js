
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cards = ['queen', 'queen', 'king', 'king'];
var cardInPlay = []
if (cardTwo === cardFour) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
if (cardOne === cardTwo) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
if (cardOne === cardThree) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
if (cardOne === cardFour) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
if (cardTwo === cardThree) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
if (cardThree === cardFour) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}
var gameboard = document.getElementIdBy('game-board');
for (var i=0; i < 10; i++){
	var newDiv = document.createElement('div');
	newDiv.className = 'card';
	document.getElementsByClassName('board'); appendChild(newDiv);
}
var createBoard = function() {
	for (var i = 0, i < cards.length; i++){
		cardElement.setAttribute('data-card', cards['queen']);
		cardElement.addEventListener('click', isTwoCards).innerHTML = <img src="king.jpg">;
}

function isMatch() {

}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
