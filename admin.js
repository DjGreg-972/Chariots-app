const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function ajouterChariot() {
    const nom = document.getElementById("nom").value.trim();
    const statut = document.getElementById("statut").value;
    const commentaire = document.getElementById("commentaire").value.trim();

    if (!nom) {
        alert("Veuillez entrer un nom de chariot.");
        return;
    }

    const { error } = await supabase.from("chariots").insert([{ nom, statut, commentaire }]);

    if (error) {
        alert("Erreur lors de l'ajout : " + error.message);
    } else {
        alert("Chariot ajouté avec succès.");
        document.getElementById("nom").value = "";
        document.getElementById("commentaire").value = "";
        chargerChariots();
    }
}

async function chargerChariots() {
    const { data, error } = await supabase.from("chariots").select("*");
    const tbody = document.getElementById("liste-chariots");
    tbody.innerHTML = "";

    if (error) {
        tbody.innerHTML = "<tr><td colspan='3'>Erreur de chargement</td></tr>";
        return;
    }

    if (data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>Aucun chariot enregistré</td></tr>";
        return;
    }

    data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${item.nom}</td><td>${item.statut}</td><td>${item.commentaire || ""}</td>`;
        tbody.appendChild(row);
    });
}

window.addEventListener("DOMContentLoaded", chargerChariots);
