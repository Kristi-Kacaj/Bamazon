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






