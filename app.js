let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame = () =>{
    console.log("The game is draw");
    msg.innerText= "Game was draw. Play again";
}

const showWinner =(userWin) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText = "you win!";

    }else{
        console.log("you lose!");
        msg.innerText = "you lose";
    }
}

const playGame  = (userChoice) => {
    console.log("user choice =", userChoice);

    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false: true;
        }else {
            //rock, paper
            userWin = compChoice === "rock" ? false: true;
         }
         showWinner(userWin);
        }
    }

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})