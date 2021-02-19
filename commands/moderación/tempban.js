module.exports = {
  name: "tempban",
  code: `
   $channelSendMessage[$channelID;{description:Usuario desbaneado: $username[$findMember[$message[1]]]
Administrador: Silver help}]
   $unban[$findUser[$message[1]]]
  $wait[$message[2]]
$ban[$findUser[$message[1]]]
  $channelSendMessage[$channelID;{description:
Usuario: $username[$findMember[$message[1]]]
Administrador: $username
Razón: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;no se dio motivo];false;$messageSlice[1]]}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que yo]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que tú]
$onlyIf[$checkContains[$message[2];h;m;s]==true;<a:No:764169751899275284>Debes de poner un tiempo (h,m,s)]
$argsCheck[>2;<a:No:764169751899275284>Debes de poner un tiempo de muteo]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar alguien para banearlo]
$onlyBotPerms[ban;<a:No:764169751899275284>Necesito tener permisos de \`banear miembros\` para ejecutar este comando]
$onlyIf[$hasPerms[$authorID;ban]!=false;<a:No:764169751899275284>Necesitas permisos de \`banear miembros\` para ejecutar este comando]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
