const fs = require('fs');

const fileStats = './db/stats.json';

const loger = (act, prod) => {
  const dat = new Date();
  fs.readFile(fileStats, 'utf-8', (err, data) => {
    if (err) {
      //res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
      console.log(err)
    } else {
      const logs = JSON.parse(data);
      const log = {
        action: act,
        product: {
          id_product: prod.id_product,
          product_name: prod.product_name,
          price: prod.price,
        },
        date: dat.toString(),
      };
      logs.push(log);

      fs.writeFile(fileStats, JSON.stringify(logs), (er) => {
        if (er) {
          console.log('{"result": 0}');
          // res.send('{"result": 0}');
        } else {
          console.log('{"result": 1}');
          // res.send('{"result": 1}');
        }
      });
    }
  });
};

module.exports = loger;
