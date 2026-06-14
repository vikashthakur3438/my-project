// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector(".reset");
// let newgamebtn=document.querySelector("#newbtn");
// let msgcontainer=document.querySelector(".msg-container");
// let msg=document.querySelector("#msg");
// let turnO = true;

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {

//         console.log("box was clicked");

//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }

//         box.disabled = true;
//         checkwinner();
//     });
// });
// const reestgame=()=>{
//     turnO=true;
//     enableboxes();
//     msgcontainer.classList("hide");
// };
// const disabledbtns=()=>{
//     for(let box of boxes){
//         box.disabled=true;
//     }
// }    
// const enableboxes=()=>{
//     for(let box of boxes){
//         box.enable=true;
//         box.innerText="";
//     }    
// }
// const showwinner=(winner)=>{
//     msg.innerText=`congratulation,winner is ${winner} `
//     disabledbtns();
// }
// const checkwinner= ()=>{
//     for( let pattarn of winPatterns){
//         // console.log(pattarn[0],pattarn[1],pattarn[3])
//         // console.log(boxespattarn[0].innerText,boxespattarn[1].innerText,boxespattarn[3].innerText);
//         let pos1val = boxes[pattarn[0]].innerText;
//         let pos2val = boxes[pattarn[1]].innerText;
//         let pos3val = boxes[pattarn[2]].innerText;
//         if(pos1val!=""&&pos2val!=""&&pos3val!=""){
//             if(pos1val===pos2val && pos2val===pos3val){
//                 console.log("winner",pos1val);
//                 showwinner(pos1val);            
//             }
//         }
        
//     }
// }
// newgamebtn.addEventListener("click",reest);
// reest.addEventListener("click",reest);
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
];

// Box Click
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "brown";
            turnO = true;
        }

        box.disabled = true;

        checkwinner();
    });
});

// Reset Game
const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

// Disable All Boxes
const disabledbtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

// Enable All Boxes
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.color = "";
    }
};

// Show Winner
const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtns();
};


// Check Winner
const checkwinner = () => {

    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){

            if(pos1val === pos2val && pos2val === pos3val){

                showwinner(pos1val);
            }
        }
    }
};

// Buttons
newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
