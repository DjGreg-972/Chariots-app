const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";

const form = document.getElementById("anomalyForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const chariot = form.chariot.value;
  const type = form.type.value;
  const commentaire = form.commentaire.value;
  const date = form.date.value;
  const heure = form.heure.value;
  const declarant = form.declarant.value;
  const statut = form.statut.value;

  const { error } = await fetch(`${SUPABASE_URL}/rest/v1/anomalies`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({ chariot, type, commentaire, date, heure, declarant, statut })
  });

  if (error) {
    alert("Erreur lors de la soumission.");
    console.error(error);
  } else {
    alert("Anomalie enregistrée !");
    form.reset();
  }
});
