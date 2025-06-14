
// Configuration Supabase
const SUPABASE_URL = 'https://harsyswhkmukiesqrkcj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("form-anomalie").addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log("Soumission du formulaire déclenchée");

    const chariot = document.getElementById("chariot").value;
    const type = document.getElementById("type").value;
    const commentaire = document.getElementById("commentaire").value;
    const date = document.getElementById("date").value;
    const heure = document.getElementById("heure").value;
    const declarant = document.getElementById("declarant").value;
    const statut = document.getElementById("statut").value;

    console.log("Valeurs collectées :", { chariot, type, commentaire, date, heure, declarant, statut });

    const { data, error } = await supabase
        .from("anomalies")
        .insert([{
            chariot,
            type,
            commentaire,
            date,
            heure,
            declarant,
            statut
        }]);

    if (error) {
        console.error("Erreur Supabase :", error.message);
        alert("Erreur lors de l'enregistrement : " + error.message);
    } else {
        console.log("Enregistrement réussi :", data);
        alert("Anomalie enregistrée avec succès.");
        location.href = "index.html";
    }
});
