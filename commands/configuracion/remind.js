module.exports = {
  name: "remind",
  code: `
  $channelSendMessage[$channelID;<@$authorID>{author:$username#$discriminator:$authorAvatar}{description:Tiempo finalizado
Razón: $messageSlice[1]}{color:RANDOM}]
  $wait[$message[1]]
  $channelSendMessage[$channelID;{author:$username#$discriminator:$authorAvatar}{description:Se te notificara en $message[1] con la 
razón: $messageSlice[1]}{color:RANDOM}]
  $suppressErrors[<a:No:764169751899275284>Debes de establecer bien el tiempo de remind
Su uso: $getServerVar[prefix]remind (mencionar canal) <---- es opcional (tiempo)]
$onlyIf[$charCount[$message[1]]<=3;No puedes establecer tanto tiempo como tiempo de remind]
  $onlyIf[$checkContains[$message[1];s;m;h;d]==true;<a:No:764169751899275284>Debes de establecer bien el numero como remind]
  $argsCheck[>2;Debes de escribir una razón por la cual estableceras el remind]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner el tiempo que quieres establecer un tiempo como remind]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
