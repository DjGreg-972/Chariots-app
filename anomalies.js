// Configuration Supabase
const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Chargement dynamique des chariots depuis Supabase
document.addEventListener("DOMContentLoaded", async () => {
  const chariotSelect = document.getElementById("chariot");

  const { data: chariots, error } = await supabase
    .from("chariots")
    .select("nom");

  if (error) {
    console.error("Erreur de récupération des chariots :", error.message);
    return;
  }

  chariotSelect.innerHTML = ""; // Nettoyer les options
  chariots.forEach(({ nom }) => {
    const option = document.createElement("option");
    option.value = nom;
    option.textContent = nom;
    chariotSelect.appendChild(option);
  });
});

// Fonction de soumission d’une anomalie
async function soumettreAnomalie() {
  const chariot = document.getElementById("chariot").value;
  const type = document.getElementById("type").value;
  const commentaire = document.getElementById("commentaire").value;
  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const declarant = document.getElementById("nom").value;
  const statut = document.getElementById("etat").value;

  const { data, error } = await supabase
    .from("anomalies")
    .insert([{ chariot, type, commentaire, date, heure, declarant, statut }]);

  if (error) {
    alert("Erreur lors de l'enregistrement : " + error.message);
  } else {
    alert("Anomalie enregistrée avec succès.");
    window.location.href = "index.html";
  }
}
