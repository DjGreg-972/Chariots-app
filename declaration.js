
function soumettreAnomalie() {
  const chariot = document.getElementById('chariot').value;
  const type = document.getElementById('type').value;
  const commentaire = document.getElementById('commentaire').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  const nom = document.getElementById('nom').value;
  const photo = document.getElementById('photo').files[0];

  const anomalie = {
    chariot,
    type,
    commentaire,
    date,
    heure,
    nom,
    photo: photo ? photo.name : null
  };

  alert("Anomalie soumise :\n" + JSON.stringify(anomalie, null, 2));
}

// Simule les noms des chariots à partir du localStorage
window.onload = () => {
  const chariots = JSON.parse(localStorage.getItem("chariots") || "[]");
  const select = document.getElementById("chariot");

  chariots.forEach(c => {
    const option = document.createElement("option");
    option.value = c.nom;
    option.textContent = c.nom;
    select.appendChild(option);
  });
}
