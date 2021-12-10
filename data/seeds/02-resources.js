
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('resources').insert([
    {resource_name: 'Dad', resource_description: 'Adult 1'},
    {resource_name: 'Mom', resource_description: 'Adult 2'},
    {resource_name: 'NJ', resource_description: 'The oldest kid'},
    {resource_name: 'SG', resource_description: 'Twin 1'},
    {resource_name: 'IR', resource_description: 'Twin 2'},
  ])
  
};