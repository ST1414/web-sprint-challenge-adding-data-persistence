// ***** TASKS ROUTER *****
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Tasks Router</h1>')
})

router.get('*', (req, res) => {
    res.send('<h1>Tasks Router - OOPS!</h1>')
})

module.exports = router;


