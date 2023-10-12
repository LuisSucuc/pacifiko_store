'''Write a function or algorithm to search for a product by name in a list of products. Each product
is represented by a dictionary with 'product_id', 'product_name', and 'price'''


def search_product(products, name):
    '''
    This function searches for a product by name in a list of products.

    Args:
        products (list): A list of products.
        name (str): The name of the product to search for.

    Returns:
        dict: The product that was found, or None if no product was found.
    '''

    for product in products:
        if product['product_name'] == name:
            return product
    return None


# Use example

products = [
    {'product_id': 1, 'product_name': 'Smartphone', 'price': 600},
    {'product_id': 2, 'product_name': 'Laptop', 'price': 1000},
    {'product_id': 3, 'product_name': 'Tablet', 'price': 350},
    {'product_id': 4, 'product_name': 'Smartwatch', 'price': 200},
    {'product_id': 5, 'product_name': 'Headphones', 'price': 80},
    {'product_id': 6, 'product_name': 'Gaming Console', 'price': 500},
    {'product_id': 7, 'product_name': 'Wireless Router', 'price': 70},
    {'product_id': 8, 'product_name': 'Virtual Reality Headset', 'price': 300},
    {'product_id': 9, 'product_name': 'Smart Speaker', 'price': 150},
    {'product_id': 10, 'product_name': 'Digital Camera', 'price': 450}
]


product_found = search_product(products, 'Smartphone')
if product_found is None:
    print("Product not found")
else:
    print(f"Product found: {product_found}")
