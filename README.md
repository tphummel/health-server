# health-server

[![Build Status](https://travis-ci.org/tphummel/health-server.png)](https://travis-ci.org/tphummel/health-server)

[![NPM](https://nodei.co/npm/health-server.png?downloads=true)](https://nodei.co/npm/health-server/)

starts an http server that returns `statusCode: 200` and json server info at `GET /health`

ideal for projects that don't already run a web server but needs a health check for CI or uptime checks

you can add `GET /health` to an existing server with [health-route](http://npm.im/health-route)


## install

    npm install health-server

## test

    npm test

## usage

see `test.js`
