module.exports = {
  name: "roll",
  code: `
  $title[El juego de los dados🎲]
  $description[$username Haz conseguido $random[1;101] Puntos Felicidades]
  $footer[Si consigues 100 puntos eres un Dios]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$isNumber[$message]==false;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
