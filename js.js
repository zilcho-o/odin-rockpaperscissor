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



    function playRound(computerChoice, humanChoice) {
        const p3 = document.createElement('p');
        options.parentNode.insertBefore(p3, options.nextSibling);
        const div = document.createElement("div");
        if (computerChoice == humanChoice) {
            div.textContent = "It's a tie.";
            p3.appendChild(div);

            return 
         }
         else if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                humanScore ++;
                div.textContent = "You win! Paper beats rock.";
                p3.appendChild(div);

                return 
            }
            else {
                computerScore ++;
                div.textContent = "You lose! Rock beats scissors.";
                p3.appendChild(div);
                return 
            }
         }
         else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                humanScore ++;
                div.textContent = "You win! Scissors beats paper.";
                p3.appendChild(div);
                return 
            }
            else {
                computerScore ++;
                div.textContent = "You lose! Paper beats rock.";
                p3.appendChild(div);
                return 
            }
         }
         else {
            if (humanChoice == "rock") {
                humanScore ++;
                div.textContent = "You win! Rock beats scissors.";
                p3.appendChild(div);
                return 
            }
            else {
                computerScore ++;
                div.textContent = "You lose! Scissors beats paper.";
                p3.appendChild(div);
                return 
            }
         }
    

    playRound(getComputerChoice(), getHumanChoice());
    /*
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
        */
}

function alertDelayWin() {
    confirm("You Win!");
}
function alertDelayLose() {
    confirm("You Lose!");
}

function checkGame() {
    if (humanScore == 5) {
        setTimeout(alertDelayWin, 10);
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        setTimeout(alertDelayLose, 10);
        humanScore = 0;
        computerScore = 0;
    }
}

const options = document.querySelector("#options");
const scoreselect = document.querySelector("#score");
const HScore = document.createElement('p');
const CScore = document.createElement('div');
HScore.textContent = "Player Score: "
CScore.textContent = "Computer Score: "
score.appendChild(HScore);
score.appendChild(CScore);

options.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound(getComputerChoice(), 'rock');
            HScore.textContent = "Player Score: " + humanScore;
            CScore.textContent = "Computer Score: " + computerScore;
            break;
        case 'paper':
            playRound(getComputerChoice(), 'paper');
            HScore.textContent = "Player Score: " + humanScore;
            CScore.textContent = "Computer Score: " + computerScore;
            break;
        case 'scissor':
            playRound(getComputerChoice(), 'scissors');
            HScore.textContent = "Player Score: " + humanScore;
            CScore.textContent = "Computer Score: " + computerScore;
            break;
    }
    checkGame();

});

