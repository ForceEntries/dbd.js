module.exports = ({
  name: "setrole",
  code:
  `
  $setServerVar[autorole;$mentionedChannels[1]]
  $author[$userTag;$authorAvatar]
  $description[El canal fue establecido en <#$mentionedChannels[1]> para el auto role]
  $onlyIf[$mentionedChannels[1]!=;Debes de mencionar un canal]
  $onlyForIDs[498629438934745130;]`
})