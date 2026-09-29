const fs = require("fs");

// --- 1. CSS: Corner ornaments & section divider styles ------------------------
let css = fs.readFileSync("src/styles.css", "utf8");

// Encode SVG for CSS url()
function enc(svg) {
  return svg.replace(/#/g, "%23").replace(/\n\s*/g, " ");
}

const cornerTL = enc(`<svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
  <line x1="0" y1="2" x2="80" y2="2" stroke="#b8860b" stroke-width="1.8" opacity="0.55"/>
  <line x1="2" y1="0" x2="2" y2="80" stroke="#b8860b" stroke-width="1.8" opacity="0.55"/>
  <line x1="0" y1="12" x2="60" y2="12" stroke="#b8860b" stroke-width="0.6" opacity="0.30"/>
  <line x1="12" y1="0" x2="12" y2="60" stroke="#b8860b" stroke-width="0.6" opacity="0.30"/>
  <path d="M2 55 Q22 30 55 2" fill="none" stroke="#b8860b" stroke-width="1.4" opacity="0.52"/>
  <path d="M2 75 Q40 44 75 2" fill="none" stroke="#b8860b" stroke-width="0.9" opacity="0.36"/>
  <path d="M2 35 Q18 18 35 2" fill="none" stroke="#b8860b" stroke-width="1.1" opacity="0.44"/>
  <circle cx="2" cy="2" r="4" fill="#b8860b" opacity="0.70"/>
  <path d="M9 2 L13 7 L9 12 L5 7 Z" fill="#b8860b" opacity="0.52"/>
  <path d="M2 9 L7 13 L12 9 L7 5 Z" fill="#b8860b" opacity="0.52"/>
  <circle cx="22" cy="4" r="2.2" fill="#b8860b" opacity="0.40"/>
  <circle cx="4" cy="22" r="2.2" fill="#b8860b" opacity="0.40"/>
  <circle cx="36" cy="5" r="1.5" fill="#b8860b" opacity="0.30"/>
  <circle cx="5" cy="36" r="1.5" fill="#b8860b" opacity="0.30"/>
</svg>`);

const cornerTR = enc(`<svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
  <line x1="50" y1="2" x2="130" y2="2" stroke="#b8860b" stroke-width="1.8" opacity="0.55"/>
  <line x1="128" y1="0" x2="128" y2="80" stroke="#b8860b" stroke-width="1.8" opacity="0.55"/>
  <line x1="70" y1="12" x2="130" y2="12" stroke="#b8860b" stroke-width="0.6" opacity="0.30"/>
  <line x1="118" y1="0" x2="118" y2="60" stroke="#b8860b" stroke-width="0.6" opacity="0.30"/>
  <path d="M128 55 Q108 30 75 2" fill="none" stroke="#b8860b" stroke-width="1.4" opacity="0.52"/>
  <path d="M128 75 Q90 44 55 2" fill="none" stroke="#b8860b" stroke-width="0.9" opacity="0.36"/>
  <path d="M128 35 Q112 18 95 2" fill="none" stroke="#b8860b" stroke-width="1.1" opacity="0.44"/>
  <circle cx="128" cy="2" r="4" fill="#b8860b" opacity="0.70"/>
  <path d="M121 2 L117 7 L121 12 L125 7 Z" fill="#b8860b" opacity="0.52"/>
  <path d="M128 9 L123 13 L118 9 L123 5 Z" fill="#b8860b" opacity="0.52"/>
  <circle cx="108" cy="4" r="2.2" fill="#b8860b" opacity="0.40"/>
  <circle cx="126" cy="22" r="2.2" fill="#b8860b" opacity="0.40"/>
  <circle cx="94" cy="5" r="1.5" fill="#b8860b" opacity="0.30"/>
  <circle cx="125" cy="36" r="1.5" fill="#b8860b" opacity="0.30"/>
</svg>`);

const cssBlock = `

/* ============================================================
   INDIAN TRADITIONAL CORNER & DIVIDER ORNAMENTS
   ============================================================ */

.indian-corners {
  position: relative;
  overflow: hidden;
}
.indian-corners::before,
.indian-corners::after {
  content: '';
  position: absolute;
  width: 130px;
  height: 130px;
  pointer-events: none;
  z-index: 2;
}
.indian-corners::before {
  top: 0; left: 0;
  background: url("data:image/svg+xml,${cornerTL}") no-repeat top left;
  background-size: 130px 130px;
}
.indian-corners::after {
  top: 0; right: 0;
  background: url("data:image/svg+xml,${cornerTR}") no-repeat top right;
  background-size: 130px 130px;
}

.ornament-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  position: relative;
  z-index: 1;
  overflow: visible;
}
.ornament-divider svg {
  width: 100%;
  max-width: 960px;
  height: 48px;
  display: block;
}
`;

css += cssBlock;
fs.writeFileSync("src/styles.css", css, "utf8");
console.log("CSS written, size:", css.length);
