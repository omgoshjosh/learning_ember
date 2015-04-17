Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.hasMany('note', {async: true}),
    isCompleted: DS.attr('boolean'),
    isChecklist: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
{
  id: 1,
  title: 'First Todo Checklist',
  isCompleted: true,
  isChecklist: true,
  notes: [ 1, 2, 3 ]
},
{
  id: 2,
  title: 'Regular note',
  isCompleted: false,
  isChecklist: false,
  notes: [ 4 ]
}
];
