Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean'),
    isChecklist: DS.attr('boolean')
});

Todos.Note = DS.Model.extend({
    msg: DS.attr('string')
});

Todos.Todo.FIXTURES = [
{
  id: 1,
  title: 'First Todo Checklist',
  isCompleted: true,
  isChecklist: true
},
{
  id: 2,
  title: 'Regular note',
  isCompleted: false,
  isChecklist: false
}
];

Todos.Note.FIXTURES = [
{
  id: 4,
  msg: 'First non Todo note, just a regular note.'
},
{
  id: 5,
  msg: 'Real test'
}
];
