module.exports = {
  name: "fish",
  code: `
  $author[$username#$discriminator;$authorAvatar]
  $description[
🎣Haz ido en busca de unos mares y esto haz encontrado:
Coins: $random[$getGlobalUserVar[fish1;$authorID];$getGlobalUserVar[fish2;$authorID]]<:SilverCoin:805540007812661298>]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[$getGlobalUserVar[fish1;$authorID];$getGlobalUserVar[fish2;$authorID]]];$authorID]
$color[RANDOM]
$globalCooldown[5m;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[caña;$authorID]>0;<a:No:764169751899275284>Necesitas una caña🎣 para ejecutar este comando]
$argsCheck[0;]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
