
window.onload = function () {
  const chariotSelect = document.getElementById("chariot");
  const chariots = JSON.parse(localStorage.getItem("chariots")) || [];

  chariots.forEach((chariot, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = chariot.nom;
    chariotSelect.appendChild(option);
  });
};

function soumettreAnomalie() {
  const chariotIndex = document.getElementById("chariot").value;
  const type = document.getElementById("type").value;
  const commentaire = document.getElementById("commentaire").value;
  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const nom = document.getElementById("nom").value;
  const etat = document.getElementById("etat").value;

  if (!chariotIndex || !type || !date || !heure || !nom) {
    alert("Veuillez remplir tous les champs requis.");
    return;
  }

  const chariots = JSON.parse(localStorage.getItem("chariots")) || [];
  chariots[chariotIndex].etat = etat;
  chariots[chariotIndex].commentaire = commentaire;

  localStorage.setItem("chariots", JSON.stringify(chariots));
  alert("Anomalie soumise avec succès !");
  window.location.href = "index.html";
}
