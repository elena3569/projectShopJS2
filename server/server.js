const express = require('express');
const fs = require('fs');

const { server } = require('http');

const cartRouter = require('./cartRouter');

const app = express();

app.use(express.json());
app.use('/', express.static('../public'));
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.use('/api/cart', cartRouter);

app.get('/api/catalog', (req, res) => {
  fs.readFile('./db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

const port =  3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
