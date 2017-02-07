#!/usr/bin/env node
var SerialPort = require('serialport');
var commandLineArgs = require('command-line-args')

var DataBits = function (v){ return v === 8 || v === 7 || v === 6 || v === 5; };
var StopBits = function (v){ return v === 1 || v === 2 };
var Parity = function (v){ return v === 'none' || v === 'even' || v === 'mark' || v === 'odd' || v === 'space' };

var options = commandLineArgs([
  { name: 'port', type: String, defaultOption: true },
  { name: 'baudrate', alias: 'b', type: Number, defaultValue: 9600 },
  { name: 'databits', alias: 'd', type: DataBits, defaultValue: 8 },
  { name: 'stopbits', alias: 's', type: Number, defaultValue: 1 },
  { name: 'parity', alias: 'p', type: Number, defaultValue: 'none' },
  { name: 'rtscts', alias: 'r', type: Boolean, defaultValue: false },
  { name: 'buffersize', alias: 'z', type: Number, defaultValue: 65536 },
  { name: 'xon', type: Boolean, defaultValue: false },
  { name: 'xoff', type: Boolean, defaultValue: false },
  { name: 'xany', type: Boolean, defaultValue: false },
  { name: 'utf8', type: Boolean, defaultValue: false }
]);

if (!options.port) {
  process.stderr.write("usage: serialout [-b baud_rate] [-d databits] [-s stopbits] [-p parity] [-r rtscts] [-z buffersize] [ -xon | -xoff | -xany | -utf8 ] port\n");
  process.exit(1);
}

var port = new SerialPort(options.port, {
  baudRate: options.baudrate,
  dataBits: options.databits,
  stopBits: options.stopbits,
  parity: options.parity,
  rtscts: options.rtscts,
  xon: options.xon,
  xoff: options.xoff,
  xany: options.xany,
  bufferSize: options.buffersize
});

port.on('error', function(err) {
  process.stderr.write(err.message + '\n');
});

port.on('data', function (data) {
  var strData = data.toString(options.utf8 ? 'utf8' : undefined);
  process.stdout.write(strData.replace(/./g, function (c) {
    return c.charCodeAt(0) > 31 ? c : '.';
  }));
});