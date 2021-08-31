// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var teams = [
    {name: 'Milan', score: 0, foul: 0},
    {name: 'Inter', score: 0, foul: 0},
    {name: 'Lazio', score: 0, foul: 0},
    {name: 'Roma', score: 0, foul: 0},
    {name: 'Napoli', score: 0, foul: 0},
    {name: 'Catania', score: 0, foul: 0},
]

var newTeamsArray = [];

for(const i in teams) {
    teams[i].score = Math.round(Math.random()* 100);
    teams[i].foul = Math.round(Math.random()* 10);

    const{name} = teams[i];
    const{foul} = teams[i];
    newTeamsArray.push({name, foul});

}

console.log(teams);

console.log(newTeamsArray);