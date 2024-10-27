function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();
  
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    saveToLocalStorage(name, email, password);
  
    alert('Form submitted successfully and data saved to Local Storage!');
    return true;
  }
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function saveToLocalStorage(name, email, password) {
    const formData = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  