
var bankroll = 100;
// var MIN = 5; USED for alert w/o JQ
var BET_MIN = 5;
var BET_MAX = 10;
var GUESS_LIMIT = 10;


//Reusing code for prompting bet & guess in other functions
// function getNumber(promptMessage){
// 	var number = +prompt(promptMessage);
// 	return number;
// }



//Using JQuery

function appendResult(s){
	var new_p = $("<p>", {text:s});
	$("#result p").replaceWith(new_p);
}

function youWon(){
	appendResult("You Wo!");
}
function youLost(){
	// $("#result").append("You Lost...")
	appendResult("You Lo!");
}
function getBet(){
	var bet = $(document.getElementById("bet")).val()
	return bet
};
function getGuess(){
	var	guess = $(document.getElementById("number")).val()
	return guess
};

function numberIsValid(number, lowerLimit, upperLimit) {
	// Jeremy has concerns about this use of isNaN
	//    (but cannot actually come up with a bug)
	return !isNaN(number) && (number >= lowerLimit) && (number <= upperLimit);
};

function isValidBet(x){
	return numberIsValid(x, BET_MIN, BET_MAX);
}

function isValidGuess(x){
	return numberIsValid(x, 1, GUESS_LIMIT);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function lessBet(bet){
	bankroll -= bet
};

function addBet(bet){
	bankroll += bet
};

function display_bankroll(){
	// confirm(bankroll); add bankroll as param when using alert
	// return $("#result").append("Money left: " + bankroll)
	appendResult("Money left:" + bankroll);
	
};


$(function(){
	$("#form_one").on('submit', function(event){
			console.log("when submit button")
			event.preventDefault();

			var bet = Number(getBet());
			var guess = +getGuess();

			//TODO create button and apply play again function
			if (bankroll < BET_MIN){
				confirm("Play again?");
			//TODO reset bankroll somewhere else; trigger by button perhaps
				bankroll = 100
			}

			if (isValidGuess(guess) && isValidBet(bet) && bet <= bankroll){
				if(guess === getRandomInt(1,10)){
					youWon()
					addBet(bet)
				} else {
					youLost()
					lessBet(bet)
				}
				display_bankroll();
			} else {
				alert("Not a number or number higher than max bet amount, try again.")
			};
			
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



