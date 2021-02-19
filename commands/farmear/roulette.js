module.exports = {
  name: "roulette",
  code: `
  $author[$username#$discriminator;$authorAvatar]
  $description[Has apostado $message[1]<:SilverCoin:805540007812661298> a $toLowercase[$message[2]] y $replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$toLowercase[$randomText[Red;Black]]];true;Ganaste];false;Perdiste]]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$toLowercase[$randomText[Red;Black]]];true;+];false;-]$message[1]];$authorID]
  $onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;<a:No:764169751899275284>Debes de elegir Black o Red]
  $argsCheck[>2;<a:No:764169751899275284>Debes de elegir Black o Red]
  $onlyIf[$message[1]>99;<a:No:764169751899275284>Debes de apostar 100 Coins<:SilverCoin:805540007812661298> hacia arriba]
  $onlyIf[$isNumber[$message[1]]==true;<a:No:764169751899275284>Debes de poner un numero como cantidad de Coins<:SilverCoin:805540007812661298> para apostar]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner una cantidad de Coins<:SilverCoin:805540007812661298> para apostar]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=$message[1];<a:No:764169751899275284>No tienes suficiente Coins<:SilverCoin:805540007812661298> para apostar]
  $color[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$toLowercase[$randomText[Red;Black]]];true;006310];false;9A0000]]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
