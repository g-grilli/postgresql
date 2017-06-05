var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'test'});

db.query('SELECT * FROM restaurant2')
  .then(function (results) {
    results.forEach(function (row) {
      console.log(row.id, row.name, row.address, row.category);
    });
    
    return db.one("SELECT * FROM restaurant2 WHERE name='RockFish'");
  })
  .then(function (row) {
    console.log(row);
    
    return db.result("INSERT INTO restaurant VALUES (default, 'Narf')");
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    pgp.end();
  });




