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