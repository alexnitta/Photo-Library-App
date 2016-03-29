var EntryView = Backbone.View.extend({
  el: '<tr>',
  
  className: 'entry',
  
  entryTemplate: _.template('<td class="entry"><%=title%></td>'),
  
  render: function() {
    this.$el.html(this.entryTemplate(this.model.attributes));
    return this;
    
  },
  
  // addDisplay: function() {
  //   this.$el.append('<tr>AddDisplay</tr>');
  // },
  
  initialize: function() {
    this.render();
    this.model.on('toggle:display', this.render, this);
    
  },
  
  events: {
    'click': function() {
      this.model.handleClick();
    }
  },
  
});
