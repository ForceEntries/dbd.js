module.exports = {
  name: "checkwarn",
  aliases: ["checkwarns"],
  code: `
  $title[]
  $description[$username[$findUser[$message[1]]] Tiene un total de \`$getUserVar[warn;$findUser[$message[1]]]\` warns]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$findMember[$message[1]]!=$authorID;]
  $onlyIf[$hasPerms[$authorID;admin]!=false;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
  $color[RANDOM]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};