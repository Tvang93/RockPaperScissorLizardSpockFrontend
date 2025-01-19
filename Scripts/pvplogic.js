const p1Ready = document.getElementById("p1Ready");
const p2Ready = document.getElementById("p2Ready");
const pvpWinner = document.getElementById("pvpWinner");
const p1Rock = document.getElementById("p1Rock");

const p1ScoringBlocks = [
    document.getElementById("p1ScoreBox1"),
    document.getElementById("p1ScoreBox2")
];
const p2ScoringBlocks = [
    document.getElementById("cpuScoreBox1"),
    document.getElementById("cpuScoreBox2")
]

let p1Choice = "";
let p2Choice = "";
let p1IsReady = false;
let p2IsReady = false;

p1Rock.addEventListener("keypress", function(event){
    console.log(event.key);
    switch(event.key){
        case "w":
            P1Choosing("rock");
            break;
        case "a":
            P1Choosing("paper");
            break;
        case "s":
            P1Choosing("scissor");
            break;
        case "d":
            P1Choosing("lizard");
            break;
        case "f":
            P1Choosing("spock");
            break;
        case "i":
            P2Choosing("rock");
            break;
        case "l":
            P2Choosing("paper");
            break;
        case "k":
            P2Choosing("scissor");
            break;
        case "j":
            P2Choosing("lizard");
            break;
        case "h":
            P2Choosing("spock");
            break;
        default:
            break;
    }
})

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

