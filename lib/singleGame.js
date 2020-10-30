/*
 * Functions that works with a single game
 */

 const basicController = require('./basic');

/**
 * Returns the Performance Index Rating.
 * https://en.wikipedia.org/wiki/Performance_Index_Rating
 * Gets an object with the stats of a player in a game 
 * and returns a single Tendex PIR value
 * (Points + Rebounds + Assists + Steals + Blocks + Fouls Drawn) 
 * - (Missed Field Goals + Missed Free Throws + Turnovers 
 * + Shots Rejected + Fouls Committed).
 * @param {*} data 
 */
function getTendexPerformanceIndexRating(data){
  return (
    basicController.getPoints(data["2pm"], data["3pm"], data.ftm) +
    (data.offReb + data.defReb) + data.ass + data.ste + data.blk + 
    data.foulDrawn
  ) - (
    ((data["2pa"] - data["2pm"]) + (data["3pa"] - data["3pm"])) 
    + (data.fta - data.ftm) + data.tos + data.foul + data.shotReject
  ).toFixed(2);
}

module.exports = {
  getTendexPerformanceIndexRating
}
