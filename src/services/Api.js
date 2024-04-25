import axios from "axios";

export const fetchContacts = async () => {
  const url = "https://662264a327fcd16fa6c9ac75.mockapi.io/contacts";
  const response = await axios.get(url);
  return response.data;
};

export const addContact = async (user) => {
  const url = `https://662264a327fcd16fa6c9ac75.mockapi.io/contacts/`;
  const options = {
    createdAt: user.createdAt,
    name: user.name,
    number: user.number,
    id: user.id,
  };
  const response = await axios.post(url, options);
  return response;
};

export const deleteContact = async (id) => {
  const url = `https://662264a327fcd16fa6c9ac75.mockapi.io/contacts/${id}`;
  const response = await axios.delete(url);
  console.log(response);
  return response;
};
