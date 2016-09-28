const express = require('express');
const app = express();
const request = require('request');

const urlPrefix = 'https://app-staging.sysdigcloud.com';

// setup cors for our site on development mode
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

app.use(express.static('dist'));

app.get('/api/events', function(req, res, next) {
  req.pipe(request(urlPrefix + '/api/events')).pipe(res);
});

// redirect for refreshes (isometricity)
app.get('/list-events', function(req, res, next) {
  res.redirect('/');
})

app.listen(process.env.PORT || 5050, function() {
  console.log('API proxy listening on port ' + (process.env.PORT || 5050));
});
