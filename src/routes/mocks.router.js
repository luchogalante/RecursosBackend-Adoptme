import { Router } from 'express';
import { faker } from '@faker-js/faker';

import { generateMockUsers } from '../utils/mockingUsers.js';
import { generateMockPets } from '../utils/mockingPets.js';
import { usersService, petsService } from '../services/index.js';

const router = Router();

// =======================
// MOCKING PETS (GET)
// =======================
router.get('/mockingpets', (req, res) => {
  const pets = [];

  for (let i = 0; i < 100; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.animal.petName(),
      specie: faker.animal.type(),
      birthDate: faker.date.past(),
      adopted: false,
      owner: null,
      image: faker.image.urlLoremFlickr({ category: 'animals' })
    });
  }

  res.json({
    status: 'success',
    payload: pets
  });
});

// =======================
// MOCKING USERS (GET)
// =======================
router.get('/mockingusers', async (req, res) => {
  try {
    const users = await generateMockUsers(50);

    res.json({
      status: 'success',
      payload: users
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
});

// =======================
// GENERATE DATA (POST)
// =======================
router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    if (users > 0) {
      const mockUsers = await generateMockUsers(users);
      await usersService.dao.insertMany(mockUsers);
    }

    if (pets > 0) {
      const mockPets = generateMockPets(pets);
      await petsService.dao.insertMany(mockPets);
    }

    res.send({
      status: 'success',
      message: 'Datos generados correctamente',
      users,
      pets
    });
  } catch (error) {
    res.status(500).send({
      status: 'error',
      error: error.message
    });
  }
});
export default router;

