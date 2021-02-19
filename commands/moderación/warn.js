module.exports = {
  name: "warn",
  aliases: ["warns"],
  code: `
$title[Usuario warneado]
$description[
Usuario: $username[$findMember[$message[1]]]
Administrador: $username
Razón: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;no se dio motivo];false;$messageSlice[1]]]
$footer[cuidando el servidor]
$thumbnail[$userAvatar[$findMember[$message[1]]]]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$setUserVar[warn;$sum[$getUserVar[warn;$findMember[$message[1]]];1];$findMember[$message[1]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol mas alto o igual al mio]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol mas alto o igual al tuyo]
$onlyIf[$mentioned[1]!=768348254466605058;<a:No:764169751899275284>No puedo warnearme a mi mismo]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar al usuario para aplicarle un warn]
$onlyIf[$hasPerms[$authorID;admin]!=false;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
