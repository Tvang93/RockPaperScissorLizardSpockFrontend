const rulesBtn = document.getElementById("rulesBtn");
const closeRulesBtn = document.getElementById("closeRulesBtn");
const rulesSection = document.getElementById("rulesSection");

const cpuSelectionPlaceHolder = document.getElementById("cpuSelectionPlaceHolder");
const cpuSelectionImg = document.getElementById("cpuSelectionImg");
const userSelectionPlaceHolder = document.getElementById("userSelectionPlaceHolder");
const userSelectionImg = document.getElementById("userSelectionImg");
const roundContainer = document.getElementById("roundContainer");
const round = document.getElementById("round");
const winner = document.getElementById("winner");
const pveResultsConatainer = document.getElementById("pveResultsConatainer");
const pveResults = document.getElementById("pveResults");
const pvePlayAgainBtn = document.getElementById("pvePlayAgainBtn");
const newGameBtn = document.getElementById("newGameBtn")

const p1Ready = document.getElementById("p1Ready");
const p2Ready = document.getElementById("p2Ready");
const pvpWinner = document.getElementById("pvpWinner");
const inputBox = document.getElementById("inputBox");

const p1ScoreBox = [
    document.getElementById("p1ScoreBox1"),
    document.getElementById("p1ScoreBox2")
];
const p2ScoreBox = [
    document.getElementById("cpuScoreBox1"),
    document.getElementById("cpuScoreBox2")
]

let p1Choice = "";
let p2Choice = "";
let p1Score = 0;
let p2Score = 0;
let p1IsReady = false;
let p2IsReady = false;
let roundNumber = 1;
const beats = {
    rock: ["scissor", "lizard"],
    paper: ["rock", "spock"],
    scissor: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissor"],
}
let pathname = window.location.pathname.slice(7);

rulesBtn.addEventListener("click", function(){
    rulesSection.style.display = "flex";
    inputBox.style.display = "none";
})

closeRulesBtn.addEventListener("click", function(){
    rulesSection.style.display = "none";
    if(pveResultsConatainer.style.display !== "flex"){
        inputBox.style.display = "block";
    }
})

inputBox.addEventListener("keypress", function(event){
    console.log(event.key);
    switch(event.key){
        case "w":
            P1Choosing("rock");
            PlayerVsPlayer();
            break;
        case "a":
            P1Choosing("paper");
            PlayerVsPlayer();
            break;
        case "s":
            P1Choosing("scissor");
            PlayerVsPlayer();
            break;
        case "d":
            P1Choosing("lizard");
            PlayerVsPlayer();
            break;
        case "f":
            P1Choosing("spock");
            PlayerVsPlayer();
            break;
        case "i":
            P2Choosing("rock");
            PlayerVsPlayer();
            break;
        case "l":
            P2Choosing("paper");
            PlayerVsPlayer();
            break;
        case "k":
            P2Choosing("scissor");
            PlayerVsPlayer();
            break;
        case "j":
            P2Choosing("lizard");
            PlayerVsPlayer();
            break;
        case "h":
            P2Choosing("spock");
            PlayerVsPlayer();
            break;
        default:
            break;
    }
})

newGameBtn.addEventListener("click", function(){
    ReloadPage();
});

pvePlayAgainBtn.addEventListener("click", function(){
    ReloadPage();
});

function P1Choosing(string){
    p1Choice = string;
    p1IsReady = true;
    p1Ready.style.color = "green";
}

function P2Choosing(string){
    p2Choice = string;
    p2IsReady = true;
    p2Ready.style.color = "green";
}

function PlayerVsPlayer(){
    if(p1IsReady && p2IsReady){
        CpuChoiceImg(p2Choice);
        UserChoiceImg(p1Choice);
        switch(Shoot(p1Choice, p2Choice)){
            case 1:
                p1Score++;
                p1ScoreBox[p1Score-1].style.backgroundColor = "rgb(4, 219, 0)";
                winner.innerText = `Player 1 Won Last Round!`;
                winner.style.color = "rgb(4, 219, 0)";
                break;
            case 2:
                p2Score++;
                p2ScoreBox[p2Score-1].style.backgroundColor = "rgb(219, 0, 0)";
                winner.innerText = `Player 2 Won Last Round!`;
                winner.style.color = "rgb(219, 0, 0)";
                break;
            default:
                winner.innerText = "Tie.";
                winner.style.color = "black";
                break;
        }
        NextRound();
        WinScoreBoard(p1Score, p2Score, 2);
        ResetPVP();
    }

}

function Shoot(choice1, choice2){
    if(choice1 == choice2){
        return 3;
    }else if(beats[choice1].includes(choice2)){
        return 1;
    }else{
        return 2;
    }
}

function CpuChoiceImg(string){
    cpuSelectionPlaceHolder.style.display = "none";
    cpuSelectionImg.src = `../assets/${string}.png`;
    cpuSelectionImg.style.width = "103.333px";
    cpuSelectionImg.style.height = "103.333px";
    cpuSelectionImg.style.margin = "45px 0";
    cpuSelectionImg.alt = `${string}`;
}

function UserChoiceImg(string){
    userSelectionPlaceHolder.style.display = "none";
    userSelectionImg.src = `../assets/${string}.png`;
    userSelectionImg.style.width = "103.333px";
    userSelectionImg.style.height = "103.333px";
    userSelectionImg.style.margin = "45px 0";
    userSelectionImg.alt = `${string}`;
}

function WinScoreBoard(player1Score, cpuScore, num){
    if(player1Score == num){
        WinnerResults("Player 1 Wins")
    }else if(cpuScore == num){
        WinnerResults("Player 2 Wins")
    };
}

function WinnerResults(string){
    round.style.display = "none";
    pveResultsConatainer.style.display = "flex";
    pveResults.innerText = `${string}!`;
    pveResults.style.fontSize = "150px";
    newGameBtn.style.display = "none";
    inputBox.style.display = "none";
}

function NextRound(){
    roundNumber++;
    round.innerText = `Round ${roundNumber}`;
}

function ResetPVP(){
    p1IsReady = false;
    p2IsReady = false;
    p1Choice = "";
    p2Choice = "";
    p1Ready.style.color = "black";
    p2Ready.style.color = "black";
}

function ReloadPage(){
    const link = document.createElement("a");
    link.href = pathname;
    link.click();
}