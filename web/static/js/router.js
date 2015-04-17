Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    // new todo route
    this.route('new');

    // checklist routes
    this.route('checklist');
    this.route('active');
    this.route('completed');
  });
  this.resource('todo', { path: '/todo/:todo_id' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

Todos.TodoRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('todo', params.todo_id);
  }
});

Todos.TodosNewRoute = Ember.Route.extend({
  controllerName: 'todos',
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosChecklistRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/checklist', {controller: controller});
  }
});

Todos.TodosNoteRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/checklist', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/checklist', {controller: controller});
  }
});
