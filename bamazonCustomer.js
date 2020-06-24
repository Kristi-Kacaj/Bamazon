//Required NPM packages
require('dotenv').config()
let mysql = require ("mysql");
const { start } = require('repl');
let inquirer = ("inquirer");

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
    connection.query("SELECT * FROM products", (err,results)=>{
        console.table(results);
        let data= "facts";
        selectFunc(data);
    })
}