module.exports = {
  name: "unmuted",
  aliases: ["unmute"],
  code: `
    $takeRoles[$findMember[$message[1]];$getServerVar[muted]]
  $title[Usuario muteado]
$description[
Usuario: $username[$findMember[$message[1]]]
Administrador: $username]
$footer[cuidando el servidor]
$thumbnail[$userAvatar[$findMember[$message[1]]]]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario es tiene un rol mas alto que yo]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol mas alto que tú]
  $onlyIf[$findMember[$message[1]]!=$authorID;]
  $argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar alguien para desmutearlo]
  $onlyIf[$getServerVar[muted]!=;<a:No:764169751899275284>No se a configurado un rol, ejecuta el comando $getServerVar[prefix]setmuted para establecerlo]
 $onlyBotPerms[manageroles;<a:No:764169751899275284>Necesito tener permisos de \`gestionar roles\` para ejecutar este comando]
   $onlyIf[$hasPerms[$authorID;manageroles]!=fase;<a:No:764169751899275284>Necesitas permisos de \`gestionar roles\` para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
