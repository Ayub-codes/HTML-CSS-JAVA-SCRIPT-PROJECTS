let user = document.querySelector("#user_score")
let comp = document.querySelector("#comp_score")
let msg_container = document.querySelector(".msg")
let choices = document.querySelectorAll(".choice")

let user_score = 0
let comp_score = 0

const showWinner = (userWin)=>{
    if(userWin){
        user_score++
        user.textContent = user_score
        msg_container.textContent = "You Win!"
        msg_container.style.visibility = "visible"
        msg_container.classList.add("visible")
    }else{
        console.log("You Lose!");
        comp_score++
        comp.textContent = comp_score
        msg_container.textContent = "You Lose!"
        msg_container.style.visibility = "visible"
        msg_container.classList.add("visible")
    }
}

const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const gameDraw = ()=>{
    msg_container.textContent = "Game Draw!"
    
}

const playGame = (userChoice)=>{
    console.log("User Choice",userChoice);
    const compChoice = genCompChoice()
    console.log("Computer Choice",compChoice);

    if(userChoice === compChoice){
        gameDraw()
    }else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
           userWin = compChoice === "scissor" ? false : true
        }else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin)
    }
    
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("User Choice=",userChoice);
        playGame(userChoice)
    })
})
