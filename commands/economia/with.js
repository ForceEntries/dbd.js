module.exports = {
  name: "with",
  aliases: ["wd"],
  code: `
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$message[1]];$authorID]
  $setGlobalUserVar[banco;$sub[$getGlobalUserVar[banco;$authorID];$message[1]];$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[Haz retirado $message[1] Coins<:SilverCoin:805540007812661298> del banco con exito<a:like:764199181044023326>
<:silverbilletera:800348101402689546>Dinero: $sum[$getGlobalUserVar[money;$authorID];$message[1]]
:bank:Banco: $sub[$getGlobalUserVar[banco;$authorID];$message[1]]]
  $onlyIf[$getGlobalUserVar[banco;$authorID]>=$message[1];<a:No:764169751899275284>Ese numero supera la cantidad de tu balance ($getGlobalUserVar[banco;$authorID]<:SilverCoin:805540007812661298>)]
  $onlyIf[$getGlobalUserVar[banco;$authorID]>0;<a:No:764169751899275284>No tienes dinero para retirar]
  $onlyIf[$isNumber[$message[1]]==true;<a:No:764169751899275284>Debes especificar cuanto quieres retirar]
  $onlyIf[$message[1]>0;<a:No:764169751899275284>Ese numero no es valido]
  $argsCheck[>1;<a:No:764169751899275284>Debes de poner una cantidad para retirar]
  $onlyIf[$checkContains[$message;max;all]==false;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
