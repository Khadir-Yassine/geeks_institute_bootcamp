use("schoolDB")

// Exercise 1 — Insert students
db.students.insertMany([
  { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
  { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Marcus", age: 24, city: "New York", major: "AI" }
])

// Show all students
db.students.find()

// Exercise 2: Data Intelligence

// Task A — Young Pros (18 to 25)
db.students.find({
  age: { $gte: 18, $lte: 25 }
})

// Task B — Update Yassine's city
db.students.updateOne(
  { name: "Yassine" },
  { $set: { city: "Casablanca" } }
)

// Task C — Delete Sophia
db.students.deleteOne({
  name: "Sophia"
})

// Show final result
db.students.find()