module.exports = {
  name: "addemoji",
  code: `
  $title[Se ha añadido un emoji nuevo al servidor]
  $color[RANDOM]
  $description[El emoji fue agregado con el nombre ---> **$message[2]**]
  $footer[Acción realizada por $username]
  $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $suppressErrors[<a:No:764169751899275284>El procedimiento para agregar el emoji salio mal, intenta de nuevo]
  $onlyIf[$charCount[$message[2]]>=2;<a:No:764169751899275284>Debes de poner un nombre mas largo]
  $argsCheck[>2;<a:No:764169751899275284>Debes de ponerle un nombre al emoji]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner el emoji o la ID para agregarlo al servidor]
  $onlyBotPerms[manageemojis;<a:No:764169751899275284>Necesito tener permisos de \`gestionar emojis\` para ejecutar este comando]
  $onlyIf[$hasPerms[$authorID;manageemojis]==true;<a:No:764169751899275284>Necesitas permisos de \`gestionar emojis\` para usar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
