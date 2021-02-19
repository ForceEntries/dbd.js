module.exports = {
  name: "kill",
  code: `
$title[]
$color[RANDOM]
$description[$username asesino a $username[$findMember[$message[1]]]]
$image[$randomText[https://cdn.nekotina.com/images/Kv3eHckD.gif;https://cdn.nekotina.com/images/_0XOWojZ.gif;https://cdn.nekotina.com/images/41qc0jku.gif;https://cdn.nekotina.com/images/RAeA7zuS.gif;https://cdn.nekotina.com/images/32ZhOAU3.gif;https://cdn.nekotina.com/images/2BkFvaQX.gif]]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$userExists[$findMember[$message[1]]]==true;]
$argsCheck[>1;Debes de poner la ID o mención de un usuario]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
