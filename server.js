var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('hello world!');
}).listen(3000,"127.0.0.1");