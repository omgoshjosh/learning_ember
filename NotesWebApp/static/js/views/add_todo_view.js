Todos.AddTodoView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});

Ember.Handlebars.helper('toggle-todo-type', Todos.AddTodoView);
