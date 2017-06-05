var promise = reuire('bluebird');
var pgp = require('pg-promise')({
	promiseLib: promise
});

var db = pgp({database: 'music_database'});


var name = "album 111";
var query = `INSERT INTO album VALUES (default, '${name}')`;
console.log(query);
db.result(query)
  .then(function (result) {
    console.log(result);
  });

