const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected'))
  .catch(err => console.error(err));

const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Student = mongoose.model('Student', studentSchema);

const run = async () => {
  const student = new Student({ name: "Omar" });
  await student.save();
  console.log(student);
};

run();