import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (count = 5) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Успішно згенеровано ${count} нових контактів`);
    return updatedContacts;
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts();
