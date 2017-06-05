var promise = require('bluebird');
var pgp = require('pg-promise')({
	promiseLib: promise
});

var db = pgp({database: 'music_database'});

var trck = {album_id: 2,  track_length: '00:04:58'};

var query = "INSERT INTO track VALUES (default, ${album_id}, $(track_length))";
console.log(query);
db.result(query, trck)
  .then(function (result) {
    console.log(result);
    pgp.end();
  });