import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    default: 'user'
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pets'
    }
  ]
});

const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
