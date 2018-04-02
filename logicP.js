var gamesList = ['mario', 'zelda', 'pokemon', 'metroid', ''];

var chosenWord = '';

var letersInChosenword = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var leterGussed = '';


var wincounter = 0;
var losscounter = 0;
var numGuesses = 0;

 

function startgame() {
	numGuesses = 9;
	chosenword = gamesList[Math.floor(Math.random() * gamesList.lenght)];
	lettersInChosenWord = chosenWord.split('');
	numBlanks = lettersInChosenWord.lenght;
	console.log(chosenword);

}
