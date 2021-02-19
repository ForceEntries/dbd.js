module.exports = {
  name: "say",
  code: `
  $deletecommand
  $replaceText[$message;@;]
  $globalCooldown[5s;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
