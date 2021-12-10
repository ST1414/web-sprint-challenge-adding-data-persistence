// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./projects/router')
const resourcesRouter = require('./resources/router')
const tasksRouter = require('./tasks/router')

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the 4.2.5 Sprint Challenge</h1>')
})
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server;


