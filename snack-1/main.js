// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera


var bike = [
    {name: 'Wilier 0 SLR', weight: 6.5},
    {name: 'Trek Emonda 2020', weight: 6.81},
    {name: 'Trek Emonda SLR', weight: 4.65},
    {name: 'SAVA Phantom 2.0 700C', weight: 8.1},
    {name: 'Giant TCR 2021', weight: 7},
]

let lighterBike = bike[0];

for(const i in bike) {
    const {weight} = bike[i];

    if(weight < lighterBike.weight) {
        lighterBike = bike[i];
    }
}

console.log(
    `the lighter bike is '${lighterBike.name}' its weight is ${lighterBike.weight} kg`
);