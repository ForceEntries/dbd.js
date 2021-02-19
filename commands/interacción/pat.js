module.exports = {
  name: "pat",
  code: `
  $title[]
  $color[RANDOM]
  $description[$username acaricio a $username[$findUser[$message[1]]]]
  $image[$randomText[https://images-ext-1.discordapp.net/external/jM2ueNPHN7FcVxn6JM7eel4VG0m7-GbHeXfhIG6rrWk/https/cdn.nekotina.com/images/ACrnjzLY.gif?width=400&height=224;https://cdn.nekotina.com/images/yhSz6gLO.gif;https://cdn.nekotina.com/images/6b-KHfYN.gif;https://images-ext-1.discordapp.net/external/bw1LJEuN2vniDGNfp7x4TO7MS4RA_OFi_NwRhUdLR-0/https/cdn.nekotina.com/images/RovwjBt4.gif?width=400&height=223;https://images-ext-1.discordapp.net/external/JmhW0qtFR5Rj27GR-nUO2o0CvPrivmqFBtjz4Folh98/https/cdn.nekotina.com/images/UT-T6bHdm.gif?width=400&height=300;https://images-ext-1.discordapp.net/external/SzOeEgE5Mxuakq0Tq4EwZtTHhcgL5bwG0px_htlkuXE/https/cdn.nekotina.com/images/7Rujca9-.gif?width=400&height=225;https://images-ext-1.discordapp.net/external/kU0l1CTU_wPvfYP992YIeeaKSNHDO0wvyaaCfpM6dO8/https/cdn.nekotina.com/images/1SyOul4y.gif?width=300&height=300]]
$onlyIf[$findMember[$message[1]]!=$authorID;]
 $argsCheck[>1;<a:No:764169751899275284>Necesitas mencionar o poner una ID para acariciar a alguien]
 $globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
 $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
