var SaveView = Backbone.View.extend({
  
  el: '<form class="save">',
  
  saveTemplate: _.template('Image Link: <input type="text" name="image-link" placeholder="URL Link for Image"> Image Title: <input type="text" name="image-title" placeholder="Image Title"><input type="submit" value="Save Photo">'),
  
  events: {
    submit: 'saveUrl'
  },
  
  initialize: function() {
    this.render();
  },
  
  render: function(event) {
    this.$el.html(this.saveTemplate());
    return this;
  },
  
  saveUrl: function(event) {
    var imageLink = $('[name="image-link"]').val();
    var imageTitle = $('[name="image-title"]').val();
    this.collection.addImageEntry(imageLink, imageTitle);
  }
  
});
