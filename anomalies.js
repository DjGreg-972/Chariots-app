const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function chargerChariots() {
  const { data, error } = await supabase.from("chariots").select("nom");
  if (error) {
    console.error("Erreur chargement chariots :", error.message);
    return;
  }

  const select = document.getElementById("chariot");
  select.innerHTML = ""; // reset avant ajout
  data.forEach(item => {
    const option = document.createElement("option");
    option.value = item.nom;
    option.textContent = item.nom;
    select.appendChild(option);
  });
}

async function soumettreAnomalie() {
  const chariot = document.getElementById("chariot").value;
  const type = document.getElementById("type").value;
  const commentaire = document.getElementById("commentaire").value;
  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const declarant = document.getElementById("nom").value;
  const statut = document.getElementById("etat").value;

  const { error } = await supabase
    .from("anomalies")
    .insert([{ chariot, type, commentaire, date, heure, declarant, statut }]);

  if (error) {
    alert("Erreur lors de l'enregistrement : " + error.message);
  } else {
    alert("Anomalie enregistrée avec succès.");
    window.location.href = "index.html";
  }
}

window.addEventListener("DOMContentLoaded", chargerChariots);
