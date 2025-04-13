function estPalindrome(){                                               // ici pas besoin de renseigner de paramètres donc je peux laisser les () vides ! car ma valeur qui serait mot est à déterminer par le prompt
    let reponseValide = false
    let mot
                                                      
    while (true) {
    mot = String(prompt("S'agit-il d'un palindrome ?"))                 // Quand ta fonction n’a pas besoin d’infos externes, tu ne mets rien dans les parenthèses. C’est un peu comme dire :
                                                                            // "Je vais faire ce que j’ai à faire tout seul, sans que tu me donnes quoi que ce soit."
    let motInverse = mot.split("").reverse().join("")                    // découpe, inverse et ré-assemble les caractère pour obtenir le mot renversé

    if (mot === motInverse ){
        alert("Votre mot est un palindrome !")
        reponseValide = true
        // return true

    } else {                                                            // on enlève le return false pour éviter de quitter la boucle tant que l'on a pas un palindrome
        alert("Essaye encore !")
    }
}
}

let reponse = estPalindrome()
console.log(reponse)
