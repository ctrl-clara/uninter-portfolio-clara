const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElement = e.target;
  const username = formElement.username.value;
  const email = formElement.email.value;
  const message = formElement.message.value;

  if (!username || !email || !message) {
    alert("Preencha todos os campos antes de enviar :)");
    return;
  }

  alert("Mensagem enviada com sucesso! :D");
  form.reset();
});
