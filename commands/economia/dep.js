module.exports = {
  name: "dep",
  code: `
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$message[1]];$authorID]
  $setGlobalUserVar[banco;$sum[$getGlobalUserVar[banco;$authorID];$message[1]];$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[Haz depositado $message[1] Coins<:SilverCoin:805540007812661298> a tu banco con exito<a:like:764199181044023326>
<:silverbilletera:800348101402689546>Dinero: $sub[$getGlobalUserVar[money;$authorID];$message[1]]
:bank:Banco: $sum[$getGlobalUserVar[banco;$authorID];$message[1]]]
  $onlyIf[$getGlobalUserVar[money;$authorID]>0;<a:No:764169751899275284>No tienes suficiente dinero para depositar]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=$message[1];<a:No:764169751899275284>Ese numero supera la cantidad de tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $onlyIf[$message[1]>0;<a:No:764169751899275284>Esa cantidad no es valida]
  $onlyIf[$isNumber[$message[1]]==true;<a:No:764169751899275284>Debes especificar cuanto quieres depositar]
  $argsCheck[>1;<a:No:764169751899275284>Necesitas poner una cantidad para depositar]
  $onlyIf[$checkContains[$message;max;all]==false;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
