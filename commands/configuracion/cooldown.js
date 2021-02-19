module.exports = {
  name: "cooldown",
  aliases: ["slowmode"],
  code: `
  $slowmode[$mentionedChannels[1;yes];$message[1]]
  $title[Ajustes de cooldown]
  $description[El en canal <#$mentionedChannels[1;yes]> se establecio $message[1] como cooldown]
  $footer[Acción realizada por $username]
  $suppressErrors[<a:No:764169751899275284>No puedes establecer un cooldown bien el numero de cooldown/que no supere las 6 horas
Su uso: $getServerVar[prefix]slowmode (tiempo) (mencionar canal) <---- es opcional ]
  $onlyIf[$checkContains[$message[1];s;m;h]==true;<a:No:764169751899275284>Debes de establecer bien el numero de cooldown]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner el tiempo que quieres establecer de cooldown en el canal]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyBotPerms[managechannels;<a:No:764169751899275284>Necesito tener permisos de \`gestionar canales\` para ejecutar este comando]
  $onlyIf[$hasPerms[$authorID;managechannels]==true;<a:No:764169751899275284>Necesitas tener permisos de \`gestionar canales\` para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
