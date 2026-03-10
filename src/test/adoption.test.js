import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing Adoption Router', () => {

  // ===========================
  // GET ALL ADOPTIONS
  // ===========================
  it('GET /api/adoptions - Debe obtener todas las adopciones', async () => {

    const response = await requester.get('/api/adoptions');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('status');

  });

  // ===========================
  // CREATE ADOPTION (ERROR)
  // ===========================
  it('POST /api/adoptions/:uid/:pid - Debe fallar con IDs inválidos', async () => {

    const response = await requester.post('/api/adoptions/invalidUser/invalidPet');

    expect(response.status).to.not.equal(200);

  });

  // ===========================
  // GET ADOPTION BY ID (ERROR)
  // ===========================
  it('GET /api/adoptions/:aid - Debe fallar con ID inexistente', async () => {

    const response = await requester.get('/api/adoptions/64f000000000000000000000');

    expect(response.status).to.not.equal(200);

  });

});