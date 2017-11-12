const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const utils = require('./server/utils')
const api = require('./server/countries');
const app = express();
const _ = require('lodash');

var countries;
var countriesName;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/rest/countries', (req, res) => {
  if (!countries || !countriesName) {
    api.getCountries((data) => {
      countries = data;
      countriesName = utils.getCountriesName(data);
      res.header(200).send(countriesName)
    })
  } else {
    res.header(200).send(countriesName)
  }
});

app.get('/rest/country/:id', (req, res) => {
  var countryName = req.params.id;
  var country;

  if (!countries) {
    api.getCountries((data) => {
      countries = data;
      country = _.find(countries, function (o) {
        return o.name === countryName;
      });
      res.header(200).send(country);
    })
  } else {
    country = _.find(countries, function (o) {
      return o.name === countryName;
    });
    res.header(200).send(country);
  }
});

app.get('/rest/test', (req, res) => {
  if (!countries) {
    api.getCountries((data) => {
      countries = data;
      res.header(200).send(countries[0])
    })
  } else {
    res.header(200).send(countries[0])
  }

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';

app.listen(port, () => console.log(`Server running on port:${port}`));
