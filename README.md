# Bamazon
Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

## Bamazon Costumer 
- Running 'bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, prices of products for sale and the stock quantity.

- The app will then prompt users with two messages:

    **1)** The first will ask for the ID of the product that they would like to buy.
    **2)** The second message will ask how many units of the product they would like to buy.
    
- Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request.

- If not, the app will log the phrase **`Not enough is in stock at the moment`**, and prevent the order from going through. 

- The app will require npm inquirer and npm mysql.
