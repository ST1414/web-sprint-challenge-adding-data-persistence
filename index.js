// 4.2.5 - SPRINT CHALLENGE
// Fri. Dec. 10, 2021

// start your server here
const server = require('./api/server');

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`\n*** SERVER LISTENING ON PORT ${PORT} ***`)
})