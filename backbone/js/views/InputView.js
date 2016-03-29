var InputView = Backbone.View.extend({
  
  el: '<form class="input">',
  
  formTemplate: _.template('<select name="rating"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> </select> <input type="submit">'),
  
  events: {
    submit: function(event) {
      event.preventDefault();
      console.log(event);
      // this.model.set({}) START HERE - figure out how to get the submit value and update the rating attribute
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
