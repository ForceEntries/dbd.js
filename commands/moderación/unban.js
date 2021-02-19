module.exports = {
  name: "unban",
  code: `
$unban[$findMember[$message[1]]]
$title[Usuario desbaneado]
$description[
Usuario: $username[$findMember[$message[1]]]
Administrador: $username]
$footer[cuidando el servidor]
$thumbnail[$userAvatar[$findMember[$message[1]]]]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$userExists[$findUser[$message[1]]]==true;<a:No:764169751899275284>Ese usuario que intentas desbanear no existe]
$onlyIf[$isBanned[$message[1]]==true;<a:No:764169751899275284>El usuario $username[$findUser[$message[1]]] no esta en la lista de baneados]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar al usuario para desbanearlo]
$onlyBotPerms[admin;<a:No:764169751899275284>Necesito tener permisos de \`administrador\` para ejecutar este comando]
$onlyIf[$hasPerms[$authorID;admin]!=false;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
