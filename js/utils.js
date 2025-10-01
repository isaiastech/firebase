// Seletores
const authForm = document.getElementById('authForm');
const authFormTitle = document.getElementById('authFormTitle');
const toggleAuthToRegister = document.getElementById('toggleAuthToRegister');
const toggleRegisterToAccess = document.getElementById('toggleRegisterToAccess');

// Alternar para o formulário de cadastro
function toggleToRegister() {
  authFormTitle.innerText = 'Insira seus dados para se cadastrar';
  document.getElementById('submitAuthForm').innerText = 'Cadastrar';
  
  hideItem(toggleAuthToRegister);
  showItem(toggleRegisterToAccess);
}

// Alternar para o formulário de acesso
function toggleToAccess() {
  authFormTitle.innerText = 'Acesse sua conta para continuar';
  document.getElementById('submitAuthForm').innerText = 'Acessar';
  
  hideItem(toggleRegisterToAccess);
  showItem(toggleAuthToRegister);
}

// Funções de exibição
function hideItem(item) {
  item.style.display = 'none';
}

function showItem(item) {
  item.style.display = 'block';
}
