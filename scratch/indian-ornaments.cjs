const fs = require("fs");

// --- 1. CSS: Corner ornaments & section divider styles ------------------------
let css = fs.readFileSync("src/styles.css", "utf8");

// Encode helper
function enc(svg) {
  return svg
    .replace(/#/g, "%23")
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ");
}

// Corner ornament SVG – 4 lotus-arc petals + dotted rangoli frame
const cornerSVG = enc(`<svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
  <line x1="0" y1="2" x2="80" y2="2" stroke="#b8860b" stroke-width="1.5" opacity="0.55"/>
  <line x1="2" y1="0" x2="2" y2="80" stroke="#b8860b" stroke-width="1.5" opacity="0.55"/>
  <line x1="0" y1="14" x2="65" y2="14" stroke="#b8860b" stroke-width="0.6" opacity="0.35"/>
  <line x1="14" y1="0" x2="14" y2="65" stroke="#b8860b" stroke-width="0.6" opacity="0.35"/>
  <path d="M2 50 Q18 28 50 2" fill="none" stroke="#b8860b" stroke-width="1.2" opacity="0.55"/>
  <path d="M2 72 Q38 42 72 2" fill="none" stroke="#b8860b" stroke-width="0.8" opacity="0.40"/>
  <path d="M2 30 Q16 16 30 2" fill="none" stroke="#b8860b" stroke-width="1" opacity="0.45"/>
  <circle cx="2" cy="2" r="3.5" fill="#b8860b" opacity="0.65"/>
  <circle cx="18" cy="4" r="2" fill="#b8860b" opacity="0.45"/>
  <circle cx="4" cy="18" r="2" fill="#b8860b" opacity="0.45"/>
  <circle cx="30" cy="5" r="1.5" fill="#b8860b" opacity="0.35"/>
  <circle cx="5" cy="30" r="1.5" fill="#b8860b" opacity="0.35"/>
  <path d="M8 2 L11 6 L8 10 L5 6 Z" fill="#b8860b" opacity="0.50"/>
  <path d="M2 8 L6 11 L10 8 L6 5 Z" fill="#b8860b" opacity="0.50"/>
</svg>`);

// Flipped corner (top-right)
const cornerFlipH = enc(`<svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
  <line x1="50" y1="2" x2="130" y2="2" stroke="#b8860b" stroke-width="1.5" opacity="0.55"/>
  <line x1="128" y1="0" x2="128" y2="80" stroke="#b8860b" stroke-width="1.5" opacity="0.55"/>
  <line x1="65" y1="14" x2="130" y2="14" stroke="#b8860b" stroke-width="0.6" opacity="0.35"/>
  <line x1="116" y1="0" x2="116" y2="65" stroke="#b8860b" stroke-width="0.6" opacity="0.35"/>
  <path d="M128 50 Q112 28 80 2" fill="none" stroke="#b8860b" stroke-width="1.2" opacity="0.55"/>
  <path d="M128 72 Q92 42 58 2" fill="none" stroke="#b8860b" stroke-width="0.8" opacity="0.40"/>
  <path d="M128 30 Q114 16 100 2" fill="none" stroke="#b8860b" stroke-width="1" opacity="0.45"/>
  <circle cx="128" cy="2" r="3.5" fill="#b8860b" opacity="0.65"/>
  <circle cx="112" cy="4" r="2" fill="#b8860b" opacity="0.45"/>
  <circle cx="126" cy="18" r="2" fill="#b8860b" opacity="0.45"/>
  <circle cx="100" cy="5" r="1.5" fill="#b8860b" opacity="0.35"/>
  <circle cx="125" cy="30" r="1.5" fill="#b8860b" opacity="0.35"/>
  <path d="M122 2 L125 6 L122 10 L119 6 Z" fill="#b8860b" opacity="0.50"/>
  <path d="M128 8 L124 11 L120 8 L124 5 Z" fill="#b8860b" opacity="0.50"/>
</svg>`);

const cssAddition = `

/* ============================================================
   INDIAN TRADITIONAL CORNER ORNAMENTS
   ============================================================ */

/* Shared corner positioning */
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
  background: url("data:image/svg+xml,${cornerSVG}") no-repeat top left;
  background-size: 130px 130px;
}
.indian-corners::after {
  top: 0; right: 0;
  background: url("data:image/svg+xml,${cornerFlipH}") no-repeat top right;
  background-size: 130px 130px;
}

/* Section divider container */
.ornament-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 44px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.ornament-divider svg {
  width: 100%;
  max-width: 900px;
  height: 44px;
  display: block;
}
`;

css += cssAddition;
fs.writeFileSync("src/styles.css", css, "utf8");
console.log("CSS written. Size:", css.length);

// --- 2. Pages.tsx: add OrnamentDivider component + indian-corners classes -----
let pages = fs.readFileSync("src/components/Pages.tsx", "utf8");

// Add OrnamentDivider component before export function ServiceCards
const dividerComponent = `
export function OrnamentDivider({ light = false }: { light?: boolean }) {
  const stroke = light ? "#d4af7a" : "#b8860b";
  const op1 = light ? "0.55" : "0.50";
  const op2 = light ? "0.35" : "0.32";
  return (
    <div className="ornament-divider">
      <svg viewBox="0 0 900 44" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        {/* Left arm */}
        <line x1="0" y1="22" x2="355" y2="22" stroke={stroke} strokeWidth="0.8" opacity={op2}/>
        <line x1="0" y1="18" x2="340" y2="18" stroke={stroke} strokeWidth="0.4" opacity="0.20"/>
        <line x1="0" y1="26" x2="340" y2="26" stroke={stroke} strokeWidth="0.4" opacity="0.20"/>
        {/* Right arm */}
        <line x1="545" y1="22" x2="900" y2="22" stroke={stroke} strokeWidth="0.8" opacity={op2}/>
        <line x1="560" y1="18" x2="900" y2="18" stroke={stroke} strokeWidth="0.4" opacity="0.20"/>
        <line x1="560" y1="26" x2="900" y2="26" stroke={stroke} strokeWidth="0.4" opacity="0.20"/>
        {/* Repeated diamonds left */}
        {[290,310,328,344].map((x,i) => (
          <path key={"dl"+i} d={`M${x} 22 L${x+6} 17 L${x+12} 22 L${x+6} 27 Z`} fill={stroke} opacity={String(0.38 - i*0.06)}/>
        ))}
        {/* Repeated diamonds right */}
        {[558,574,592,612].map((x,i) => (
          <path key={"dr"+i} d={`M${x} 22 L${x+6} 17 L${x+12} 22 L${x+6} 27 Z`} fill={stroke} opacity={String(0.20 + i*0.06)}/>
        ))}
        {/* Central lotus motif */}
        <g transform="translate(450,22)">
          {/* Outer ring */}
          <circle cx="0" cy="0" r="19" fill="none" stroke={stroke} strokeWidth="0.8" opacity={op1}/>
          <circle cx="0" cy="0" r="13" fill="none" stroke={stroke} strokeWidth="0.6" opacity={op1}/>
          <circle cx="0" cy="0" r="5"  fill={stroke} opacity={op1}/>
          {/* 8 petals */}
          {[0,45,90,135,180,225,270,315].map((deg) => {
            const r = Math.PI * deg / 180;
            const x1 = Math.cos(r) * 7, y1 = Math.sin(r) * 7;
            const x2 = Math.cos(r) * 18, y2 = Math.sin(r) * 18;
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="0.8" opacity={op1}/>;
          })}
          {/* Corner dots */}
          {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((deg) => {
            const r = Math.PI * deg / 180;
            return <circle key={deg} cx={Math.cos(r)*16} cy={Math.sin(r)*16} r="1.8" fill={stroke} opacity={op2}/>;
          })}
        </g>
        {/* Left dots near center */}
        {[430,415,400].map((x,i) => <circle key={"lc"+i} cx={x} cy={22} r={2-i*0.4} fill={stroke} opacity={String(0.45-i*0.1)}/>)}
        {/* Right dots near center */}
        {[470,485,500].map((x,i) => <circle key={"rc"+i} cx={x} cy={22} r={2-i*0.4} fill={stroke} opacity={String(0.45-i*0.1)}/>)}
      </svg>
    </div>
  );
}
`;

// Insert before first export function that's not a constant
const insertBefore = "export function ServiceCards()";
pages = pages.replace(insertBefore, dividerComponent + insertBefore);

// Add indian-corners to page-header sections - add className to PageHeader
pages = pages.replace(
  'return <div className="page-header">',
  'return <div className="page-header indian-corners">'
);

// Add indian-corners to service-hero sections
pages = pages.replace(
  'return <><section className="service-hero">',
  'return <><section className="service-hero indian-corners">'
);

// Add OrnamentDivider between sections in HomePage
pages = pages.replace(
  '<section id="intro"',
  '<OrnamentDivider/><section id="intro"'
);
pages = pages.replace(
  '<section className="services-section"',
  '<OrnamentDivider/><section className="services-section"'
);
pages = pages.replace(
  '<section className="founder-band"',
  '<OrnamentDivider/><section className="founder-band"'
);
pages = pages.replace(
  '<section className="garbh-highlight"',
  '<OrnamentDivider/><section className="garbh-highlight"'
);
pages = pages.replace(
  '<section className="programs-section"',
  '<OrnamentDivider/><section className="programs-section"'
);
pages = pages.replace(
  '<section className="book-band"',
  '<OrnamentDivider light/><section className="book-band"'
);
pages = pages.replace(
  '<section className="reviews-preview"',
  '<OrnamentDivider/><section className="reviews-preview"'
);
pages = pages.replace(
  '<section className="process-section"',
  '<OrnamentDivider/><section className="process-section"'
);
pages = pages.replace(
  '<section className="faq-section"',
  '<OrnamentDivider/><section className="faq-section"'
);

fs.writeFileSync("src/components/Pages.tsx", pages, "utf8");
console.log("Pages.tsx updated. Size:", pages.length);
