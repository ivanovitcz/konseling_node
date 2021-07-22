var express = require('express');
var router = express.Router();
var connect  = require('../../db');

router.get('/', (req, res) => {
  res.send('check');
});


module.exports = router;