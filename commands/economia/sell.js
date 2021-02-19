module.exports = {
  name: "sell",
  code: `
  $description[Haz vendido $replaceText[$replaceText[$checkCondition[$message[2]==];true;x1];false;$findNumbers[$message[2]]]]
  $onlyIf[$checkContains[$message[2];;x]==true;Debes de usar bien el comando
Uso: $getServerVar[prefix]sell <item> x<cantidad>]
  $argsCheck[>1;Debes de ingresar el item que quieres vender]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
