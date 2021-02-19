module.exports = {
  name: "mine",
  code: `
  $author[$username#$discriminator;$authorAvatar]
  $description[
  :pick:Haz ido en busca de unas minas y esto haz encontrado:
  Coins: $random[$getGlobalUserVar[mine1;$authorID];$getGlobalUserVar[mine2;$authorID]]<:SilverCoin:805540007812661298>]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[$getGlobalUserVar[mine1;$authorID];$getGlobalUserVar[mine2;$authorID]]];$authorID]
  $globalCooldown[5m;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[pico;$authorID]>0;<a:No:764169751899275284>Necesitas un pico:pick: para ejecutar este comando]
$argsCheck[0;]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
