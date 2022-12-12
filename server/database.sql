CREATE DATABASE mytodo


CREATE TABLE todo(todo_id SERIAL PRIMARY KEY  NOT NULL,description VARCHAR(255));


INSERT INTO todo (description) VALUES('My mother is bhagwan') , ('Suraj is my brother');