const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};


var randomDirection = function(directions) {
  var directions = ['up', 'down', 'right', 'left'];
  var randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    res.end(randomDirection());
  } else {
    res.end();
  }
  next(); // invoke next() at the end of a request to help with testing!
};
