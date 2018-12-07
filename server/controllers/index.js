var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('request:  ', req.body);
      const data = req.body;
      models.messages.get(data, (result) => {
        console.log('GET result controllers msgs worked');
        return res.send(result);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const data = req.body;
      models.messages.post(data, (result) => {
        console.log('POST result controllers msgs worked');
        return res.send(result);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('request:  ', req);
      const data = req.body;
      models.messages.get(data, (result) => {
        console.log('GET result controllers users worked');
        return res.send(result);
      });
    },
    post: function (req, res) {
      const data = req.body;
      models.users.post(data, (result) => {
        console.log('POST result controllers users worked');
        return res.send(result);
      });
    }
  }
};

