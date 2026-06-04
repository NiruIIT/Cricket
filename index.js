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