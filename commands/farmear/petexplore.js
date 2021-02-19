module.exports = {
  name: "pet",
  code: `
  $author[$username#$discriminator;$authorAvatar]
$setGlobalUserVar[fuerza;$sub[$getGlobalUserVar[fuerza;$authorID];18];$authorID]
$setGlobalUserVar[defensa;$sub[$getGlobalUserVar[defensa;$authorID];10];$authorID]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[$getGlobalUserVar[explore1;$authorID];$getGlobalUserVar[explore2;$authorID]]];$authorID]
$description[Tu mascota salio a explorar y consiguio lo siguiente:
Coins: $random[$getGlobalUserVar[explore1;$authorID];$getGlobalUserVar[explore2;$authorID]]<:SilverCoin:805540007812661298>
$replaceText[$replaceText[$checkCondition[$random[1;6]==4];true;:bone:huesos: $random[1;6]];false;]]
$color[RANDOM]
$setGlobalUserVar[huesos;$sum[$getGlobalUserVar[huesos;$authorID];$replaceText[$replaceText[$checkCondition[$random[1;6]==4];true;$random[1;6]];false;0]]]
$globalCooldown[5m;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[fuerza;$authorID]>=15;<a:No:764169751899275284>Tu mascota se encuentra con poca fuerza, comprale comida para mandarla a explorar]
$onlyIf[$getGlobalUserVar[defensa;$authorID]>=10;<a:No:764169751899275284>Tu mascota se encuentra con poca defensa, comprale comida para mandarla a explorar]
$onlyIf[$getGlobalUserVar[perro;$authorID]>=1;<a:No:764169751899275284>Necesitas tener una mascota para ejecutar este comando]
$onlyIf[$checkContains[$message;explore]==true;]
$onlyIf[$checkContains[$message;stats]==false;]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
