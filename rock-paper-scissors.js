// This is a console-based implementation of Rock, Paper, Scissors
// Two players: Computer vs Player
// Each player chooses a use each round >>> playerChoice, computerChoice
// Determine winner of each turn
// Update Score
// Check if score has hit victory threshold
// If so, end game. If not, repeat above steps.

let playerScore = 0, compScore = 0;

const body = document.querySelector('body');
body.style.cssText = 'height: 100%; background-color: #4f4f4f';
const buttonsDiv = document.createElement('div');
const rockBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const paperBtn = document.createElement('button');

buttonsDiv.className = 'buttonsDiv';
rockBtn.className = 'button', paperBtn.className = 'button', scissorsBtn.className = 'button';

buttonsDiv.style.cssText = 'display: flex; flew-grow: 1; justify-content: center; \
align-items: center';
rockBtn.style.cssText = 'width: 200px; height: 50px; font-size: 24px; font-family: Impact; \
border: 2px solid black; border-radius: 15px; margin: 10px';
paperBtn.style.cssText = 'width: 200px; height: 50px; font-size: 24px; font-family: Impact; \
border: 2px solid black; border-radius: 15px; margin: 10px';
scissorsBtn.style.cssText = 'width: 200px; height: 50px; font-size: 24px; font-family: Impact; \
border: 2px solid black; border-radius: 15px; margin: 10px';

rockBtn.textContent = 'Rock';
scissorsBtn.textContent = 'Scissors';
paperBtn.textContent = 'Paper';

buttonsDiv.appendChild(rockBtn);
buttonsDiv.appendChild(paperBtn);
buttonsDiv.appendChild(scissorsBtn);
body.appendChild(buttonsDiv);

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', buttonClicked));

const scoreboard = document.createElement('div');
scoreboard.className = 'scoreboard';
scoreboard.style.cssText = 'display: flex; width: 100%; justify-content: space-evenly; \
font-size: 24px; font-family: helvetica; margin-top: 50px';
const playerScoreLabel = document.createElement('div');
playerScoreLabel.className = 'score';
playerScoreLabel.style.cssText = 'background-color: #6C63FF; width: 150px; text-align: center; \
padding: 10px';
const computerScoreLabel = document.createElement('div');
computerScoreLabel.className = 'score';
computerScoreLabel.style.cssText = 'background-color: #00BFA6; width: 150px; text-align: center; \
padding: 10px'

playerScoreLabel.textContent = "Player: " + playerScore;
computerScoreLabel.textContent = "Computer: " + compScore; 

scoreboard.appendChild(playerScoreLabel);
scoreboard.appendChild(computerScoreLabel);
body.appendChild(scoreboard);



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
            console.log('Something is wrong in playerSelection() function');
            return 'Error';
    }
}

function buttonClicked(e){
    round((e.target.textContent.toLowerCase()), computerPlay());
}

function round(playerMove, computerMove){
    if ((playerMove === 'rock' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'paper') || 
    (playerMove === 'scissors' && computerMove === 'scissors')){
        console.log("Draw!");
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors')){
        console.log("You win! Rock beats Scissors");
        playerScore += 1;
    }
    else if ((playerMove === 'rock' && computerMove === 'paper')){
        console.log("You lose! Paper beats Rock");
        compScore += 1;
    }
    else if ((playerMove === 'paper' && computerMove === 'scissors')){
        console.log("You lose! Scissors beats Paper");
        compScore += 1;
    }
    else if ((playerMove === 'paper' && computerMove === 'rock')){
        console.log("You win! Paper beats Rock");
        playerScore += 1;
    }
    else if ((playerMove === 'scissors' && computerMove === 'rock')){
        console.log("You lose! Rock beats Scissors");
        compScore += 1;
    }
    else if ((playerMove === 'scissors' && computerMove === 'paper')){
        console.log("You win! Scissors beats Paper");
        playerScore += 1;
    }
    else{
        console.log("Error");
    } 
}

function gameLoop(){

    round(playerSelection(), computerPlay());
    console.log(`Player: ${playerScore} Computer: ${compScore}`)
    
    // while (playerScore < 5 && compScore < 5){
    //     round(playerSelection(), computerPlay());
    //     console.log(`Player: ${playerScore} Computer: ${compScore}`)
    // }
    // if (playerScore === 5){
    //     console.log("Congratulations - you win!");
    // }
    // else{
    //     console.log("Hold this L.");
    // }
}

// gameLoop();