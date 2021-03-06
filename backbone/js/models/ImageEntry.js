var ImageEntry = Backbone.Model.extend({
  
  defaults: {
    title: '',
    url: '',
    rating: 0,
    displayPhoto: false
  },
  
  handleClick: function() {
    // set displayPhoto to false in all entries
    this.collection.forEach(function(entry) {
      entry.set({displayPhoto: false});
    });
    // set displayPhoto to true for clicked entry
    this.set({displayPhoto: true});
    this.trigger('toggle:display');
  },
  
  handleSubmit: function(event) {
    this.set({rating: event.target.value});
    this.trigger('toggle:input');
  },
  
  initialize: function() {}

});
