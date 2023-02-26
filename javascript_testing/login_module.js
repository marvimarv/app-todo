
// Load the bcrypt library
const bcrypt = dcodeIO.bcrypt;

  // Define userPrototype object
  const userPrototype = {
    firstName: '',
    lastName: '',
    age: null,
    email: '',
    username: '',
    passwordHash: ''
  };

  function registerUser() {
    // Get form field values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hash the password using bcryptjs
    const saltRounds = 10;
    const passwordHash = bcrypt.hashSync(password, saltRounds);

    // Create new user object based on prototype
    const user = Object.create(userPrototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.username = username;
    user.passwordHash = passwordHash;

    // Show new user data on page
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = `
      <p><strong>First Name:</strong> ${user.firstName}</p>
      <p><strong>Last Name:</strong> ${user.lastName}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Password Hash:</strong> ${user.passwordHash}</p>
    `;
  }