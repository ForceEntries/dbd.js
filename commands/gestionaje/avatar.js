module.exports = {
  name: "avatar",
  code: `
  $title[Avatar de $username[$findMember[$message]]]
  $description[[Descarga aqui\\]($userAvatar[$findMember[$message]])]
  $image[$userAvatar[$findMember[$message]?size=4096]]
  $footer[Ejecutado por $username]
  $color[RANDOM]
 $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
