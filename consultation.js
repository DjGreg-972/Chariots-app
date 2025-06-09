document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('anomalie-table-body');
  const anomalies = JSON.parse(localStorage.getItem('anomalies')) || [];

  anomalies.forEach(anomalie => {
    const row = document.createElement('tr');

    row.innerHTML = \`
      <td>\${anomalie.chariot}</td>
      <td>\${anomalie.type}</td>
      <td>\${anomalie.commentaire || '-'}</td>
      <td>\${anomalie.date}</td>
      <td>\${anomalie.heure}</td>
      <td>\${anomalie.nom}</td>
      <td>\${anomalie.photo ? '<a href="' + anomalie.photo + '" target="_blank">Voir</a>' : '-'}</td>
    \`;

    tbody.appendChild(row);
  });
});
