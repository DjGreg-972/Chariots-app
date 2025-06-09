
function chargerChariots() {
  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");
  const select = document.getElementById("chariot");
  chariots.forEach(c => {
    const option = document.createElement("option");
    option.value = c.nom;
    option.textContent = c.nom;
    select.appendChild(option);
  });
}

function soumettreAnomalie() {
  const chariotNom = document.getElementById("chariot").value;
  const type = document.getElementById("type").value;
  const commentaire = document.getElementById("commentaire").value;
  const statut = document.getElementById("etat").value;
  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const nom = document.getElementById("nom").value;

  const anomalies = JSON.parse(localStorage.getItem("anomalies") || "[]");
  anomalies.push({ chariot: chariotNom, type, commentaire, statut, date, heure, nom });
  localStorage.setItem("anomalies", JSON.stringify(anomalies));

  // Mise à jour du parc
  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");
  const index = chariots.findIndex(c => c.nom === chariotNom);
  if (index !== -1) {
    chariots[index].etat = statut;
    chariots[index].commentaire = commentaire;
    localStorage.setItem("chariots", JSON.stringify(chariots));
  }

  alert("Anomalie soumise.");
  window.location.href = "index.html";
}

window.onload = chargerChariots;
