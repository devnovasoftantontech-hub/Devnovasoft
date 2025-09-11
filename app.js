const form = document.getElementById("demoForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  // Necesario para Netlify Forms si usas AJAX:
  if (!data.has("form-name")) data.append("form-name", "contacto");

  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams([...data]).toString()
    });
    if (!res.ok) throw new Error("No se pudo enviar");
    alert("✅ Enviado. ¡Gracias!");
    form.reset();
  } catch (err) {
    alert("❌ " + err.message);
  }
});