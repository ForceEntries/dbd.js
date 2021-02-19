module.exports = {
  name: "botinfo",
  code: `
$title[Información de Silver Help]
$description[
<a:ailove:767222944392151050>Estoy en: **$serverCount Servidores**
<a:awumpus:767223074638135296>Estoy viendo a: **$allMembersCount Miembros**
<a:excitacion:767225135975235605>Tengo actualmente: **$commandsCount Comandos**
<a:happyzoom:767224584381923349>Mi creador: **YordiGamex#4353**
<a:nkobongo:771166502358876170>Tiempo encendido: **$uptime**
<a:bailando:773670129686151189>Memoria consumida: **$truncate[$ram] MB**]
$footer[Comando ejecutado por $username]
$color[RANDOM]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
