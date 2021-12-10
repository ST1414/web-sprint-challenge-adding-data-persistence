// ***** TASKS MODEL *****
const db = require('../../data/dbConfig');

async function getAllTasks () {
    const rows = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        );
    console.log('ROWS: ', rows);

    const result = rows.map( task => {
        task.task_completed === 0 ? task.task_completed = false : task.task_completed = true;
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
    getTaskById,
}