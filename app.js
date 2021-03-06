'use strict';
const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
require('dotenv').config({ silent: true }); //  optional

const nlu = new NaturalLanguageUnderstandingV1({
  // note: if unspecified here, credentials are pulled from environment properties:
  // NATURAL_LANGUAGE_UNDERSTANDING_USERNAME &  NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD
   username: 'ddc3ed94-6032-417b-ac2e-ab7faa8ee11f',
   password: '4ct36lkd1p4Z',
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2016_01_23
});

const filename = 'energy-policy.html';
fs.readFile(filename, 'utf-8', function(file_error, file_data) {
  if (file_error) {
    console.log(file_error);
  } else {
    const options = {
      html: file_data,
      features: {
        concepts: {},
        keywords: {}
      }
    };
    nlu.analyze(options, function(err, res) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
    });
  }
});
