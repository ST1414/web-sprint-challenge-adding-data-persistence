// ***** PROJECTS ROUTER *****
// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.getAllProjects()
        .then( response => {
            res.json(response)
        })
        .catch( next )
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then( response => {
            res.json(response);
        })
        .catch( next );
})



router.get('*', (req, res) => {
    res.send('<h1>Projects Router - OOPS!</h1>')
})

module.exports = router;
