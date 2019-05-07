CREATE DATABASE IF NOT EXISTS vanity;

USE vanity;

CREATE TABLE products (
  productId int NOT NULL AUTO_INCREMENT,
  brand VARCHAR(100) NOT NULL,
  productName VARCHAR(150) NOT NULL,
  notes VARCHAR(1000),
  datePurchased DATETIME,
  amountRemaining int NOT NULL,
  PRIMARY KEY (productId)
);