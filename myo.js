var Myo = require('myo');

Myo.connect('com.hdewey.Sandbox', require('ws'));


Myo.on("fingers_spread", function() {
  console.log("Fingers spread!");
});