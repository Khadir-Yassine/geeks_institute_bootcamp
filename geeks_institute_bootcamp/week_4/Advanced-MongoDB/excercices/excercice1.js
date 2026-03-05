const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);

const run = async () => {
  const admin = await User.create({ name: 'Lina', email: 'lina@dev.com' });

  await Post.create({
    title: 'Mongoose is Awesome',
    content: 'Learning populate',
    author: admin._id
  });

  const postWithData = await Post.findOne({ title: 'Mongoose is Awesome' }).populate('author');

  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`);
};

run();