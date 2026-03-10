export default class GenericRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAll() {
        return this.dao.get();
    }

    getBy(params) {
        return this.dao.getBy(params);
    }

    create(doc) {
        return this.dao.create(doc);
    }

    update(id, doc) {
        return this.dao.update(id, doc);
    }

    delete(id) {
        return this.dao.delete(id);
    }
}