/** Create, if one isnt already created, a unique namespace to avoid interuptions from other scipts. */
var channel = channel || {};
/** Prior to this I created channel.display as a base class that will handle functions in all classes  */
/** Create the channel playlist object. */
channel.playlist = function(context, options) {
  options = jQuery.extend({
    url: ''  // if you want to potentially expnd any options for this class. (ie. change url).
  }, options);
  channel.display.call(this, context, options);
};

/** Derive from channel.display. */
channel.playlist.prototype = new channel.display();
channel.playlist.prototype.constructor = channel.playlist;

/** Override the create method. 
 This creates the div that all the returned data will go in.*/
channel.playlist.prototype.create = function(context) {
  channel.display.prototype.create.call(this, context);
  var display = jQuery(document.createElement('div')).attr({
    'id' : 'wrapper'
  }).width(this.options.width);
  context.append(display);
  return display;
};

/** Override the init method from display. 
This is where the JSON data will be pulled and put
into options for the new teaser class.*/
channel.playlist.prototype.init = function(options) {
  channel.display.prototype.init.call(this, options)
  jQuery.getJSON(this.options.url, (function(playlist) {
    return function(data) {    
        var item = data;
        new channel.teaser(playlist.context, {
          thumbnail: item.thumbnail,
          time: item.time,
          channel: item.channel,
          program: item.program,
          text: item.text
        })
    }
    
  })(this));
  
};