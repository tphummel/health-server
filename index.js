var http    = require('http')
var url     = require('url')
var port    = process.env.PORT || 3000
var health  = require('health-route')

module.exports = http.createServer(function(req, res) {
  var method  = req.method.toLowerCase()
  var path    = (url.parse(req.url)).pathname

  if (path === '/health' && method === 'get') {
    return health(req, res)
  } else {
    res.writeHead(404, 'Not Found')
    return res.end('Not Found\n')
  }
}).listen(port)

console.log('health-server running on port', port)
