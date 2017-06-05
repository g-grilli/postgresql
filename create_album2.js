var prompt = require('prompt');

  prompt.start();

  prompt.get(['album', 'song', 'track'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
    console.log('track ' +result.track);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

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


var prompt = require('prompt');

  prompt.start();

  prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
