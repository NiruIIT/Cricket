let computerChoice;
function generateComputerChoice() {
    //This will generate random no between 0 and 3
    let randomNumber = Math.random() * 3;
    if (randomNumber>0 && randomNumber<1) {
        computerChoice = 'Bat';
    } else if (randomNumber>1 && randomNumber<2) {
        computerChoice = 'Ball';
    } else if (randomNumber>2 && randomNumber<3) {
        computerChoice = 'Stump';
    }
    return computerChoice;
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'Bat' && computerChoice === 'Ball') ||
        (playerChoice === 'Ball' && computerChoice === 'Stump') ||
        (playerChoice === 'Stump' && computerChoice === 'Bat')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function showResult(userChoice, computerChoice, result) {
    alert(`You chose ${userChoice}!\nComputer chose ${computerChoice}.\n${result}`);
}