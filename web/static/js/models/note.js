Todos.Note = DS.Model.extend({
    msg: DS.attr('string'),
    isCompleted: DS.attr('boolean'),
    todo: DS.belongsTo('todo')
});

Todos.Note.FIXTURES = [
{
  id: 1,
  msg: 'Do the first thing...'
},
{
  id: 2,
  msg: 'somethin, somethin...'
},
{
  id: 3,
  msg: 'PROFIT BETCH!'
},
{
  id: 4,
  msg: 'REGULAR NOTE CAN BE LONG LOL'
}
];
