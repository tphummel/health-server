var test = require('tape'),
    http = require('http');

test('health-server', function(t){
  var server  = require('./');

  http.get('http://localhost:3000/health', function(res){
    var payload = '';

    t.equal(res.statusCode, 200);

    res.on('data', function(d){
      payload += d;

    }).on('end', function(){
      health = JSON.parse(payload.toString());

      t.ok(health.ts, 'has field "ts"');
      t.ok(health.pid, 'has field "pid"');
      t.ok(health.uptime >= 0, 'has field "uptime"');
      t.ok(health.memory, 'has field "memory"');
      t.equal(health.status, 'ok');

      server.close();
      t.end();
    });

  }).on('error', function(e){
    server.close();
    t.fail(e);
  });
});
