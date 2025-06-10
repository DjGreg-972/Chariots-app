
document.addEventListener("DOMContentLoaded", async () => {
  const { createClient } = supabase;
  const supabaseUrl = "https://harsyswhkmukiesqrkcj.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
  const supabaseClient = createClient(supabaseUrl, supabaseKey);

  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const chariot = form.chariot.value;
    const type = form.type.value;
    const commentaire = form.commentaire.value;
    const date = form.date.value;
    const heure = form.heure.value;
    const declarant = form.declarant.value;
    const statut = form.statut.value;

    let photo_url = "";
    const file = form.photo.files[0];
    if (file) {
      const { data: uploadData, error: uploadError } = await supabaseClient.storage
        .from("photos")
        .upload(`${Date.now()}_${file.name}`, file);
      if (!uploadError) {
        photo_url = supabaseUrl + "/storage/v1/object/public/photos/" + uploadData.path;
      }
    }

    const { error } = await supabaseClient.from("anomalies").insert([
      { chariot, type, commentaire, date, heure, declarant, photo_url, statut }
    ]);
    if (error) {
      alert("Erreur : " + error.message);
    } else {
      alert("Anomalie enregistrée avec succès.");
      form.reset();
    }
  });
});
