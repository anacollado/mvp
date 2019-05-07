const router = require('express').Router();
const connection = require('../db/db.js');

router.get('/products', (req, res) => {
  var queryStr = 'SELECT * FROM products ORDER BY brand ASC';
  connection.query(queryStr, (err, results) => {
    if (err) throw err;
    res.send(results).status(200);
  });
});

router.post('/products', (req, res) => {
  var queryStr = 'INSERT INTO products (brand, productName, notes, datePurchased, amountRemaining) VALUES (?, ?, ?, ?, ?)';
  var values = [req.body.brand, req.body.productName, req.body.notes, req.body.datePurchased, req.body.amountRemaining];
  connection.query(queryStr, values, (err, results) => {
    if (err) throw err;
    res.sendStatus(201);
  });
});

router.put('/products/:id', (req, res) => {
  var queryStr = 'UPDATE products SET brand = ?, productName = ?, notes = ?, datePurchased = ?, amountRemaining = ? WHERE productId = ?';
  var values = [req.body.brand, req.body.productName, req.body.notes, req.body.datePurchased, req.body.amountRemaining, req.params.id];
  connection.query(queryStr, values, (err, results) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});


router.delete('/products/:id', (req, res) => {
  var queryStr = 'DELETE FROM products WHERE productId = ?';
  var id = [req.params.id];
  connection.query(queryStr, id, (err, results) => {
    if (err) throw err;
    res.sendStatus(202);
  });
});


module.exports = router;