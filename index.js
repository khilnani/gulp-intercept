var es = require('event-stream');

module.exports = function( fn ) { 
  var intercept = function(file, callback) {

    file = fn(file);

    callback(null, file);
  };  

  return es.map( intercept );
};
