function toggleToRegister() {
  document.getElementById("authFormTitle").innerText = "Crie sua conta para continuar";
  document.getElementById("submitAuthForm").innerText = "Cadastrar";
  document.getElementById("toggleAuthToRegister").classList.add("startHidden");
  document.getElementById("toggleRegisterToAccess").classList.remove("startHidden");
}

function toggleToAccess() {
  document.getElementById("authFormTitle").innerText = "Acesse sua conta para continuar";
  document.getElementById("submitAuthForm").innerText = "Acessar";
  document.getElementById("toggleAuthToRegister").classList.remove("startHidden");
  document.getElementById("toggleRegisterToAccess").classList.add("startHidden");
}
