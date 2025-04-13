function triABulles(nombres) {

    for (let i = 0; i < arrayBubble.length; i++) {
        console.log(arrayBubble[i])

        arrayBubble.forEach((valeur, index, arr) => {
                                                                                // valeur : valeur de l'élément actuel du tableau qui est en train d'être traité. index : C'est l'indice (la position) de l'élément actuel dans le tableau. arr :  C'est une référence au tableau original sur lequel la méthode forEach est appelée
            if (index < arrayBubble.length - i - 1) {                           //  Ne comparer que jusqu'à l'avant-dernier élément non trié
                                                                                  
                    if (arr[index] > arr[index + 1]){                            //  Si l'élément actuel est plus grand que le suivant, les échanger

                        let arrayGhost = arr[index];                             // Échanger les éléments
                        arr[index] = arr[index + 1];
                        arr[index + 1] = arrayGhost;
                    }
                }
        })
    }
    return arrayBubble
}

let arrayBubble = [56, 89, 57, 20.4, 114, 87, 95.7, 30, 74]
triABulles(arrayBubble)
console.log(arrayBubble)


// Je ne te cahce pas m'être aidée de l'IA dans la compréhension du résultat.
// J'ai un peu de mal à comprendre arr