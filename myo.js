var Myo = require('myo');
 
Myo.connect('com.hdewey.Sandbox', require('ws'));

Myo.on("connected", function(data, timestamp) {
  console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");
});
 
Myo.on("fingers_spread", function() {
  console.log("Fingers spread!");
});