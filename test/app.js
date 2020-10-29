const fs = require('fs');
const fakeStatsGenerator = require('fake-stats-generator');
const dataHandler = require('../lib/handler');
const initialData = require('./data');
const app = require('../lib/main');


// Datos obtenidos del uso de fake-stats-generator
// const seasonsData = fakeStatsGenerator.start(initialData);

// Datos desde un json ya creado
const seasonsData = require('../data/output.js');

// Tests
// Transformations
let player3stats = dataHandler.transformToPlayer(seasonsData, 3);
writeOutputFile('player3stats', player3stats);

// Calculations
let game2stats = player3stats.stats[1]
let player3game2PIR = app.getTendexPIR(game2stats);
console.log(`Player 3 Game 2 PIR calculation: ${player3game2PIR}`);


// Functions
function writeOutputFile(nameFile, data){
  fs.writeFile (`${nameFile}.json`, JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log(`File ${nameFile} Write complete`);
    }
  );
};