var fetch = require('node-fetch')

sendQuery = function(url, queryString, options) {
  var defaultOptions = {}
  var sendOptions = {...defaultOptions, ...options}

  return fetch(`${url}?query=${queryString}`, sendOptions);
}

module.exports = sendQuery;