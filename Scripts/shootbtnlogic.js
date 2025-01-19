const beats = {
    rock: ["scissor", "lizard"],
    paper: ["rock", "spock"],
    scissor: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissor"],
}

let roundNumber = 1;

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

function CheckWinner(player1Score, cpuScore, pathname){
    switch(pathname){
        case "playerVsCompSD.html":
            WinScoreBoard(player1Score, cpuScore, 1);
            break;
        case "playerVsCompBO5.html":
            WinScoreBoard(player1Score, cpuScore, 3);
            break;
        default:
            WinScoreBoard(player1Score, cpuScore, 4);
            break;
    }
}

function WinScoreBoard(player1Score, cpuScore, num){
    if(player1Score == num){
        WinnerResults("Win")
    }else if(cpuScore == num){
        WinnerResults("Lose")
    };
}

function WinnerResults(string){
    round.style.display = "none";
    pveResultsConatainer.style.display = "flex";
    pveResults.innerText = `You ${string}.`;
    shootBtn.style.display = "none";
    newGameBtn.style.display = "none";
}

function NextRound(pathname){
    if(pathname !== "playerVsCompSD.html"){
        roundNumber++;
        round.innerText = `Round ${roundNumber}`;
    }
}


export { 
    Shoot,
    CpuChoiceImg, 
    UserChoiceImg,
    NextRound,
    CheckWinner, 
}