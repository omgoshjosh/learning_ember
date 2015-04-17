Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    clearCompleted: function() {
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      var noteText = this.get('newNote');
      if (!title.trim()) { return; }

      // Create the new Note model
      var note = this.store.createRecord('note', {
        msg: noteText,
        isCompleted: false
      });

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Build the relationship of note to todo
      note.set('todo', todo);

      // Clear the Todo fields
      this.set('newTitle', '');
      this.set('newNote', '');

      // Save the new models
      todo.save();
      note.save();

      // Send the user back to Todos index
      this.transitionToRoute('todos.index');
    },

    clearNewTodoForm: function() {
      this.set('newTitle', '');
      this.set('newNote', '');
    },

    setTodoType: function() {
        console.log('setTodoType');
    }
  },

  checklistTypeChecked: function(key, value) {
    if(value === undefined) {
      return true;
    }
    else {
      return value;
    }
  }.property('checklistTypeChecked'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  allAreDone: function(key, value) {
    if(value === undefined) {
        console.log('value = UNDEFINED');
      return !!this.get('length') && this.isEvery('isCompleted', true);
    }
    else {
        console.log('value = '+value);
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
});
