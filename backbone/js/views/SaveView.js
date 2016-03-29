var SaveView = Backbone.View.extend({
  
  el: '<form class="save">',
  
  saveTemplate: _.template('Image Link: <input type="text" name="image-link" placeholder="URL Link for Image"> Image Title: <input type="text" name="image-title" placeholder="Image Title"><input type="submit" value="Save Photo">'),
  
  events: {
    submit: function(event) {
      event.preventDefault();
      this.saveUrl();
    }
  },
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.saveTemplate());
    return this;
  },
  
  saveUrl: function() {
    var imageLink = $('[name="image-link"]').val();
    var imageTitle = $('[name="image-title"]').val();
    this.collection.addImageEntry(imageLink, imageTitle);
    this.resetInput();
  },
  
  resetInput: function() { // resets the input field placeholder
    $('[name="image-link"]').attr({
      placeholder: 'Add another image URL'
    });
    $('[name="image-title"]').attr({
      placeholder: 'Add another title'
    });
    this.clearInput();
  },

  clearInput: function() { // clears the user input
    $('[name="image-link"]').val('');
    $('[name="image-title"]').val('');
  }
  
});
