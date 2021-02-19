module.exports = {
  name: "vote",
  aliases: ["v"],
  code: `
$title[Estado]
$color[RANDOM]
$description[$username puedes votar por mi ---> [presionando aqui\\](https://top.gg/bot/755018537533308938/vote)
si deseas puedes unirte al [servidor de soporte\\](https://discord.gg/CrfzxYqtGt) para cualquier información o si necesitas soporte y estar comunicándote con la comunidad oficial de Silver Help :u]

$thumbnail[https://images-ext-1.discordapp.net/external/S0xPnPCk7FoDdLwJcwrFHzR8ae2zBlaX_1M8x4QNP2c/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/755018537533308938/250729e1e4e661d4d7bbbc168b0483ad.png?width=240&height=240]
$globalCooldown[5s;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
