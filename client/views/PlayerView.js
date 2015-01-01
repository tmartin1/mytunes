// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.model.on('play', this.triggerPlay, this);
    // when song changes, retrigger render.
    this.model.on('change', this.render, this);
    this.collection.on('remove', this.stopCheck, this);
  },

  events: {
    'ended': 'triggerComplete'
  },

  triggerComplete: function(e) {
    // when song is complete
    // remove completes song from queue
    // play next song in queue
    this.model.ended();
  },

  triggerPlay: function(e) {
    this.el.play();
  },

  stopCheck: function() {
    if(!this.collection.models.length){
      this.setSong();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
