'''
Write a function or algorithm to calculate the total price of items in a customer's shopping cart.
The cart is represented as a list of dictionaries, where each dictionary contains 'product_id' and
'quantity' fields.
'''

import utils
import mockups


def calculate_total_price(products, cart):
    '''
    This function calculates the total price of items in a customer's shopping cart.

    Args:
        products (list): A list of products.
        cart (list): A list of dictionaries representing a customer's shopping cart.

    Returns:
        float: The total price of items in the customer's shopping cart.
    '''

    # Convert the list of products into a dictionary where the keys are the product IDs
    product_lookup = {product['product_id']: product for product in products}

    total_price = 0
    for item in cart:
        # Look up the product in the product lookup dictionary
        product = product_lookup.get(item['product_id'])
        if product:
            total_price += product['price'] * item.get('quantity')
    return total_price


# Use example


# Calculate the total price of items in the customer's shopping cart
total_cart_price = calculate_total_price(mockups.products, mockups.cart)
# Display the total cart price with the format_price function
print(f"Total cart price: {utils.format_price(total_cart_price)}")
