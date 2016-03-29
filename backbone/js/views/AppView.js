var AppView = Backbone.View.extend({
  
  el: '#app',
  
  initialize: function() {
    
    var currentCollection = new ImageCollection(imageData, {model: ImageEntry});
    
    this.list = new ListView({
      collection: currentCollection
    });
    
    this.header = new HeaderView();
    
    this.save = new SaveView({
      collection: currentCollection
    });
    
    this.display = new DisplayView({
      collection: currentCollection
    });
    
    this.render();
  },
  
  render: function() {
    this.$el.append([
      this.header.$el,
      this.save.$el,
      this.list.$el,
      this.display.$el,
    ]);
    return this;
  }
  
});
