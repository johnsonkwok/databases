var dbConnection = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (reqObj, callback) {
      console.log(reqObj);
      dbConnection.query(`INSERT INTO messages(content, username, roomname) VALUES("${reqObj.message}", "${reqObj.username}", "${reqObj.roomname}")`, (err, result) => {
        if (err) {
          console.log('Error models msgs');
          callback(err);
        } else {
          console.log('result models msgs worked');
          callback(result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (reqObj, callback) {
      dbConnection.query(`INSERT INTO users(username) VALUES('${reqObj.username}')`, (err, result) => {
        if (err) {
          console.log('Error models users');
          callback(err);
        } else {
          console.log('result models users worked');
          callback(result);
        }  
      });
    }
  }
};