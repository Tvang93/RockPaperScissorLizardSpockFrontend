import { HomeNav } from "./gamenav.js"

import {     
    Shoot,
    CpuChoiceImg, 
    NextRound, 
    CheckWinner, 
    ResetChoice  
} from "./shootbtnlogic.js"

const homeBtnContainer = document.getElementById("homeBtnContainer");
const homePlayBtn = document.getElementById("homePlayBtn");

const roundContainer = document.getElementById("roundContainer");
const round = document.getElementById("round");
const winner = document.getElementById("winner");

const userSelectionImg = document.getElementById("userSelectionImg");
const userSelectionPlaceHolder = document.getElementById("userSelectionPlaceHolder");
const cpuSelectionImg = document.getElementById("cpuSelectionImg");
const cpuSelectionPlaceHolder = document.getElementById("cpuSelectionPlaceHolder");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const lizardBtn = document.getElementById("lizardBtn");
const spockBtn = document.getElementById("spockBtn");
const shootBtn = document.getElementById("shootBtn");
const newGameBtn = document.getElementById("newGameBtn");
const p1ScoreBox1 = document.getElementById("p1ScoreBox1");
const pveResultsConatainer = document.getElementById("pveResultsConatainer");
const pveResults = document.getElementById("pveResults");
const pvePlayAgainBtn = document.getElementById("pvePlayAgainBtn");

let player1choice = "";
let player2choice = "";
let cpuChoice = "";
let player1Score = 0;
let player2Score = 0;
let cpuScore = 0;

let roundNumber = 1;
let pathname = window.location.pathname.slice(7);
console.log(pathname);
GetCpuChoice();

if(homePlayBtn !== null){
    homePlayBtn.addEventListener("click", function(){
    HomeNav();
    })
};

rockBtn.addEventListener("click", function(){
    player1choice = "rock";
    ResetChoice();
    rockBtn.classList = "active-selection";
});

paperBtn.addEventListener("click", function(){
    player1choice = "paper";
    ResetChoice();
    paperBtn.classList = "active-selection";
});

scissorBtn.addEventListener("click", function(){
    player1choice = "scissor";
    ResetChoice();
    scissorBtn.classList = "active-selection";
});

lizardBtn.addEventListener("click", function(){
    player1choice = "lizard";
    ResetChoice();
    lizardBtn.classList = "active-selection";
});

spockBtn.addEventListener("click", function(){
    player1choice = "spock";
    ResetChoice();
    spockBtn.classList = "active-selection";
});


shootBtn.addEventListener("click", function(){
    if(player1choice !== ""){
        GetCpuChoice();
        CpuChoiceImg();
        let num = Shoot(player1choice, cpuChoice);
        if(num == 1){
            player1Score++;
            p1ScoreBox1.style.backgroundColor = "rgb(4, 219, 0)";
            winner.innerText = `Player Wins ${round.innerText}!`;
            winner.style.color = "rgb(4, 219, 0)";
        }else if(num == 2){
            cpuScore++;
            cpuScoreBox1.style.backgroundColor = "rgb(219, 0, 0)";
            winner.innerText = `CPU Wins ${round.innerText}.`;
            winner.style.color = "rgb(219, 0, 0)";
        }else{
            winner.innerText = "Tie.";
            winner.style.color = "black";
        }
        NextRound();
        console.log(player1Score);
        CheckWinner(pathname);
    }
});

newGameBtn.addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = pathname;
    link.click();
});

pvePlayAgainBtn.addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = pathname;
    link.click();
});

async function GetCpuChoice() {
    const promise = await fetch('https://rckpprscrlzdspk-gnb2bqcpf6adgrdq.westus-01.azurewebsites.net/RckPprScrLzdSpk/CpuChoice');
    const data = await promise.text();
    cpuChoice = data;
}

