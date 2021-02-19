module.exports = {
  name: "iq",
  code: `
$title[Tu estado de coeficiente intelectual]
$description[$username, Tienes un $random[1;200] de IQ (coeficiente intelectual) 🧠 !!]
$footer[Ejecutado por $username#$discriminator]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
