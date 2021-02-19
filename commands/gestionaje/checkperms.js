module.exports = {
  name: "checkperms",
  code: `
 $author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
 $description[
 **GENERAL:** 
 __Administrador:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];admin];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Ver registro de auditoria:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];viewauditlog];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Editar servidor:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];manageserver];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Editar roles:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];manageroles];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Editar canales:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];managechannels];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Kickear miembros:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];kick];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Banear miembros:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];ban];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Ver canales y categorias:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];viewchannel];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Gestionar emojis:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];manageemojis];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Cambiar apodos:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];managenicknames];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Crear invitaciones:__$replaceText[$replaceText[$hasPerms[$mentioned[1;yes];createinvite];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 __Gestionar webhooks:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];managewebhooks];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
 
 **TEXTO:**
__Enviar mensajes:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];sendmessages];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
__Gestionar mensajes:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];managemessages];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
__Insertar multimedia:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];attachfiles];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
__Enviar links:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];embedlinks];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
__Mencionar @everyone/@here:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];mentioneveryone];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]

**Canal de voz**
__entrar al canal de voz:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];connect];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
__Hablar:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];speak];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]
__Mutear a usuarios:__ $replaceText[$replaceText[$hasPerms[$mentioned[1;yes];mutemembers];true;<a:like:764199181044023326>];false;<a:No:764169751899275284>]]
$color[RANDOM]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
