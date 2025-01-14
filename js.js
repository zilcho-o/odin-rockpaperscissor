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

function playRound(computerChoice, humanChoice) {
    console.log(computerChoice, humanChoice)
    if (computerChoice == humanChoice) {
        return "It's a tie.";
     }
     else if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            humanScore ++;
            return "You win! Paper beats rock.";
        }
        else {
            computerScore ++;
            return "You lose! Rock beats scissors.";
        }
     }
     else if (computerChoice == "paper") {
        if (humanChoice == "scissors") {
            humanScore ++;
            return "You win! Scissors beats paper.";
        }
        else {
            computerScore ++;
            return "You lose! Paper beats rock.";
        }
     }
     else {
        if (humanChoice == "rock") {
            humanScore ++;
            return "You win! Rock beats scissors.";
        }
        else {
            computerScore ++;
            return "You lose! Scissors beats paper.";
        }
     }
}

console.log(playRound(getComputerChoice(), getHumanChoice()))
