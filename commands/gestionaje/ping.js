module.exports = {
  name: "ping",
  code: `
  $description[Mi ping es de: $pingms:yum:]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $color[RANDOM]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
