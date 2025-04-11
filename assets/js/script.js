function addition1(number1, number2){
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 + number2
}

function substract2(number1, number2){
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 - number2
}

function multiply3(number1, number2){
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 * number2
}

function divide4(number1, number2){
    number1 = Number(number1)
    number2 = Number(number2)
    return number1 / number2
}


let arrayChoice = ["1 - Addition", "2 - Soustraction", "3 - Multiplication", "4 - Division", "5 - Quitter"]
let start = prompt("Quelle opéraion veux-tu faire ?" + arrayChoice)

if (arrayChoice[1]){
    let number1 = prompt("Entrez une première valeur: ");
    let number2 = prompt("Entrez une seconde valeur: ");
    resultA = addition1(number1, number2)
    prompt("Résultat: " + resultA);
}

