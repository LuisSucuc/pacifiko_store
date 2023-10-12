'''
Write a function or algorithm to find the top N best-selling products based on the quantity sold.
Given a list of orders (each order containing 'product_id' and 'quantity'), return the list of top N
products.
'''

import mockups


def top_selling_products(products, orders):
    '''
    This function finds the top N best-selling products based on the quantity sold.

    Args:
        products (list): A list of products.
        orders (list): A list of orders.

    Returns:
        list: A list of the top 10 best-selling products.
    '''
    # Create a dictionary to store the total quantity sold for each product
    quantity_sold = {}
    for order in orders:
        # Get the product ID from the order
        product_id = order.get('product_id')
        # Get the quantity from the order
        quantity = order.get('quantity')
        # Add the quantity to the total quantity sold for the product
        quantity_sold[product_id] = quantity_sold.get(product_id, 0) + quantity

    # Sort the products by the total quantity sold
    sorted_products = sorted(products, key=lambda product: quantity_sold.get(
        product.get('product_id')), reverse=True)

    # Add the total quantity sold to each product with map()
    return list(map(lambda product: {**product, 'total_quantity_sold': quantity_sold.get(product.get('product_id'))}, sorted_products[:10]))


# Use example
top_products = top_selling_products(mockups.products, mockups.orders)
for index in range(len(top_products)):
    print(
        f"{index + 1}. {top_products[index].get('product_name')} (Quantity sold: {top_products[index].get('total_quantity_sold')})")
