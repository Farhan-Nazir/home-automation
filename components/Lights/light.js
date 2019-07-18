// On/Off home lights from any device
let Gpio = require("onoff").Gpio;
let Led = new Gpio(4, "out");

// 0 = off, 1 = on
function ledOnOff(state) {
   return Led.writeSync(state);
}

module.exports = ledOnOff;