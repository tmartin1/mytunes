// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('dequeue', this.dequeue, this);
  },

  // Plays the first song in the queue.
  playFirst: function() {
    if(this.models.length){
      var model = this.shift();
      console.log(model);
      model.play();
    }
  },

  dequeue: function(model) {
    this.remove(model);
  }

});
