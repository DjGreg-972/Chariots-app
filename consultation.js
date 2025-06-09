document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('#table-anomalies tbody');
  const anomalies = JSON.parse(localStorage.getItem('anomalies')) || [];

  anomalies.forEach(a => {
    const tr = document.createElement('tr');

    const tdNom = document.createElement('td');
    tdNom.textContent = a.nom;
    tr.appendChild(tdNom);

    const tdType = document.createElement('td');
    tdType.textContent = a.type;
    tr.appendChild(tdType);

    const tdCommentaire = document.createElement('td');
    tdCommentaire.textContent = a.commentaire || '-';
    tr.appendChild(tdCommentaire);

    const tdDate = document.createElement('td');
    tdDate.textContent = a.date;
    tr.appendChild(tdDate);

    const tdHeure = document.createElement('td');
    tdHeure.textContent = a.heure;
    tr.appendChild(tdHeure);

    const tdNomDeclarant = document.createElement('td');
    tdNomDeclarant.textContent = a.nomDeclarant;
    tr.appendChild(tdNomDeclarant);

    const tdPhoto = document.createElement('td');
    if (a.photo) {
      const link = document.createElement('a');
      link.href = a.photo;
      link.textContent = "Voir";
      link.target = "_blank";
      link.classList.add("photo-link");
      tdPhoto.appendChild(link);
    } else {
      tdPhoto.textContent = "-";
    }
    tr.appendChild(tdPhoto);

    tbody.appendChild(tr);
  });
});
