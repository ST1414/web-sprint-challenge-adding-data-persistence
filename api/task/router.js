// ***** TASKS ROUTER *****
const express = require('express');
const router = express.Router();
const Task = require('./model');

router.get('/', (req, res, next) => {
    Task.getAllTasks()
        .then( response => {
            res.json(response)
        })
        .catch( next )
})

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then( response => {
            res.json(response);
        })
        .catch( next );
})

router.get('*', (req, res) => {
    res.send('<h1>Tasks Router - OOPS!</h1>')
})

module.exports = router;


