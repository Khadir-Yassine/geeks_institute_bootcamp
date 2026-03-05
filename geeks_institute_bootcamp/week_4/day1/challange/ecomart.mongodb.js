use("ecoMartDB")

// Task 1:
db.products.insertMany([
  { name: "Solar Power Bank", category: "Electronics", price: 45, stock: 100 },
  { name: "Bamboo Toothbrush", category: "Home", price: 4, stock: 50 },
  { name: "Recycled Notebook", category: "Stationery", price: 7, stock: 25 },
  { name: "LED Desk Lamp", category: "Electronics", price: 30, stock: 3 },
  { name: "Organic Cotton Tote Bag", category: "Home", price: 15, stock: 20 }
])

//Task 2:
db.products.find({
  stock: { $lt: 10 }
})

// Task 3: 
db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)

//Find most expensive product
db.products.find().sort({ price: -1 }).limit(1)