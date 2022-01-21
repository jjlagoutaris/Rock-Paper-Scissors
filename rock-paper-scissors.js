// This is a console-based implementation of Rock, Paper, Scissors
// Two players: Computer vs Player
// Each player chooses a use each round >>> playerChoice, computerChoice
// Determine winner of each turn
// Update Score
// Check if score has hit victory threshold
// If so, end game. If not, repeat above steps.

function computerPlay(){
    let number = Math.floor(Math.random() * 3) + 1;
    switch(number){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return 'Error';
            console.log('Something is wrong in playerSelection() function');
    }
}

function playerSelection(){
    input = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (input === 'rock' || input === 'paper' || input === 'scissors'){
        return input;
    }
    else{
        console.log('Error in playerSelection()');
        return 'Error in playerSelection()';
    }
}

function round(playerMove, computerMove){
    if ((playerMove === 'rock' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'paper') || 
    (playerMove === 'scissors' && computerMove === 'scissors')){
        console.log("Draw!");
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors')){
        console.log("You win! Rock beats Scissors");
    }
    else if ((playerMove === 'rock' && computerMove === 'paper')){
        console.log("You lose! Paper beats Rock");
    }
    else if ((playerMove === 'paper' && computerMove === 'scissors')){
        console.log("You lose! Scissors beats Paper");
    }
    else if ((playerMove === 'paper' && computerMove === 'rock')){
        console.log("You win! Paper beats Rock");
    }
    else if ((playerMove === 'scissors' && computerMove === 'rock')){
        console.log("You lose! Rock beats Scissors");
    }
    else if ((playerMove === 'scissors' && computerMove === 'paper')){
        console.log("You win! Scissors beats Paper");
    }
    else{
        console.log("Error");
    } 
}

// function gameLoop(){

// }

// round(playerSelection(), computerPlay());