const express = require('express');
const router = express.Router();
const connect  = require('../../db');
const data_guru_route = require('./data_guru');
const data_siswa_route = require('./data_siswa');


router.get('/', (req, res) => {
  res.render('guru/dashboard_guru');
});

router.use('/data_guru', data_guru_route);
router.use('/data_siswa', data_siswa_route);

module.exports = router;