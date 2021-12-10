// ***** TASKS MIDDLE *****
const Project = require('../project/model');

const checkProjectId = (req, res, next) => {
    Project.getProjectById(req.body.project_id)
        .then( response => {
            if (response === null) {
                res.status(404).json({ message: `project id ${req.body.project_id} does not exist` })
            } else {
                next()
            }
        })
        .catch (next);
}

module.exports = {
    checkProjectId
}