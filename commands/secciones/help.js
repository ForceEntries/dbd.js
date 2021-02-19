module.exports = {
  name: "help",
  code: `
  $if[$message==]
$title[Comando De Ayuda :exclamation:]
$description[┏━━━━•❃°•°•°•°❃•━━━━┓

**SOLUCIÓN A TUS PROBLEMAS**

┗━━━━•❃°•°•°•°❃•━━━━┛
Aqui Encontraras Varios Comandos Que Actualmente Tiene El Bot

━━━━━━✧Todos Los❂Comandos Del Bot✧━━━━━━
\`$getServerVar[prefix]help diversion\`<a:desaparecer:763848251476279306>
\`$getServerVar[prefix]help moderacion\`<a:thanos:770330184766193695>
\`$getServerVar[prefix]help interaccion\`<a:nkawww:763343243227693056>
\`$getServerVar[prefix]help gestionaje\`<a:wumpus:767223074638135296>
\`$getServerVar[prefix]help economia\`<a:paki:769494018911764520>
\`$getServerVar[prefix]help configuracion\`<a:kimetsunoyaiba:783983443662077953>
[━━━━━━✧Servidor de soporte✧━━━━━━\\](https://discord.gg/kW9TQgBVD6) ]
$elseIf[$replaceText[$toLowercase[$message];í;i]==economia]
 $title[Comandos de Silver Help]
  $description[
  Aqui tienes los comandos de Economia, hay un total 18 comandos en esta sección:
  
  <:abrigadito:778066333266477056>Economia
  
  :book:Comandos
  
  Para farmear:
\`\`\`
$getServerVar[prefix]daily    $getServerVar[prefix]mine
$getServerVar[prefix]work     $getServerVar[prefix]pet explore
$getServerVar[prefix]weekly   $getServerVar[prefix]rap
$getServerVar[prefix]roulette    
$getServerVar[prefix]crime
$getServerVar[prefix]fish
\`\`\`
Resto de comandos
\`\`\`
$getServerVar[prefix]bal      $getServerVar[prefix]profile
$getServerVar[prefix]sub      $getServerVar[prefix]upgrade
$getServerVar[prefix]shop     $getServerVar[prefix]leaderboard
$getServerVar[prefix]dep max  $getServerVar[prefix]wd <cantidad>
$getServerVar[prefix]wd all   $getServerVar[prefix]dep <cantidad>
$getServerVar[prefix]share    $getServerVar[prefix]buy <item>
\`\`\`]
$endelseIf
$elseIf[$replaceText[$toLowercase[$message];ó;o]==moderacion]
  $title[Comadnos de Silver Help]
  $description[Aqui tienes los comandos de moderación, hay un total 15 comandos en esta sección
  
<:nkban:754110273023115295>Moderación
  
:book:Comandos
  
  \`\`\`
$getServerVar[prefix]giverole    $getServerVar[prefix]setmute
$getServerVar[prefix]removerole  $getServerVar[prefix]tempmute
$getServerVar[prefix]warn        $getServerVar[prefix]muted
$getServerVar[prefix]unwarn      $getServerVar[prefix]unmute
$getServerVar[prefix]checkwarn   $getServerVar[prefix]lock
$getServerVar[prefix]ban         $getServerVar[prefix]unlock
$getServerVar[prefix]kick        $getServerVar[prefix]addemoji
$getServerVar[prefix]clear       $getServerVar[prefix]setnick
$getServerVar[prefix]setprefix   
  \`\`\`]
  $endelseIf
  $elseIf[$message==gestionaje]
    $title[Comandos de Silver Help]
  $description[
  Aqui tienes los comandos de gestionaje, Hay un total de 9 comandos en esta sección
  
<:abrigadito:804538876168241169>Gestionaje
  
:book:Comandos
  
  \`\`\`
$getServerVar[prefix]userinfo     $getServerVar[prefix]say
$getServerVar[prefix]server info  $getServerVar[prefix]checkperms
$getServerVar[prefix]avatar       $getServerVar[prefix]icon
$getServerVar[prefix]vote         $getServerVar[prefix]report
$getServerVar[prefix]invite
$getServerVar[prefix]ping
$getServerVar[prefix]botinfo
\`\`\`]
  $endelseIf
  $elseIf[$replaceText[$toLowercase[$message];ó;o]==configuracion]
   $title[Comandos de Silver Help]
  $description[
  Aqui tienes los comandos de configuracion, Hay un total de 4 comandos en esta sección
  
<a:apaki:769494018911764520>Configuración
  
:book:Comandos
  
  \`\`\`
$getServerVar[prefix]setsugerencia
$getServerVar[prefix]sugerencia
$getServerVar[prefix]setprefix
$getServerVar[prefix]slowmode
$getServerVar[prefix]remind
\`\`\`]
  $endelseIf
  $elseIf[$replaceText[$toLowercase[$message];ó;o]==interaccion]
   $title[Comandos de Silver Help]
  $description[
  Aqui tienes los comandos de interacción, Hay un total de 5 comandos en esta sección
  
<:yeii:766495670831284245>Interacción
  
:book:Comandos
  
  \`\`\`
$getServerVar[prefix]hi
$getServerVar[prefix]hug
$getServerVar[prefix]kill
$getServerVar[prefix]kiss
$getServerVar[prefix]pat
  \`\`\`
  ]
  $endelseIf
  $elseIf[$replaceText[$toLowercase[$message];ó;o]==diversion]
   $title[Comandos de Silver Help]
  $description[
  Aqui tiene todos los comandos de diversión, Hay un total de 11 comandos en esta sección
  
<:lindura:791501548408143893>Diversión
  
:book:Comandos
\`\`\`
$getServerVar[prefix]roll
$getServerVar[prefix]IQ
$getServerVar[prefix]jumbo
\`\`\`]
$endelseIf
$else
$title[Comando De Ayuda :exclamation:]
$description[┏━━━━•❃°•°•°•°❃•━━━━┓

**SOLUCIÓN A TUS PROBLEMAS**

┗━━━━•❃°•°•°•°❃•━━━━┛
Aqui Encontraras Varios Comandos Que Actualmente Tiene El Bot

━━━━━━✧Todos Los❂Comandos Del Bot✧━━━━━━
\`$getServerVar[prefix]help diversion\`<a:desaparecer:763848251476279306>
\`$getServerVar[prefix]help moderacion\`<a:thanos:770330184766193695>
\`$getServerVar[prefix]help interaccion\`<a:nkawww:763343243227693056>
\`$getServerVar[prefix]help gestionaje\`<a:wumpus:767223074638135296>
\`$getServerVar[prefix]help economia\`<a:paki:769494018911764520>
\`$getServerVar[prefix]help configuracion\`<a:kimetsunoyaiba:783983443662077953>
[━━━━━━✧Servidor de soporte✧━━━━━━\\](https://discord.gg/kW9TQgBVD6) ]
$endif
$footer[Comando ejecutado por $username]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Ban;$authorID]==false;]`
};
