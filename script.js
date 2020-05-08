const MOVES = ["rock", "paper", "scissors"];
const results = document.querySelector('div.result');

let playerText = document.querySelector('div.player')
let computerText = document.querySelector('div.computer')
let computerScoreText = document.createElement('p');
let playerScoreText = document.createElement('p');

let computerScore = 0;
let playerScore = 0;
let firstRound = true;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const rockSVG = document.querySelector('#rocksvg')
const paperSVG = document.querySelector('#papersvg')
const scissorsSVG = document.querySelector('#scissorssvg')

const robotSVG = document.querySelector('#robotsvg')

function computerPlay() {
    return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function checkFirst() {
    
    if (firstRound == true) {

        playerText.appendChild(playerScoreText);
        computerText.appendChild(computerScoreText);
        
        playerScoreText.innerHTML = `Player: ${playerScore}`;
        computerScoreText.innerHTML = `Computer: ${computerScore}`;

        firstRound = false;
    }
}
function addComputer() {

    checkFirst();

    robotSVG.classList.add('enlarge');

    computerText.innerHTML = "";
    computerText.appendChild(computerScoreText);
    computerScoreText.innerHTML = `Computer: ${computerScore}`;
}

function addPlayer() {

    checkFirst();

    playerText.innerHTML = "";
    playerText.appendChild(playerScoreText);
    playerScoreText.innerHTML = `Player: ${playerScore}`;
}
function playRound(player,computer) {


    if (player == computer) 
    {
        checkFirst();
        return `Its a tie! both moves are ${player}`;
    }

    else if (player == "rock") 
    {
        if (computer == "paper") {
            computerScore++;
            addComputer();
            return `You Lose! ${computer} beats ${player}`;
        }

        else {
            playerScore++;
            addPlayer()
            return `You win! ${player} beats ${computer}`;
        }
    }

    else if (player =="paper") 
    {
        if (computer == "scissors") {
            computerScore++;
            addComputer();
            return `You Lose! ${computer} beats ${player}`;
        }
        
        else {
            playerScore++;
            addPlayer()
            return `You win! ${player} beats ${computer}`;
        }
    }

    else if (player =="scissors") 
    {
        if (computer == "rock") {
            computerScore++;
            addComputer();
            return `You Lose! ${computer} beats ${player}`;
        }
        
        else {
            playerScore++;
            addPlayer()
            return `You win! ${player} beats ${computer}`;
        }
    }
    
}

function game(playerSelection) {

    if (computerScore > 0 || playerScore > 0 || firstRound == false) {
        results.innerHTML = "";
    }
    let computerSelection = computerPlay()
    
    let result = document.createElement('p');
    results.appendChild(result);
    result.innerHTML = playRound(playerSelection, computerSelection);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('enlarge');
  }

const svg = Array.from(document.querySelectorAll('svg'));
svg.forEach(svg => svg.addEventListener('transitionend', removeTransition));


rockButton.onclick = function(){
    game('rock');
    rockSVG.classList.add('enlarge');
};
paperButton.onclick = function(){
    game('rock');
    paperSVG.classList.add('enlarge');
};
scissorsButton.onclick = function(){
    game('rock')
    scissorsSVG.classList.add('enlarge');
};

