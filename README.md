# Serial Out

A simple command line tool to output serial device output.

## Installation

```
npm install -g serialout
```

## Usage

**usage: serialout [-b baud_rate] [-d databits] [-s stopbits] [-p parity] [-r rtscts] [-z buffersize] [ -xon | -xoff | -xany | -utf8 ] port**

  - `port`: Port to open for output. Required.
  - `b, baudrate`: Baud Rate, defaults to 9600. Should be one of: 115200, 57600, 38400, 19200, 9600, 4800, 2400, 1800, 1200, 600, 300, 200, 150, 134, 110, 75, or 50. Custom rates as allowed by hardware is supported. Windows doesn't support custom baud rates.
  - `d, databits`: Data Bits, defaults to 8. Must be one of: 8, 7, 6, or 5.
  - `s, stopbits`: Stop Bits, defaults to 1. Must be one of: 1 or 2.
  - `p, parity`: Parity, defaults to 'none'. Must be one of: 'none', 'even', 'mark', 'odd', 'space'.
  - `r, rtscts`: Flow control, defaults to false.
  - `z, buffersize`: Size of read buffer, defaults to 65536. Must be an integer value.
  - `xon`: Flow control, defaults to false.
  - `xoff`: Flow control, defaults to false.
  - `xany`: Flow control, defaults to false.
  - `utf8`: Use UTF-8 to display plain text, defaults to false.


## License

Licensed under the MIT License.