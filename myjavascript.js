  const form = document.querySelector('form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const checkboxInput = document.querySelector('#accurate');
  const errorElement = document.querySelector('#error');
  const confirmation = document.querySelector('#confirmation');
  const confirmationMessage = document.getElementById('confirmationMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = [];
    if (nameInput.value === '' || nameInput.value == null) {
      messages.push('Name is required');
    }

    if (emailInput.value === '' || emailInput.value == null) {
      messages.push('Email is required');
    } else if (!isValidEmail(emailInput.value)) {
      messages.push('Email is invalid');
    }

    if (!checkboxInput.checked) {
      messages.push('You must confirm that all information is accurate');
    }

    const name = document.getElementById('name').value;
    confirmationMessage.textContent = `Thank you, ${name}!`;


    if (messages.length > 0) {
      errorElement.innerText = messages.join(', ');
    }else {
      form.classList.add('hidden');
      confirmation.classList.remove('hidden');
      // form.style.display = 'none';
      // confirmationElement.style.display = 'block';
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
