module.exports = {
  name: "setimage",
  code: `
  $setServerVar[image;$message]
  $author[$userTag;$authorAvatar]
  $description[La imagen de bienvenida fue actualizada con exito]
  $argsCheck[>1;Debes de enviar un link de una imagen para establecerla como bienvenida]
  $onlyForIDs[498629438934745130;]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
