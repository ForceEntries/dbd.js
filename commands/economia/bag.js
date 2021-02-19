module.exports = {
  name: "bag",
  code: `
  $author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
  $description[El inventario de $username[$mentioned[1;yes]]
$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pico;$mentioned[1;yes]]==0];true;];false;:pick:Pico: $getGlobalUserVar[pico;$mentioned[1;yes]]\n]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[caña;$mentioned[1;yes]]==0];true;];false;:fishing_pole_and_fish:Caña: $getGlobalUserVar[caña;$mentioned[1;yes]]\n]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[microfono;$mentioned[1;yes]]==0];true;];false;🎤Microfono: $getGlobalUserVar[microfono;$mentioned[1;yes]]\n]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[huesos;$mentioned[1;yes]]==0];true;];false;:bone:Huesos: $getGlobalUserVar[huesos;$mentioned[1;yes]]\n]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pocionblue;$mentioned[1;yes]]==0];true;];false;<:pociondefense:803035278612758619>defense: $getGlobalUserVar[pocionblue;$mentioned[1;yes]]\n]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pocionred;$mentioned[1;yes]]==0];true;];false;<:pocionheart:803037051100463105>heart: $getGlobalUserVar[pocionred;$mentioned[1;yes]]\n]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pociongree;$mentioned[1;yes]]==0];true;];false;<:pociongree:804117509304352778>Strong: $getGlobalUserVar[pociongree;$mentioned[1;yes]]\n]]
$color[RANDOM]
`
};
