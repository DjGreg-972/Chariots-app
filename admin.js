
document.addEventListener("DOMContentLoaded", afficherChariots);

function ajouterChariot() {
  const nom = document.getElementById("nom").value.trim();
  const etat = document.getElementById("etat").value;
  const commentaire = document.getElementById("commentaire").value.trim();

  if (!nom) return;

  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");
  chariots.push({ nom, etat, commentaire });
  localStorage.setItem("chariots", JSON.stringify(chariots));

  afficherChariots();
  document.getElementById("nom").value = "";
  document.getElementById("commentaire").value = "";
}

function afficherChariots() {
  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");
  const liste = document.getElementById("liste-chariots");
  liste.innerHTML = "";
  chariots.forEach(chariot => {
    const li = document.createElement("li");
    li.textContent = `${chariot.nom} - ${chariot.etat}`;
    liste.appendChild(li);
  });
}
