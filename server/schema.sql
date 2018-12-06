CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  content TEXT NOT NULL,
  user_id INTEGER,
  room_id INTEGER,
  createdAt TEXT NOT NULL,
  -- FOREIGN KEY user_id REFERENCES users id,
  -- FOREIGN KEY room_id REFERENCES rooms id
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username TEXT NOT NULL
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  roomname TEXT NOT NULL
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/




