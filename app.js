const http = require('http');
const routes = require('./routes');

// function rqListener(req,res) {
//     // console.log(req.url, req.method, req.headers);
//     // process.exit();




// }

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);