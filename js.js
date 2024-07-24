let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let body = document.querySelector("body");
let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");
let reset = document.querySelector("#refresh");


const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Play your move";
    body.style.backgroundColor = "white";
}
reset.addEventListener("click", resetGame);

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
    
}

const drawGame=()=>{
    msg.innerText="Nobody wins, its a tie";
    body.style.backgroundColor = "white";

}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText="Congratulations, You won";
        body.style.backgroundColor = "Yellow";
        
    }
    else{
        computerScore++;
        computerScorePara.innerText= computerScore;
        msg.innerText="Oh no, Computer wins";
        body.style.backgroundColor = "gray";

    }
}
const enableBoxes=()=>{
    userScore.disa
}

const playGame=(userChoice)=>{
    //generate computer choice
    const computerChoice = genComputerChoice();

    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin=computerChoice==="scissors"?true :false;
        }
        else if(userChoice=="paper"){
            userWin=computerChoice==="rock"?true: false;
        }
        else{
            userWin= computerChoice==="paper"? true: false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})