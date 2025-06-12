const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function chargerChariots() {
  const { data, error } = await supabase.from("chariots").select("*");
  if (error) {
    console.error("Erreur chargement chariots :", error.message);
    return;
  }

  const tbody = document.querySelector("#chariotsTable tbody");
  tbody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.nom}</td><td>${item.statut}</td><td>${item.commentaire || ""}</td>`;
    tbody.appendChild(row);
  });
}

async function ajouterChariot() {
  const nom = document.getElementById("nom").value.trim();
  const statut = document.getElementById("statut").value;
  const commentaire = document.getElementById("commentaire").value.trim();

  if (!nom) return alert("Veuillez saisir un nom de chariot.");

  const { error } = await supabase.from("chariots").insert([{ nom, statut, commentaire }]);
  if (error) {
    alert("Erreur ajout chariot : " + error.message);
  } else {
    alert("Chariot ajouté avec succès.");
    document.getElementById("nom").value = "";
    document.getElementById("commentaire").value = "";
    chargerChariots();
  }
}

window.addEventListener("DOMContentLoaded", chargerChariots);
