const scriptURL = "https://script.google.com/u/0/home/projects/1vis7EvtzcbrrjHmdeKGxLGu_WmJd-xFS63m0PseQAfjN_QgL-rQEX3JP";

document.getElementById("demoForm").addEventListener("submit", e => {
  e.preventDefault();
  
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(response => alert("✅ Mensaje enviado correctamente"))
  .catch(error => alert("❌ Error al enviar: " + error.message));
});
