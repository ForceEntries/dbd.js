module.exports = {
  name: "muted",
  aliases: ["mute"],
  code: `
    $giveRoles[$findMember[$message[1]];$getServerVar[muted]]
    $color[RANDOM]
 $title[Usuario muteado]
$description[
Usuario: $username[$findMember[$message[1]]]
Administrador: $username
Razón: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;no se dio motivo];false;$messageSlice[1]]]
$footer[cuidando el servidor]
$thumbnail[$userAvatar[$findMember[$message[1]]]]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que yo]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que tú]
  $onlyIf[$mentioned[1]!=768348254466605058;<a:No:764169751899275284>No puedo mutearme a mi mismo]
  $onlyIf[$findMember[$message[1]]!=$authorID;]
  $argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar alguien para mutearlo]
    $onlyIf[$getServerVar[muted]!=;<a:No:764169751899275284>No se a configurado un rol, ejecuta el comando $getServerVar[prefix]setmuted para establecerlo]
   $onlyBotPerms[manageroles;<a:No:764169751899275284>Necesito tener permisos de \`gestionar roles\` para ejecutar este comando]
   $onlyIf[$hasPerms[$authorID;manageroles]!=fase;<a:No:764169751899275284>Necesitas permisos de \`gestionar roles\` para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
