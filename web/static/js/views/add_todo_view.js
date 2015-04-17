Todos.ExpTextArea = Ember.TextArea.extend({
  didInsertElement: function(){
    opts = {
      animate: false,
      cloneClass: 'faketextarea'
    }
    $('#'+this.get('elementId')).autogrow(opts);
  },

  willDestroyElement: function() {
  }
});

Ember.Handlebars.helper('exp-text-area', Todos.ExpTextArea);
