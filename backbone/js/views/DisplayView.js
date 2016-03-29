var DisplayView = Backbone.View.extend({
  
  className: 'display',
  
  displayTemplate: _.template('<img src=<%=url%> class="display"/><p>Title: <%=title%> </p><p>Rating: <%=rating%> out of 5</p>'),
  
  render: function() {
    this.collection.each(function(entry) {
      if (entry.attributes.displayPhoto === true) { 
        this.$el.html(this.displayTemplate(entry.attributes));
        this.input = new InputView({model: entry});
        this.$el.append(this.input.$el);
      }
    }, this);
    return this;
  },
  
  initialize: function() {
    this.render();
    this.collection.on('toggle:display', this.render, this);
    this.collection.on('toggle:input', this.render, this);
    
  }
  
});
