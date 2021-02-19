module.exports = {
  name: "ban",
  code: `
  $color[RANDOM]
$ban[$findMember[$message[1]]]
$title[Usuario baneado]
$description[
Usuario: $username[$findMember[$message[1]]]
Administrador: $username
Razón: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;no se dio motivo];false;$messageSlice[1]]]
$footer[cuidando el servidor]
$thumbnail[$userAvatar[$findMember[$message[1]]]]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que yo >.<]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que tú]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$mentioned[1]!=768348254466605058;<a:No:764169751899275284>No puedo banearme a mi mismo]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar al usuario para banearlo]
$onlyBotPerms[ban;<a:No:764169751899275284>Necesito tener permisos de \`banear miembros\` para ejecutar este comando]
$onlyIf[$hasPerms[$authorID;ban]!=false;<a:No:764169751899275284>Necesitas permisos de \`banear miembros\` para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
