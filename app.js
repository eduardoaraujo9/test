var express = require('express');
var os = require("os");
app = express();

app.get('/', function (req, res) {
  res.send('Hello World v2!\n' + os.hostname() + '\n' + process.env.DB_CONFIG);
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/openshift', function (req, res) {
  res.send('Hello Openshift!\n');
});

app.get('/looper', function (req, res) {
  res.send('<html><body><h1>' + os.hostname() + '</h1><script>setTimeout(function(){window.location.href=window.location.origin+"/looper?rand="+Math.round(Math.random()*10000)},1000);</script></body></html>');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

