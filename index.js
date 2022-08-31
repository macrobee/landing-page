let userChoice = null;
let computerChoice = { choice: 'Text' };

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const didWin = document.querySelector("#didwin");
const resultContainer = document.querySelector("#resultbox");
const gameResultImage = document.querySelector("#didwin");
const gameResultText = document.querySelector('#gameresult');

const choices = [{
    choice: "Rock",
    winsAgainst: "Scissors",
    losesAgainst: "Paper"
}, {
    choice: "Paper",
    winsAgainst: "Rock",
    losesAgainst: "Scissors"
}, {
    choice: "Scissors",
    winsAgainst: "Paper",
    losesAgainst: "Rock"
}]
    ;

rock.addEventListener("click", () => {
    runGame(choices[0]);
});
paper.addEventListener("click", () => {
    runGame(choices[1]);
});
scissors.addEventListener("click", () => {
    runGame(choices[2]);
});
// userInput = parseInt(prompt("Rock, Paper, or Scissors? (R/P/S)"));
// console.log(`You chose ${userChoice}`);

function runGame(userChoice) {
    console.log(`You chose ${userChoice.choice}`);
    computerChoice = makeComputerChoice();
    console.log(`Computer chose ${computerChoice.choice}`);
    console.log(didUserWin(userChoice, computerChoice));
}

function makeComputerChoice() {
    computerNumber = Math.floor(3 * Math.random());
    computerChoice = choices[computerNumber];
    console.log(computerChoice);
    return computerChoice;
}

function didUserWin(userChoice, computerChoice) {
    let gameResult = "";
    const resultText = {
        "win": `Computer chose ${computerChoice.choice}. You win! You're a hero to us all.`,
        "lose": `Computer chose ${computerChoice.choice}. Too bad! You lose! Play again soon`,
        "tie": `Computer chose ${computerChoice.choice} too. It's a tie! We're all winners.`
    }

    resultContainer.classList.remove("lose");
    resultContainer.classList.remove("tie");
    resultContainer.classList.remove("win");

    if (userChoice.winsAgainst == computerChoice.choice) {
        gameResult = "win";
    }
    else if (userChoice.losesAgainst == computerChoice.choice) {
        gameResult = "lose"
    }
    else {
        gameResult = "tie"
    }

    console.log(gameResult);
    gameResultImage.src = `./${gameResult}.jpg`;
    gameResultText.textContent = resultText[gameResult];
    resultContainer.classList.add(gameResult);
    return resultText[gameResult];
}
