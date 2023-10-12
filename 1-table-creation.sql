--- TASK 1: TABLE CREATION

-- Eliminar la tabla "order_item" y todas sus dependencias en cascada
DROP TABLE IF EXISTS order_item CASCADE;

-- Eliminar la tabla "orders" y todas sus dependencias en cascada
DROP TABLE IF EXISTS orders CASCADE;

-- Eliminar la tabla "customer" y todas sus dependencias en cascada
DROP TABLE IF EXISTS customer CASCADE;

-- Eliminar la tabla "product" y todas sus dependencias en cascada
DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE IF NOT EXISTS public.product (
    product_id SERIAL PRIMARY KEY,
    product_name varchar(100) NOT NULL,
    price numeric(10, 2) NOT NULL CHECK (price >= 0),
    stock_quantity int4 NOT NULL CHECK (stock_quantity >= 0)
);

CREATE TABLE IF NOT EXISTS customer (
    customer_id SERIAL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(100),
    phone varchar(20)
);

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES customer(customer_id),
    order_date date NOT NULL
);

CREATE TABLE IF NOT EXISTS order_item (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id),
    product_id INT NOT NULL REFERENCES product(product_id),
    quantity INT CHECK (quantity >= 0) NOT NULL,
    subtotal NUMERIC(10, 2) CHECK (subtotal >= 0) NOT NULL
);

-- Inserts para la tabla 'product'
INSERT INTO
    product (product_name, price, stock_quantity)
VALUES
    ('Laptop HP Pavilion', 799.99, 25),
    ('Monitor Dell UltraSharp', 249.99, 30),
    ('Escritorio de Oficina', 149.99, 10),
    ('Silla Ergonómica', 99.99, 15),
    ('Teclado Mecánico', 79.99, 20),
    ('Mouse Logitech', 29.99, 40),
    ('Mesa de Computadora', 129.99, 10),
    ('Silla Gaming', 199.99, 12),
    ('Impresora HP LaserJet', 299.99, 18),
    ('Disco Duro Externo 1TB', 69.99, 50),
    ('Mesa de Oficina', 179.99, 8),
    ('Silla Ejecutiva', 129.99, 11),
    ('Laptop Lenovo ThinkPad', 899.99, 20),
    ('Monitor LG UltraWide', 349.99, 15),
    ('Silla Gamer Pro', 249.99, 9);

-- Inserts para la tabla 'customer'
INSERT INTO
    customer (first_name, last_name, email, phone)
VALUES
    ('Juan', 'Gomez', 'juan@gmail.com', '+1234567890'),
    (
        'María',
        'López',
        'maria@hotmail.com',
        '+9876543210'
    ),
    (
        'Carlos',
        'Perez',
        'carlos@gmail.com',
        '+1112223333'
    ),
    (
        'Laura',
        'Martínez',
        'laura@yahoo.com',
        '+4445556666'
    ),
    (
        'Pedro',
        'Rodríguez',
        'pedro@gmail.com',
        '+7778889999'
    ),
    (
        'Ana',
        'Hernández',
        'ana@hotmail.com',
        '+2223334444'
    ),
    (
        'Javier',
        'Torres',
        'javier@yahoo.com',
        '+5556667777'
    ),
    (
        'Elena',
        'Vargas',
        'elena@gmail.com',
        '+3334445555'
    ),
    (
        'Luis',
        'Sanchez',
        'luis@hotmail.com',
        '+6667778888'
    ),
    (
        'Carmen',
        'González',
        'carmen@yahoo.com',
        '+8889990000'
    ),
    (
        'Diego',
        'Ramírez',
        'diego@gmail.com',
        '+1231231234'
    ),
    (
        'Valeria',
        'Sosa',
        'valeria@hotmail.com',
        '+9879879876'
    ),
    (
        'Oscar',
        'Villa',
        'oscar@yahoo.com',
        '+1110002222'
    ),
    (
        'Isabel',
        'Mendoza',
        'isabel@gmail.com',
        '+4445556666'
    ),
    (
        'Luis',
        'Sucuc',
        'jluissucuc@gmail.com',
        '+2342342525'
    );

-- Inserts para la tabla 'orders'
INSERT INTO
    orders (customer_id, order_date)
VALUES
    (1, '2023-10-01'),
    (2, '2023-10-02'),
    (3, '2023-10-03'),
    (4, '2023-10-04'),
    (5, '2023-10-05'),
    (6, '2023-10-06'),
    (7, '2023-10-07'),
    (8, '2023-10-08'),
    (9, '2023-10-09'),
    (10, '2023-10-10'),
    (11, '2023-10-11'),
    (12, '2023-10-12'),
    (13, '2023-10-13'),
    (14, '2023-10-14'),
    (15, '2023-10-15');

-- Inserts para la tabla 'order_item'
-- Asignamos productos a órdenes de manera aleatoria
INSERT INTO
    order_item (order_id, product_id, quantity, subtotal)
VALUES
    (1, 1, 2, 1599.98),
    (1, 3, 1, 149.99),
    (2, 2, 2, 499.98),
    (2, 4, 4, 399.96),
    (3, 5, 3, 239.97),
    (3, 6, 2, 59.98),
    (4, 7, 1, 129.99),
    (4, 8, 2, 399.98),
    (5, 9, 1, 299.99),
    (5, 10, 3, 209.97),
    (6, 11, 2, 259.98),
    (6, 12, 1, 129.99),
    (7, 13, 1, 899.99),
    (7, 14, 2, 699.98),
    (8, 1, 2, 1599.98),
    (8, 2, 1, 249.99),
    (9, 3, 1, 149.99),
    (9, 4, 2, 199.98),
    (10, 5, 3, 239.97),
    (10, 6, 2, 59.98),
    (11, 7, 1, 129.99),
    (11, 8, 2, 399.98),
    (12, 9, 1, 299.99),
    (12, 10, 3, 209.97),
    (13, 11, 2, 259.98),
    (13, 12, 1, 129.99),
    (14, 13, 1, 899.99),
    (14, 14, 2, 699.98),
    (15, 1, 2, 1599.98),
    (15, 2, 1, 249.99);