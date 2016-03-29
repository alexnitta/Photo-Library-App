var AppView = Backbone.View.extend({
  
  el: '#app',
  
  initialize: function() {
    this.list = new ListView({
      collection: this.collection
    });
    
    this.header = new HeaderView();
    
    this.save = new SaveView({
      collection: this.collection
    });
    
    this.display = new DisplayView({
      collection: this.collection
    });
    
    this.render();
  },
  
  render: function() {
    this.$el.append([
      this.header.$el,
      this.save.$el,
      this.list.$el,
      this.display.$el,
      // this.input.$el
    ]);
    return this;
  }
  
});
