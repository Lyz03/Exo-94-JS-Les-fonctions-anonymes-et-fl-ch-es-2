let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
function print(arrayName) {
    let p = document.createElement('p');
    arrayName.forEach(value => p.innerText += value + ' ')
    document.body.appendChild(p)
}

// part 1
let arrayOneV2 = tableauUn.map( (i) => i ** i);
print(arrayOneV2);

let arrayOneV3 = tableauUn.map( (i) => i * 10);
print(arrayOneV3);

let arrayOneV4 = tableauUn.map( (i) => (i + 2) / 16);
print(arrayOneV4);

let arrayOneV5 = tableauUn.filter(i => i > 2);
print(arrayOneV5);

let arrayOneV6 = tableauUn.filter(i => i % 2 === 0);
print(arrayOneV6);

let arrayOneV7 = tableauUn.filter(i => i * 3 > 10);
print(arrayOneV7);

// part 2
let arrayTwoV2 = tableauDeux.map( i => i.length);
print(arrayTwoV2);

let arrayTwoV3 = tableauDeux.map( i => i + ' à une longueur de ' + i.length);
print(arrayTwoV3);

let arrayTwoV4 = tableauDeux.map( i => i + i);
print(arrayTwoV4);

let arrayTwoV5 = tableauDeux.filter(i => i.length > 2+2)
print(arrayTwoV5);

let arrayTwoV6 = tableauDeux.filter(i => i.length % 2 === 0);
print(arrayTwoV6);

let arrayTwoV7 = tableauDeux.filter(i => i.length - 3 > 10);
print(arrayTwoV7);
