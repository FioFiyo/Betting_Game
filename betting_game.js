
var bankroll = 100;
// var MIN = 5; USED for alert w/o JQ
var LIMIT = 10;


//Reusing code for prompting bet & guess in other functions
// function getNumber(promptMessage){
// 	var number = +prompt(promptMessage);
// 	return number;
// }


//Using JQuery

function youWon(){
	$("#result").append("You Won!")
}
function youLost(){
	$("#result").append("You Lost...")
}
function getBet(){
	var bet = $(document.getElementById("bet")).val()
	return bet
};
function getGuess(){
	var	guess = $(document.getElementById("number")).val()
	return guess
};

function numberIsValid(number,limit) {
	return !isNaN(number) && (number > 0) && (number <= limit);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function lessBet(bet){
	bankroll -= bet
};

function addBet(bet){
	bankroll += bet
};

function moneyz(){
	// confirm(bankroll); add bankroll as param when using alert
	return $("#result").append("Money left: " + bankroll)
	
};
//TODO ALERT IF NOT NUMBER
$(document).ready(function(){
	$("#form_one").on('submit', function(event){
			console.log("when submit button")
			event.preventDefault();

			var bet = +getBet();
			var guess = +getGuess();

			if (bet > bankroll){alert("Bet less, you don't have enough")};
			if (bankroll === 0){confirm("Play again?"); bankroll = 100}

			if ((numberIsValid(bet,LIMIT) && numberIsValid(guess,LIMIT)) && bankroll >= 5){
				if(guess === getRandomInt(1,10)){
					//TODO: have a way to call "You won" string
					youWon()
					moneyz()
					addBet(bet)
				}
				else {
					lessBet(bet)
					youLost()
					moneyz()
					//TODO: have a way to call "You lost" string
					
				};
			}
			else {alert("Not a number or number higher than max bet amount, try again.")}
			
	});
});

//------- GAME STARTS (using alert/) -------//
// function startGame(){
// 	var guess, bet;

//   while (bankroll >= MIN){
// 	  do {
// 	    // guess = getNumber('What is your guess?');
// 	    guess = getGuess()
// 	  } while ((!numberIsValid(guess, 10)));
// 	  do {
// 	    // bet = getNumber('Place your bet:');
// 	    bet = getBet()
// 	  } while ((!numberIsValid(bet, bankroll)));
	  
// 	  if(guess === getRandomInt(1,10)){
// 	  	alert("You won!")
// 	  	addBet(bet);
// 	  }
// 	  else{
// 	  	alert("You lost :(")
// 	  	lessBet(bet);
// 	  }
// 	  confirm(bankroll)
//   }
// }



