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

export { Shoot }