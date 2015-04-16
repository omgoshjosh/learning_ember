Todos.ExpTextArea = Ember.TextArea.extend({
  didInsertElement: function(){
    Ember.run.next(function() {
      // Focus the text area
      this.$().focus();

      // Listen for keypress events and recalculate the height of the text area.
      this.$().on('keyup', function(e) {
        var textArea = $(this);
        $(this).height(0);
        var newHeight = this.scrollHeight;

        while(textArea.outerHeight() < newHeight) {
          $(this).height($(this).height()+1);
        }
      });

    }.bind(this));
  },

  willDestroyElement: function() {
    this.$().off('keyup');
  }
});

Ember.Handlebars.helper('exp-text-area', Todos.ExpTextArea);
