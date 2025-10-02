import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const authForm = document.getElementById("authForm");
const authFormTitle = document.getElementById("authFormTitle");
const errorMsg = document.getElementById("errorMsg");

// 🔤 Mapa de tradução dos erros do Firebase
const errorMessages = {
  "auth/invalid-email": "E-mail inválido.",
  "auth/user-disabled": "Esta conta foi desativada.",
  "auth/user-not-found": "Usuário não encontrado.",
  "auth/wrong-password": "Senha incorreta.",
  "auth/missing-password": "Informe uma senha.",
  "auth/email-already-in-use": "Este e-mail já está em uso.",
  "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
  "auth/network-request-failed": "Falha na conexão com a internet.",
  "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
  "auth/invalid-credential": "E-mail ou senha incorretos.",
  "default": "Ocorreu um erro. Tente novamente."
};

// Função para traduzir os erros
function traduzErro(errorCode) {
  return errorMessages[errorCode] || errorMessages["default"];
}

// Envio do formulário
authForm.onsubmit = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    errorMsg.textContent = "Preencha todos os campos!";
    return;
  }

  if (authFormTitle.innerText.includes("Acesse")) {
    // === LOGIN ===
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "./home.html";
      })
      .catch((error) => {
        errorMsg.textContent = traduzErro(error.code);
      });

  } else {
    // === CADASTRO ===
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "./home.html";
      })
      .catch((error) => {
        errorMsg.textContent = traduzErro(error.code);
      });
  }
};
