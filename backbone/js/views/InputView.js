var InputView = Backbone.View.extend({
  
  el: '<form class="input">',
  
  formTemplate: _.template('<select class="rating"> <option value=""></option><option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> </select>'),
  
  events: {
    'change select': function(event) {
      event.preventDefault();
      this.model.handleSubmit(event);
    }
  },
  
  initialize: function() {
    this.render();
  },
  
  render: function(event) {
    this.$el.html(this.formTemplate());
    this.$el.prepend('Rate this image: ');
    return this;
  }
  
});
