const singleGameController = require('./singleGame');
const dataHandler = require('./handler');

function getTendexPIR(data, format = false, playerId = 0, gameID = 0){
  if(format && playerId !== 0 && gameId !== 0){
    data = dataHandler.transformToPlayer(data, playerId);
  }

  return singleGameController.getTendexPerformanceIndexRating(data);

}

module.exports = {
  getTendexPIR
}