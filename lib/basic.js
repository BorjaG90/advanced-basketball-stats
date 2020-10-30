/*
 * Basic calculations functions
 */

 /**
 * Returns the sum of points receiving the field goals made
 * @param {integer} twoPointsMade 
 * @param {integer} threePointsMade 
 * @param {integer} freePointsMade 
 */
function getPoints(twoPointsMade, threePointsMade, freePointsMade){
  return twoPointsMade * 2 + threePointsMade * 3 + freePointsMade;
}

/**
 * Returns the field goal percentage
 * @param {integer} fgMade 
 * @param {integer} fgAttemped 
 */
function getPercentage(fgMade, fgAttemped){
  return fgMade / fgAttemped * 100;
}

module.exports = {
  getPoints,
  getPercentage
}