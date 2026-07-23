
const titles = Array.from({ length: 14 }, (_, index) => `Canzone ${index + 1}`);
const grid = document.getElementById("track-grid");

grid.innerHTML = titles.map((title, index) => `
  <article class="track">
    <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
    <span class="track-title">${title}</span>
    <button class="play" disabled aria-label="Registrazione non ancora disponibile">▶</button>
  </article>
`).join("");
