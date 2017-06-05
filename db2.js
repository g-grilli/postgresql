var promise = reuire('bluebird');
var pgp = require('pg-promise')({
	promiseLib: promise
});

var db = pgp({database: 'restaurant2'});

db.query('SELECT * FROM restaurant2')
  .then(function (results)) {
    results.forEach(function (r) {
      console.log(r.id, r.name. r.address, r.category);
    });
  })
  return db.one("SELECT * FROM restaurant2 WHERE name='RockFish'");
  });
  .then(function (r)) {
    console.log(r);

    db.result("INSERT INTO restaurant2 VALUES (default, 'Narf')");
  }); 
  .then(function (result)) {
    console.log(result);
  })

  catch(function (error) {
  	console.error(error);
  })
  .finally(function () {
  	pgp.end();
  });