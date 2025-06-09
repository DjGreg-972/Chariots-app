fetch('anomalies.json')
  .then(response => response.json())
  .then(data => {
    const tableau = document.getElementById('tableau-anomalies');
    data.forEach(anomalie => {
      const ligne = document.createElement('tr');
      ligne.innerHTML = `
        <td>${anomalie.chariot}</td>
        <td>${anomalie.type}</td>
        <td>${anomalie.commentaire}</td>
        <td>${anomalie.date}</td>
        <td>${anomalie.heure}</td>
        <td>${anomalie.nom}</td>
        <td>${anomalie.photo ? `<a href="${anomalie.photo}" target="_blank">Voir</a>` : '-'}</td>
      `;
      tableau.appendChild(ligne);
    });
  });