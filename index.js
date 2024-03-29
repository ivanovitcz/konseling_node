const express = require('express');
const path = require('path');
const session = require('express-session');
const { flash } = require('express-flash-message');
const bodyParser = require('body-parser');
//panggil route
const siswa_route = require('./routes/siswa');
const ortu_route = require('./routes/ortu');
const guru_route= require('./routes/guru/dashboard_guru');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);
app.use(flash({ sessionKeyName: 'flashMessage' }));
app.listen(3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-mate'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.locals.baseURL = "http://127.0.0.1:3000/";

app.get('/', (req, res) => {
  res.render('index');
});


app.use('/siswa', siswa_route);
app.use('/ortu', ortu_route);
app.use('/guru', guru_route);

function print (path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    console.log('%s /%s',
      layer.method.toUpperCase(),
      path.concat(split(layer.regexp)).filter(Boolean).join('/'))
  }
}

function split (thing) {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    var match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}

app._router.stack.forEach(print.bind(null, []))
