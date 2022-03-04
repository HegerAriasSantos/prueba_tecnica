const connection = require('../db');

module.exports = function excecuteQuery(query) {
  let errorResult = false;
  let result = connection.query(query, function (error, results, fields) {
    if (error) {
      return { result: null, error: errorResult }
    };
    if (results) {
      return { result: result, error: null };
    }
  });
  return { result: result, error: errorResult }
}


