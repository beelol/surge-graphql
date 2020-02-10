var fetch = require('node-fetch')

sendQuery = function(url, queryString, options) {
  var options = typeof options !== 'undefined' ?  options : {};
  
  var defaultOptions = {}
  var sendOptions = {...defaultOptions, ...options}

  return fetch(`${url}?query=${queryString}`, sendOptions);
}

module.exports = sendQuery;