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


