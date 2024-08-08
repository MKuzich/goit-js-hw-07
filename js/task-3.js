const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const onInputChange = e => {
  output.textContent = e.currentTarget.value.trim() || 'Anonymous';
};

input.addEventListener('input', onInputChange);
