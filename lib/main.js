const tendex = require('./tendex');
const dataHandler = require('./handler');

function getTendexPIR(data, format = false, playerId = 0){
  if(format && playerId !== 0){
    data = dataHandler.transformToPlayer(data, playerId);
  }

  return tendex.getEuropeanTendexRating(data);

}

module.exports = {
  getTendexPIR
}