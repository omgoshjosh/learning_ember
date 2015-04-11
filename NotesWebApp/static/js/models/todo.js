Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Note = DS.Model.extend({
    msg: DS.attr('string')
});