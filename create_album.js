var promise = require('bluebird');
var pgp = require('pg-promise')({
	promiseLib: promise
});

var db = pgp({database: 'music_database'});

var albm = {name: 'album 211',  song: 'song 503', track: 223};

var query = "INSERT INTO album VALUES (default, ${name}, ${song}, ${track})";
console.log(query);
db.result(query, albm)
  .then(function (result) {
    console.log(result);
    pgp.end();
  });

