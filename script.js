'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add('hidden');


let scores, currentScore, activePlayer, playing;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

const switchPlayer = function(){
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent =
	currentScore;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function(){

	if(playing){
	diceEl.classList.remove('hidden');
	const dice = Math.trunc(Math.random() * 6) + 1;
	diceEl.src = `dice-${dice}.png`;


	if(dice !== 1){
	currentScore += dice;
	document.getElementById(`current--${activePlayer}`).textContent =
	currentScore;		
	} else {
		switchPlayer();
	}
}
});


btnHold.addEventListener('click', function(){
	if(playing){
	scores[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent =
	scores[activePlayer];

	if (scores[activePlayer] >= 30) {

		playing = false;
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		diceEl.classList.remove('hidden');

	}else {
			switchPlayer();
	}
}
});

btnNew.addEventListener('click', function(){
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	diceEl.classList.add('hidden');
	currentScore = 0;
});