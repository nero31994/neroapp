// Handle authentication form submission
document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('authMessage');

    // Simulate authentication
    if (username === 'admin' && password === 'password123') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login successful!';
        setTimeout(() => {
            document.getElementById('authContainer').style.display = 'none';
        }, 1000);
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Invalid username or password.';
    }
});
