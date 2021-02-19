module.exports = {
  name: "buy",
  code: `
  $if[$message==]
  <a:No:764169751899275284>Debes de poner el item que deseas comprar
  $elseIf[$toLowercase[$message]==caña]
  $author[$username#$discriminator;$authorAvatar]
  $description[Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** caña de pescar🎣
  
  **Precio:** 50 Coins<:SilverCoin:805540007812661298>
  
  **Se te han descontado:** 50 Coins<:SilverCoin:805540007812661298>]
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];50];$authorID]
  $setGlobalUserVar[caña;$sum[$getGlobalUserVar[caña;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=50;<a:No:764169751899275284>El valor de item supera tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $endelseIf
  $elseIf[$toLowercase[$message]==pico]
$author[$username#$discriminator;$authorAvatar]
 $description[Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** pico:pick:
  
  **Precio:** 50 Coins<:SilverCoin:805540007812661298>
  
  **Se te han descontado:** 50 Coins<:SilverCoin:805540007812661298>]
  $setGlobalUserVar[pico;$sum[$getGlobalUserVar[pico;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=50;<a:No:764169751899275284>El valor de item supera tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $endelseIf
  $elseIf[$toLowercase[$message]==perro]
  $author[$username#$discriminator;$authorAvatar]
  $description[Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** Perro: 
  
  **Precio:** 500 Coins<:SilverCoin:805540007812661298>
  
  **Se te han descontado:** 500 Coins<:SilverCoin:805540007812661298>]
  $image[https://images-ext-2.discordapp.net/external/4AB_r0q9SOnabdnd8VKzJl0TNj0v8N0qHyi3bRwyAZQ/https/cdn.discordapp.com/emojis/790861564923084811.gif]

  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];500];$authorID]
  
  $setGlobalUserVar[perro;$sum[$getGlobalUserVar[perro;$authorID];1];$authorID]
  
  $setGlobalUserVar[nameperro;Beethoven<a:perro:803041696853000192>;$authorID]
  $onlyIf[$getGlobalUserVar[perro;$authorID]==0;<a:No:764169751899275284>No puedes volver a comprar esta pet >.<]
  $onlyIf[$getGlobalUserVar[money;$authorID]>499;<a:No:764169751899275284>El valor de item supera tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $endelseIf
  $elseIf[$toLowercase[$message]==defense]
   $setGlobalUserVar[pocionblue;$sum[$getGlobalUserVar[pocionblue;$authorID];1];$authorID]
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];250];$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[
  Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** Poción de defensa<:pociondefense:803035278612758619>
  
  **Precio:** 250 Coins<:SilverCoin:805540007812661298>
  
  **Se te han descontado:** 250 Coins<:SilverCoin:805540007812661298>]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=250;<a:No:764169751899275284>El valor de item supera tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $endelseIf
  $elseIf[$toLowercase[$message]==heart]
  $setGlobalUserVar[pocionred;$sum[$getGlobalUserVar[pocionred;$authorID];1];$authorID]
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];250];$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[
  Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** Poción de vida<:pocionheart:803037051100463105> 
  
  **Precio:** 250 Coins<:SilverCoin:805540007812661298>
  
  **Se te han descontado:** 250 Coins<:SilverCoin:805540007812661298>]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=250;<a:No:764169751899275284>El valor de item supera tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $endelseIf
  $elseIf[$toLowercase[$message]==strong]
  $setGlobalUserVar[pociongree;$sum[$getGlobalUserVar[pociongree;$authorID];1];$authorID]
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];250];$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[
  Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** Poción de fuerza<:pociongree:804117509304352778> 
  
  **Precio:** 250 Coins<:SilverCoin:805540007812661298>
  
  **Se te han descontado:** 250 Coins<:SilverCoin:805540007812661298>]
  $onlyIf[$getGlobalUserVar[money;$authorID]>=250;<a:No:764169751899275284>El valor de itemm supera tu balance ($getGlobalUserVar[money;$authorID]<:SilverCoin:805540007812661298>)]
  $endelseIf
  $elseIf[$toLowercase[$message]==microfono]
  $setGlobalUserVar[microfono;$sum[$getGlobalUserVar[microfono;$authorID];1];$authorID]
  $author[$userTag;$authorAvatar]
  $description[
  Tu compra se ha realizado con exito<a:like:764199181044023326>
  
  **Compra:** Microfono🎤
  
  **Precio:** 100 Coins<:SilverCoin:805540007812661298>]
  $endelseIf
$elseIf[$toLowercase[$message]==ticket]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authoriD];1500];$authorID]
$setGlobalUserVar[ticket;1;$authorID]
$author[$userTag;$authorAvatar]
$description[$username Acabas de comprar el ticket numero $random[1;10]]
$onlyIf[$getGlobalUserVar[money;$authorID]>=1500;<a:No:764169751899275284>Necesitas tener al menos 1500 Coins<:SilverCoin:805540007812661298> para comprar un ticket]
$onlyIf[$getGlobalUserVar[ticket;$authorID]==0;<a:No:764169751899275284>Ya haz comprando un ticket]
$onlyForChannels[810270206852071455;]
$endelseIf
  $else
  <a:No:764169751899275284>El item que quieres comprar no existe
  $endif
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]
  `
};