// ***** TASKS MODEL *****
const db = require('../../data/dbConfig');

async function getAllTasks () {
    // - [ ] `[GET] /api/tasks`
    //   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
    //   - Each task must include `project_name` and `project_description`
    //   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
    const rows = await db('tasks');
    const result = rows.map( task => {
        if (task.task_completed === 0){
            task.task_completed = false;
        } else {
            task.task_completed = true;
        }
        return task;
    });
    return result;

}

async function createTask (task) {
    const newTaskId = await db('tasks').insert(task);
    const newTask = getTaskById(newTaskId);
    return newTask;
}

async function getTaskById (id) { 
    const task = await db('tasks').where('task_id', id).first();
    task.task_completed === 0 ? task.task_completed = false : task.task_completed = true;
    return task;
}

module.exports = {
    getAllTasks,
    createTask,
}