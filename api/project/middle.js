// ***** PROJECTS MIDDLE *****
const Project = require('./model');

const checkProjectId = (req, res, next) => {
    Project.getProjectById(req.params.id)
        .then( response => {
            
        })
        .catch (next);
}
