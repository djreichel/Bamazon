DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
  item_id INTEGER(10) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10.4) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1001, "Wok", "Kitchen", 59.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1002, "Oven", "Kitchen", 659.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1003, "Spatula", "Kitchen", 19.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1004, "Wine Glasses", "Kitchen", 29.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1005, "Plates", "Kitchen", 29.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1006, "Hose", "Garden", 39.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1007, "Shovel", "Garden", 39.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1008, "Rake", "Garden", 19.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1009, "Flowers", "Garden", 25.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1010, "Vegetables", "Garden", 35.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1011, "Drill", "Workshop", 159.99, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1012, "Saw", "Workshop", 249.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1013, "Screwdriver", "Workshop", 19.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1014, "Hammer", "Workshop", 29.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1015, "Nails", "Workshop", 29.99, 100);