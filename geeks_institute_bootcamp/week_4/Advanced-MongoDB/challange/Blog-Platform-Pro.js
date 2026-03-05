const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/blogPlatformProDB')
  .then(() => console.log('Connected'))
  .catch((err) => console.error('Connection failed:', err.message));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [
    {
      text: String,
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      createdAt: { type: Date, default: Date.now }
    }
  ]
});
const Post = mongoose.model('Post', postSchema);

const seedData = async () => {
  const lina = await User.create({ username: 'LinaDev', email: 'lina@test.com' });
  const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

  await Post.create({
    title: 'MongoDB Relationships',
    content: 'Today we learned about population...',
    author: lina._id,
    comments: [{ text: 'Great post!', author: adam._id }]
  });
};

const getFullBlogFeed = async () => {
  const feed = await Post.find()
    .populate('author', 'username')
    .populate('comments.author', 'username');

  console.log(JSON.stringify(feed, null, 2));
};

const run = async () => {
  try {
    await User.deleteMany({ email: { $in: ['lina@test.com', 'adam@test.com'] } });
    await Post.deleteMany({ title: 'MongoDB Relationships' });

    await seedData();
    await getFullBlogFeed();
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await mongoose.connection.close();
    console.log('Closed');
  }
};

run();