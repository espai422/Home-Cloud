const http = require('http');
const app = require('./index.js').app;

var httpServer = http.createServer(app);

const port = 4222
const host = '192.168.1.75'

httpServer.listen(port, host, () => {
    console.log(`Server up on ${host} at port ${port}`)
})