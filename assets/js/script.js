function addition1(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 + number2
}

function substract2(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 - number2
}

function multiply3(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 * number2
}

function divide4(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 / number2
}


let arrayChoice = ["1 - Addition", "2 - Soustraction", "3 - Multiplication", "4 - Division", "5 - Quitter", " Tapez le numéro de votre choix."]
let start = prompt("Quelle opéraion veux-tu faire ?" + arrayChoice)
console.log(start);

if (start === "1") {

    let number1 = prompt("Entrez une première valeur: ");

    let number2 = prompt("Entrez une seconde valeur: ");

    resultA = addition1(number1, number2)
    alert("Résultat: " + resultA);


} else if (start === "2") {

    let number1 = prompt("Entrez une première valeur: ");

    let number2 = prompt("Entrez une seconde valeur: ");

    resultB = substract2(number1, number2)
    alert("Résultat: " + resultB);

} else if (start === "3") {

    let number1 = prompt("Entrez une première valeur: ");

    let number2 = prompt("Entrez une seconde valeur: ");

    resultC = multiply3(number1, number2)
    alert("Résultat: " + resultC);


} else if (start === "4") {

    let number1 = prompt("Entrez une première valeur: ");

    let number2 = prompt("Entrez une seconde valeur: ");

    resultD = divide4(number1, number2)
    alert("Résultat: " + resultD);

} else if (start === "5"){
    alert("A bientôt !")
}

let exit = 5
while (exit === "1" || exit === "2" || exit === "3" || exit === "4" || exit === "5"){                             
    prompt(start);                                  
}




