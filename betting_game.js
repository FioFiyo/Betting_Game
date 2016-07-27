
var bankroll = 100;
var MIN = 5;
// var randomNumber = console.log(getRandomInt(1,10))
// var bet = document.getElementById("bet")
// var	number = document.getElementById("number").value

//Reusing code for prompting bet & guess in other functions
function getNumber(promptMessage){
	var number = +prompt(promptMessage);
	return number;
}

function numberIsValid(number, limit) {
	return !isNaN(number) && (number > 0) && (number <= limit);
}

function lessBet(bet){
	bankroll -= bet
}

function addBet(bet){
	bankroll += bet
}

function moneyz(bankroll){
	confirm(bankroll);
}

function startGame(){
  var guess, bet;

  while (bankroll >= MIN){
	  do {
	    guess = getNumber('What is your guess?');
	  } while ((!numberIsValid(guess, 10)));
	  do {
	    bet = getNumber('Place your bet:');
	  } while ((!numberIsValid(bet, bankroll)));
	  
	  if(guess === getRandomInt(1,10)){
	  	alert("You won!")
	  	addBet(bet);
	  }
	  else{
	  	alert("You lost :(")
	  	lessBet(bet);
	  }
	  confirm(bankroll)
  }
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

startGame();
