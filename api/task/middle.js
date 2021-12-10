// ***** TASKS MIDDLE *****
const Project = require('../project/model');

const checkProjectId = (req, res, next) => {
    console.log('MIDDLE 1: ', req.body.project_id)
    Project.getProjectById(req.body.project_id)
        .then( response => {
            console.log('MIDDLE 2: ', response)
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