
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty.wchusbserial1410", {
  baudrate: 57600
});

serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    console.log('open');
    serialPort.on('data', function(data) {
      console.log('data received: ' + data);

      var t = data.toString().match(/::::(.*);;(.*)::::/);
      //console.log('Match: ',t);
      if(t && t.length > 1){
        console.log('Sensor Address: ',t[1], ' => ',t[2]);
      }

    });
    /*
    serialPort.write("ls\n", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
    */

    setInterval(function(){
			console.log("Sending Msg: :2;3;N:");
	    serialPort.write(":2;3;N:\r\n", function(err, results) {
	      console.log('err ' + err);
	      console.log('results ' + results);
	    });
	  },10000);
  }
});



exports = module.exports = function(){

}

