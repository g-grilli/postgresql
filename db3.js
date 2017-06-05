var promise = require('bluebird');
var pgp = require('pg-promise')({
	promiseLib: promise
});

var db = pgp({database: 'test'});

var name = "Big Belly Burger";
var query = `INSERT INTO restaurant VALUES (default, '${name}')`;
console.log(query);
db.result(query)
  .then(function (result) {
    console.log(result);
  });


/* What If:
var name = "Big Belly Burger'; DROP TABLE restaurant; --";

 Need to santitize inputs to prevent evil action
$1 first argument, $2 second argumnet...//

var query = "INSERT INTO restaurant VALUES (default, $1)";
db.result(query, name)
  .then(function (result) {
    console.log(result);
    pgp.end();
  });


  or
  var biz = {name: 'Lard Lad Donuts'};
  b.result(query, biz)
  .then(function (result) {
    console.log(result);
    pgp.end();
  }); 
 */
