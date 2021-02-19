module.exports = {
  name: "tienda",
  aliases: ["shop"],
  code: `
  $title[$username#$discriminator]
  $description[Para comprar un item usa \`$getServerVar[prefix]buy <item>\`
  **ITEMS:**
:pick: nombre: pico
Precio: 50 Coins<:SilverCoin:805540007812661298>
  
🎣 nombre: caña
precio: 50 Coins<:SilverCoin:805540007812661298>

🎤 Nombre: microfono
precio: 100 Coins<:SilverCoin:805540007812661298>
  
<:pociondefense:803035278612758619> Nombre: defense
precio: 250 Coins<:SilverCoin:805540007812661298>

<:pocionheart:803037051100463105> Nombre: heart
precio: 250 Coins<:SilverCoin:805540007812661298>

<:pociongree:804117509304352778> Nombre: strong
precio: 250 Coins<:SilverCoin:805540007812661298>

**MASCOTAS:**
<a:perro:803041696853000192> Nombre: perro
precio: 500 Coins<:SilverCoin:805540007812661298>
]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
