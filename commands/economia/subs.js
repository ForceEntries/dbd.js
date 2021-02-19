module.exports = ({
  name: "sub",
  aliases: ['subs'],
  code: 
  `
  $author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
  $description[
Suscriptores: $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[sub;$mentioned[1;yes]]==0];true;no tiene/s];false;$getGlobalUserVar[sub;$mentioned[1;yes]]]
Visitas: $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[view;$mentioned[1;yes]]==0];true;no tiene/s];false;$getGlobalUserVar[view;$mentioned[1;yes]]]]
  $footer[Comando ejecutado por $username]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
});