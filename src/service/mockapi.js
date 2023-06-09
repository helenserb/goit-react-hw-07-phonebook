import axios from 'axios';

axios.defaults.baseURL = 'https://644ed09b1b4567f4d5909f9f.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact({name, number}) {
    const { data } = await axios.post('/contacts', { name, number });
    return data;
};

export async function deleteContact(contactId) {
    const { data } = axios.delete(`/contacts/${contactId}`);
    return data;
};