var http = require('http')
var request = require('request')
var fs = require('fs')

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});

    request("http://www.naver.com",function (error,response,body) {
        fs.writeFile('./naver.html',body,function () {
            fs.readFile('./naver.html',function (err,data) {
                res.writeHead(200);
                res.end(data)
            });
        });
    })
}).listen(3000)

//http로 서버를 열고 requst로 받은 body를 작성하고 끝나는 동시에 읽고 화면에 던져줌