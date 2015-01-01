// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change:playcount', this.render, this);
    this.model.on('change:vote', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> </td><td> Plays: <%= playcount %> </td><td> <button id="upvote">Upvote</button> <button id="downvote">Downvote</button> Votes: <%= vote %> </td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    },
    'click #downvote': 'downvote',
    'click #upvote': 'upvote'
  },

  downvote: function(){
    this.model.set('vote', this.model.get('vote') - 1);
  },

  upvote: function(){
    this.model.set('vote', this.model.get('vote') + 1);
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
