// B??c 1: Import module http v? fs
var http = require('http');
var fs = require('fs');
 
// B??c 2: Kh?i t?o server
var server = http.createServer(function(request, response){
    // Bi?n request: l? bi?n l?u tr? th?ng tin g?i l?n c?a client
    // Bi?n response: l? bi?n l?u tr? c?c th?ng tin tr? v? cho client
     
    // Ki?m tra URL truy c?p ph?i trang about ko
    if (request.url == '/about.html')
    {
        // Thi?t l?p Header
        response.writeHead(200, {
            "Context-type" : "text/html"
        });
         
        // Show th?ng tin trang about
        fs.createReadStream('./about.html').pipe(response);
    }
    else // tr??ng h?p ng??c l?i ko t?m th?y file
    {
        // Thi?t l?p Header
        response.writeHead(404, {
            "Context-type" : "text/plain"
        });
         
        // Show l?i kh?ng t?m th?y trang
        response.write('404 Not Found ' + request.url);
         
        // K?t th?c
        response.end();
    }
});
 
// B??c 3: L?ng nghe c?ng 300 th? th?c hi?n ch??ng tr?nh
server.listen(3000, function(){
    console.log('Connected Successfull!');
});