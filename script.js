let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    //Generate random number between 0 and 2
    let random_number = Math.floor(Math.random() * 3);

    switch(random_number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}



function playRound(humanChoice, computerChoice) {

    const para = document.querySelector('.running-score');     

    if(humanChoice === computerChoice) {
        para.textContent = `You: ${humanScore} Computer: ${computerScore}. Its a tie! ${humanChoice} and ${computerChoice}`;
    }

    else if((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper")) {

        humanScore++;
        para.textContent = `You: ${humanScore} Computer: ${computerScore}. You won! ${humanChoice} beats ${computerChoice}`;
    } 

    else {
        computerScore++;
        para.textContent = `You: ${humanScore} Computer: ${computerScore}. You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function play(event) {
    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();

    const winner = document.querySelector('.winner');
    if(winner) {
        winner.remove();
    }

    playRound(humanChoice, computerChoice);

    if(humanScore === 5 || computerScore === 5) {
        getWinner();

        //reset the score
        humanScore = 0;
        computerScore = 0;

    }

}

function getWinner() {
    const resultsDiv = document.querySelector('.results');
    const winner = document.createElement('h3');
    winner.setAttribute('class', 'winner');

    if(humanScore > computerScore) {
        winner.textContent = `You won against the Computer with scores ${humanScore} and ${computerScore} respectively`;
    }
    else if(humanScore < computerScore) {
        winner.textContent = `You lost against the Computer with scores ${humanScore} and ${computerScore} respectively`;
    }
    else {
        winner.textContent = `Its a tie with scores ${humanScore} and ${computerScore} respectively`;
    }

    resultsDiv.appendChild(winner);    
}

function playGame() {
   
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');

    rock.addEventListener('click', play);
    paper.addEventListener('click', play);
    scissors.addEventListener('click', play);   

}

playGame();


