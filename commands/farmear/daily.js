module.exports = {
  name: "daily",
  code: `
  $author[$username#$discriminator;$authorAvatar]
  $description[Has recibido tu recompensa diaria de 500 Coins<:SilverCoin:805540007812661298>]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];500];$authorID]
  $globalCooldown[12h;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $color[RANDOM]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
