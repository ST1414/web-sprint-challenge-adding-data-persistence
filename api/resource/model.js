// ***** RESOURCES MODEL *****
const db = require('../../data/dbConfig');

async function getAllResources () {
    return await db('resources');
}

async function createResource (resource) {
    const newResourceId = await db('resources').insert(resource);
    const newResource = getResourceById(newResourceId);
    return newResource;
}

async function getResourceById (id) {
    return await db('resources').where('resource_id', id);
}

module.exports = {
    getAllResources,
    createResource,
}