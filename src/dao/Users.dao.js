import userModel from "./models/User.js";

export default class Users {

  getAll = () => {
    return userModel.find();
  }

  getUserById = (id) => {
    return userModel.findById(id);
  }

  getByEmail = (email) => {
    return userModel.findOne({ email });
  }

  save = (user) => {
    return userModel.create(user);
  }

  insertMany = (users) => {
    return userModel.insertMany(users);
  }

  update = (id, data) => {
    return userModel.findByIdAndUpdate(id, { $set: data }, { new: true });
  }

  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  }
}
