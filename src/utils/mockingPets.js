import { faker } from '@faker-js/faker';

export const generateMockPets = (qty) => {
  const pets = [];

  for (let i = 0; i < qty; i++) {
    pets.push({
      name: faker.animal.petName(),
      specie: faker.animal.type(),
      birthDate: faker.date.past(),
      adopted: false,
      owner: null,
      image: faker.image.urlLoremFlickr({ category: 'animals' })
    });
  }

  return pets;
};
