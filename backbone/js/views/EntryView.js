var EntryView = Backbone.View.extend({
  el: '<tr>',
  
  className: 'entry',
  
  entryTemplate: _.template('<td class="entry"><%=title%></td>'),
  
  events: {
    'click': function() {
      this.model.handleClick();
    }
  },
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.entryTemplate(this.model.attributes));
    return this;
  }  
  
});
