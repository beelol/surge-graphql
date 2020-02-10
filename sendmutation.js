var fetch = require('node-fetch')

sendMutation = function(url, queryString, options) {
  var options = typeof options !== 'undefined' ?  options : {};

  var defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: {

    }
  };

  var sendOptions = {
    ...defaultOptions, ...options,
    method: "POST", 
    body: JSON.stringify({
      ...options.body,
      query: queryString
      //   "operationName": "...",
      //   "variables": { "myVariable": "someValue", ... }
    })
  };

  return fetch(`${url}`, sendOptions);
}

module.exports = sendMutation;