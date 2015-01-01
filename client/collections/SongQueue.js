// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('dequeue', this.dequeue, this);
    this.on('add', this.onAdd, this);
    this.on('ended', this.ended, this);
  },

  // Plays the first song in the queue.
  playFirst: function() {
    if(this.models.length) {
      this.models[0].play();
    }
  },

  onAdd: function(){
    if(this.models.length === 1){
      this.playFirst();
    }
  },

  ended: function(model){
    this.dequeue(model);
    if(this.models.length) {
      this.playFirst();
    }
  },

  dequeue: function(model) {
    // if current song is dequeued, stops and plays next song.
    if(this.models[0] === model && this.models[1]){
      var wasFirst = true;
    }

    this.remove(model);

    if(wasFirst) this.playFirst();
  }

});
