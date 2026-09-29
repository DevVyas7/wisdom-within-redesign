const fs = require("fs");
let css = fs.readFileSync("src/styles.css", "utf8");

// SVG patterns as data URIs
// 1. Concentric rings motif (spiritual/mandala-inspired)
const ringsPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Ccircle cx='160' cy='160' r='60' fill='none' stroke='%23a07850' stroke-width='0.8' opacity='0.22'/%3E%3Ccircle cx='160' cy='160' r='90' fill='none' stroke='%23a07850' stroke-width='0.6' opacity='0.18'/%3E%3Ccircle cx='160' cy='160' r='120' fill='none' stroke='%23a07850' stroke-width='0.5' opacity='0.14'/%3E%3Ccircle cx='160' cy='160' r='150' fill='none' stroke='%23a07850' stroke-width='0.4' opacity='0.10'/%3E%3C/svg%3E")`;

// 2. Small lotus/petal cross motif (tiling)
const petalPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='18' fill='none' stroke='%23a07850' stroke-width='0.7' opacity='0.2'/%3E%3Ccircle cx='40' cy='40' r='10' fill='none' stroke='%23a07850' stroke-width='0.5' opacity='0.18'/%3E%3Cline x1='40' y1='16' x2='40' y2='64' stroke='%23a07850' stroke-width='0.4' opacity='0.12'/%3E%3Cline x1='16' y1='40' x2='64' y2='40' stroke='%23a07850' stroke-width='0.4' opacity='0.12'/%3E%3Ccircle cx='0' cy='0' r='4' fill='none' stroke='%23a07850' stroke-width='0.5' opacity='0.15'/%3E%3Ccircle cx='80' cy='0' r='4' fill='none' stroke='%23a07850' stroke-width='0.5' opacity='0.15'/%3E%3Ccircle cx='0' cy='80' r='4' fill='none' stroke='%23a07850' stroke-width='0.5' opacity='0.15'/%3E%3Ccircle cx='80' cy='80' r='4' fill='none' stroke='%23a07850' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E")`;

// 3. Mandala arc corner decoration (for page headers)
const arcCorner = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ccircle cx='400' cy='0' r='100' fill='none' stroke='%23d4af7a' stroke-width='1' opacity='0.25'/%3E%3Ccircle cx='400' cy='0' r='160' fill='none' stroke='%23d4af7a' stroke-width='0.7' opacity='0.18'/%3E%3Ccircle cx='400' cy='0' r='220' fill='none' stroke='%23d4af7a' stroke-width='0.5' opacity='0.13'/%3E%3Ccircle cx='400' cy='0' r='280' fill='none' stroke='%23d4af7a' stroke-width='0.4' opacity='0.09'/%3E%3C/svg%3E")`;

// 4. Bottom-left arc for hero section
const heroArc = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Ccircle cx='0' cy='500' r='130' fill='none' stroke='%23d4af7a' stroke-width='1' opacity='0.18'/%3E%3Ccircle cx='0' cy='500' r='200' fill='none' stroke='%23d4af7a' stroke-width='0.7' opacity='0.13'/%3E%3Ccircle cx='0' cy='500' r='280' fill='none' stroke='%23d4af7a' stroke-width='0.5' opacity='0.09'/%3E%3C/svg%3E")`;

const improvements = `

/* ============================================================
   MANDALA / CIRCULAR PATTERN DECORATIONS
   ============================================================ */

/* Hero section: arc in bottom-left corner */
.hero {
  background-image: ${heroArc};
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 420px 420px;
}

/* Intro (sage) section: concentric rings top-right */
.intro-section {
  background-image: ${ringsPattern};
  background-repeat: no-repeat;
  background-position: right -60px top -60px;
  background-size: 320px 320px;
}

/* Page header: arc top-right corner */
.page-header {
  background-image: ${arcCorner};
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 420px 420px;
}

/* Service hero: arc top-right */
.service-hero {
  background-image: ${arcCorner};
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 380px 380px;
}

/* Alternate / muted sections: tiling petal pattern */
.alternate, .faq-section, .programs-section {
  background-image: ${petalPattern};
  background-repeat: repeat;
  background-size: 80px 80px;
}

/* Founder dark band: arc bottom-right */
.founder-band {
  background-image: ${ringsPattern};
  background-repeat: no-repeat;
  background-position: right -40px bottom -40px;
  background-size: 380px 380px;
}

/* Bottom CTA: arcs on both sides */
.bottom-cta {
  background-image:
    ${arcCorner},
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ccircle cx='0' cy='400' r='100' fill='none' stroke='%23fff' stroke-width='1' opacity='0.1'/%3E%3Ccircle cx='0' cy='400' r='170' fill='none' stroke='%23fff' stroke-width='0.7' opacity='0.07'/%3E%3Ccircle cx='0' cy='400' r='240' fill='none' stroke='%23fff' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E");
  background-repeat: no-repeat, no-repeat;
  background-position: right top, left bottom;
  background-size: 360px 360px, 360px 360px;
}

/* Footer: subtle rings top-right */
.footer {
  background-image: ${ringsPattern};
  background-repeat: no-repeat;
  background-position: right 60px top 60px;
  background-size: 300px 300px;
}

/* Section pad alternates: softer petal tile */
.section-pad.alternate {
  background-image: ${petalPattern};
  background-repeat: repeat;
  background-size: 80px 80px;
}

/* Book band: concentric rings right */
.book-band {
  background-image: ${ringsPattern};
  background-repeat: no-repeat;
  background-position: right -60px center;
  background-size: 380px 380px;
}

/* Achievements section: arcs top-right */
.achievements-section {
  background-image: ${arcCorner};
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 350px 350px;
}
`;

css += improvements;
fs.writeFileSync("src/styles.css", css, "utf8");
console.log("Pattern block appended. New size:", fs.readFileSync("src/styles.css", "utf8").length);
