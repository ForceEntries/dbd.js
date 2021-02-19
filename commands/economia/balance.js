module.exports = {
  name: "balance",
  aliases: ["bal", "b"],
  code: `
  $author[balance de $username[$findUser[$message[1]]];$userAvatar[$findUser[$message[1]]]]
$color[RANDOM]
  $description[
 <:SilverCoin:805540007812661298>Coins:
 <:silverbilletera:800348101402689546>Tiene un total de \`$getGlobalUserVar[money;$findUser[$message[1]]]\` Coins
  
🏦Banco:
<:silverbilletera:800348101402689546>Tiene un total de \`$getGlobalUserVar[banco;$findUser[$message[1]]]\` Coins]
$globalCooldown[3s;<a:noesno:787037646508523572>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
