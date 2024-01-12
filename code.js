function main(chosen) {
    console.log(chosen);
    let computeranswer = random();
}

function random() {
    const randomnumber = Math.floor(Math.random() * 3);
    let computeranswer;
    if (randomnumber === 0) {
        computeranswer = "Schere";
    } else if (randomnumber === 1) {
        computeranswer = "Stein";
    } else if (randomnumber === 2) {
        computeranswer = "Papier";
    }
    console.log(computeranswer);
    return(computeranswer);
}