
const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function ajouterChariot() {
    const nom = document.getElementById("nom").value;
    const statut = document.getElementById("statut").value;
    const commentaire = document.getElementById("commentaire").value;

    const { error } = await supabase.from("chariots").insert([{ nom, statut, commentaire }]);

    if (error) {
        alert("Erreur : " + error.message);
    } else {
        alert("Chariot ajouté avec succès !");
        window.location.href = "index.html";
    }
}
