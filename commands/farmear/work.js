module.exports = {
  name: "work",
  aliases: ["w"],
  code: `
  $author[$username#$discriminator;$authorAvatar]
  $description[trabajaste $randomText[como programador;como psicologo;como arreglador de bugs] y te pagaron $random[$getGlobalUserVar[work1;$authorID];$getGlobalUserVar[work2;$authorID]]Coins<:SilverCoin:805540007812661298>]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[$getGlobalUserVar[work1;$authorID];$getGlobalUserVar[work2;$authorID]]];$authorID]
  $color[RANDOM]
  $globalCooldown[30m;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
