/**Options/Context here that cooralate with the (context, options)that are 
definded and over ridded in each class. ie(channel.playlist = function(context, options)
This was keeping in mind that it could be part of a larger application. */
var channel = channel || {};

/** Create the channel display object. */
channel.display = function(context, options) {
  if (context && context.length > 0) {
    this.options = options;                                                      
    this.context = this.create(context); 
    this.init(options);                  
  }
};

/** Create a new display for this item. */
channel.display.prototype.create = function(context) {
  return context;
};

/** Initialize the display. */
channel.display.prototype.init = function(options) {
  this.options = options;
};
