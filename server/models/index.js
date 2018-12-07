var dbConnection = require('../db');

module.exports = {
  messages: {
    get: function (reqObj, callback) {
      dbConnection.query(`SELECT * from messages`, (err, result) => {
        // console.log('RESULT:   ', result);
        if (err) {
          console.log('GET Error models msgs');
          return callback(err);
        } else {
          console.log('GET result models msgs worked');
          
          return callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (reqObj, callback) {
      dbConnection.query(`INSERT INTO messages(content, username, roomname) VALUES("${reqObj.message}", "${reqObj.username}", "${reqObj.roomname}")`, (err, result) => {
        if (err) {
          console.log('POST Error models msgs');
          return callback(err);
        } else {
          console.log('POST result models msgs worked');
          return callback(result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      dbConnection.query(`SELECT * from users`, (err, result) => {
        if (err) {
          console.log('GET Error models users');
          return callback(err);
        } else {
          console.log('GET result models users worked');
          return callback(result);
        }  
      });
    },
    post: function (reqObj, callback) {
      dbConnection.query(`INSERT INTO users(username) VALUES('${reqObj.username}')`, (err, result) => {
        if (err) {
          console.log('POST Error models users');
          return callback(err);
        } else {
          console.log('POST result models users worked');
          return callback(result);
        }  
      });
    }
  }
};