const express = require('express');
const router = express.Router();
const connect  = require('../../db');
const data_guru_route = require('./data_guru');
const data_siswa_route = require('./data_siswa');
const data_user_siswa_route = require('./data_user_siswa');
const data_user_guru_route = require('./data_user_guru');
const konseling = require('./konseling');


router.get('/', (req, res) => {
  res.render('guru/dashboard_guru');
});

router.use('/data-guru', data_guru_route);
router.use('/data-siswa', data_siswa_route);
router.use('/data-user-siswa', data_user_siswa_route);
router.use('/data-user-guru', data_user_guru_route);
router.use('/konseling', konseling);

module.exports = router;