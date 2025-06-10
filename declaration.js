
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://harsyswhkmukiesqrkcj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0'
);

async function envoyerAnomalie() {
  const chariot = document.getElementById('chariot').value;
  const type = document.getElementById('type').value;
  const commentaire = document.getElementById('commentaire').value;
  const photo = document.getElementById('photo').value;
  const auteur = document.getElementById('auteur').value;
  const statut = document.getElementById('statut').value;
  const date = new Date().toISOString();

  const { error } = await supabase.from('Anomalies').insert([{
    chariot,
    type,
    commentaire,
    photo,
    auteur,
    date,
    statut
  }]);

  if (error) {
    alert("Erreur lors de l'envoi : " + error.message);
  } else {
    alert("Anomalie envoyée avec succès !");
    document.getElementById("form-anomalie").reset();
  }
}

document.getElementById("envoyer").addEventListener("click", envoyerAnomalie);
