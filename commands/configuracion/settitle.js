module.exports = {
  name: "settitle",
  code: `
  $setServerVar[title;$message]
  $author[$userTag;$authorAvatar]
  $description[El mensaje de bienvenida a sido establecido con exito]
  $argsCheck[>1;Debes de escribir algo para establecerlo como titulo de bienvenida]
  $onlyForIDs[498629438934745130;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
