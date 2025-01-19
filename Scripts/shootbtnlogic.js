const beats = {
    rock: ["scissor", "lizard"],
    paper: ["rock", "spock"],
    scissor: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissor"],
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
    cpuSelectionImg.alt = `${string}`;
}

function NextRound(){
    roundNumber++;
    round.innerText = `Round ${roundNumber}`;
}

function CheckWinner(){
    switch(pathname){
        case "playerVsCompSD.html":
            if(player1Score >= 1){
                round.style.display = "none"
                pveResultsConatainer.style.display = "flex";
                pveResults.innerText = "You Win!"
            }else if(cpuScore >=1){
                round.style.display = "none"
                pveResultsConatainer.style.display = "flex";
                pveResults.innerText = "You Lose."
            }
            break;
        case 2:
            return 1;
        default:
            return 2;
    }
}

function ResetChoice(){
    rockBtn.classList = "";
    paperBtn.classList = "";
    scissorBtn.classList = "";
    lizardBtn.classList = "";
    spockBtn.classList = "";
}


export { 
    Shoot,
    CpuChoiceImg, 
    NextRound, 
    CheckWinner, 
    ResetChoice 
}