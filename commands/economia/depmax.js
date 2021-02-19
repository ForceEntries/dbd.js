module.exports = {
  name: "dep",
  code: `
  $setGlobalUserVar[money;0]
  $description[$username a depositado $getGlobalUserVar[money;$authorID] Coins<:SilverCoin:805540007812661298> con exito<a:like:764199181044023326>
  
<:silverbilletera:800348101402689546>Dinero: \`0\`Coins<:SilverCoin:805540007812661298>
:bank:Banco: \`$getGlobalUserVar[banco]\`Coins<:SilverCoin:805540007812661298>]
  
  $setGlobalUserVar[banco;$sum[$getGlobalUserVar[banco];$getGlobalUserVar[money]]]
  $onlyIf[$getGlobalUserVar[money]>0;<a:No:764169751899275284>No tienes suficiente Coins<:SilverCoin:805540007812661298> para depositar]
  $onlyIf[$checkContains[$message;max;all]==true;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
