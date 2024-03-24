let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg1=document.querySelector("#msg");

let userScore1=document.querySelector("#you-score");
let compScore1=document.querySelector("#comp-score");


choices.forEach( (choice) =>{
   
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });

});

const genCompChoice = () =>{
    //rock paper scrissor
    const options = ["rock", "paper","scrissor"];
    const randInx = Math.floor(Math.random()*3);
    return options[randInx];
};

const playGame = (userChoice) =>{

    //Generate computer choice modular
    const compChoice = genCompChoice();

        if(userChoice === compChoice){  //paper , rock, scrissor
           
            msg1.innerText= "Both choise are Same , So Draw!";
            msg1.style.backgroundColor = "Green";
            
        }else {    //paper
                let userWin = true;
                if(userChoice === "rock"){
                    userWin = compChoice === "paper" ?  false : true ;

                }else if(userChoice === "paper" ){

                    userWin = compChoice === "scrissor" ?  false : true ;
                }else if(userChoice === "scrissor") {
                    if(userChoice === compChoice){  //paper , rock, scrissor
           
                        msg1.innerText= "Both choise are Same , So Draw!";
                        msg1.style.backgroundColor = "Green";
                    }
                    userWin = compChoice === "rock" ? false : true ;
                    
                }
                 showWinner(userWin,userChoice,compChoice);
        }
};

const showWinner = (userWin,userChoice,compChoice) =>{
        if(userWin){
            userScore++;
            userScore1.innerText = userScore;
            msg1.innerText = ` You Win! Your ${userChoice} beats ${compChoice}`;
            msg1.style.backgroundColor = "Green";
        }else{
            computerScore++;
            compScore1.innerText = computerScore;
            msg1.innerText = ` Computer Win!  Computer ${compChoice} beats ${userChoice}`;
            msg1.style.backgroundColor = "red";
        }
    }

