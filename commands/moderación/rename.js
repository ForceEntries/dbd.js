module.exports = {
  name: "rename",
  aliases: ["setnick"],

  code: `
  $changeNickname[$mentioned[1];$messageSlice[1]]
  $author[$Usertag[$mentioned[1]];$userAvatar[$mentioned[1]]]
  $description[$username[$mentioned[1]] Obtuvo el nombre de **$messageSlice[1]**]
  $onlyIf[$charCount[$messageSlice[1]]<=32;No puedes establecer mas de 32 caracteres como nombre]
   $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que yo]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que tú]
  $onlyIf[$mentionedChannels[1]==;No puedes establecer un canal como apodo]
  $onlyIf[$mentionedRoles[1]==;No puedes establecer un rol como apodo]
  $onlyIf[$mentioned[2]==;No puedes establecer una mención como apodo]
  $argsCheck[>2;Debes de escribir el nombre que quieres ponerle al usuario]
  $onlyIf[$mentioned[1]!=;Debes de mencionar a un usuario para cambiarle el apodo]
  $argsCheck[>1;Debes de mencionar a un usuario para cambiarle el apodo]
  $onlyBotPerms[managenicknames;Necesito tener permisos de \`gestionar apodos\` para ejecutar este comando]
  $onlyIf[$hasPerms[$authorID;managenicknames]==true;Necesitas tener permisos \`Gestionar apodos\` para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
