module.exports = {
  name: "tempmute",
  code: `
   $channelSendMessage[$channelID;{description:El usuario $username[$findMember[$message[1]]] fue desmuteado}]
  $takeRoles[$findMember[$message[1]];$getServerVar[muted]]
  $wait[$message[2]]
  $giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{description:El usuario $username[$findMember[$message[1]]] Fue muteado con exito
Tiempo: $message[2]
Razon: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;no se dio motivo];false;$messageSlice[1]]}]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$charCount[$message[2]]<=3;No puedes poner tantos numeros como numero de mute]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que yo]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que tú]
$onlyIf[$checkContains[$message[2];h;m;s]==true;<a:No:764169751899275284>Debes de poner un tiempo (h,m,s)]
$argsCheck[>2;<a:No:764169751899275284>Debes de poner un tiempo de muteo]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar alguien para mutearlo]
$onlyIf[$getServerVar[muted]!=;<a:No:764169751899275284>No se a configurado un rol, ejecuta el comando $getServerVar[prefix]setmuted para establecerlo]
 $onlyBotPerms[manageroles;<a:No:764169751899275284>Necesito tener permisos de \`gestionar roles\` para ejecutar este comando]
   $onlyIf[$hasPerms[$authorID;manageroles]!=fase;<a:No:764169751899275284>Necesitas permisos de \`gestionar roles\` para ejecutar este comando]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
