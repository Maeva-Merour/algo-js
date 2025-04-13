function triABulles(nombres) {
    for (let i = 0; i < arrayBubble.length; i++) {
        console.log(arrayBubble[i])
    }

    arrayBubble.forEach((valeur, index) => {                                 // valeur : C'est la valeur de l'élément actuel du tableau qui est en train d'être traité.
        if (index < arrayBubble.length - i - 1) {                           // index : C'est l'indice (la position) de l'élément actuel dans le tableau. Le premier élément a l'indice 0, le deuxième l'indice 1, etc.
                                                                            // arr : C'est une référence au tableau original sur lequel la méthode forEach est appelée.

        } else if (index > arrayBubble.lenght - i + 1) {


        }
    })
}

let arrayBubble = [56, 89, 57, 20.4, 114, 87, 95.7, 30, 74]
triABulles(arrayBubble)
// console.log(arrayBubble)
