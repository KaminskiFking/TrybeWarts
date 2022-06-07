const emailCheck = document.getElementById('email');
const loginCheck = document.getElementById('senha');
const buttonCheck = document.getElementById('buttonLogin');

function clickLogin() {
  if (emailCheck.value === 'tryber@teste.com' && loginCheck.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonCheck.addEventListener('click', clickLogin);
