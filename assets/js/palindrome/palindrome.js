function estPalindrome(mot){
    let mot = String(prompt("mot"))
    let motInverse = mot.split(""),reverse(""), join("")                    // découpe, inverse et ré-assemble les caractère pour obtenir le mot renversé

    if (mot === motInverse ){
        mot = true
        alert("Votre mot est un palindrome !")
    } else {
        mot = false
        alert("Essaye encore !")
    }
}

console.log(estPalindrome("radar"))
console.log(estPalindrome("voiture"));
