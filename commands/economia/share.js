module.exports = {
  name: "share",
  aliases: ["give"],
  code: `
  $title[]
  $description[$username le a donado $message[2] Coins<:SilverCoin:805540007812661298> a $username[$mentioned[1]] con exito<a:like:764199181044023326>]
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$message[2]];$authorID]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];$message[2]];$mentioned[1]]
  $onlyIf[$mentioned[1]!=$authorID;<a:No:764169751899275284>No puedes darte dinero a ti mismo]
  $onlyIf[$isBot[$mentioned[1]]==false;<a:No:764169751899275284>No puedes darle dinero a un bot]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=$message[2];<a:No:764169751899275284>No tienes suficiente Coins<:SilverCoin:805540007812661298> para donar]
  $onlyIf[$message[2]>=1;<a:No:764169751899275284>Debes de poner una cantidad válida]
  $onlyIf[$isNumber[$message[2]]==true;<a:No:764169751899275284>No puedes donar eso como cantidad]
  $onlyIf[$message[2]!=;<a:No:764169751899275284>Ese numero no es valido]
  $argsCheck[>2;<a:No:764169751899275284>Debes de escribir que cantidad donar]
  $onlyIf[$mentioned[1]!=;<a:No:764169751899275284>Necesitas mencionar a una persona]
  $globalCooldown[10s;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
