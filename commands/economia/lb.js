module.exports = {
  name: "leaderboard",
  aliases: ["lb", "top"],
  code: `
$description[$globalUserLeaderboard[money;asc;{top}) {username}: {value}<:SilverCoin:805540007812661298>]]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
