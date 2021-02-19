module.exports = {
  name: "setmuted",
  aliases: ["setmute"],
  code: `
$color[RANDOM]
  $title[]
  $description[Se ha establecido el rol <@&$findRole[$message[1]]> para mutear]
  $setServerVar[muted;$findRole[$message[1]]] 
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$roleExists[$findRole[$message[1]]]==true;El rol que quieres establecer no existe]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner la ID o mencionar el rol a establecer]
  $onlyIf[$hasPerms[$authorID;admin]!=false;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
