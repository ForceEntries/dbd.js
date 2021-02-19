module.exports = {
  name: "pet",
  aliases: ["pets"],
  code: `
  $title[Lista de mascotas de $username[$findUser[$message[2]]]]
  $description[
  Normales: 
$getGlobalUserVar[nameperro;$findUser[$message[2]]]]
  $footer[Comando ejecutado por $username]
  $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$checkContains[$message;stats;estadistica;estadisticas;info;explore]==false;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
