var http    = require('http'),
    url     = require('url'),
    path    = require('path'),
    port    = process.env.PORT || 3000,
    health  = require('health-route');

module.exports = http.createServer(function(req, res) {
  var method  = req.method.toLowerCase(),
      path    = (url.parse(req.url)).pathname;

  if (path === "/health" && method === "get") {
    return health(req, res);
  } else {
    res.writeHead(404, 'Not Found');
    return res.end("Not Found\n");
  }
}).listen(port);

console.log("health-server running on port", port);
