module.exports = {
  name: "setwelcome",
  code: `
  $setServerVar[welcome;$mentionedChannels[1]]
  $author[$userTag;$authorAvatar]
  $description[El canal de bienvenidas fue establecido a <#$mentionedChannels[1]>]
  $onlyIf[$mentionedChannels[1]!=;Debes de mencionar un canal para establecerlo como bienvenida]
  $argsCheck[>1;Debes de mencionar un canal para establecerlo como bienvenida]
  $onlyForIDs[498629438934745130;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
