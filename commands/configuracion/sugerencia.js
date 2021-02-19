module.exports = {
  name: "sugerencia",
  code: `
  $channelSendMessage[$channelID;{description:La sugerencia fue enviada con exito<a:like:764199181044023326>}{color:RANDOM}]
  $author[$username#$discriminator;$authorAvatar]
  $channelSendMessage[$getServerVar[sugerencia];{description:__Sugerencia__
  $noMentionMessage}{footer:Enviada por $username !}{color:RANDOM}{reactions:<a:like:764199181044023326>,<a:No:764169751899275284>}]
  $argsCheck[>1;<a:No:764169751899275284>Debes de escribir algo para enviar como sugerencia]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getServerVar[sugerencia]!=;<a:No:764169751899275284>Necesitas establacer un canal de sugerencias]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};