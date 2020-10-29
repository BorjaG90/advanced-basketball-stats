const player = require("fake-stats-generator/lib/player");
const { seasons } = require("../test/data");

/**
 * Esta funcion transforma de la estructura de datos origen a
 * una estructura centrada en el jugador
 *
 * @param {Objeto que contiene los datos de origen} data
 * @param {Id del jugador del que obtener os datos} playerId
 */
function transformToPlayer(data, playerId) {
  stats = [];
  fullPlayer = {};
  let foundIt = false;
  data.seasons.forEach((season) => {
    // console.log(`Season: ${season.year}`);
    if (season.competitions && season.competitions.length > 0) {
      season.competitions.forEach((competition) => {
        // console.log(`Competition: ${competition.name}`);
        if (competition.games && competition.games.length > 0) {
          competition.games.forEach((game) => {
            if (game.home.players.some((player) => player.id === playerId)) {
              if (!foundIt) {
                // console.log('Jugador encontrado');
                foundIt = true;
                fullPlayer = createPlayerInfo(game.home, playerId);
              }
              //console.log(`Home -> ${game.home.name}`);
              let stat = createPlayerStatLine(
                season,
                competition,
                game,
                game.home,
                playerId
              );
              stats.push(stat);
            } else if (
              game.away.players.some((player) => player.id === playerId)
            ) {
              if (!foundIt) {
                // console.log('Jugador encontrado');
                foundIt = true;
                fullPlayer = createPlayerInfo(game.away, playerId);
              }
              // console.log(`Away -> ${game.away.name}`);
              let stat = createPlayerStatLine(
                season,
                competition,
                game,
                game.away,
                playerId
              );
              stats.push(stat);
            }
          });
        }
      });
    }
  });
  fullPlayer.stats = stats;

  return fullPlayer;
}

function createPlayerInfo(team, id) {
  let playerInfo = team.players.filter((player) => player.id === id);
  return {
    id: playerInfo.id,
    firstname: playerInfo.firstname,
    lastname: playerInfo.lastname,
    position: playerInfo.position,
  };
}

function createPlayerStatLine(season, competition, game, team, id) {
  let stat = team.players.filter((player) => player.id === id)[0].stats;
  stat.gameId = game.id;
  stat.teamId = game.home.id;
  stat.teamName = game.home.name;
  stat.rivalId = game.away.id;
  stat.rivalName = game.away.name;
  stat.competitionId = competition.id;
  stat.competitionName = competition.name;
  stat.season = season.year;
  return stat;
}

module.exports = {
  transformToPlayer,
};
