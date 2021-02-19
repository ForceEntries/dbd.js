const dbd = require("dbd.js")

const bot = new dbd.Bot({
  token: "NzU1MDE4NTM3NTMzMzA4OTM4.X19Lzg.i2NTxG8IC8prnoR7RGY1Xi1QeyQ",
  prefix: "$getServerVar[prefix]"
})

//variables para el bot
bot.variables({
    ticket: "0",
  money: "0",
  banco: "0",
  Ban: "false",
  caña: "0",
  pico: "0",
  perro: "0",
  nameperro: "",
  vida: "100",
  fuerza: "100",
  defensa: "100",
  huesos: "0",
  pocionred: "0",
  pocionblue: "0",
  pociongree: "0",
  sugerencia: "",
  prefix: "S!",
  muted: "",
  warn: "0",
  title: "",
  description: "",
  image: "",
  welcome: "",
  autorole: "",
  sub: "0",
  sub1: "1",
  sub2: "15",
  view: "0",
  view1: "1",
  view2: "14",
  microfono: "0",
  mine1: "10",  //dinero inicial
  mine2: "100",  //dinero final
  mine3: "0",  //mejoras
  mine4: "8500",  //precio
  fish1: "10",  //dinero inicial
  fish2: "100",  //dinero final
  fish3: "0",  //mejoras
  fish4: "8500",  //precio
  rap1: "10",  //dinero inicial
  rap2: "100",  //dinero final
  rap3: "0",  //mejoras
  rap4: "10000",  //precio
  explore1: "10",  //dinero inicial
  explore2: "100",  //dinero final
  explore3: "0",  //mejoras
  explore4: "12500",  //precio
  work1: "150",  //dinero inicial
  work2: "500",  //dinero final
  work3: "0",  //mejoras
  work4: "7000"  //precio
});

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      aliases: command.aliases,
      nonPrefixed: command.nonPrefixed,
      code: command.code,
      asynchronous: command.asynchronous
    });
  }
}

//bienvenidas personalizadas
bot.joinCommand({
  channel: "$getServerVar[welcome]",
  code: `
$giveRoles[$authorID;787750745960742952]
   $title[$getServerVar[title]]
   $description[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[description];{user};$username];{mentione};<@$authorID>];{server};$serverName[$guildID]];{member};$membersCount]]
   $image[$getServerVar[image]]`
});
bot.onJoined();

bot.reactionAddCommand({
  channel: "$getServerVar[autorole]",
  code:
`
$if[$emojiToString==🎉]
$giveRoles[$authorID;810270637926645792]
$elseIf[$emojiToString==🗞️]
$giveRoles[$authorID;810270793417490493]
$endelseIf
$endif 
`
})
bot.onReactionAdd()

bot.reactionRemoveCommand({
  channel: "$getServerVar[autorole]",
  code:
`
$if[$emojiToString==🎉]
$takeRoles[$authorID;810270637926645792]
$elseIf[$emojiToString==🗞️]
$takeRoles[$authorID;810270793417490493]
$endelseIf
$endif
`
})
bot.onReactionRemove()