import{startConfetti,stopConfetti,removeConfetti} from "./confetti.js";
  
const playerScoreEl=document.getElementById("playerScore");
const playerChoiceEl=document.getElementById("playerChoice");
const computerScoreEl=document.getElementById("computerScore");
const computerChoiceEl=document.getElementById("computerChoice");
const resultText=document.getElementById("resultText");

const computerRock=document.getElementById("computerRock");
const computerPaper=document.getElementById("computerPaper");
const computerScissores=document.getElementById("computerScissores");
const computerLizard=document.getElementById("computerLizard");
const computerSpock=document.getElementById("computerSpock");

const allGameIcons=document.querySelectorAll(".far");
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber=0;
let computerScoreNumber=0;
let computerChoice="";

console.log(allGameIcons);

function resetSelected(){

  //Reset all "selected" icon
   allGameIcons.forEach((icon)=>{
     icon.classList.remove("selected")
   });
   stopConfetti();
   removeConfetti();
}
//Reset Score & playerChoice /computer Choice
function resetAll()
{ playerScoreNumber=0;
  computerScoreNumber=0;
  playerScoreEl.textContent=playerScoreNumber;
  computerScoreEl.textContent=computerScoreNumber;
  playerChoiceEl.textContent="";
  computerChoiceEl.textConent="";
  resultText.textContent="";
  resetSelected();


}
window.resetAll=resetAll;
//Random computer choice 
function computerRandomChoice(){
  const computerChoiceNumber=Math.random();
  
    if(computerChoiceNumber<0.2){
      computerChoice="rock";
    }
    else if(computerChoiceNumber <=0.4){
      computerChoice="paper";
    }
    else if(computerChoiceNumber <=0.6){
      computerChoice="scissors";
    }
    else if (computerChoiceNumber <=0.8){
      computerChoice="lizard";
    }
    else {
  
    

      computerChoice="spock";
    }
    console.log(computerChoice);
}
function displayComputerChoice(){

  
 
//Add 'selected"styling &playerChoice

switch(computerChoice){
  case "rock":
    computerRock.classList.add("selected");
    computerChoiceEl.textContent="---rock";
    break;
    
      case "paper":
        computerPaper.classList.add("selected");
        computerChoiceEl.textContent="---Paper";
        break;
        case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent="---Scissors";
      break;
        case "lizard":
          computerLizard.classList.add("selected");
          computerChoiceEl.textContent="---Lizard";
          break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent="---Spock";
      break;
        }
}
//check result ,increase cores ,updatee resulteupdate
function updateScore(playerChoice)
{
   
   if(playerChoice === computerChoice){
     resultText.textContent="its a tie .";
   }
   else {
     const choice=choices[playerChoice];
     console.log(choice.defeats.indexOf(computerChoice));
     if(choice.defeats.indexOf(computerChoice)>-1){
       startConfetti();
       resultText.textContent="You Won";
       playerScoreNumber++;
       playerScoreEl.textContent=playerScoreNumber;
     }
     else {
       resultText.textContent="you Lost";
      // stopConfetti();
       computerScoreNumber++;
       computerScoreEl.textContent=computerScoreNumber;
     }
   }
}

function checkResult(playerChoice)
{
    resetSelected();
    displayComputerChoice();
    computerRandomChoice();
    updateScore(playerChoice);
}



//Passing player selection value and styling icons 
function select(playerChoice){

  checkResult(playerChoice);
  computerRandomChoice();
//Add 'selected"styling &playerChoice

switch(playerChoice){
  case "rock":
    playerRock.classList.add("selected");
    playerChoiceEl.textContent="---rock";
    break;
    
      case "paper":
        playerPaper.classList.add("selected");
        playerChoiceEl.textContent="---Paper";
        break;
        case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent="---Scissors";
      break;
        case "lizard":
          playerLizard.classList.add("selected");
          playerChoiceEl.textContent="---Lizard";
          break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent="---Spock";
      break;
        }
}
window.select=select;



