DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT,
  content TEXT NOT NULL,
  user_id INTEGER,
  room_id INTEGER,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (id)
);



