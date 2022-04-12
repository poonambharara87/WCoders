'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = '?';
// document.querySelector('.message').textContent = 'Correct Number!';
const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
	let guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if(!guess){
		displayMessage('No Number!')
	}else if(guess === secretNumber){

		displayMessage('Correct Number!');
		document.querySelector('body').style.backgroundColor = 'green';
		document.querySelector('.number').style.width = '30rem';

		if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	}else if(guess !== secretNumber){
		if (score > 1) {
		displayMessage(guess > secretNumber ? "Too High": "Too Low");
		score--;
		document.querySelector('.score').textContent = score;
		}else{
		displayMessage('You lost the game');
	}

	}
});

document.querySelector('.again').addEventListener('click', function(){
	score = 0;
	document.querySelector('.guess').value = '';
	displayMessage('Start guessing...........');
	document.querySelector('.number').textContent = '?';
});
