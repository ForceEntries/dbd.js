module.exports = {
  name: "weekly",
  code: `
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];5000];$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[Haz obtenido 5000 Coins<:SilverCoin:805540007812661298> como recompensa semanal]
$color[RANDOM]
$globalCooldown[7d;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
