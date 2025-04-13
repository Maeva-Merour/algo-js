function addition1(number1, number2) {              // par rapport à ma précédente version j'ai simplifié l'écriure de Number() pour définir le type de mes valeurs.
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
    if (isNaN(Number(numberV))){                                                               // isNaN() est une fonction JavaScript qui signifie "is Not a Number" (n'est pas un nombre). 
        alert("Erreur: veuillez rentrer un chiffre ou un nombre valide.")                   // Elle permet de vérifier si une valeur n'est pas un nombre valide.
        return null;
    }
    return Number(numberV);
}



let arrayChoice = ["1 - Addition " + "2 - Soustraction " + "3 - Multiplication " + "4 - Division " + "5 - Quitter "]
let start = true

while (start){

    start = prompt("Quelle opération voulez-vous faire ?" + arrayChoice)

if (start === "1") {

    let number1 = null
    while(number1 === null){
    let ask1 = prompt("Entrez une première valeur à additionner: ");
    number1 = check(ask1);
    }

    let number2 = null
    while(number2 === null){
    let ask2 = prompt("Entrez une seconde valeur à additionner: ");
    number2 = check(ask2);
    }

    let resultA = addition1(number1, number2)
    alert("Résultat: " + resultA);


} else if (start === "2") {

    let number1 = null
    while(number1 === null){
    let ask1 = prompt("Entrez une première valeur à soustraire: ");
    number1 = check(ask1);
    }

    let number2 = null
    while(number2 === null){
    let ask2 = prompt("Entrez une seconde valeur à soustraire: ");
    number2 = check(ask2);
    }

    resultB = substract2(number1, number2)
    alert("Résultat: " + resultB);

} else if (start === "3") {

    let number1 = null
    while(number1 === null){
    let ask1 = prompt("Entrez une première valeur à multiplier: ");
    number1 = check(ask1);
    }

    let number2 = null
    while(number2 === null){
    let ask2 = prompt("Entrez une seconde valeur à multiplier: ");
    number2 = check(ask2);
    }

    resultC = multiply3(number1, number2)
    alert("Résultat: " + resultC);


} else if (start === "4") {

    let number1 = null
    while(number1 === null){
    let ask1 = prompt("Entrez une première valeur à diviser: ");
    number1 = check(ask1);
    }

    let number2 = null
    while(number2 === null){
    let ask2 = prompt("Entrez une seconde valeur à diviser: ");
    number2 = check(ask2);
    }

    resultD = divide4(number1, number2)
    if (resultD !== "Impossible") {
        alert("Résultat: " + resultD);
    }
    
} else if (start === "5"){
    alert("A bientôt !");
    break                                                   // permet d'interrompre ma boucle si l'utilisateur choisit 5.

} else {
    alert("Sélectionne une valeur comprise entre 1 et 5")    
}
}

// Pour résumer, je vais essayer avec la méthode switch qui je pense permet d'alléger le code. J'ai un peu galéré avec ce que tu as demandé en plus
// à savoir valider les entrées et surtout surtout gérer les boucles while qui devaient comprendre l'ensemble du scénario à rpéter (logique) et
// non en bas de script comme nous l'avions rapidement vu en cours.
// Personnellement il me serait utile que l'on revienne également sur l'objet null et false/true qui sont encore un peu délicats à manier pour moi
// et qui pourtant sont au coeur de beaucoup de conditions et de fonctionnalités.


