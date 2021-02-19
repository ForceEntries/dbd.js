module.exports = ({
  name: "report",
  code: 
  `
  $channelSendMessage[$channelID;{author:$userTag:$authorAvatar}{description:Tu reporte a sido enviado con exito<a:like:764199181044023326>}{color:RANDOM}]
  $description[
  Reporte: $noMentionMessage
  Usuario: $userTag[$authorID]
  ID: $authorID
  ]
  $useChannel[809880347554480208]
  $argsCheck[>1;<a:No:764169751899275284>Debes de escribir lo que quieres reportar]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
});