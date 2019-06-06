// //Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

console.log("Hello")

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 1;

let losses = 0;

let guessesLeft = 10;

let lettersGuessed = [];

let userChoice = [];

//computer picks a random value from the array.
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let computerChoice = alphabet[randomIndex];
    console.log('computerChoice:',computerChoice);

//record user's letter choice.
    document.onkeyup = function(event) {
        userChoice.push(event.key);
        console.log('userChoice:',userChoice)
        document.getElementById("lettersGuessed").innerHTML = userChoice;
    }
    
    //compare computer choice to user choice.
    if (computerChoice === userChoice) {
        console.log("You won!");
        alert("You won!");
        document.getElementById("winCount").innerHTML = winCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
        guessesRemaining = 10;
        document.getElementById("guessesLeft").innerHTML = 10;
    } else {
        console.log("Guess again!");
        document.getElementById("guessesLeft").innerHTML = guessesLeft--;
        lettersGuessed.push(userChoice);
        console.log('lettersGuessed',lettersGuessed);
        console.log(1+1)
        console.log(userChoice)
        
        //ensure that the user selects a value between A and Z.
        //reset computer choice if the user loses.
            if (guessesLeft <= 0) {
                
                lossCount++;
                document.getElementById("lossCount").innerHTML = lossCount++;
                console.log("You lost!");
                alert("You lost!");
                guessesLeft = 10;
                guessedLetters = [];
                document.getElementById("guessedLetters").innerHTML = guessedLetters;
                document.getElementById("guessesLeft").innerHTML = 10;
                randomIndex = Math.floor(Math.random() * alphabet.length);
                computerChoice = alphabet[randomIndex];
                console.log('computerChoice:',computerChoice);
            }
        //this is an html element, but where is it in the html file (set id = letters guessed in html?
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        $("#guessesLeft").text(guessesLeft);
    }
    