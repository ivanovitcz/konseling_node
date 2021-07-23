const express = require('express');
const router = express.Router();
const connect  = require('../../db');


router.get('/', (req, res) => {
  res.render('guru/data_user_guru');
});



module.exports = router;