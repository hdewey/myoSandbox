var Myo = require('myo');

Myo.on("connected", function(data, timestamp) {
  console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");
});

Myo.on("pose", function(pose_name) {
  console.log("Myo pose detected! Pose was: " + pose_name + ".");
});


Myo.connect('com.hdewey.Sandbox', require('ws'));