
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
a
const supabase = createClient(
  'https://harsyswhkmukiesqrkcj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0'
);

async function chargerAnomalies() {
  const { data, error } = await supabase.from('anomalies').select('*');

  if (error) {
    alert("Erreur de lecture : " + error.message);
    return;
  }

  const tableau = document.getElementById("table-anomalies");
  tableau.innerHTML = "";

  data.forEach(item => {
    const row = tableau.insertRow();
    row.innerHTML = `
      <td>${item.date}</td>
      <td>${item.chariot}</td>
      <td>${item.type}</td>
      <td>${item.commentaire}</td>
      <td>${item.photo ? `<a href="${item.photo}" target="_blank">Voir</a>` : '—'}</td>
      <td>${item.auteur}</td>
      <td>${item.statut}</td>
    `;
  });
}

window.onload = chargerAnomalies;
