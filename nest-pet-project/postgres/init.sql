-- Switch to the target database (assuming "mydatabase" exists)
\c mydatabase;

-- Drop tables if they already exist (in case you are reinitializing the database)
DROP TABLE IF EXISTS order_products;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS addresses;

-- ========================= One-to-One Relationship =========================
-- Each customer has one address — One-to-One
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL
);

CREATE TABLE addresses (
    address_id SERIAL PRIMARY KEY,
    customer_id INT UNIQUE NOT NULL, -- Ensures one-to-one (one customer, one address)
    street VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    postal_code VARCHAR(15) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

-- ========================= One-to-Many Relationship =========================
-- Each customer can place many orders — One-to-Many
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT NOW(),
    status VARCHAR(20) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

-- ========================= Many-to-One Relationship =========================
-- Each product belongs to one category — Many-to-One
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);

-- ========================= Many-to-Many Relationship =========================
-- Each order can have many products, and each product can appear in many orders — Many-to-Many
CREATE TABLE order_products (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- ========================= Insert Sample Data =========================
-- Insert sample categories
INSERT INTO categories (name, description) VALUES
('Electronics', 'Devices, gadgets, and accessories'),
('Clothing', 'Men, Women, and Children clothing'),
('Groceries', 'Daily household grocery items');

-- Insert sample products
INSERT INTO products (category_id, name, description, price, stock) VALUES
(1, 'Smartphone', 'Latest model smartphone', 699.99, 50),
(1, 'Laptop', 'High-performance laptop', 999.99, 30),
(2, 'T-Shirt', 'Comfortable cotton T-Shirt', 19.99, 200),
(3, 'Milk', '1 gallon of whole milk', 3.49, 100);

-- Insert sample customers
INSERT INTO customers (first_name, last_name, email, phone) VALUES
('John', 'Doe', 'john.doe@example.com', '555-1234'),
('Jane', 'Smith', 'jane.smith@example.com', '555-5678');

-- Insert sample addresses (one-to-one with customers)
INSERT INTO addresses (customer_id, street, city, state, postal_code) VALUES
(1, '123 Main St', 'Springfield', 'IL', '62701'),
(2, '456 Elm St', 'Greenville', 'TX', '75401');

-- Insert sample orders (one-to-many between customers and orders)
INSERT INTO orders (customer_id, order_date, status, total) VALUES
(1, NOW(), 'Processing', 719.98),
(2, NOW(), 'Completed', 1023.49);

-- Insert order-product relationships (many-to-many)
INSERT INTO order_products (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 699.99), -- Smartphone in Order 1
(1, 3, 1, 19.99),  -- T-Shirt in Order 1
(2, 2, 1, 999.99), -- Laptop in Order 2
(2, 4, 2, 6.98);   -- 2 units of Milk in Order 2
