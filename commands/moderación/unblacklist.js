module.exports = {
  name: "unblacklist",
  code: `
  $username[$findUser[$message]] Ha sido removido de la blacklist<a:like:764199181044023326>
  $setGlobalUserVar[Ban;false;$findUser[$message]]
  $onlyIf[$findUser[$message]!=$authorID;]
  $onlyForIDs[498629438934745130;]`
};
