const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct
  if (username === 'akshay' && password === '123') {
    alert('Login successful');
  } else {
    alert('Invalid username or password');
  }
});