//Required NPM packages
require('dotenv').config()
let mysql = require("mysql");
let inquirer = require("inquirer");


//Create connection to the sql database
let connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: process.env.MYSQL_PASS,
    database: 'bamazon_db'
});

//Create connection to the Bamazon database
connection.connect(function(err) {
    if (err) throw err;
    startApp();
});

//Create function to start app
const startApp= () => {
    connection.query("SELECT * FROM products", (err,res)=>{
        console.table(res);
        selectFunc();
    })
}

//Function that uses inquirer npm to get user answer for id and stock quantity
const selectFunc= () => {
   inquirer
    .prompt([{
        name: "itemID",
        type: "input",
        message: "What is the item ID of the product you would like to buy?"
   }, {
       name: "Quantity",
       type: "input",
       message: "How many would you like to buy?"
   }]).then(function(answer) {
    connection.query("SELECT * FROM products WHERE products.item_id = ?", [answer.itemID], function(err, res) {
       
       if(err)throw err
        if (res[0].item_id == answer.itemID && res[0].stock_quantity >= answer.Quantity) {
            var TotalPrice = res[0].price * answer.Quantity;
            console.log("Your purchase was successful.");
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: res[0].stock_quantity - answer.Quantity
            }, {
                item_id: res[0].item_id
            }], function(err, results) {
                if(err)throw err
                console.log("You just spent: $" + TotalPrice);
                connection.end()
                process.exit(0)
            });

        } else if (res[0].item_id == answer.itemID && res[0].stock_quantity < answer.Quantity) {
            console.log("Not enough is in stock at the moment.");
            startApp();
        }

    });

});
};