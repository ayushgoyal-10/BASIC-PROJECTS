let form = document.getElementById('signupform');
    form .addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic Validation
    if (!firstname|| !lastname|| !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Send Data to Backend
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname,
                lastname,
                password
            }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Signup successful!');
        } else {
            alert(result.message || 'Signup failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while signing up.');
    }
});
