
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("etat-chariots");
  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");

  const emoji = {
    "fonctionnel": "🟢 Fonctionnel",
    "reparation": "🟠 En réparation",
    "panne": "🔴 En panne"
  };

  chariots.forEach(c => {
    const tr = document.createElement("tr");
    const commentaire = c.commentaire ? c.commentaire : "-";
    tr.innerHTML = `
      <td>${c.nom}</td>
      <td>${emoji[c.etat]}</td>
      <td>${commentaire}</td>
    `;
    tbody.appendChild(tr);
  });
});
