let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const drawGame = () => {
    //console.log("game was Draw");
    msg.innerText = "Game Draw!! Play Again";
    msg.style.backgroundColor = "black";
};

// accessing initial scores
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// need to change paragraph 
const msg = document.querySelector("#msg");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Win!!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice=",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice=", compChoice);
    // main logic
    if (userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
