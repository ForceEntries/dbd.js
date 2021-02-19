module.exports = {
  name: "hi",
  code: `
$title[]
$description[$replaceText[$replaceText[$checkCondition[$mentioned[1]==];true;$username esta saludando a todo el servidor];false;$username esta saludando a $username[$mentioned[1;yes]]]]
$color[RANDOM]
$image[$randomText[https://cdn.nekotina.com/images/AlAZWSfX.gif;https://cdn.nekotina.com/images/s4dz_TLY.gif;https://cdn.nekotina.com/images/N2ryqZUd.gif;https://cdn.nekotina.com/images/2FnX323S.gif;https://cdn.nekotina.com/images/99v_CE11.gif;https://cdn.nekotina.com/images/M6B4wNoP.gif;https://cdn.nekotina.com/images/07J76JHt.gif;https://cdn.nekotina.com/images/q2s8BGcu.gif]]
$onlyIf[$mentioned[1]!=$authorID;<a:No:764169751899275284>No puedes saludarte a ti mismo]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
