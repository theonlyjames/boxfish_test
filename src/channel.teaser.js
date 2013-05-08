/** Create the namespace. */
var channel = channel || {};

/** Create the teaser object. */
channel.teaser = function(context, options) {
  options = jQuery.extend({
        thumbnail: '',
        time: '',
        channel: '',
        program: '',
        text: ''
  }, options);
  channel.display.call(this, context, options);
};

/** Derive from channel.display. */
channel.teaser.prototype = new channel.display();
channel.teaser.prototype.constructor = channel.teaser;

/** Override the create method and create the elements
 that I want to be displayed. */
channel.teaser.prototype.create = function(context) {
  channel.display.prototype.create.call(this, context);
  var display = jQuery(document.createElement('div')).attr({id: 'item'});
  this.imgTime = jQuery(document.createElement('div')).attr({id: 'imgTime'});
  this.thumbnail = jQuery(document.createElement('img'));
  this.time = jQuery(document.createElement('p')).attr({id: 'time'});
  this.title = jQuery(document.createElement('div')).attr({id: 'title'});
  this.channel = jQuery(document.createElement('p')).attr({id: 'channel'});
  this.program = jQuery(document.createElement('p')).attr({id: 'program'});
  this.text = jQuery(document.createElement('p')).attr({id: 'text'});
  this.clear = jQuery(document.createElement('div')).attr({id: 'clear'});

  // Build the display.
  display.prepend(this.imgTime.append(this.thumbnail,this.time)).append(this.title.append(this.channel, this.program)).append(this.text,this.clear);
  context.append(display);
  return display;
};

/** Override the init method and placing all of the
 JSON daya in the correct element */
channel.teaser.prototype.init = function(options) {
  channel.display.prototype.init.call(this, options);
  this.thumbnail.attr({src: options.thumbnail});
  this.time.text(options.time);
  this.title.attr({id: 'title'});
  this.channel.text(options.channel);
  this.program.text(' - ' + options.program);
  this.text.html(options.text);

};