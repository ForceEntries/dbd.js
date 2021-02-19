module.exports = {
  name: "removerole",
  code: `
  $author[Ajustes de roles;$authorAvatar]
  $description[<@$findUser[$message[1]]> ha perdido el rol <@&$findRole[$message[2]]>]
  $footer[Comando ejecutado por $username]
  $takeRoles[$findUser[$message[1]];$findRole[$message[2]]]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que yo]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];<a:No:764169751899275284>Ese usuario tiene un rol igual o mas alto que tú]
   $onlyIf[$roleExists[$findRole[$message[2]]]==true;<a:No:764169751899275284>El rol que quieres establecer no existe]
  $argsCheck[>2;<a:No:764169751899275284>Tienes que mencionar o poner la ID del rol a dar]
   $onlyIf[$findMember[$message[1]]!=$authorID;]
  $argsCheck[>1;<a:No:764169751899275284>Necesitas mencionar o poner la ID de una persona]
    $onlyBotPerms[manageroles;<a:No:764169751899275284>Necesito tener permisos de \`gestionar roles\` para ejecutar este comando]
   $onlyIf[$hasPerms[$authorID;admin]!=fase;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
$color[RANDOM]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
