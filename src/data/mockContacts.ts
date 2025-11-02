import type { Contact } from '../types/Contact';
import { BASE_URL } from '../config/environment';

export const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch(`${BASE_URL}/get/contact/`);
  const data = await response.json();
  return data;
};

export const groupContactsByDepartment = (contacts: Contact[]): { [key: string]: Contact[] } => {
  const grouped = contacts.reduce((acc, contact) => {
    if (!acc[contact.department]) {
      acc[contact.department] = [];
    }
    acc[contact.department].push(contact);
    return acc;
  }, {} as { [key: string]: Contact[] });

  Object.keys(grouped).forEach(dept => {
    grouped[dept].sort((a, b) => a.name.localeCompare(b.name));
  });

  return grouped;
};