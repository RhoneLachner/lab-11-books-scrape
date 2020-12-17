const parse = require('./parser');
const request = require('./requests');
const store = require('./store');

request()
  .then(document => parse(document))
  .then(books => store(books))
  .then(books => console.log(books.length));
