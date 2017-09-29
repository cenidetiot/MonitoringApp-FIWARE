var express = require('express');
var path = require('path');
const http = require('http');

var app = express();

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/* Configuracion del puerto*/
const port = process.env.PORT || '3500';// used to create, sign, and verify tokens
app.set('port', port);
/* Creacíon del servidor http */
const server = http.createServer(app);
/* Servidor en escucha de acuerdo al puerto especificado.*/
server.listen(port, () => console.log(`APP running on localhost:${port}`));
module.exports = app;
