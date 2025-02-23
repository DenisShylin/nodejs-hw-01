import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт видалено');
    } else {
      console.log('Список контактів порожній');
    }
    return contacts;
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();
