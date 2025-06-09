
document.addEventListener("DOMContentLoaded", () => {
  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");
  const chariotSelect = document.getElementById("chariot");
  chariots.forEach(c => {
    const option = document.createElement("option");
    option.value = c.nom;
    option.textContent = c.nom;
    chariotSelect.appendChild(option);
  });

  const form = document.getElementById("anomalieForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      chariot: form.chariot.value,
      type: form.type.value,
      commentaire: form.commentaire.value,
      photo: form.photo.files[0] ? form.photo.files[0].name : "",
      date: form.date.value,
      heure: form.heure.value,
      nom: form.nom.value
    };

    console.log("Anomalie déclarée :", data);
    alert("Anomalie déclarée avec succès !");
    form.reset();
  });
});
