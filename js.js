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

console.log(getComputerChoice())

function getHumanChoice() {
     let invalidChoice = true;
    while (invalidChoice) {
        choice = prompt("Please choose rock, paper or scissors:");
        if ((choice == "rock") || (choice == "paper") || (choice == "scissors")) {
            invalidChoice = false;
        }
    }
    return choice;
}

console.log(getHumanChoice())
