const fs = require("fs");
let code = fs.readFileSync("src/components/Pages.tsx", "utf8");

// 1. In HomePage:
// Add corners to hero
code = code.replace(
  '<section className="hero"><div className="container-wide hero-spread">',
  '<section className="hero relative overflow-hidden"><IndianCorner position="tl" className="text-[var(--gold)]/35" /><IndianCorner position="tr" className="text-[var(--gold)]/35" /><div className="container-wide hero-spread relative z-10">'
);

// Add dividers between sections in HomePage
code = code.replace(
  '</section>\n  <section id="intro"',
  '</section>\n  <IndianDivider />\n  <section id="intro"'
);
code = code.replace(
  '</section>\n  <section className="section-pad services-section"',
  '</section>\n  <IndianDivider />\n  <section className="section-pad services-section"'
);
code = code.replace(
  '</section>\n  <section className="founder-band"',
  '</section>\n  <IndianDivider />\n  <section className="founder-band"'
);
code = code.replace(
  '</section>\n  <section className="section-pad garbh-highlight"',
  '</section>\n  <IndianDivider />\n  <section className="section-pad garbh-highlight"'
);
code = code.replace(
  '</section>\n  <section className="section-pad programs-section"',
  '</section>\n  <IndianDivider />\n  <section className="section-pad programs-section"'
);
code = code.replace(
  '</section>\n  <section className="book-band"',
  '</section>\n  <IndianDivider light />\n  <section className="book-band"'
);
code = code.replace(
  '</section>\n  <section className="section-pad reviews-preview"',
  '</section>\n  <IndianDivider />\n  <section className="section-pad reviews-preview"'
);
code = code.replace(
  '</section>\n  <section className="section-pad process-section"',
  '</section>\n  <IndianDivider />\n  <section className="section-pad process-section"'
);
code = code.replace(
  '</section>\n  <section className="section-pad faq-section"',
  '</section>\n  <IndianDivider />\n  <section className="section-pad faq-section"'
);
code = code.replace(
  '</section><BottomCTA/>\n</>; }',
  '</section>\n  <IndianDivider />\n  <BottomCTA/>\n</>; }'
);

// 2. In AboutPage:
code = code.replace(
  '</section><CertificateGallery /><section className="section-pad achievements-section">',
  '</section>\n  <IndianDivider />\n  <CertificateGallery />\n  <IndianDivider />\n  <section className="section-pad achievements-section">'
);
code = code.replace(
  '</section><section className="section-pad alternate"><div className="container-wide narrow-centered">',
  '</section>\n  <IndianDivider />\n  <section className="section-pad alternate"><div className="container-wide narrow-centered">'
);

// 3. In ServicePage:
code = code.replace(
  '<section className="service-hero"><div className="container-wide service-hero-grid">',
  '<section className="service-hero relative overflow-hidden"><IndianCorner position="tl" className="text-[var(--gold)]/35" /><IndianCorner position="tr" className="text-[var(--gold)]/35" /><div className="container-wide service-hero-grid relative z-10">'
);
code = code.replace(
  '</section>\n  <section className="section-pad"><div className="container-wide detail-layout">',
  '</section>\n  <IndianDivider />\n  <section className="section-pad"><div className="container-wide detail-layout">'
);
code = code.replace(
  '</section>\n  <section className="section-pad alternate"><div className="container-wide"><div className="section-top">',
  '</section>\n  <IndianDivider />\n  <section className="section-pad alternate"><div className="container-wide"><div className="section-top">'
);

// 4. In ProgramsPage, BookPage, TestimonialsPage, FaqPage, ContactPage, BookingPage:
code = code.replace(
  '</section><BottomCTA/></>; }\nexport function BookPage()',
  '</section><IndianDivider /><BottomCTA/></>; }\nexport function BookPage()'
);
code = code.replace(
  '</section><BottomCTA/></>; }\nexport function TestimonialsPage()',
  '</section><IndianDivider /><BottomCTA/></>; }\nexport function TestimonialsPage()'
);
code = code.replace(
  '</section>\n  <BottomCTA/></>; \n}\nexport function FaqPage()',
  '</section>\n  <IndianDivider />\n  <BottomCTA/></>; \n}\nexport function FaqPage()'
);
code = code.replace(
  '</section><BottomCTA/></>; }\nexport function ContactPage()',
  '</section><IndianDivider /><BottomCTA/></>; }\nexport function ContactPage()'
);

fs.writeFileSync("src/components/Pages.tsx", code, "utf8");
console.log("Pages.tsx successfully updated with Indian ornaments!");
