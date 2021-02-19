module.exports = {
  name: "server",
  code: `

$title[**Informacion de $serverName[$guildID]**]
$description[
**__Nombre Del Server:__** 
$serverName[$guildID]

📆 **__Fecha de creacion:__** 
$creationDate[$guildID]

**__🔔 Invite:__** 
[$serverName[$guildID]\\]($getServerInvite)

:id:**__Server ID:__** 
$guildID
 
**__🌍 Region:__** 
$serverRegion

**__👑 Dueño:__** 
<@$ownerID>

**__😎 Emojis:__** 
$emojiCount

<:boosteo:805229532012740680>**__Total de boosteos:__**
$serverBoostCount

**__👻 Canales:__** 
$channelCount

**__🎭 Roles:__** 
$roleCount

**__📃 Nivel de verificación:__**
$serverVerificationLevel

**__MIEMBROS__**

**Número De Miembros**: 
$membersCount
]
$addTimestamp
$color[$random[12345;67890]]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$checkContains[$message;info]==true;]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]
`
};
