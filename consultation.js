
document.addEventListener("DOMContentLoaded", async () => {
  const { createClient } = supabase;
  const supabaseUrl = "https://harsyswhkmukiesqrkcj.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";
  const supabaseClient = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabaseClient
    .from("anomalies")
    .select("*")
    .order("date", { ascending: false });

  const tableBody = document.querySelector("#anomalies-table tbody");
  if (error || !data || data.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "Aucune anomalie enregistrée.";
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  data.forEach(anomalie => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${anomalie.date || ""}</td>
      <td>${anomalie.chariot || ""}</td>
      <td>${anomalie.type || ""}</td>
      <td>${anomalie.commentaire || ""}</td>
      <td>${anomalie.photo_url ? `<a href="${anomalie.photo_url}" target="_blank">Voir</a>` : ""}</td>
      <td>${anomalie.declarant || ""}</td>
      <td>${anomalie.statut || ""}</td>
    `;
    tableBody.appendChild(row);
  });
});
