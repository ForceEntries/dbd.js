module.exports = ({
name: "upgrade",
code: 
`
$if[$message==]
$author[$userTag;$authorAvatar]
$description[Aqui se mostrara la lista de mejoras que puedes hacer
uso: $getServerVar[prefix]upgrade ID

WORK: ($getGlobalUserVar[work3;$authorID]/5)
BOOST: +70 Coins
PRECIO: $getGlobalUserVar[work4;$authorID] Coins<:SilverCoin:805540007812661298>
ID: 310

MINE: ($getGlobalUserVar[mine3;$authorID]/5)
BOOST: +80 Coins
PRECIO: $getGlobalUserVar[mine4;$authorID] Coins<:SilverCoin:805540007812661298>
ID: 315

FISH: ($getGlobalUserVar[fish3;$authorID]/5)
BOOST: +80 Coins
PRECIO: $getGlobalUserVar[fish4;$authorID] Coins<:SilverCoin:805540007812661298>
ID: 411

RAP: ($getGlobalUserVar[rap3;$authorID]/5)
BOOST: +85 Coins
PRECIO: $getGlobalUserVar[rap4;$authorID] Coins<:SilverCoin:805540007812661298>
ID: 444

PET EXPLORE: ($getGlobalUserVar[explore3;$authorID]/5)
BOOST: +90 Coins
PRECIO: $getGlobalUserVar[explore4;$authorID] Coins <:SilverCoin:805540007812661298>
ID: 500]
$elseIf[$message==310]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[work4;$authorID]];$authorID]
$setGlobalUserVar[work3;$sum[$getGlobalUserVar[work3;$authorID];1];$authorID]
$setGlobalUserVar[work4;$sum[$getGlobalUserVar[work4;$authorID];3500];$authorID]
$setGlobalUserVar[work1;$sum[$getGlobalUserVar[work1;$authorID];70];$authorID]
$setGlobalUserVar[work2;$sum[$getGlobalUserVar[work2;$authorID];70];$authorID]
$author[$userTag;$authorAvatar]
$description[Acabas de mejorar el work, ahora ganas +70 Coins]
$footer[Dinero actual: $sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[work4;$authorID]] Coins]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$getGlobalUserVar[work4;$authorID];<a:No:764169751899275284>Debes tener al menos $getGlobalUserVar[work4;$authorID] Coins<:SilverCoin:805540007812661298> para hacer la mejora]
$onlyIf[$getGlobalUserVar[work3;$authorID]<=4;<a:No:764169751899275284>Ya tienes todas las mejoras al maximo]
$endelseIf
$elseIf[$message==315]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[mine4;$authorID]];$authorID]
$setGlobalUserVar[mine3;$sum[$getGlobalUserVar[mine3;$authorID];1];$authorID]
$setGlobalUserVar[mine4;$sum[$getGlobalUserVar[mine4;$authorID];3500];$authorID]
$setGlobalUserVar[mine1;$sum[$getGlobalUserVar[mine1;$authorID];80];$authorID]
$setGlobalUserVar[mine2;$sum[$getGlobalUserVar[mine2;$authorID];80];$authorID]
$author[$userTag;$authorAvatar]
$description[Acabas de mejorar el mine, ahora ganas +80 Coins]
$footer[Dinero actual: $sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[mine4;$authorID]] Coins]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$getGlobalUserVar[mine4;$authorID];<a:No:764169751899275284>Debes tener al menos $getGlobalUserVar[mine4;$authorID] Coins<:SilverCoin:805540007812661298> para hacer la mejora]
$onlyIf[$getGlobalUserVar[mine3;$authorID]<=4;<a:No:764169751899275284>Ya tienes todas las mejoras al maximo]
$endelseIf
$elseIf[$message==411]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[fish4;$authorID]];$authorID]
$setGlobalUserVar[fish3;$sum[$getGlobalUserVar[fish3;$authorID];1];$authorID]
$setGlobalUserVar[fish4;$sum[$getGlobalUserVar[fish4;$authorID];3500];$authorID]
$setGlobalUserVar[fish1;$sum[$getGlobalUserVar[fish1;$authorID];80];$authorID]
$setGlobalUserVar[fish2;$sum[$getGlobalUserVar[fish2;$authorID];80];$authorID]
$author[$userTag;$authorAvatar]
$description[Acabas de mejorar el fish, ahora ganas +80 Coins]
$footer[Dinero actual: $sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[fish4;$authorID]] Coins]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$getGlobalUserVar[fish4;$authorID];<a:No:764169751899275284>Debes tener al menos $getGlobalUserVar[fish4;$authorID] Coins<:SilverCoin:805540007812661298> para hacer la mejora]
$onlyIf[$getGlobalUserVar[fish3;$authorID]<=4;<a:No:764169751899275284>Ya tienes todas las mejoras al maximo]
$endelseIf
$elseIf[$message==444]
$setGlobalUserVar[sub1;$sum[$getGlobalUserVar[sub1;$authorID];9];$authorID]
$setGlobalUserVar[sub2;$sum[$getGlobalUserVar[sub2;$authorID];9];$authorID]
$setGlobalUserVar[view1;$sum[$getGlobalUserVar[view1;$authorID];8];$authorID]
$setGlobalUserVar[view2;$sum[$getGlobalUserVar[view2;$authorID];8];$authorID]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[rap4;$authorID]];$authorID]
$setGlobalUserVar[rap3;$sum[$getGlobalUserVar[rap3;$authorID];1];$authorID]
$setGlobalUserVar[rap4;$sum[$getGlobalUserVar[rap4;$authorID];3500];$authorID]
$setGlobalUserVar[rap1;$sum[$getGlobalUserVar[rap1;$authorID];85];$authorID]
$setGlobalUserVar[rap2;$sum[$getGlobalUserVar[rap2;$authorID];85];$authorID]
$author[$userTag;$authorAvatar]
$description[Acabas de mejorar el rap, ahora ganas +85 Coins]
$footer[Dinero actual: $sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[rap4;$authorID]] Coins]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$getGlobalUserVar[rap4;$authorID];<a:No:764169751899275284>Debes tener al menos $getGlobalUserVar[rap4;$authorID] Coins<:SilverCoin:805540007812661298> para hacer la mejora]
$onlyIf[$getGlobalUserVar[rap3;$authorID]<=4;<a:No:764169751899275284>Ya tienes todas las mejoras al maximo]
$endelseIf
$elseIf[$message==500]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[explore4;$authorID]];$authorID]
$setGlobalUserVar[explore3;$sum[$getGlobalUserVar[explore3;$authorID];1];$authorID]
$setGlobalUserVar[explore4;$sum[$getGlobalUserVar[explore4;$authorID];3500];$authorID]
$setGlobalUserVar[explore1;$sum[$getGlobalUserVar[explore1;$authorID];90];$authorID]
$setGlobalUserVar[explore2;$sum[$getGlobalUserVar[explore2;$authorID];90];$authorID]
$author[$userTag;$authorAvatar]
$description[Acabas de mejorar el pet explore, ahora ganas +90 Coins]
$footer[Dinero actual: $sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[explore4;$authorID]] Coins]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$getGlobalUserVar[explore4;$authorID];<a:No:764169751899275284>Debes tener al menos $getGlobalUserVar[explore4;$authorID] Coins<:SilverCoin:805540007812661298> para hacer la mejora]
$onlyIf[$getGlobalUserVar[explore3;$authorID]<=4;<a:No:764169751899275284>Ya tienes todas las mejoras al maximo]
$endelseIf
$else
La mejora que quieres hacer no existe
$endif
$globalCooldown[5s;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]
`
    
});