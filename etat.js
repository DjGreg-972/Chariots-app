document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("etat-chariots");
  const chariots = JSON.parse(localStorage.getItem("chariots")) || [];

  chariots.forEach(chariot => {
    const tr = document.createElement("tr");

    const tdNom = document.createElement("td");
    tdNom.textContent = chariot.nom;
    tr.appendChild(tdNom);

    const tdEtat = document.createElement("td");
    tdEtat.textContent = chariot.etat;
    tr.appendChild(tdEtat);

    const tdCommentaire = document.createElement("td");
    if (chariot.etat === "panne" || chariot.etat === "reparation") {
      tdCommentaire.textContent = chariot.commentaire || "(Aucun commentaire)";
    } else {
      tdCommentaire.textContent = "-";
    }
    tr.appendChild(tdCommentaire);

    tbody.appendChild(tr);
  });
});
