module.exports = {
  name: "unlock",
  code: `
$title[Canal abierto]
$color[RANDOM]
$description[El canal <#$channelID> fue abierto con exito<a:like:764199181044023326>]
$footer[Acción realizada por $username]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyBotPerms[managechannels;<a:No:764169751899275284>Necesito tener permisos de \`gestionar canales\` para ejecutar este comando]
$onlyIf[$hasPerms[$authorID;managechannels]==true;<a:No:764169751899275284>Necesitas tener permisos de \`gestionar canales\` para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
