use("devBlogDB")
db.users.insertOne({
  username: "Yasmine",
  bio: "Full-stack developer",
  socialLinks: {
    github: "github.com/devyasmine",
    twitter: "@devyasmine"
  }
})
db.users.find()


db.posts.insertOne({
  title: "DATABASE DESIGN IN MONGODB",
  body: "In this article, we will explore the principles of database design in MongoDB, including schema design, data modeling, and best practices for performance and scalability.",
  authorId: ObjectId("69a961553ea0f7ecfd3f62c6"),
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      user: "CodeMaster",
      text: "Great article! Very clear.",
      date: new Date()
    }
  ]
})
db.posts.find()