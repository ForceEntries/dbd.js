module.exports = {
  name: "setsugerencia",
  code: `
  $setServerVar[sugerencia;$findChannel[$message[2]]]
  $author[$username#$discriminator;$authorAvatar]
$description[Se ha establecido el canal de <#$findChannel[$message[2]]> para enviar sugerencias]
$onlyIf[$channelExists[$findChannel[$message[1]]]==true;<a:No:764169751899275284>El canal que intentas establecer no existe]
$argsCheck[>1;<a:No:764169751899275284>Necesitas mencionar o poner la ID de un canal para establecer las sugerencias]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$hasPerms[$authorID;admin]==true;<a:No:764169751899275284>Necesitas permisos de \`Administrador\` para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
