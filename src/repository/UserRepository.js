export default class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAll = () => {
        return this.dao.getAll();
    }

    getUserById = (id) => {
        return this.dao.getUserById(id);
    }

    getByEmail = (email) => {
        return this.dao.getByEmail(email);
    }

    createUser = (user) => {
        return this.dao.save(user);
    }

    update = (id, data) => {
        return this.dao.update(id, data);
    }

    delete = (id) => {
        return this.dao.delete(id);
    }
}
