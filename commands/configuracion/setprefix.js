module.exports = {
  name: "setprefix",
  aliases: ["prefix"],
  code: `
   $onlyIf[$checkContains[$message;@;#]==false;<a:No:764169751899275284>No puedes poner ese prefix >.<]
  El prefix fue cambiado a **$message**
  $setServerVar[prefix;$message]
 $onlyIf[$charCount[$message]<6;<a:No:764169751899275284>El prefix no puede superar las 5 letras >.<] $onlyIf[$checkContains[$message;@;#]==false;<a:No:764169751899275284>No puedes poner ese prefix]
  $onlyIf[$checkContains[$message;1;2;3;4;5;6;7;8;9;0]==false;<a:No:764169751899275284>No puedes establecer numeros como prefix]
$onlyIf[$message!=$getServerVar[prefix];<a:No:764169751899275284>El prefix que intentas poner ya se encuentra en uso]
  $onlyIf[$hasPerms[$authorID;admin]!=false;<a:No:764169751899275284>Necesitas permisos de administrador para ejecutar este comando]
$argsCheck[>1;<a:No:764169751899275284>Debes de escribir a que prefix cambiar]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
