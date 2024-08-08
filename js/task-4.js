const form = document.querySelector('.login-form');

const onFormSubmit = e => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);
  e.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
