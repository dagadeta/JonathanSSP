function main(playeranswer) {
    let computeranswer = random();
    document.getElementById("playeranswermain").style.display = "block";
    document.getElementById("computeranswermain").style.display = "block";
    document.getElementById("playeranswer").innerHTML = playeranswer;
    document.getElementById("computeranswer").innerHTML = computeranswer;

    let won;
    if (playeranswer === "Schere") {
        if (computeranswer === "Schere") {
            won = "Niemand";
        } else if (computeranswer === "Stein") {
            won = "Computer";
        } else if (computeranswer === "Papier") {
            won = "Spieler"
        }
    } else if (playeranswer === "Stein") {
        if (computeranswer === "Schere") {
            won = "Spieler";
        } else if (computeranswer === "Stein") {
            won = "Niemand";
        } else if (computeranswer === "Papier") {
            won = "Computer"
        }
    } else if (playeranswer === "Papier") {
        if (computeranswer === "Schere") {
            won = "Computer"
        } else if (computeranswer === "Stein") {
            won = "Spieler"
        } else if (computeranswer ==="Papier") {
            won = "Niemand"
        }
    }

    document.getElementById("won").style.display = "block";
    document.getElementById("whowon").innerHTML = won;
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
    return(computeranswer);
}