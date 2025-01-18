import { HomeNav, pveLink } from "./gamenav.js"
import { Shoot } from "./gamebtnlogic.js"

const homeBtnContainer = document.getElementById("homeBtnContainer");
const homePlayBtn = document.getElementById("homePlayBtn");

const roundContainer = document.getElementById("roundContainer");
const round = document.getElementById("round");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const lizardBtn = document.getElementById("lizardBtn");
const spockBtn = document.getElementById("spockBtn");
const shootBtn = document.getElementById("shootBtn");
const newGameBtn = document.getElementById("newGameBtn");
const p1ScoreBox1 = document.getElementById("p1ScoreBox1")

let player1choice = "";
let player2choice = "";
let cpuChoice = "";
let player1Score = 0;
let player2Score = 0;
let cpuScore = 0;

let roundNumber = 1;


GetCpuChoice();

if(homePlayBtn !== null){
    homePlayBtn.addEventListener("click", function(){
    HomeNav();
    })
}

rockBtn.addEventListener("click", function(){
    player1choice = "rock";
    ResetChoice();
    rockBtn.classList = "active-selection";
    console.log(player1choice);
})

paperBtn.addEventListener("click", function(){
    player1choice = "paper";
    ResetChoice();
    paperBtn.classList = "active-selection";
    console.log(player1choice);
})

scissorBtn.addEventListener("click", function(){
    player1choice = "scissor";
    ResetChoice();
    scissorBtn.classList = "active-selection";
    console.log(player1choice);
})

lizardBtn.addEventListener("click", function(){
    player1choice = "lizard";
    ResetChoice();
    lizardBtn.classList = "active-selection";
    console.log(player1choice);
})

spockBtn.addEventListener("click", function(){
    player1choice = "spock";
    ResetChoice();
    spockBtn.classList = "active-selection";
    console.log(player1choice);
})


shootBtn.addEventListener("click", function(){
    if(player1choice !== ""){
        GetCpuChoice();
        let num = Shoot(player1choice, cpuChoice);
        if(num == 1){
            player1Score++;
            NextRound();
            p1ScoreBox1.style.backgroundColor ="rgb(4, 219, 0)";
        }else if(num == 2){
            cpuScore++;
            NextRound();
            cpuScoreBox1.style.backgroundColor ="rgb(219, 0, 0)";
        }else{
            NextRound();
        }
    }
})



async function GetCpuChoice() {
    const promise = await fetch('https://rckpprscrlzdspk-gnb2bqcpf6adgrdq.westus-01.azurewebsites.net/RckPprScrLzdSpk/CpuChoice');
    const data = await promise.text();
    cpuChoice = data;
}

function NextRound(){
    roundNumber++;
    round.innerText = `Round ${roundNumber}`;
}

function ResetChoice(){
    rockBtn.classList = "";
    paperBtn.classList = "";
    scissorBtn.classList = "";
    lizardBtn.classList = "";
    spockBtn.classList = "";
}