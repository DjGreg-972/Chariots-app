
// Configuration Supabase
const SUPABASE_URL = 'https://harsyswhkmukiesqrkcj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("form-anomalie").addEventListener("submit", async function (e) {
    e.preventDefault();

    const chariot = document.getElementById("chariot").value;
    const type = document.getElementById("type").value;
    const commentaire = document.getElementById("commentaire").value;
    const date = document.getElementById("date").value;
    const heure = document.getElementById("heure").value;
    const declarant = document.getElementById("declarant").value;
    const statut = document.getElementById("statut").value;
    const photoFile = document.getElementById("photo").files[0];

    let photo_url = "";

    if (photoFile) {
        const fileExt = photoFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `anomalies/${fileName}`;

        let { error: uploadError } = await supabase.storage
            .from('photos')
            .upload(filePath, photoFile);

        if (uploadError) {
            alert("Erreur lors de l'envoi de la photo : " + uploadError.message);
            return;
        }

        const { data: publicURLData } = supabase
            .storage
            .from('photos')
            .getPublicUrl(filePath);

        photo_url = publicURLData.publicUrl;
    }

    const { data, error } = await supabase
        .from("anomalies")
        .insert([{
            chariot,
            type,
            commentaire,
            date,
            heure,
            declarant,
            statut,
            photo_url
        }]);

    if (error) {
        alert("Erreur lors de l'enregistrement : " + error.message);
    } else {
        alert("Anomalie enregistrée avec succès.");
        location.href = "index.html";
    }
});
