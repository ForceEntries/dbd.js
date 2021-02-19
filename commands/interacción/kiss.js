module.exports = {
  name: "kiss",
  code: `
  $title[]
  $color[RANDOM]
  $description[$username $randomText[le dio un beso a;esta besando a;besa a;besa con amor a] $username[$findUser[$message[1]]]]
  $image[$randomText[https://images-ext-2.discordapp.net/external/zOprfzfoXNmas8KAqhNcqFxzFy5Vwm4yVCpLdd9PKYU/https/cdn.nekotina.com/images/kAphud9x.gif?width=400&height=224;https://images-ext-1.discordapp.net/external/Ljq6JsFmIiwOYcLBHHM0Ngt-kXQP0qzAGkTksOzPuxY/https/cdn.nekotina.com/images/iKvlZdyw.gif?width=400&height=223;https://images-ext-2.discordapp.net/external/dkbwt0hXaTt30q2Qz0c5_zUEeCgaV6eEwu7Uf2StaNk/https/cdn.nekotina.com/images/Ggtqrefk.gif?width=400&height=225;https://images-ext-2.discordapp.net/external/zxLKTNOWPWn3LXazV5uUmVL-FDsQt9HYN8nxkwnuM0k/https/cdn.nekotina.com/images/rk_lItYm.gif?width=400&height=224;https://images-ext-2.discordapp.net/external/LiwiiZ2x8yV8jwftqL3fgY1vLgTw9mHYQKg9foB0Ol4/https/leref.ga/api/public/kiss/43.gif?width=400&height=239;https://images-ext-1.discordapp.net/external/Qjy8obAP-4_8BGRvOSRA9lW4uRx3LRQ-q3Vhrg2JFJY/https/cdn.nekotina.com/images/uaL4hZD5.gif?width=400&height=225;https://images-ext-2.discordapp.net/external/QWweVrQNyA6l2-rhrReXDYe7hTKfuv4nzUnd0h5_8LQ/https/leref.ga/api/public/kiss/15.gif?width=400&height=200;https://images-ext-1.discordapp.net/external/wOWDtEwiv6xKWgRm9pRplTt9x2oalmDZMV3aNDRG7Ek/https/cdn.nekotina.com/images/OcMmaPAfh.gif?width=400&height=223;https://images-ext-2.discordapp.net/external/vslrBmeQVoUICu7agYCwarwLU08aX2oj5KdqVt3HY-g/https/leref.ga/api/public/kiss/40.gif?width=400&height=221]]
  $onlyIf[$findMember[$message[1]]!=$authorID;]
$argsCheck[>1;<a:No:764169751899275284>Necesitas poner la ID o mencionar alguien para besarlo]
$globalCooldown[3s;<a:No:764169751899275284>debes de esperar %time% para ejecutar este comando]
  $onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
