const express = require('express');
const router = express.Router();
const connect  = require('../../db');


router.get('/', (req, res) => {
  res.render('guru/data_siswa');
});

router.get('/input', (req, res) => {
  res.render('guru/input_siswa');
});



module.exports = router;