'''
Write a function or algorithm to calculate the total price of items in a shopping cart after applying
discounts. Each product in the cart has a 'price' and a 'discount_percentage' field.
'''
import mockups
import utils

def price_after_discount(cart):
    '''
    This function calculates the total price of items in a customer's shopping cart after applying
    discounts.

    Args:
        cart (list): A list of dictionaries representing a customer's shopping cart.

    Returns:
        float: The total price of items in the customer's shopping cart after applying discounts.
    '''

    total_price = 0
    for product in cart:
        # Calculate the total price of the product before applying the discount
        product_total = product.get('quantity') * product.get('price')
        # Calculate the total price of the product after applying the discount
        price_with_discount = product_total * (1 - (product.get('discount_percentage') / 100))
        total_price += price_with_discount
        
    return total_price

# Use example
total_after_discount = price_after_discount(mockups.cart_percentage)
# Formatted total
print(f'Total after discount: {utils.format_price(total_after_discount)}')