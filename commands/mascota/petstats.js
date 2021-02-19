module.exports = {
  name: "pet",
  code: `
  $title[Estadisticas de tu mascota]
  $description[Las estadisticas de tu perro<a:perro:803041696853000192> son:
  
:heart:**VIDA:** $getGlobalUserVar[vida;$authorID]%
:crossed_swords:**FUERZA:** $getGlobalUserVar[fuerza;$authorID]%
:shield:**DEFENSA:** $getGlobalUserVar[defensa;$authorID]%]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[perro;$authorID]>=1;<a:No:764169751899275284>Necesitas tener una mascota para ejecutar este comando]
$onlyIf[$checkContains[$message;stats;estadistica;estadisticas;info]==true;]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
