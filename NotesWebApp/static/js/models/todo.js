Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.hasMany('note'),
    isCompleted: DS.attr('boolean'),
    checklistTypeChecked: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
{
  id: 1,
  title: 'First Todo Checklist',
  isCompleted: true,
  checklistTypeChecked: true,
  notes: [ 1, 2, 3 ]
},
{
  id: 2,
  title: 'Regular note',
  isCompleted: false,
  checklistTypeChecked: false,
  notes: [ 4 ]
}
];
