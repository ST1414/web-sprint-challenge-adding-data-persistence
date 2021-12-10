// ***** RESOURCES *****
// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Resources Router</h1>')
})

router.get('*', (req, res) => {
    res.send('<h1>Resources Router - OOPS!</h1>')
})

module.exports = router;


// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`