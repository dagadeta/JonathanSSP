function main(playeranswer) {
    let computeranswer = random();
    document.getElementById("computeranswersc").style.backgroundColor = "#2a5256";
    document.getElementById("computeranswerst").style.backgroundColor = "#2a5256";
    document.getElementById("computeranswerpa").style.backgroundColor = "#2a5256";
    document.getElementById(computeranswer).style.backgroundColor = "#5f9ea0";
    document.getElementById("playeranswersc").style.backgroundColor = "#2a5256";
    document.getElementById("playeranswerst").style.backgroundColor = "#2a5256";
    document.getElementById("playeranswerpa").style.backgroundColor = "#2a5256";
    document.getElementById(playeranswer).style.backgroundColor = "#5f9ea0";

    let result;
    if (playeranswer === "playeranswersc") {
        if (computeranswer === "computeranswersc") {
            result = "tie";
        } else if (computeranswer === "computeranswerst") {
            result = "computerwon";
        } else if (computeranswer === "computeranswerpa") {
            result = "playerwon"
        }
    } else if (playeranswer === "playeranswerst") {
        if (computeranswer === "computeranswersc") {
            result = "playerwon";
        } else if (computeranswer === "computeranswerst") {
            result = "tie";
        } else if (computeranswer === "computeranswerpa") {
            result = "computerwon"
        }
    } else if (playeranswer === "playeranswerpa") {
        if (computeranswer === "computeranswersc") {
            result = "computerwon"
        } else if (computeranswer === "computeranswerst") {
            result = "playerwon"
        } else if (computeranswer ==="computeranswerpa") {
            result = "tie"
        }
    }

    document.getElementById("playerwon").style.backgroundColor = "#2a5256";
    document.getElementById("computerwon").style.backgroundColor = "#2a5256";
    document.getElementById(result).style.backgroundColor = "#5f9ea0";
}

function random() {
    const randomnumber = Math.floor(Math.random() * 3);
    let computeranswer;
    if (randomnumber === 0) {
        computeranswer = "computeranswersc";
    } else if (randomnumber === 1) {
        computeranswer = "computeranswerst";
    } else if (randomnumber === 2) {
        computeranswer = "computeranswerpa";
    }
    return(computeranswer);
}