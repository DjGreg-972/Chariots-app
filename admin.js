
const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function chargerChariots() {
  const { data, error } = await client.from("chariots").select("*");
  if (error) {
    console.error("Erreur chargement :", error.message);
    return;
  }

  const tbody = document.querySelector("#liste-chariots tbody");
  tbody.innerHTML = "";
  data.forEach((chariot) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${chariot.nom}</td>
      <td>${chariot.statut}</td>
      <td>${chariot.commentaire || ""}</td>
    `;
    tbody.appendChild(tr);
  });
}

async function ajouterChariot() {
  const nom = document.getElementById("nom").value.trim();
  const statut = document.getElementById("statut").value;
  const commentaire = document.getElementById("commentaire").value.trim();

  if (!nom) {
    alert("Veuillez entrer un nom de chariot.");
    return;
  }

  const { error } = await client.from("chariots").insert([{ nom, statut, commentaire }]);

  if (error) {
    alert("Erreur : " + error.message);
  } else {
    alert("Chariot ajouté !");
    chargerChariots();
  }
}

window.addEventListener("DOMContentLoaded", chargerChariots);
