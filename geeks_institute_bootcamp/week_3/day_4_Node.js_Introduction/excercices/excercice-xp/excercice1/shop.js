const products = require("./products");


function findProduct(productName) {

  for (let i = 0; i < products.length; i++) {

    if (products[i].name === productName) {
      console.log("Product Found:");
      console.log("Name:", products[i].name);
      console.log("Price:", products[i].price);
      console.log("Category:", products[i].category);
      console.log("-------------------");
      return;
    }

  }

  console.log("Product not found");
  console.log("-------------------");
}

findProduct("Laptop");
findProduct("Book");
findProduct("Tablet");