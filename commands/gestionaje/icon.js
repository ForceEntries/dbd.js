module.exports = {
  name: "icon",
  code: `
  $image[$serverIcon[$guildID]]
  $footer[Pedido por $username]
  $argsCheck[0;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
