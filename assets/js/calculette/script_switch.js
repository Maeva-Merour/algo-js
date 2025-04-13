function addition1(number1, number2) {
    return Number(number1) + Number(number2)
}

function substract2(number1, number2) {
    return Number(number1) - Number(number2)
}

function multiply3(number1, number2) {
    return Number(number1) * Number(number2)
}

function divide4(number1, number2) {
    if (Number(number2) === 0) {
        alert("Erreur : Division par zéro impossible !");
        return "Impossible";
    }
    return Number(number1) / Number(number2)
}

function check(numberV) {
    if (isNaN(Number(numberV))) {
        alert("Erreur: veuillez rentrer un chiffre ou un nombre valide.")
        return null;
    }
    return Number(numberV);
}


let choice = null

while (true) {                                                                   //do...while. Cette boucle permet d'exécuter un bloc de code au moins une fois avant de vérifier la condition qui détermine si la boucle doit continuer ou non.
    choice = Number(prompt(                                                     // Nan signifie "Not a Number ""
        "Quelle opération voulez-vous faire ?\n" +                              // \n permet un retour à la ligne
        "1 - Addition\n" +
        "2 - Soustraction\n" +
        "3 - Multiplication\n" +
        "4 - Division\n" +
        "5 - Quitter\n"
    ))

    if (isNaN(choice < 1 || choice >= 5 ))
        alert("Sélectionne une valeur comprise entre 1 et 5")
    
    // while (!(choice >= 1 && choice <= 5));                                      // ! signifie ici "tant que la saisie choice n’est pas entre 1 et 5, la boucle reprend"

    let number1 = null
    let number2 = null

    switch (choice) {

        case 1:

            while (number1 === null) {
                let ask1 = prompt("Entrez une première valeur à additionner: ");
                number1 = check(ask1);
            }

            while (number2 === null) {
                let ask2 = prompt("Entrez une seconde valeur à additionner: ");
                number2 = check(ask2);
            }

            let resultA = addition1(number1, number2)
            alert("Résultat: " + resultA);
            break;

        case 2:

            while (number1 === null) {
                let ask1 = prompt("Entrez une première valeur à soustraire: ");
                number1 = check(ask1);
            }

            while (number2 === null) {
                let ask2 = prompt("Entrez une seconde valeur à soustraire: ");
                number2 = check(ask2);
            }

            let resultB = substract2(number1, number2)
            alert("Résultat: " + resultB);
            break;

        case 3:

            while (number1 === null) {
                let ask1 = prompt("Entrez une première valeur à multiplier: ");
                number1 = check(ask1);
            }


            while (number2 === null) {
                let ask2 = prompt("Entrez une seconde valeur à multiplier: ");
                number2 = check(ask2);
            }

            resultC = multiply3(number1, number2)
            alert("Résultat: " + resultC);
            break;

        case 4:

            while (number1 === null) {
                let ask1 = prompt("Entrez une première valeur à diviser: ");
                number1 = check(ask1);
            }

            while (number2 === null) {
                let ask2 = prompt("Entrez une seconde valeur à diviser: ");
                number2 = check(ask2);
            }

            resultD = divide4(number1, number2)
            if (resultD !== "Impossible") {
                alert("Résultat: " + resultD);
            }
            break;

        case 5:
            alert("A bientôt !");
            break;
    }

    if (choice === 5){
        break
    }
}


