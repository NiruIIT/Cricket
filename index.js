let scoreStr=localStorage.getItem('Score');
// let score;
// if (scoreStr !== undefined){
//     score = JSON.parse(scoreStr);
// }else{
//     let score = {
//         wins: 0,
//         losses: 0,
//         ties: 0,
//     };
// }
//OR
let score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};



score.displayScore = function(){
    return `Won:${score.wins}, Lose:${score.losses}, Tie:${score.ties}`;
};

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
        score.ties++;
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'Bat' && computerChoice === 'Ball') ||
        (playerChoice === 'Ball' && computerChoice === 'Stump') ||
        (playerChoice === 'Stump' && computerChoice === 'Bat')
    ) {
        score.wins++;
        return 'You win!';
    } else {
        score.losses++;
        return 'You lose!';
    }
}

function showResult(userChoice, computerChoice, result) {
    localStorage.setItem('Score', JSON.stringify(score));
    alert(`You chose ${userChoice}!\nComputer chose ${computerChoice}.\n${result}
        \n${score.displayScore()}`
    );
    
}