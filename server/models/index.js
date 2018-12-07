var dbConnection = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      dbConnection.query(`SELECT * from messages`, (err, result) => {
        callback(err, result);
      });
    }, // a function which produces all the messages
    post: function (reqObj, callback) {
      // dbConnection.query(`INSERT INTO messages(content, username, roomname) VALUES("${reqObj.message}", "${reqObj.username}", "${reqObj.roomname}")`, (err, result) => {
      //   callback(err, result);
      // });
      var qArgs = [reqObj.message, reqObj.username, reqObj.roomname];
      dbConnection.query(`INSERT INTO messages(content, username, roomname) VALUES(?, ?, ?)`, qArgs, (err, result) => {
        callback(err, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      dbConnection.query(`SELECT * from users`, (err, result) => {
        callback(err, result);
      });
    },
    post: function (reqObj, callback) {
      // dbConnection.query(`INSERT INTO users(username) VALUES('${reqObj.username}')`, (err, result) => {
      //   callback(err, result);
      // });
      var qArg = [reqObj.username];
      dbConnection.query(`INSERT INTO users(username) VALUES( ? )`, qArg, (err, result) => {
        callback(err, result);
      });
    }
  }
};