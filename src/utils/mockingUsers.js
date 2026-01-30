import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const generateMockUser = async () => {
  const hashedPassword = await bcrypt.hash('coder123', 10);

  return {
    _id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: []
  };
};

export const generateMockUsers = async (quantity = 50) => {
  const users = [];

  for (let i = 0; i < quantity; i++) {
    users.push(await generateMockUser());
  }

  return users;
};
