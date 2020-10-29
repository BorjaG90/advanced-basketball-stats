const fs = require('fs');
const fakeStatsGenerator = require('fake-stats-generator');
const dataHandler = require('../lib/handler');
const initialData = require('./data');


// Datos obtenidos del uso de fake-stats-generator
// const seasonsData = fakeStatsGenerator.start(initialData);

// Datos desde un json ya creado
const seasonsData = require('../data/output.js');

// Tests
let player3stats = dataHandler.transformToPlayer(seasonsData, 3);
writeOutputFile('player3stats', player3stats);


// Functions
function writeOutputFile(nameFile, data){
  fs.writeFile (`${nameFile}.json`, JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log(`File ${nameFile} Write complete`);
    }
  );
};