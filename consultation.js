
const SUPABASE_URL = "https://harsyswhkmukiesqrkcj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnN5c3doa211a2llc3Fya2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDg2ODQsImV4cCI6MjA2NTA4NDY4NH0.PumlJG2DW3TxEJP8NDnO97iDIfP7YGfpxtKv8FVZME0";

fetch(`${SUPABASE_URL}/rest/v1/anomalies?select=*`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    const tbody = document.querySelector("#anomaliesTable tbody");
    tbody.innerHTML = "";
    if (data.length === 0) {
      tbody.innerHTML = "<tr><td colspan='7'>Aucune anomalie trouvée.</td></tr>";
    } else {
      data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.date || "-"}</td>
          <td>${item.heure || "-"}</td>
          <td>${item.chariot || "-"}</td>
          <td>${item.type || "-"}</td>
          <td>${item.commentaire || "-"}</td>
          <td>${item.declarant || "-"}</td>
          <td>${item.statut || "-"}</td>
        `;
        tbody.appendChild(row);
      });
    }
  })
  .catch((err) => console.error("Erreur récupération anomalies:", err));
