---- TASK 4: INTEGRATION

---- 1. Display a list of products and their stock quantities.

SELECT
    product.product_name,
    product.stock_quantity
FROM
    product
ORDER BY
    product.product_name;


---- 2. Allow the user to search for products by their name.

SELECT * 
FROM product
WHERE product_name LIKE '%Laptop%';

---- 3. Allow the user to place an order by selecting a customer and adding order items

-- Create a function
CREATE OR REPLACE FUNCTION create_order(
    IN customer_id_param INT,
    IN product_id_param INT,
    IN quantity_param INT,
    IN subtotal_param NUMERIC(10, 2)
) RETURNS INT AS $$
DECLARE 
    order_id_var INT;
BEGIN
    -- Create an order
    INSERT INTO orders (customer_id, order_date) VALUES (customer_id_param, CURRENT_DATE)
    RETURNING order_id INTO order_id_var;

    -- Add order item
    INSERT INTO order_item (order_id, product_id, quantity, subtotal)
    VALUES (order_id_var, product_id_param, quantity_param, subtotal_param);

    -- Update stock quantity
    UPDATE product
    SET stock_quantity = stock_quantity - quantity_param WHERE product_id = product_id_param;

    RETURN order_id_var;
END;
$$ LANGUAGE plpgsql;


SELECT create_order(1, 2, 1, 2000);