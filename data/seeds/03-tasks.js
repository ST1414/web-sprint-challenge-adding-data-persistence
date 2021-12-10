exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('tasks').insert([
    {task_description:'Weigh coffee beans', task_notes: 'Weigh coffee beans', project_id: 1},
    {task_description:'Grind coffee beans', task_notes: 'Grind coffee beans', project_id: 1},
    {task_description:'Pour ground coffee into coffee maker', task_notes: 'Pour ground coffee into coffee maker', project_id: 1},
    {task_description:'Weigh water', task_notes: 'Weigh water', project_id: 1},
    {task_description:'Pour water into coffee maker', task_notes: 'Pour water into coffee maker', project_id: 1},
    {task_description:'Turn on coffee maker', task_notes: 'Turn on coffee maker', project_id: 1},
    {task_description:'Wait 5 minutes, and enjoy', task_notes: 'Wait 5 minutes, and enjoy', project_id: 1},
    
    {task_description:'Add tea leaves to tea pot', task_notes: 'Add tea leaves to tea pot', project_id: 2},
    {task_description:'Boil water', task_notes: 'Boil water', project_id: 2},
    {task_description:'Pour water into tea pot', task_notes: 'Pour water into tea pot', project_id: 2},
    {task_description:'Wait 3 minutes, and enjoy', task_notes: 'Wait 3 minutes, and enjoy', project_id: 2},
  ])
  
};

