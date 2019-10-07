DROP DATABASE IF EXISTS mockta;
CREATE DATABASE mockta;
USE mockta;

CREATE TABLE products(
    pid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item TEXT,
    min_cost FLOAT,
    curr_bid FLOAT,
    ends_in INT,
    imgeurl TEXT
);
