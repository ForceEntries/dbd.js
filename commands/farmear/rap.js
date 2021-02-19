module.exports = {
  name: "rap",
  code: `
  $setGlobalUserVar[view;$sum[$getGlobalUserVar[view;$authorID];$replaceText[$replaceText[$checkCondition[$randomText[gano;perdio]==perdio];true;$random[$getGlobalUserVar[view1;$authorID];$getGlobalUserVar[view2;$authorID]]];false;0]];$authorID]
  $setGlobalUserVar[sub;$sum[$getGlobalUserVar[sub;$authorID];$replaceText[$replaceText[$checkCondition[$randomText[gano;perdio]==gano];true;$random[$getGlobalUserVar[sub1;$authorID];$getGlobalUserVar[sub2;$authorID]]];false;0]];$authorID]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[$getGlobalUserVar[rap1;$authorID];$getGlobalUserVar[rap2;$authorID]]];$authorID]
  $author[$userTag;$authorAvatar]
  $description[
Te haz puesto demostrar tu talento en la calle y esta fue tu recompensa:
Coins: $random[$getGlobalUserVar[rap1];$getGlobalUserVar[rap2]]<:SilverCoin:805540007812661298>
$replaceText[$replaceText[$checkCondition[$randomText[gano;perdio]==gano];true;<:youtube:809476521780707398>Suscriptores: $random[$getGlobalUserVar[sub1;$authorID];$getGlobalUserVar[sub2;$authorID]]];false;]$replaceText[$replaceText[$checkCondition[$randomText[gano;perdio]==perdio];true;<:visita:811260289256652840>visitas: $random[$getGlobalUserVar[view1;$authorID];$getGlobalUserVar[view2;$authorID]]];false;]]
  $onlyIf[$getGlobalUserVar[microfono;$authorID]>=1;<a:No:764169751899275284>Necesitas tener al menos un microfono🎤]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
