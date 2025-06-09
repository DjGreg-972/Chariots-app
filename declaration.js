
function soumettreAnomalie() {
  const chariot = document.getElementById('chariot').value;
  const type = document.getElementById('type').value;
  const photo = document.getElementById('photo').files[0];
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  const nom = document.getElementById('nom').value;

  if (!chariot || !type || !date || !heure || !nom) {
    alert("Merci de remplir tous les champs obligatoires.");
    return;
  }

  // Données simulées affichées dans la console
  console.log("Anomalie soumise :", {
    chariot, type, date, heure, nom, photo
  });

  alert("Anomalie enregistrée !");
}

window.onload = () => {
  const select = document.getElementById("chariot");
  const parc = JSON.parse(localStorage.getItem("parcChariots") || "[]");
  parc.forEach(ch => {
    const opt = document.createElement("option");
    opt.value = ch.nom;
    opt.textContent = ch.nom;
    select.appendChild(opt);
  });
};
