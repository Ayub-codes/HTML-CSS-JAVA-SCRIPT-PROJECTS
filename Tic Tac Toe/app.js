let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let NewGamebtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;       
let turn0 = true;    


const winPattren = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turn0 = true;
    count = 0;               
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = "";
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.color = "black"; 
    }
}


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    let winnerFound = false;

    for(let pattern of winPattren){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                winnerFound = true;
                break;
            }
        }
    }

    
    if(!winnerFound && count === 9){
        msg.innerText = "Game is a Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0 === true){
            box.innerText = "O";
            box.style.color = "red";  
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "black"; 
            turn0 = true;
        }
        box.disabled = true;
        count++; 
        checkWinner();
    });
});


NewGamebtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);
