var DisplayView = Backbone.View.extend({
  
  className: 'display',
  
  displayTemplate: _.template('<img src=<%=url%> class="display"/><p>Title: <%=title%> </p><p>Rating: <%=rating%> out of 5</p>'),
  
  render: function() {
    this.collection.each(function(entry) {
      if (entry.attributes.displayPhoto === true) { 
        this.$el.html(this.displayTemplate(entry.attributes));
      }
    }, this);
    return this;
  },
  
  initialize: function() {
    this.render();
    this.collection.on('toggle:display', this.render, this);
    
  }
  
});
