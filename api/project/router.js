// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Projects Router</h1>')
})

module.exports = router;