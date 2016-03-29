var AppView = Backbone.View.extend({
  
  el: '#app',
  
  initialize: function() {
    this.list = new ListView({
      collection: this.collection
    });
    
    this.header = new HeaderView();
    this.display = new DisplayView({
      collection: this.collection
    });
    this.title = new TitleView();
    this.rating = new RatingView();    
  
    this.render();
  },
  
  render: function() {
    this.$el.append([
      this.header.$el,
      this.list.$el,
      this.display.$el,
      this.title.$el,
      this.rating.$el
    ]);
    return this;
  }
  
});
