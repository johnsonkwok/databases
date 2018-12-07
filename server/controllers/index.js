var models = require('../models');
var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type, accept',
  'Access-Control-Max-Age': 10,
  'Content-Type': 'application/json'
};

module.exports = {

  messages: {
    get: function (req, res) {
      const data = req.body;
      models.messages.get( (err, result) => {
        if (err) {
          throw ('GET messages ERROR');
        }
        // res.json(result);
        res.writeHead(200, headers);
        res.end(JSON.stringify(result));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body.message);
      const data = req.body;
      models.messages.post(data, (err, result) => {
        if (err) {
          throw ('POST messages ERROR');
        }
        res.writeHead(201, headers);
        res.end('OK');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( (err, result) => {
        if (err) {
          throw ('GET users ERROR');
        }
        // res.json(result);
        res.writeHead(200, headers);
        res.end(JSON.stringify(result));
      });
    },
    post: function (req, res) {
      const data = req.body;
      models.users.post(data, (err, result) => {
        if (err) {
          throw ('GET messages ERROR');
        }
        res.writeHead(201, headers);
        res.end('OK');
      });
    }
  },

  options: function (req, res) {   
    res.writeHead(200, headers);
    res.end('OK');
  }
};

