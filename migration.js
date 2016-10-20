var connection = require("./connection.js");
connection.connect();


/**
 * Create new table in database.
 * property = {propertyName : type, propertyName : type,...}
 */
var createTable = function(tableName, property, cb){
  var sentence = 'CREATE TABLE' + ' ' + tableName + ' ';
  sentence = sentence + '(' + ' ';
  for(key in property){
    sentence = sentence + ' ' + key + ' ' + property[key] + ' ' + ',' + ' ';
  }
  sentence = sentence + ' ' + 'PRIMARY KEY(' + ' ' + 'id' + ')' + ')';
  connection.query(sentence, function(err, result){
    if(err) throw err;
    cb(result);
  });
}

/**
 * Delete table from database.
 */
var deleteTable = function(tableName, cb){
  connection.query('DROP TABLE ' + tableName, function(err, result){
    if(err) throw err;
    cb(result);
  });
}

module.exports.createTable = createTable;
module.exports.deleteTable = deleteTable;
module.exports.connection = connection;
