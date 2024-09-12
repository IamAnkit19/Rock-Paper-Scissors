let userscore = 0;
let computerscore = 0;

const uscore = document.querySelector(".user");
const cscore = document.querySelector(".computer");
const choices = document.querySelectorAll(".choice");
const reset_btn = document.querySelector(".r-btn");
message = document.querySelector(".winner-box");

const compChoice = ()=>{
    computer = "";
    options = ["rock","paper","scissor"];
    random = Math.random();
    if(random<0.33){
        computer = options[0];
    }
    else if(random>0.33 && random<0.66){
        computer = options[1];
    }
    else{
        computer = options[2];
    }
    return computer;
}

reset_btn.addEventListener("click",()=>{
    userscore = 0;
    uscore.innerText = userscore;
    computerscore = 0;
    cscore.innerText = computerscore;
    message.innerText = "Play your move";
    message.style.backgroundColor = "rgb(19, 90, 90)";
})

const showWinner = (userwin)=>{
    if(userwin){
        userscore++;
        uscore.innerText = userscore;
        message.innerText = "You Win!";
        message.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        cscore.innerText = computerscore;
        message.innerText = "You Lose!";
        message.style.backgroundColor = "red";
    }
}

const playGame = (userchoice)=>{
    computer=compChoice();
    console.log(computer);
    if(userchoice===computer){
        message.innerText = "It's a Draw";
        message.style.backgroundColor = "blue";
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = computer === "paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin = computer === "scissor" ? false : true;
        }
        else{
            userwin = computer === "rock" ? false : true;
        }
        showWinner(userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log(userchoice);
        playGame(userchoice);
    })
})