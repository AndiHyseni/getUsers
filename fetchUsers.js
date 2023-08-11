const axios = require("axios");

const apiUrl = "https://reqres.in/api/users";
const perPage = 6;

async function fetchUsers(page) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

async function main() {
  const page1Users = await fetchUsers(1);
  const page2Users = await fetchUsers(2);

  const allUsers = [...page1Users, ...page2Users];

  allUsers.forEach((user) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    console.log(fullName);
  });
}

main();
