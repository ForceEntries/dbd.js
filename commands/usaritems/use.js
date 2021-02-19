module.exports = ({
  name: "use",
  code: `
 $if[$message==]
<a:No:764169751899275284>Debes de poner que item quieres usar
$elseIf[$toLowercase[$message]==defense]
 $setGlobalUserVar[pocionblue;$sub[$getGlobalUserVar[pocionblue;$authorID];1];$authorID]
  $setGlobalUserVar[defensa;100;$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[
  Tu mascota **Perro** se ha bebido la poción<:pociondefense:803035278612758619> y ha recuperado su defensa
  **Estadisticas:**
:heart:**VIDA:** $getGlobalUserVar[vida;$authorID]%
:crossed_swords:**FUERZA:** $getGlobalUserVar[fuerza;$authorID]%
:shield:**DEFENSA:** 100%]
$onlyIf[$getGlobalUserVar[pocionblue;$authorID]<100;<a:No:764169751899275284>Tu mascota ya posee toda la defensa al maximo]
$onlyIf[$getGlobalUserVar[perro;$authorID]>=1;<a:No:764169751899275284>Necesitas tener una mascota para ejecutar este comando]
$onlyIf[$getGlobalUserVar[pocionblue;$authorID]>=1;<a:No:764169751899275284>Necesitas tener al menos una poción de defensa para ejecutar este comando]
$endelseIf
$elseIf[$toLowercase[$message]==heart]
  $setGlobalUserVar[pocionred;$sub[$getGlobalUserVar[pocionred;$authorID];1];$authorID]
  $setGlobalUserVar[vida;100;$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[
  Tu mascota **Perro** se ha bebido la poción<:pocionheart:803037051100463105> y ha recuperado su vida
  **Estadisticas:**
:heart:**VIDA:** 100%
:crossed_swords:**FUERZA:** $getGlobalUserVar[fuerza;$authorID]%
:shield:**DEFENSA:** $getGlobalUserVar[defensa;$authorID]%]
$onlyIf[$getGlobalUserVar[vida;$authorID]>100;<a:No:764169751899275284>Tu mascota ya posee toda la vida al maximo]
$onlyIf[$getGlobalUserVar[perro;$authorID]>=1;<a:No:764169751899275284>Necesitas tener una mascota para ejecutar este comando]
$onlyIf[$getGlobalUserVar[pocionred;$authorID]>=1;<a:No:764169751899275284>Necesitas tener al menos una poción de vida para ejecutar este comando]
$endelseIf
$elseIf[$toLowercase[$message]==strong]
$setGlobalUserVar[pociongree;$sub[$getGlobalUserVar[pociongree;$authorID];1];$authorID]
  $setGlobalUserVar[fuerza;100;$authorID]
  $author[$username#$discriminator;$authorAvatar]
  $description[
  Tu mascota **Perro** se ha bebido la poción<:pociongree:804117509304352778> y ha recuperado su fuerza
  **Estadisticas:**
:heart:**VIDA:** $getGlobalUserVar[vida;$authorID]%
:crossed_swords:**FUERZA:** 100%
:shield:**DEFENSA:** $getGlobalUserVar[defensa;$authorID]%]
$onlyIf[$getGlobalUserVar[pociongree;$authorID]<100;<a:No:764169751899275284>Tu mascota ya posee toda la fuerza al maximo]
$onlyIf[$getGlobalUserVar[perro;$authorID]>=1;<a:No:764169751899275284>Necesitas tener una mascota para ejecutar este comando]
$onlyIf[$getGlobalUserVar[pociongree;$authorID]>=1;<a:No:764169751899275284>Necesitas tener al menos una poción de fuerza para ejecutar este comando]
$endelseIf
$else
<a:No:764169751899275284>El item que quieres usar no existe o no puedes usarlo
$endif
$globalCooldown[5s;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
`
});