'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//task 1 create one player array for each team
const players1 = [...game.players[0]]
const players2 = [...game.players[1]]
console.log(players1);
console.log(players2);

//2 separate the first player goalkeeper from the rest of players
const[gk1,...rest1] = players1;
console.log(gk1, rest1)

const[gk2,...rest2] = players2;
console.log(gk2, rest2)

//3 put all 22 players in 1 array
const allPlayers = [...players1,...players2];
console.log(allPlayers)

//4 print out team 1 + 3 new players
const players1Final = [...players1,'Thiago', 'Coutinho','Perisic'];
console.log(players1Final)

//5 game odds - pull them out and change x to be called draw
const {odds: {team1, x: draw, team2}} = game;

//6 Goals function - print how many goals scored
const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`)

  // printGoals('Davies', 'Muller', 'Lewandowski', 'Kinmich');
  // printGoals('Davies', 'Muller');
  printGoals(...game.scored);
}

//7 Which team is more likely to win based on odds?
  team1 < team2 && console.log('Team 1 is more likely to win');
  team2 > team2 && console.log('Team 2 is more likely to win');




