var http = require('http')

http.createServer(function(req, res){
    res.end("Ola!")
}).listen(8086)

console.log("O servidor esta rodando!")



