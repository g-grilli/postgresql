var promise = require('bluebird');
var pgp = require('pg-promise')({
	promiseLib: promise
});

var db = pgp({database: 'music_database'});

var arts = {name: 'Spastic eybrow'};

var query = "INSERT INTO artist VALUES (default, ${name})";
console.log(query);
db.result(query, arts)
  .then(function (result) {
    console.log(result);
    pgp.end();
  });