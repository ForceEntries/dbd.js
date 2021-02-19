module.exports = {
  name: "setmessage",
  code: `
  $setServerVar[description;$message]
  $author[$userTag;$authorAvatar]
  $description[El mensaje de bienvenida fue establecido con exito]
  $argsCheck[>1;Debes de escribir algo para establecerlo como mensaje de bienvenida]
  $onlyForIDs[498629438934745130;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
