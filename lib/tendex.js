/**
 * Also called Performance Index Rating (PIR)
 * @param {*} data 
 */
function getEuropeanTendexRating(data){
  return (((data["2pm"] * 2) + (data["3pm"] * 3) + data.ftm) +
  (data.offReb +  data.defReb) + data.ass + data.ste + data.blk + data.foulDrawn
  ) - (((data["2pa"] - data["2pm"]) + (data["3pa"] - data["3pm"])) 
  + (data.fta- data.ftm) + data.tos + data.foul + data.shotReject
  ).toFixed(2);
}

module.exports = {
  getEuropeanTendexRating
}
