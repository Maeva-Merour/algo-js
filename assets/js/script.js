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
    console.log(start);

if  (arrayChoice[0]){
    
    let number1 = prompt("Entrez une première valeur: ");
    console.log(number1);

    let number2 = prompt("Entrez une seconde valeur: ");
    console.log(number2);

    resultA = addition1(number1, number2)
    prompt("Résultat: " + resultA);
    console.log(resultA);
    

} else if (arrayChoice[1]){

    let number1 = prompt("Entrez une première valeur: ");
    console.log(number1);

    let number2 = prompt("Entrez une seconde valeur: ");
    console.log(number2);

    resultB = substract2(number1, number2)
    prompt("Résultat: " + resultB);
    console.log(resultB);
} 

// else if (arrayChoice[2]){
//     let number1 = prompt("Entrez une première valeur: ");
//     let number2 = prompt("Entrez une seconde valeur: ");
//     resultC = multiply3(number1, number2)
//     prompt("Résultat: " + resultC);

// } else if (arrayChoice[3]){
//     let number1 = prompt("Entrez une première valeur: ");
//     let number2 = prompt("Entrez une seconde valeur: ");
//     resultD = divide4(number1, number2)
//     prompt("Résultat: " + resultD);

// }
// // else(arrayChoice[5]){

// // }




