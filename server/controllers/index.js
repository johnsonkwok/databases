var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const data = req.body;
      models.messages.post(data, (result) => {
        console.log('result controllers msgs worked');
        res.send(result);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      const data = req.body;
      models.users.post(data, (result) => {
        console.log('result controllers users worked');
        res.send(result);
      });
    }
  }
};

