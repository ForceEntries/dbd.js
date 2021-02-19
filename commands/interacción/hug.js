module.exports = {
  name: "hug",
  code: `
  $title[]
  $color[RANDOM]
  $description[$username esta abrazando a $username[$findMember[$message[1]]] >///<]
  $image[$randomText[https://images-ext-1.discordapp.net/external/r9AJqqprzKLk6PMfClKfGHIYeqp44RPtAhMJXQvncTg/https/cdn.nekotina.com/images/1j_IU07ul.gif?width=400&height=222;https://images-ext-2.discordapp.net/external/tkT-EPt3evrriLRjAP8PMVDYKP_pZdgcEJE2r-v3V0o/https/cdn.nekotina.com/images/aTWH_K75.gif?width=400&height=240;https://images-ext-2.discordapp.net/external/KcYkNOGTcpuzoCT4yF5e9isYGk79YvZ03NFE1io9yPc/https/cdn.nekotina.com/images/f_WTij-n.gif?width=400&height=225;https://images-ext-2.discordapp.net/external/xoiaIm0kJ7fyuPxLAv98HbhowjoTUtu-R7B99Q2o1Qw/https/cdn.nekotina.com/images/GlSLtZpX.gif?width=400&height=300;https://images-ext-1.discordapp.net/external/TW4bsrouSrwyjh1Xn0mMoM8SdmwVv2vsOz2xc1gxdNE/https/cdn.nekotina.com/images/HhN2TlHY.gif?width=400&height=211]]
  $onlyIf[$findMember[$message[1]]!=$authorID;]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar alguien para abrazarlo]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
