import petModel from "./models/Pet.js";

export default class Pets {

  getAll = () => {
    return petModel.find();
  }

  getById = (id) => {
    return petModel.findById(id);
  }

  save = (pet) => {
    return petModel.create(pet);
  }

  insertMany = (pets) => {
    return petModel.insertMany(pets);
  }

  update = (id, data) => {
    return petModel.findByIdAndUpdate(id, { $set: data });
  }

  delete = (id) => {
    return petModel.findByIdAndDelete(id);
  }
}
