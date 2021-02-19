module.exports = {
  name: "with",
  aliases: ["wd"],
  code: `
  $setGlobalUserVar[banco;0]
  $description[$username a retirado $getGlobalUserVar[banco;$authorID] Coins<:SilverCoin:805540007812661298> con exito<a:like:764199181044023326>
  
<:silverbilletera:800348101402689546>Dinero: \`$getGlobalUserVar[money]\`Coins<:SilverCoin:805540007812661298>
:bank:Banco: \`0\`Coins<:SilverCoin:805540007812661298>]

  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getGlobalUserVar[banco]]]
  $onlyIf[$getGlobalUserVar[banco]>0;<a:No:764169751899275284>No tienes suficiente dinero para retirar]
   $onlyIf[$checkContains[$message;max;all]==true;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
