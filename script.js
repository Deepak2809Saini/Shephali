// ---------- Design skills data ----------
const skills = [
  { t: "Fashion Illustration", i: "pen" },
  { t: "Pattern Making", i: "ruler" },
  { t: "Textile & Fabric Knowledge", i: "fabric" },
  { t: "Print & Product Development", i: "stamp" },
  { t: "Hand Embroidery & Surface Ornamentation", i: "needle" },
  { t: "Handloom & Traditional Textiles", i: "loom" },
  { t: "Fashion Styling", i: "hanger" },
  { t: "Draping Techniques", i: "drape" },
  { t: "Garment Construction", i: "scissors" },
  { t: "Trend Forecasting", i: "compass" }
];

const icons = {
  pen: '<path d="M3 21l3-1 12-12-2-2L4 18l-1 3z"/><path d="M14 6l2 2"/>',
  ruler: '<rect x="3" y="9" width="18" height="6" rx="1"/><path d="M7 9v3M11 9v3M15 9v3M19 9v3"/>',
  fabric: '<path d="M4 4c4 3 4 6 0 9s-4 6 0 9"/><path d="M12 4c4 3 4 6 0 9s-4 6 0 9"/><path d="M20 4c-4 3-4 6 0 9"/>',
  stamp: '<rect x="5" y="4" width="14" height="10" rx="1"/><path d="M9 14v3M15 14v3M5 20h14"/>',
  needle: '<path d="M20 4L9 15"/><circle cx="20" cy="4" r="2"/><path d="M9 15l-5 5 2-6z"/>',
  loom: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 14h18M8 4v16M13 4v16"/>',
  hanger: '<path d="M12 3a2 2 0 0 1 2 2c0 1-1 1.6-2 2v1"/><path d="M12 8l9 6H3z"/><path d="M3 17h18"/>',
  drape: '<path d="M4 5c3 4 3 6 0 10M10 5c3 4 3 6 0 10M16 5c3 4 3 6 0 10"/>',
  scissors: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 8l12 12M20 4L8 16"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6z"/>'
};

const grid = document.getElementById('swatchGrid');
skills.forEach((s, idx) => {
  const el = document.createElement('div');
  el.className = 'swatch';
  el.innerHTML = `
    <div class="swatch-icon"><svg viewBox="0 0 24 24">${icons[s.i]}</svg></div>
    <div class="swatch-index">${String(idx + 1).padStart(2, '0')} / ${skills.length}</div>
    <h4>${s.t}</h4>
  `;
  grid.appendChild(el);
});

// ---------- Portfolio work ----------
// Replace work-1.jpg ... work-6.jpg (in this same folder) with your own
// images, keeping the same filenames. Edit the title, category,
// description and tags below to describe each piece.
const works = [
  {
    file: "work-1.jpg",
    category: "Fashion Illustration",
    title: "Sketch Study",
    description: "Write a few lines about this piece here — what it is, the idea behind it, and any technique worth mentioning. For example: an early croquis exploring silhouette and movement before moving into pattern.",
    tags: ["Illustration", "Concept"]
  },
  {
    file: "work-2.jpg",
    category: "Textile & Print",
    title: "Textile Print",
    description: "Describe the print or textile study — the inspiration behind the motif, the technique used, and where it could translate onto a garment.",
    tags: ["Print", "Textile"]
  },
  {
    file: "work-3.jpg",
    category: "Draping",
    title: "Draping Trial",
    description: "Talk about the draping process for this piece — the fabric used on the dress form, the silhouette you were aiming for, and what you learned from it.",
    tags: ["Draping", "Silhouette"]
  },
  {
    file: "work-4.jpg",
    category: "Hand Embroidery",
    title: "Embroidery Detail",
    description: "Describe the embroidery or surface ornamentation technique — stitch type, materials, and the surface it was created for.",
    tags: ["Embroidery", "Detail Work"]
  },
  {
    file: "work-5.jpg",
    category: "Garment Construction",
    title: "Garment Final",
    description: "Walk through the finished garment — construction details, fabric choice, and the brief or moment it was designed for.",
    tags: ["Construction", "Final Piece"]
  },
  {
    file: "work-6.jpg",
    category: "Styling",
    title: "Styling Edit",
    description: "Describe the styling concept behind this edit — mood, references, and how the pieces were put together.",
    tags: ["Styling", "Editorial"]
  }
];

// ---------- scroll reveal (set up before we generate rows below) ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

const galleryGrid = document.getElementById('galleryGrid');
works.forEach((w, idx) => {
  const row = document.createElement('div');
  row.className = 'work-row reveal';
  row.innerHTML = `
    <div class="work-media">
      <img src="${w.file}" alt="${w.title} — Shephali Agrawal">
    </div>
    <div class="work-copy">
      <div class="work-index">${String(idx + 1).padStart(2, '0')} / ${works.length}</div>
      <span class="work-category">${w.category}</span>
      <h3>${w.title}</h3>
      <p>${w.description}</p>
      <div class="work-tags">${w.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  `;
  galleryGrid.appendChild(row);
  io.observe(row);
});

// ---------- Soft skills chips ----------
const softSkills = ["Creativity", "Attention to Detail", "Communication", "Teamwork", "Time Management", "Problem Solving", "Adaptability", "Presentation Skills"];
const cloud = document.getElementById('chipCloud');
softSkills.forEach(s => {
  const chip = document.createElement('span');
  chip.className = 'chip';
  chip.textContent = s;
  cloud.appendChild(chip);
});

// ---------- observe remaining reveal elements ----------
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach(el => io.observe(el));
