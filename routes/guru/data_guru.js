const express = require('express');
const router = express.Router();
const connect  = require('../../db');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/assets/images/guru/');
  },
  filename: (req, file, cb) => {
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'guru-' + Date.now() + '.' + filetype);
  }
});
const upload = multer({storage: storage});
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

router.get('/', (req, res) => {
  res.render('guru/data_guru');
});

router.get('/input', (req, res) => {
  res.render('guru/input_guru');
});

router.post('/input', upload.single('image'), (req, res) => {
  let foto = req.file.filename;
  let jabatan = "1";
  let username = req.body.username;
  let password = bcrypt.hashSync(req.body.password, salt);
  let nip = req.body.nip;
  let nama = req.body.nama;
  let jk = req.body.jk;
  let agama = req.body.agama;
  let notelp = req.body.notelp;
  let alamat = req.body.alamat;
  let status = req.body.status;

  let errors = false;

  if(!errors) {
    let form_data = {
      id: null,
      username: username,
      password: password,
      status: "0"
    };

    connect.query('INSERT INTO users SET ?', form_data, (err, result) => {
      if(!err) {
        let user_id = result.insertId;
        let form_data = {
          nip: nip,
          user_id: user_id,
          nama: nama,
          alamat: alamat,
          jabatan_id: jabatan,
          jk: jk,
          agama: agama,
          notelp: notelp,
          foto: foto,
          status: status
        };
        connect.query('INSERT INTO guru SET ?', form_data, (err, result) => {
          if(!err) {
            res.send('success');
          } else {
            res.send(err);
          }
        });
      } else {
        res.send(err);
      }
    });
  }

});


module.exports = router;