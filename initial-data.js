const crypto = require('crypto');
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async keystone => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeQuery(
    `query {
      _allUsersMeta {
        count
      }
    }`
  );

  // Create new user if there's any user
  if (count === 0) {
    const password = 'admin';
    const email = 'admin@gmail.com';

    await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
        createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
          id
        }
      }`,
      {
        variables: {
          password,
          email,
        },
      }
    );

    console.log(`
      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
    `);
  } 
};
