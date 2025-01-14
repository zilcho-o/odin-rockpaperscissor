let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.random();
    if (choice <=0.3) {
        return "rock";
    }
    else if (choice <=0.6) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
     let invalidChoice = true;
    while (invalidChoice) {
        choice = prompt("Please choose rock, paper or scissors:").toLowerCase();
        if ((choice == "rock") || (choice == "paper") || (choice == "scissors")) {
            invalidChoice = false;
        }
    }
    return choice;
}


function playGame() {
    function playRound(computerChoice, humanChoice) {
        console.log(computerChoice, humanChoice)
        if (computerChoice == humanChoice) {
            return console.log("It's a tie.");
         }
         else if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                humanScore ++;
                return console.log("You win! Paper beats rock.");
            }
            else {
                computerScore ++;
                return console.log("You lose! Rock beats scissors.");
            }
         }
         else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                humanScore ++;
                return console.log("You win! Scissors beats paper.");
            }
            else {
                computerScore ++;
                return console.log("You lose! Paper beats rock.");
            }
         }
         else {
            if (humanChoice == "rock") {
                humanScore ++;
                return console.log("You win! Rock beats scissors.");
            }
            else {
                computerScore ++;
                return console.log("You lose! Scissors beats paper.");
            }
         }
    }
    
    round = 5;
    for (i=0; i<round; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (humanScore>computerScore) {
        return "You're the winner!";
    }
    else if (humanScore<computerScore) {
        return "You're a loser!";
    }
    else {
        return "It's a tie.";
    }
}

console.log(playGame())