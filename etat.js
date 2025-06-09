
document.addEventListener("DOMContentLoaded", () => {
  const tableau = document.getElementById("parc-tableau");
  const chariots = JSON.parse(localStorage.getItem("chariots")) || [];

  chariots.forEach(chariot => {
    const ligne = document.createElement("tr");
    const nomCell = document.createElement("td");
    const etatCell = document.createElement("td");

    nomCell.textContent = chariot.nom;
    let couleur = chariot.etat === "fonctionnel" ? "🟢 Fonctionnel" :
                  chariot.etat === "reparation" ? "🟠 En réparation" :
                  "🔴 En panne";
    etatCell.textContent = couleur;

    ligne.appendChild(nomCell);
    ligne.appendChild(etatCell);
    tableau.appendChild(ligne);

    // Ajouter un commentaire si état != fonctionnel
    if ((chariot.etat === "reparation" || chariot.etat === "panne") && chariot.commentaire) {
      const ligneCommentaire = document.createElement("tr");
      const cellule = document.createElement("td");
      cellule.colSpan = 2;
      cellule.className = "commentaire";
      cellule.textContent = "📝 " + chariot.commentaire;
      ligneCommentaire.appendChild(cellule);
      tableau.appendChild(ligneCommentaire);
    }
  });
});
