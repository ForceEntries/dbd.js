module.exports = {
  name: "blacklist",
  code: `
  $color[RANDOM]
  $username[$findUser[$message]] Ha sido añadido a la blacklist<a:like:764199181044023326>
  $setGlobalUserVar[Ban;true;$findUser[$message]]
  $onlyIf[$findUser[$message]!=$authorID;]
  $onlyForIDs[498629438934745130;]`
};