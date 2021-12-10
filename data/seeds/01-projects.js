
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('projects').insert([
    {project_name: 'How to make coffee', project_description: 'Making coffee with kids is... fun'},
    {project_name: 'How to make tea', project_description: 'Tea before coffee'}
  ])
  
};
