// ***** RESOURCES ROUTER *****
const express = require('express');
const router = express.Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.getAllResources()
        .then( response => {
            res.json(response)
        })
        .catch( next )
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then( response => {
            res.json(response);
        })
        .catch( next );
})

router.get('*', (req, res) => {
    res.send('<h1>Resources Router - OOPS!</h1>')
})

module.exports = router;
