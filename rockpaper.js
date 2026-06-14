// let usersocure=0;
// let compsocure=0;
// const choices=document.querySelectorAll(".choice");
// const gencompchoice=()=>{
//     const option=["rock","paper","scissor"];
//     const randindx=Math.floor(math.random()*3);
//     return option[randindx];
// }
// const playgame=(userchoice)=>{
//     console.log("user choice=",userchoice);
//     const compchoice=gencompchoice();
//     console.log("comp",compchoice);
// };
// choices.forEach((choice)=>{
//     console.log(choice);
//     choice.addEventListener("click",()=>{
//         const userchoice=choice.getAttribute("id");
//         console.log("choice was clicked",userchoice);
//         playgame(userchoice);
//     })
let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#you-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    msg.innerHTML="game was draw";
    msg.style.backgroundColor="blue";
};

const showwinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerHTML=userscore
        console.log("you win");
        msg.innerHTML=`you win ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compscore++;
        compscorepara.innerHTML=compscore;
        msg.innerHTML=`you lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;

        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }else {
            userwin = compChoice === "rock" ? false : true;
        }

        showwinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        console.log("Choice was clicked", userChoice);

        playGame(userChoice);
    });
});