var ListView = Backbone.View.extend({
  
  el: '<table class="list">',
  
  initialize: function() {
    this.render();
    // this.collection.on('add', this.render, this);
    // this.listenTo(this.collection, 'add', this.render); 
  },
  
  render: function() {
    this.$el.html('');
    // this.$el.children().detach();
    this.$el.append('<tr><th class="entry entry-title">Images</th></tr>');
    this.collection.each(function(entry) {
      this.$el.append(new EntryView({model: entry}).$el);
    }, this);
    return this;
  }
  
});
