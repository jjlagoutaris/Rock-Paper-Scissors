// This is a console-based implementation of Rock, Paper, Scissors
// Two players: Computer vs Player
// Each player chooses a use each round >>> playerChoice, computerChoice
// Determine winner of each turn
// Update Score
// Check if score has hit victory threshold
// If so, end game. If not, repeat above steps.

let playerScore = 0; 
let compScore = 0;

const body = document.querySelector('body');
body.style.cssText = 'height: 100%; background-color: #4f4f4f; background-image: url("background.jpg"); background-size: cover';
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
buttons.forEach(button => button.addEventListener('click', round));

const scoreboard = document.createElement('div');
scoreboard.className = 'scoreboard';
scoreboard.style.cssText = 'display: flex; width: 100%; height: 150px;\
justify-content: space-around; align-items: center; font-size: 24px;\
font-family: helvetica; margin-top: 50px';
const playerScoreLabel = document.createElement('div');
playerScoreLabel.className = 'score';
playerScoreLabel.style.cssText = 'background-color: #6C63FF; width: 150px; text-align: center; \
padding: 10px';
const computerScoreLabel = document.createElement('div');
computerScoreLabel.className = 'score';
computerScoreLabel.style.cssText = 'background-color: #00BFA6; width: 150px; text-align: center; \
padding: 10px'

playerScoreLabel.textContent = "Player: " + String(playerScore);
computerScoreLabel.textContent = "Computer: " + String(compScore); 

const roundResult = document.createElement('p');
roundResult.style.cssText = 'width: 200px; text-align: center; justify-content:\
center; padding: 10px';

scoreboard.appendChild(playerScoreLabel);
scoreboard.appendChild(roundResult);
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
    }
}

function round(e){
    let playerMove = e.target.textContent.toLowerCase();
    let computerMove = computerPlay();

    if (playerMove === computerMove){
        roundResult.textContent = 'Draw!';
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors')){
        roundResult.textContent = 'You win! Rock beats Scissors.';
        playerScore++;
        updateScore();
    }
    else if ((playerMove === 'rock' && computerMove === 'paper')){
        roundResult.textContent = 'You lose! Paper beats Rock.';
        compScore++;
        updateScore();
    }
    else if ((playerMove === 'paper' && computerMove === 'scissors')){
        roundResult.textContent = "You lose! Scissors beats Paper.";
        compScore++;
        updateScore();
    }
    else if ((playerMove === 'paper' && computerMove === 'rock')){
        roundResult.textContent = "You win! Paper beats Rock.";
        playerScore++;
        updateScore();
    }
    else if ((playerMove === 'scissors' && computerMove === 'rock')){
        roundResult.textContent = "You lose! Rock beats Scissors.";
        compScore++;
        updateScore();
    }
    else if ((playerMove === 'scissors' && computerMove === 'paper')){
        roundResult.textContent = "You win! Scissors beats Paper.";
        playerScore++;
        updateScore();
    }
    else{
        roundResult.textContent = "Error";
        updateScore();
    } 
}

function updateScore(){
    playerScoreLabel.textContent = "Player: " + String(playerScore);
    computerScoreLabel.textContent = "Computer: " + String(compScore);
    gameManagement(); 
}

function gameManagement(){
    if (playerScore >= 5){
        roundResult.textContent = "You won!";
        playerScore = 0, compScore = 0;
    }
    else if (compScore >= 5){
        roundResult.textContent = "Hold this L!";
        playerScore = 0, compScore = 0;
    }
}