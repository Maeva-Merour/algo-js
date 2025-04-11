function addition1(number1, number2) {              // par rappor à ma précédente version j'ai simplifié l'écriure de Number() pour définir le type de mes valeurs.
    return Number(number1) + Number(number2)
}

function substract2(number1, number2) {
    return Number(number1) - Number(number2)
}

function multiply3(number1, number2) {
    return Number(number1) * Number(number2)
}

function divide4(number1, number2) {
    return Number(number1) / Number(number2)
}


let arrayChoice = ["1 - Addition " + "2 - Soustraction " + "3 - Multiplication " + "4 - Division " + "5 - Quitter "]
let start = 0

while ( start = true){

    start = prompt("Quelle opération voulez-vous faire ?" + arrayChoice)

if (start === "1") {

    let number1 = prompt("Entrez une première valeur à additionner: ");

    let number2 = prompt("Entrez une seconde valeur à additionner: ");

    resultA = addition1(number1, number2)
    alert("Résultat: " + resultA);


} else if (start === "2") {

    let number1 = prompt("Entrez une première valeur à soustraire: ");

    let number2 = prompt("Entrez une seconde valeur à soustraire: ");

    resultB = substract2(number1, number2)
    alert("Résultat: " + resultB);

} else if (start === "3") {

    let number1 = prompt("Entrez une première valeur à multiplier: ");

    let number2 = prompt("Entrez une seconde valeur à multiplier: ");

    resultC = multiply3(number1, number2)
    alert("Résultat: " + resultC);


} else if (start === "4") {

    let number1 = prompt("Entrez une première valeur à diviser: ");

    let number2 = prompt("Entrez une seconde valeur à diviser: ");

    resultD = divide4(number1, number2)
    alert("Résultat: " + resultD);

} else if (start === "5"){
    alert("A bientôt !");
    break                                                   // permet d'interrompre ma boucle si l'utilisateur choisit 5.

} else {
    alert("Sélectionne une valeur comprise entre 1 et 5")       
}

}




