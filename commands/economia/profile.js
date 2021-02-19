module.exports = {
  name: "profile",
  code: `
  $title[🙎‍♂️Perfil de un usuario]
  $description[
    Nombre: $username[$mentioned[1;yes]]
    
<:silverbilletera:800348101402689546>coins: $getGlobalUserVar[money;$mentioned[1;yes]]<:SilverCoin:805540007812661298>
    
🏦Banco: $getGlobalUserVar[banco;$mentioned[1;yes]]<:SilverCoin:805540007812661298>
    
Total de Coins: $sum[$getGlobalUserVar[money;$mentioned[1;yes]];$getGlobalUserVar[banco;$mentioned[1;yes]]]<:SilverCoin:805540007812661298>]
`
};
