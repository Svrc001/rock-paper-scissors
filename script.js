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

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors!");
     
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        console.log(`Its a tie! ${humanChoice} and ${computerChoice}`);
    }

    else if((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper")) {

        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 

    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}

function playGame() {

    for(let i=0; i<5; i++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        console.log(`You won against the Computer with scores ${humanScore} and ${computerScore} respectively`);
    }
    else if(humanScore < computerScore) {
        console.log(`You lost against the Computer with scores ${humanScore} and ${computerScore} respectively`);
    }
    else {
        console.log(`Its a tie with scores ${humanScore} and ${computerScore} respectively`);
    }

}

playGame();


