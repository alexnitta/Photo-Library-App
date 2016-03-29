var EntryView = Backbone.View.extend({
  el: '<tr>',
  
  className: 'entry',
  
  entryTemplate: _.template('<td class="entry"><%=title%></td>'),
  
  render: function() {
    this.$el.html(this.entryTemplate(this.model.attributes));
    return this;
    
  },
  
  initialize: function() {
    this.render();
  },
  
  events: {
    'click': function() {
      this.model.handleClick();
    }
  },
  
});
