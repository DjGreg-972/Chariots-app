function soumettreAnomalie() {
  const chariot = document.getElementById('chariot').value;
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  const nom = document.getElementById('nom').value;
  const commentaire = document.getElementById('commentaire').value;
  const photo = document.getElementById('photo').files[0];

  if (!chariot || !type || !date || !heure || !nom) {
    alert("Merci de remplir tous les champs obligatoires.");
    return;
  }

  // Ici on pourrait stocker ou envoyer l'anomalie
  console.log({
    chariot, type, date, heure, nom, commentaire, photo
  });

  alert("Anomalie soumise avec succès !");
  document.querySelector("form")?.reset();
}

// Charger les chariots disponibles depuis le localStorage
window.onload = function () {
  const chariots = JSON.parse(localStorage.getItem('chariots') || '[]');
  const select = document.getElementById('chariot');
  chariots.forEach(c => {
    const option = document.createElement("option");
    option.value = c.nom;
    option.textContent = c.nom;
    select.appendChild(option);
  });
};