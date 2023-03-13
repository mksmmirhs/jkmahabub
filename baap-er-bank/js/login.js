document.getElementById('btn-submit').addEventListener('click', function () {
  const emailId = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (emailId === 'mksmmi40@gmail.com' && password === 'merajnai1') {
    window.location.href = 'bank.html';
  } else {
    alert('invalid user');
  }
});
