module.exports = {
  name: "invite",
  aliases: ["invites", "invitacion"],
  code: `
$title[🤖Invitación De Silver Help🤖]
$description[Una pequeña invitación para agregarme en servidores.
 presiona abajito👇
[━━━━━━✧Invitación a los servidores✧━━━━━━\\]($getBotInvite) ]
$color[RANDOM]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando ]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
