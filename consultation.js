document.addEventListener('DOMContentLoaded', () => {
  fetch('anomalies.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Fichier anomalies.json non trouvé');
      }
      return response.json();
    })
    .then(data => {
      const tableau = document.querySelector('tbody');
      if (!Array.isArray(data) || data.length === 0) {
        tableau.innerHTML = '<tr><td colspan="6" style="text-align: center;">Aucune anomalie enregistrée.</td></tr>';
        return;
      }

      data.forEach(anomalie => {
        const ligne = document.createElement('tr');

        ligne.innerHTML = `
          <td>${anomalie.chariot}</td>
          <td>${anomalie.type}</td>
          <td>${anomalie.commentaire || '-'}</td>
          <td>${anomalie.date || '-'}</td>
          <td>${anomalie.heure || '-'}</td>
          <td>${anomalie.declarant || '-'}</td>
          <td>${anomalie.photo ? `<a href="\${anomalie.photo}" target="_blank">Voir</a>` : '-'}</td>
        `;

        tableau.appendChild(ligne);
      });
    })
    .catch(error => {
      console.error('Erreur lors du chargement des anomalies :', error);
    });
});