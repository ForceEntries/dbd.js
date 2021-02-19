module.exports = {
  name: "crime",
  code: `
  $author[$username#$discriminator;$authorAvatar]
  $description[Quisiste robar a $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$randomMention;<;];@;];>;];!;]] y terminaste $randomText[ganando;perdiendo] $random[10;150] Coins<:SilverCoin:805540007812661298>]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$replaceText[$replaceText[$randomText[ganando;perdiendo];ganando;+];perdiendo;-]$random[10;150]];$authorID]
  $globalCooldown[5m;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=150;<a:No:764169751899275284>Necesitas tener al menos 150 coins<:SilverCoin:805540007812661298> para ejecutar este comando]
  $color[$replaceText[$replaceText[$checkCondition[$randomText[ganando;perdiendo]==ganando];true;006310];false;9A0000]]
    $argsCheck[0;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
