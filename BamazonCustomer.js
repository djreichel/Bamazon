// Challenge #1: Customer View (Minimum Requirement)

// Create a MySQL Database called bamazon. - DONE
// Then create a Table inside of that database called products. - DONE
// The products table should have each of the following columns: - DONE
    // item_id (unique id for each product)
    // product_name (Name of product)
    // department_name
    // price (cost to customer)
    // stock_quantity (how much of the product is available in stores)
// Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table). - DONE

// Then create a Node application called bamazonCustomer.js. - DONE

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Godz1ll@",
  database: "bamazonDB"
});

// var cost = 0;
// var total = 0;
// var totalcount = 0;

// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.
function options(){

    connection.query('SELECT * FROM products', function(err, results){

        var table = new Table({ head: ["ID", "PRODUCTS", "DEPARTMENT", "PRICE", "QUANTITY"], 
        });

        if (err) throw err;
            console.log("\nWhat would you like to buy?");

        for (var i = 0; i < results.length; i++) {
            //console.log("ID: " + results[i].item_id + " PRODUCT NAME: " + results[i].product_name + " DEPARTMENT: " + results[i].department_name + " PRICE: $" + results[i].price + " QUANTITY AVAILABLE: " + results[i].stock_quantity); 
        
        table.push(
            [results[i].item_id, results[i].product_name, results[i].department_name, "$" + results[i].price.toFixed(2), results[i].stock_quantity]
        );
        }
        console.log(table.toString());
        // The app should then prompt users with two messages.
        // The first should ask them the ID of the product they would like to buy.
            inquirer.prompt([{
                type: "input",
                name: "item_id",
                message: "\nWhat is the ID of the product you would like to buy?"

            }]).then(function(answer){
                var item_id = parseInt(answer.item_id)

                for (var i = 0; i < results.length; i++) {
                    if(results[i].item_id == answer.item_id){
                        var result = results[i]; 
                        console.log("\nWe have " + result.stock_quantity + " " + result.product_name + " in stock for $" + result.price + " per Item");

                // The second message should ask how many units of the product they would like to buy.
                inquirer.prompt([{
                    type: "input",
                    name: "itemQuantity",
                    message: "\nHow many " + result.product_name + " would you like to buy?"

                // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
                }]).then(function(answer){
                    var quantity = parseInt(answer.itemQuantity);
                    
                    // * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
                    if(quantity > result.stock_quantity){
                        console.log("\nSorry we do not have enough available to fullfil your order. Please choose a lower quantity or select another item.");

                    inquirer.prompt([{
                        type: "confirm",
                        name: "shop",
                        message: "\nIs there anything else we can help you with?"

                        // However, if your store _does_ have enough of the product, you should fulfill the customer's order.
                    }]).then(function(answer){
                        if(answer.shop){
                            options();
                        }else{
                            console.log("\nThank you for your purchase. We hope you love your products.")
                                connection.end();
                        }
                    })

                    } else {
                        console.log("\nThank you. Here are your order details:");
                        // * Once the update goes through, show the customer the total cost of their purchase.
                        // * This means updating the SQL database to reflect the remaining quantity.
                        connection.query("UPDATE Products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantity, item_id], function(err, results){
                    if (err) throw err;
                    });

                        var cost = result.price;
                        var totalCost = cost * quantity;
                        var totalCostRound = Math.round(totalCost*100)/100;
                        var tax = ((.80 / 10000) * 1000) * totalCost;
                        var taxRound = Math.round(tax*100)/100;
                        var total = totalCostRound + taxRound;
              
                        console.log("QUANTITY ORDERED: " + quantity + " " +result.product_name + '  at ' + "$" + cost.toFixed(2) + " each");
                        console.log("PRICE:  $" + totalCostRound.toFixed(2));
                        console.log("TAX @ 0.08%: $" + taxRound.toFixed(2));
                        console.log("YOUR TOTAL BALANCE DUE IS:  $" + total.toFixed(2));

                    inquirer.prompt([{
                        type: "confirm",
                        name: "shop",
                        message: "\nIs there anything else you would like to purchase?"

                    }]).then(function(answer){
                        if(answer.shop){
                            options();
                    } else {
                        console.log("\nThank you for your business. Have a nice day.\n")
                        connection.end();
                    }
                  })
                }
              })
            }
          }
        })      
  });
}
options();
