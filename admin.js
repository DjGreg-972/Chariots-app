
const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function chargerChariots() {
  const { data, error } = await supabase.from("chariots").select("*");
  const tableBody = document.getElementById("liste-chariots");

  tableBody.innerHTML = "";

  if (error) {
    console.error("Erreur chargement :", error.message);
    return;
  }

  data.forEach((chariot) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${chariot.nom}</td>
      <td>${chariot.statut}</td>
      <td>${chariot.commentaire || "-"}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.getElementById("form-ajout").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const statut = document.getElementById("statut").value;
  const commentaire = document.getElementById("commentaire").value;

  const { error } = await supabase.from("chariots").insert([{ nom, statut, commentaire }]);

  if (error) {
    alert("Erreur lors de l'ajout : " + error.message);
  } else {
    alert("Chariot bien créé.");
    document.getElementById("form-ajout").reset();
    chargerChariots();
  }
});

window.addEventListener("DOMContentLoaded", chargerChariots);
