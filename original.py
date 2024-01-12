import random
Punktedu = 0
Punkteprogramm = 0
while Punkteprogramm < 3 and Punktedu < 3:
    zufaellig = random.randint(1, 3)
    gegner = input("Was willst du nehmen? (Schere/Stein/Papier) ")
    if zufaellig == 1:
        programm = "Schere"
    elif zufaellig == 2:
        programm = "Stein"
    elif zufaellig == 3:
        programm = "Papier"
    print("Programm hat", programm, "genommen")

    print("Du hast", gegner, "genommen")
    if gegner == "schere" or "Schere":
        if zufaellig == 2:
            print("Du hast verloren, das Programm hat gewonnen")
            Punkteprogramm += 1
        if zufaellig == 1:
            print("Unentschieden")
        if zufaellig == 3:
            print("Du hast gewonnen, das Programm hat verloren")
            Punktedu = Punktedu+1
    if gegner == "stein" or "Stein":
        if zufaellig == 2:
            print("Unentschieden")
        if zufaellig == 3:
            print("Du hast verloren, das Programm hat gewonnen")
            Punkteprogramm = Punkteprogramm+1
        if zufaellig == 1:
            print("Du hast gewonnen, das Programm hat verloren")
            Punktedu = Punktedu+1
    if gegner == "papier" or "Papier":
        if zufaellig == 1:
            print("Du hast verloren, Das Programm hat gewonnen")
            Punkteprogramm = Punkteprogramm+1
        if zufaellig == 2:
            print("Du hast gewonnen, das Programm hat verloren")
            Punktedu=Punktedu+1
        if zufaellig == 3:
            print("Unentschieden")
    print("Du hast:")
    print(Punktedu)
    print("Das Programm hat:")
    print(Punkteprogramm)
