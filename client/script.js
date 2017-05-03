var Myo = require('myo');

Myo.connect('com.hdewey.Sandbox');
 
Myo.on('fist', function(){
    console.log('Hello Myo!');
    this.vibrate();
});