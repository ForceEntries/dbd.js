module.exports = {
  name: "unwarn",
  aliases: ["unwarns"],
  code: `
$title[Se ha removido un warn]
$description[
Usuario: $username[$findMember[$message[1]]]
Administrador: $username
Warn removidos: $message[2]
]
$footer[cuidando el servidor]
$thumbnail[$userAvatar[$findMember[$message[1]]]]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$setUserVar[warn;$sum[$getUserVar[warn;$findMember[$message[1]]];1];$findMember[$message[1]]]
$onlyIf[$getUserVar[warn;$findMember[$message[1]]]>=$message[2];<a:No:764169751899275284>El usuario no tiene esa cantidad de warn a remover]
$onlyIf[$message[2]>=1;La cantidad de warn a remover es invalida]
$onlyIf[$checkContains[$message[2];-]==false;La cantidad de warn a remover es invalida]
$onlyIf[$isBot[$mentioned[1;yes]]==false;]
$onlyIf[$isNumber[$message[2]]==true;<a:No:764169751899275284>Necesitas poner la cantidad de warn ha quitar]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol mas alto o igual al mio]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol mas alto o igual al tuyo]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar al usuario para remover un warn]
$onlyIf[$hasPerms[$authorID;admin]!=false;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
