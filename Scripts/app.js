import { HomeNav } from "./gamenav.js"

import {     
    Shoot,
    CpuChoiceImg, 
    UserChoiceImg,
    CheckWinner,
    NextRound  
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
const choiceBtns = [
    document.getElementById("rockBtn"),
    document.getElementById("paperBtn"),
    document.getElementById("scissorBtn"),
    document.getElementById("lizardBtn"),
    document.getElementById("spockBtn")
];
const shootBtn = document.getElementById("shootBtn");
const newGameBtn = document.getElementById("newGameBtn");
const p1ScoreBox = [
    document.getElementById("p1ScoreBox1"),
    document.getElementById("p1ScoreBox2"),
    document.getElementById("p1ScoreBox3"),
    document.getElementById("p1ScoreBox4"),
];
const cpuScoreBox = [
    document.getElementById("cpuScoreBox1"),
    document.getElementById("cpuScoreBox2"),
    document.getElementById("cpuScoreBox3"),
    document.getElementById("cpuScoreBox4"),
];
const pveResultsConatainer = document.getElementById("pveResultsConatainer");
const pveResults = document.getElementById("pveResults");
const pvePlayAgainBtn = document.getElementById("pvePlayAgainBtn");

let player1choice = "";
let player2choice = "";
let cpuChoice = "";
let player1Score = 0;
let player2Score = 0;
let cpuScore = 0;

let pathname = window.location.pathname.slice(7);
GetCpuChoice();

if(homePlayBtn !== null){
    homePlayBtn.addEventListener("click", function(){
    HomeNav();
    })
};

choiceBtns[0].addEventListener("click", function(){
    player1choice = "rock";
    ResetChoice();
    rockBtn.classList = "active-selection";
});

choiceBtns[1].addEventListener("click", function(){
    player1choice = "paper";
    ResetChoice();
    paperBtn.classList = "active-selection";
});

choiceBtns[2].addEventListener("click", function(){
    player1choice = "scissor";
    ResetChoice();
    scissorBtn.classList = "active-selection";
});

choiceBtns[3].addEventListener("click", function(){
    player1choice = "lizard";
    ResetChoice();
    lizardBtn.classList = "active-selection";
});

choiceBtns[4].addEventListener("click", function(){
    player1choice = "spock";
    ResetChoice();
    spockBtn.classList = "active-selection";
});


shootBtn.addEventListener("click", function(){
    if(player1choice !== ""){
        GetCpuChoice();
        CpuChoiceImg(cpuChoice);
        UserChoiceImg(player1choice);
        let num = Shoot(player1choice, cpuChoice);
        if(num == 1){
            player1Score++;
            p1ScoreBox[player1Score-1].style.backgroundColor = "rgb(4, 219, 0)";
            winner.innerText = `Player Won Last Round!`;
            winner.style.color = "rgb(4, 219, 0)";
        }else if(num == 2){
            cpuScore++;
            cpuScoreBox[cpuScore-1].style.backgroundColor = "rgb(219, 0, 0)";
            winner.innerText = `CPU Won Last Round.`;
            winner.style.color = "rgb(219, 0, 0)";
        }else{
            winner.innerText = "Tie.";
            winner.style.color = "black";
        }
        NextRound(pathname);
        CheckWinner(player1Score, cpuScore, pathname);
    }
});

newGameBtn.addEventListener("click", function(){
    ReloadPage();
});

pvePlayAgainBtn.addEventListener("click", function(){
    ReloadPage();
});

async function GetCpuChoice() {
    const promise = await fetch('https://rckpprscrlzdspk-gnb2bqcpf6adgrdq.westus-01.azurewebsites.net/RckPprScrLzdSpk/CpuChoice');
    const data = await promise.text();
    cpuChoice = data;
}

function ResetChoice(){
    choiceBtns.forEach(button => button.classList.remove("active-selection"))
}

function ReloadPage(){
    const link = document.createElement("a");
    link.href = pathname;
    link.click();
}