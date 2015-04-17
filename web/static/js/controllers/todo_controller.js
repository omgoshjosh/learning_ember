Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editNote: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
          this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },
    removeTodo: function () {
        var todo = this.get('model');
        todo.deleteRecord();
        todo.save();
    },
    saveTodo: function() {
      this.get('model').save();

      // Send the user back to Todos index
      this.transitionToRoute('todos.index');
    }
  },

  isEditing: false,

  isChecklist: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isChecklist');
    } else {
      // property being used as a setter
      model.set('isChecklist', value);
      model.save();
      return value;
    }
  }.property('model.isChecklist'),

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
