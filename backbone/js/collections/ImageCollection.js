var ImageCollection = Backbone.Collection.extend({
  model: ImageEntry,
  
  addImageEntry: function(imageLink, imageTitle) {
    this.add({
      title: imageTitle,
      url: imageLink
    });
  }
});
