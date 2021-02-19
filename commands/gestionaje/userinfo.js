module.exports = {
  name: "userinfo",
  code: `

$title[:receipt:┆Información de $username[$mentioned[1;yes]]]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[$random[0;999999]]

$description[PRINCIPAL
:closed_book:┆Nombre de usuario: $username[$mentioned[1;yes]]
:green_book:┆Discriminador: #$discriminator[$mentioned[1;yes]]
:notebook:┆Fecha de creación: $creationDate[$mentioned[1;yes]]
:orange_book:┆Avatar: [Descargar\\]($userAvatar[$mentioned[1;yes]]?size=2048)

INFORMACIÓN
🆔️┆ID: $mentioned[1;yes]
:arrow_double_up:┆Rol Más Alto: $replaceText[$replaceText[$checkCondition[$highestRole[$mentioned[1;yes]]==$guildID];true;no tiene];false;<@&$highestRole[$mentioned[1;yes]]>] 
TODOS LOS ROLES:infinity:
$userRoles[$mentioned[1;yes]]

ESTADO: $replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==online];true;online];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==offline];true;desconectado];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==dnd];true;ausente];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==idle];true;no molestar];false;]

ES ADMIN: $replaceText[$replaceText[$checkCondition[$hasPerms[$mentioned[1;yes];admin]==true];true;si];false;no]]

$footer[Pedido Por: $username[$authorID]#$discriminator[$authorID]]
$addTimestamp
$globalCooldown[5s;<a:No:764169751899275284>Necesitas esperar %time% para ejecutar este comando]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
