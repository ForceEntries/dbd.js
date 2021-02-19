module.exports = ({
name: "removecoins",
code: 
`
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$mentioned[1]];$message[2]];$findUser[$message[1]]]
$author[$userTag[$findUser[$message[1]]];$userAvatar[$findUser[$message[1]]]]
$description[Se le ha removido $message[2] Coins a $username[$findUser[$message[1]]]]
$onlyForIDs[498629438934745130;]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]
`
})