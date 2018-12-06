CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER IDENTITY(1,1) PRIMARY KEY,
  content TEXT NOT NULL,
  username INTEGER,
  roomname INTEGER,
  createdAt TEXT NOT NULL,
  FOREIGN KEY(username) REFERENCES users(id),
  FOREIGN KEY(roomname) REFERENCES rooms(id)
);

CREATE TABLE users (
  id INTEGER IDENTITY(1,1) PRIMARY KEY,
  username TEXT NOT NULL,
);

CREATE TABLE rooms (
  id INTEGER IDENTITY(1,1) PRIMARY KEY,
  roomname TEXT NOT NULL,
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

