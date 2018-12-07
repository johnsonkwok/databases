var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      // console.log('request:  ', req.body);
      const data = req.body;
      models.messages.get( (err, result) => {
        if (err) {
          throw ('GET messages ERROR');
        }
        res.json(result);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body.message);
      // const data = [req.body.message, req.body.username, req.body.roomname];
      const data = req.body;
      models.messages.post(data, (err, result) => {
        if (err) {
          throw ('POST messages ERROR');
        }
        res.sendStatus(201);
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
        res.json(result);
      });
    },
    post: function (req, res) {
      // const data = [req.body.username];
      const data = req.body;
      models.users.post(data, (err, result) => {
        if (err) {
          throw ('GET messages ERROR');
        }
        res.sendStatus(201);
      });
    }
  }
};

