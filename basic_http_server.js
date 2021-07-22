var express = require('express');
var app = express();

//route principale:
app.get('/', function(req, res , next) {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('<h2>welcome to basic_http_server</h2>');
    res.write("<form method='get' action='saisirname'>");
    res.write("name:<input name='name'/><br/>");
    res.write("<input type='submit' value='send'/>");
    res.write("</form>");
    res.write("</body></html>");
    res.end();
});

app.get('/saisirname', function(req, res , next) {
    nom = String(req.query.name);
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('Bonjour ' + nom + ' Vous etes bien matinal' + '<br/>');
    res.write("</body></html>");
    res.end();
});

app.listen(8282 , function () {
    console.log("http://localhost:8282");
});