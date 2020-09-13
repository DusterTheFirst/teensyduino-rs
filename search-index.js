var searchIndex = JSON.parse('{\
"cfg_if":{"doc":"A macro for defining `#[cfg]` if-else statements.","i":[[14,"cfg_if","cfg_if","The main macro provided by this crate. See crate…",null,null]],"p":[]},\
"log":{"doc":"A lightweight logging facade.","i":[[3,"Record","log","The \\\"payload\\\" of a log message.",null,null],[3,"RecordBuilder","","Builder for `Record`.",null,null],[3,"Metadata","","Metadata about a log message.",null,null],[3,"MetadataBuilder","","Builder for `Metadata`.",null,null],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has…",null,null],[3,"ParseLevelError","","The type returned by `from_str` when the string doesn\'t…",null,null],[4,"Level","","An enum representing the available verbosity levels of the…",null,null],[13,"Error","","The \\\"error\\\" level.",0,null],[13,"Warn","","The \\\"warn\\\" level.",0,null],[13,"Info","","The \\\"info\\\" level.",0,null],[13,"Debug","","The \\\"debug\\\" level.",0,null],[13,"Trace","","The \\\"trace\\\" level.",0,null],[4,"LevelFilter","","An enum representing the available verbosity level filters…",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"set_max_level","","Sets the global maximum log level.",null,[[["levelfilter",4]]]],[5,"max_level","","Returns the current maximum log level.",null,[[],["levelfilter",4]]],[5,"set_logger","","Sets the global logger to a `&\'static Log`.",null,[[["log",8]],[["result",4],["setloggererror",3]]]],[5,"set_logger_racy","","A thread-unsafe version of `set_logger`.",null,[[["log",8]],[["result",4],["setloggererror",3]]]],[5,"logger","","Returns a reference to the logger.",null,[[],["log",8]]],[17,"STATIC_MAX_LEVEL","","The statically resolved maximum log level.",null,null],[8,"Log","","A trait encapsulating the operations required of a logger.",null,null],[10,"enabled","","Determines if a log message with the specified metadata…",2,[[["metadata",3]]]],[10,"log","","Logs the `Record`.",2,[[["record",3]]]],[10,"flush","","Flushes any buffered records.",2,[[]]],[11,"max","","Returns the most verbose logging level.",0,[[],["level",4]]],[11,"to_level_filter","","Converts the `Level` to the equivalent `LevelFilter`.",0,[[],["levelfilter",4]]],[11,"max","","Returns the most verbose logging level filter.",1,[[],["levelfilter",4]]],[11,"to_level","","Converts `self` to the equivalent `Level`.",1,[[],[["option",4],["level",4]]]],[11,"builder","","Returns a new builder.",3,[[],["recordbuilder",3]]],[11,"args","","The message body.",3,[[],["arguments",3]]],[11,"metadata","","Metadata about the log directive.",3,[[],["metadata",3]]],[11,"level","","The verbosity level of the message.",3,[[],["level",4]]],[11,"target","","The name of the target of the directive.",3,[[]]],[11,"module_path","","The module path of the message.",3,[[],["option",4]]],[11,"module_path_static","","The module path of the message, if it is a `\'static` string.",3,[[],["option",4]]],[11,"file","","The source file containing the message.",3,[[],["option",4]]],[11,"file_static","","The module path of the message, if it is a `\'static` string.",3,[[],["option",4]]],[11,"line","","The line containing the message.",3,[[],["option",4]]],[11,"new","","Construct new `RecordBuilder`.",4,[[],["recordbuilder",3]]],[11,"args","","Set `args`.",4,[[["arguments",3]],["recordbuilder",3]]],[11,"metadata","","Set `metadata`. Construct a `Metadata` object with…",4,[[["metadata",3]],["recordbuilder",3]]],[11,"level","","Set `Metadata::level`.",4,[[["level",4]],["recordbuilder",3]]],[11,"target","","Set `Metadata::target`",4,[[],["recordbuilder",3]]],[11,"module_path","","Set `module_path`",4,[[["option",4]],["recordbuilder",3]]],[11,"module_path_static","","Set `module_path` to a `\'static` string",4,[[["option",4]],["recordbuilder",3]]],[11,"file","","Set `file`",4,[[["option",4]],["recordbuilder",3]]],[11,"file_static","","Set `file` to a `\'static` string.",4,[[["option",4]],["recordbuilder",3]]],[11,"line","","Set `line`",4,[[["option",4]],["recordbuilder",3]]],[11,"build","","Invoke the builder and return a `Record`",4,[[],["record",3]]],[11,"builder","","Returns a new builder.",5,[[],["metadatabuilder",3]]],[11,"level","","The verbosity level of the message.",5,[[],["level",4]]],[11,"target","","The name of the target of the directive.",5,[[]]],[11,"new","","Construct a new `MetadataBuilder`.",6,[[],["metadatabuilder",3]]],[11,"level","","Setter for `level`.",6,[[["level",4]],["metadatabuilder",3]]],[11,"target","","Setter for `target`.",6,[[],["metadatabuilder",3]]],[11,"build","","Returns a `Metadata` object.",6,[[],["metadata",3]]],[14,"log","","The standard logging macro.",null,null],[14,"error","","Logs a message at the error level.",null,null],[14,"warn","","Logs a message at the warn level.",null,null],[14,"info","","Logs a message at the info level.",null,null],[14,"debug","","Logs a message at the debug level.",null,null],[14,"trace","","Logs a message at the trace level.",null,null],[14,"log_enabled","","Determines if a message logged at the specified level in…",null,null],[11,"from","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"eq","","",0,[[["level",4]]]],[11,"eq","","",0,[[["levelfilter",4]]]],[11,"eq","","",1,[[["levelfilter",4]]]],[11,"eq","","",1,[[["level",4]]]],[11,"eq","","",5,[[["metadata",3]]]],[11,"ne","","",5,[[["metadata",3]]]],[11,"eq","","",6,[[["metadatabuilder",3]]]],[11,"ne","","",6,[[["metadatabuilder",3]]]],[11,"eq","","",8,[[["parselevelerror",3]]]],[11,"ne","","",8,[[["parselevelerror",3]]]],[11,"cmp","","",0,[[["level",4]],["ordering",4]]],[11,"cmp","","",1,[[["levelfilter",4]],["ordering",4]]],[11,"cmp","","",5,[[["metadata",3]],["ordering",4]]],[11,"cmp","","",6,[[["metadatabuilder",3]],["ordering",4]]],[11,"partial_cmp","","",0,[[["level",4]],[["option",4],["ordering",4]]]],[11,"lt","","",0,[[["level",4]]]],[11,"le","","",0,[[["level",4]]]],[11,"gt","","",0,[[["level",4]]]],[11,"ge","","",0,[[["level",4]]]],[11,"partial_cmp","","",0,[[["levelfilter",4]],[["option",4],["ordering",4]]]],[11,"lt","","",0,[[["levelfilter",4]]]],[11,"le","","",0,[[["levelfilter",4]]]],[11,"gt","","",0,[[["levelfilter",4]]]],[11,"ge","","",0,[[["levelfilter",4]]]],[11,"partial_cmp","","",1,[[["levelfilter",4]],[["option",4],["ordering",4]]]],[11,"lt","","",1,[[["levelfilter",4]]]],[11,"le","","",1,[[["levelfilter",4]]]],[11,"gt","","",1,[[["levelfilter",4]]]],[11,"ge","","",1,[[["levelfilter",4]]]],[11,"partial_cmp","","",1,[[["level",4]],[["option",4],["ordering",4]]]],[11,"lt","","",1,[[["level",4]]]],[11,"le","","",1,[[["level",4]]]],[11,"gt","","",1,[[["level",4]]]],[11,"ge","","",1,[[["level",4]]]],[11,"partial_cmp","","",5,[[["metadata",3]],[["option",4],["ordering",4]]]],[11,"lt","","",5,[[["metadata",3]]]],[11,"le","","",5,[[["metadata",3]]]],[11,"gt","","",5,[[["metadata",3]]]],[11,"ge","","",5,[[["metadata",3]]]],[11,"partial_cmp","","",6,[[["metadatabuilder",3]],[["option",4],["ordering",4]]]],[11,"lt","","",6,[[["metadatabuilder",3]]]],[11,"le","","",6,[[["metadatabuilder",3]]]],[11,"gt","","",6,[[["metadatabuilder",3]]]],[11,"ge","","",6,[[["metadatabuilder",3]]]],[11,"hash","","",0,[[]]],[11,"hash","","",1,[[]]],[11,"hash","","",5,[[]]],[11,"hash","","",6,[[]]],[11,"from_str","","",0,[[],[["result",4],["level",4]]]],[11,"from_str","","",1,[[],[["result",4],["levelfilter",4]]]],[11,"clone","","",0,[[],["level",4]]],[11,"clone","","",1,[[],["levelfilter",4]]],[11,"clone","","",3,[[],["record",3]]],[11,"clone","","",5,[[],["metadata",3]]]],"p":[[4,"Level"],[4,"LevelFilter"],[8,"Log"],[3,"Record"],[3,"RecordBuilder"],[3,"Metadata"],[3,"MetadataBuilder"],[3,"SetLoggerError"],[3,"ParseLevelError"]]},\
"teensyduino":{"doc":"Functions from the teensyduino framework, re-exported and…","i":[[5,"delay","teensyduino","Pauses the program for the amount of time (in…",null,[[]]],[5,"delay_microseconds","","Pauses the program for the amount of time (in…",null,[[]]],[5,"delay_nanoseconds","","Basically delay microseconds, but nanoseconds",null,[[]]],[5,"millis","","Returns the number of milliseconds passed since the…",null,[[]]],[5,"micros","","Returns the number of microseconds since the Arduino board…",null,[[]]],[0,"gpio","","Tools for interfacing with GPIO on the uC",null,null],[3,"Pin","teensyduino::gpio","A container for a pin number that has been verified to…",null,null],[4,"PinMode","","The modes that a pin can be configured in",null,null],[13,"Input","","Pins configured this way are said to be in a…",0,null],[13,"Output","","Pins configured as OUTPUT with pinMode() are said to be in…",0,null],[13,"InputPullUp","","There are 20K pullup resistors built into the Atmega chip…",0,null],[13,"InputPullDown","","See the description of InputPullUp",0,null],[13,"OutputOpenDrain","","Open drain outputs require a pull-up resistor for the…",0,null],[13,"InputDisable","","Disable the pin (High Impedance)",0,null],[17,"LED_BUILTIN","","The builtin LED, normally on pin 13",null,null],[11,"new","","Create a new Pin to drive a GPIO",1,[[],["pin",3]]],[11,"mode","","Configures the specified pin to behave either as an input…",1,[[["pinmode",4]]]],[11,"set_high","","Set the pins output to high. A proxy for…",1,[[]]],[11,"set_low","","Set the pins output to low. A proxy for…",1,[[]]],[11,"toggle","","Set the pins output to the opposite of what it currently is",1,[[]]],[11,"digital_write","","Write a HIGH (true) or a LOW (false) value to a digital pin.",1,[[]]],[11,"digital_read","","Reads the value from a specified digital pin, either HIGH…",1,[[]]],[0,"serial","teensyduino","Tooling for accessing the Serial and UART ports on the uC",null,null],[3,"USBSerial","teensyduino::serial","A serial USB connection to a host device. Based off of the…",null,null],[3,"USBSerialWriter","","A ZST that can be constructed to use the write! and…",null,null],[4,"Parity","","A representation of the parity of a serial port",null,null],[13,"None","","No Parity",2,null],[13,"Odd","","Odd Parity",2,null],[13,"Even","","Even Parity",2,null],[0,"log","","An implementation for using the log library to log over…",null,null],[3,"LoggingConfig","teensyduino::serial::log","Logging configuration",null,null],[12,"max_level","","The max log level",3,null],[12,"filters","","A list of filtered targets to log.",3,null],[3,"USBLogger","","A logger for use with the log crate that outputs its data…",null,null],[11,"init","","Initialize the USBLogger for use with the log crate",4,[[["loggingconfig",3]],[["result",4],["setloggererror",3]]]],[0,"ansi","teensyduino::serial","Tools for working with ansi escape sequences, mainly in…",null,null],[3,"EscapeSequence","teensyduino::serial::ansi","A structure defining an ansi escape sequence. To convert…",null,null],[4,"Color","","",null,null],[13,"Black","","",5,null],[13,"Red","","",5,null],[13,"Green","","",5,null],[13,"Yellow","","",5,null],[13,"Blue","","",5,null],[13,"Magenta","","",5,null],[13,"Cyan","","",5,null],[13,"White","","",5,null],[13,"LightBlack","","",5,null],[13,"LightRed","","",5,null],[13,"LightGreen","","",5,null],[13,"LightYellow","","",5,null],[13,"LightBlue","","",5,null],[13,"LightMagenta","","",5,null],[13,"LightCyan","","",5,null],[13,"LightWhite","","",5,null],[13,"TrueColor","","",5,null],[12,"r","teensyduino::serial::ansi::Color","",6,null],[12,"g","","",6,null],[12,"b","","",6,null],[4,"Style","teensyduino::serial::ansi","",null,null],[13,"Clear","","",7,null],[13,"Bold","","",7,null],[13,"Dimmed","","",7,null],[13,"Underline","","",7,null],[13,"Reversed","","",7,null],[13,"Italic","","",7,null],[13,"Blink","","",7,null],[13,"Hidden","","",7,null],[13,"Strikethrough","","",7,null],[11,"new","","Create a new escape sequence with no information",8,[[]]],[11,"set_fg","","Set the foreground in the escape sequence",8,[[["color",4]]]],[11,"set_bg","","Set the background for the escape sequence",8,[[["color",4]]]],[11,"set_styles","","Set the styles in the escape sequence",8,[[]]],[6,"SERIAL","teensyduino::serial","A serial USB connection to a host device. Based off of the…",null,null],[11,"set_timeout","","Set the serial read in timeout",9,[[]]],[11,"avaliable","","Get the number of bytes (characters) available for reading…",9,[[]]],[11,"available_for_write","","Get the number of bytes (characters) available for writing…",9,[[]]],[11,"clear","","Clear the input buffer",9,[[]]],[11,"send_now","","Transmit any buffered data as soon as possible. Sometimes…",9,[[]]],[11,"peek","","Returns the next byte (character) of incoming serial data…",9,[[],["option",4]]],[11,"baud","","Read the baud rate setting from the PC or Mac.…",9,[[]]],[11,"stop_bits","","Read the stop bits setting from the PC or Mac. USB never…",9,[[]]],[11,"parity_type","","Read the parity type setting from the PC or Mac. USB uses…",9,[[],["parity",4]]],[11,"num_bits","","Read the number of bits setting from the PC or Mac. USB…",9,[[]]],[11,"dtr","","Read the DTR signal state. By default, DTR is low when no…",9,[[]]],[11,"rts","","Read the RTS signal state. USB includes flow control…",9,[[]]],[11,"read_bytes_timeout","","Read in the bytes from a serial buffer for the duration of…",9,[[]]],[11,"read_bytes","","Read in the bytes from the serial buffer in one shot…",9,[[]]],[11,"read_str_timeout","","Read in a string from the usb buffer with retrying to fill…",9,[[],[["option",4],["utf8error",3],["result",4]]]],[11,"read_str","","Read in a string from the usb buffer without retrying to…",9,[[],[["option",4],["utf8error",3],["result",4]]]],[11,"read","","Read in one char of data from the serial port",9,[[],["option",4]]],[11,"write_char","","Write a single char out onto the serial port, returning if…",9,[[]]],[11,"write","","Write a whole string out onto the serial port, returning…",9,[[]]],[0,"sound","teensyduino","Sound functionality provided by the arduino framework",null,null],[8,"Tone","teensyduino::sound","Allow a pin to output square wave notes asynchronously…",null,null],[10,"tone","","Generates a square wave of the specified frequency (and…",10,[[]]],[10,"tone_with_duration","","Generates a square wave of the specified frequency (and…",10,[[]]],[10,"no_tone","","Stops the generation of a square wave triggered by tone().…",10,[[]]],[0,"tempmon","teensyduino","Utilities for interfacing with the teensy 4\'s integrated…",null,null],[5,"get_temp","teensyduino::tempmon","Get the teensy\'s temperature in degrees celsius",null,[[]]],[11,"from","teensyduino::gpio","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","teensyduino::serial","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"into","","",11,[[]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","teensyduino::serial::log","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","teensyduino::serial::ansi","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"tone","teensyduino::gpio","",1,[[]]],[11,"tone_with_duration","","",1,[[]]],[11,"no_tone","","",1,[[]]],[11,"from","teensyduino::serial","",2,[[]]],[11,"fmt","teensyduino::serial::ansi","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"eq","","",5,[[["color",4]]]],[11,"ne","","",5,[[["color",4]]]],[11,"eq","","",7,[[["style",4]]]],[11,"eq","","",8,[[["escapesequence",3]]]],[11,"ne","","",8,[[["escapesequence",3]]]],[11,"write_str","teensyduino::serial","",11,[[],["result",6]]],[11,"write_char","","",11,[[],["result",6]]],[11,"into","teensyduino::gpio","",1,[[]]],[11,"clone","teensyduino::serial::ansi","",5,[[],["color",4]]],[11,"clone","","",7,[[],["style",4]]],[11,"clone","","",8,[[],["escapesequence",3]]],[11,"default","teensyduino::serial::log","",3,[[],["loggingconfig",3]]],[11,"enabled","","",4,[[["metadata",3]]]],[11,"log","","",4,[[["record",3]]]],[11,"flush","","",4,[[]]]],"p":[[4,"PinMode"],[3,"Pin"],[4,"Parity"],[3,"LoggingConfig"],[3,"USBLogger"],[4,"Color"],[13,"TrueColor"],[4,"Style"],[3,"EscapeSequence"],[3,"USBSerial"],[8,"Tone"],[3,"USBSerialWriter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);