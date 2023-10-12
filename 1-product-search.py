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


import mockups
# Search for a product by name: 'Smartphone'
product_found = search_product(mockups.products, 'Smartphone')

if product_found is None:
    print("Product not found")
else:
    print(f"Product found: {product_found}")
