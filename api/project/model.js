// ***** PROJECT MODEL *****
const db = require('../../data/dbConfig');

async function getAllProjects () {
    const rows = await db('projects');
    const result = rows.map( project => {
        if (project.project_completed === 0){
            project.project_completed = false;
        } else {
            project.project_completed = true;
        }
        return project;
    });
    return result;
}

async function createProject (project) {
    const newProjectId = await db('projects').insert(project);
    const newProject = getProjectById(newProjectId);
    return newProject;
}

async function getProjectById (id) {
    const project = await db('projects').where('project_id', id).first();
    project.project_completed === 0 ? project.project_completed = false : project.project_completed = true;
    return project;
}

module.exports = {
    getAllProjects,
    createProject,

}