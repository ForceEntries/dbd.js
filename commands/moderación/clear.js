module.exports = {
  name: "clear",
  aliases: ["purge"],
  code: `
  $deleteIn[3s]
  Se han eliminado **$message[1]** mensajes con exito<a:like:764199181044023326>
  $clear[$message[1]]
  $deletecommand
  $suppressErrors[<a:No:764169751899275284>No puedo borrar mensajes anteriores a una semana de enviado]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$message[1]<101;<a:No:764169751899275284>No puedes borrar mas de 100 mensajes]
  $onlyIf[$isNumber[$message[1]]==true;<a:No:764169751899275284>Debes de poner un numero]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner una cantidad de mensajes para borrar]
  $onlyBotPerms[managemessages;<a:No:764169751899275284>Necesito tener permisos de \`gestionar mensajes\` para ejecutar este comando]
  $onlyIf[$hasPerms[$authorID;managemessages]!=;<a:No:764169751899275284>Necesitas permisos de \`gestionar mensajes\` para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
