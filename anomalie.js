document.addEventListener('DOMContentLoaded', () => {
  const chariotSelect = document.getElementById('chariot');

  const chariots = JSON.parse(localStorage.getItem('chariots')) || [];

  chariots.forEach(({ nom }) => {
    const option = document.createElement('option');
    option.value = nom;
    option.textContent = nom;
    chariotSelect.appendChild(option);
  });

  const form = document.getElementById('anomalieForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Anomalie déclarée avec succès !");
    form.reset();
  });
});
