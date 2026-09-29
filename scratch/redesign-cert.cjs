const fs = require("fs");
let code = fs.readFileSync("src/components/Pages.tsx", "utf8");

// 1. Ensure lucide imports include ChevronLeft, ChevronRight, ShieldCheck, X
const oldImportRegex = /import\s*\{([^}]+)\}\s*from\s*"lucide-react";/;
const match = code.match(oldImportRegex);
if (match) {
  const existingIcons = match[1].split(",").map(s => s.trim());
  const neededIcons = ["ArrowDown", "ArrowRight", "Check", "Mail", "MapPin", "Phone", "Award", "ZoomIn", "Star", "ChevronLeft", "ChevronRight", "ShieldCheck", "X"];
  const combined = Array.from(new Set([...existingIcons, ...neededIcons])).join(", ");
  code = code.replace(oldImportRegex, `import { ${combined} } from "lucide-react";`);
}

// 2. Clean AboutPage to cleanly separate Meet the Founder and CertificateGallery into their own sections
const oldAboutRegex = /export function AboutPage\(\) \{[\s\S]*?return <><PageHeader[\s\S]*?<CertificateGallery \/><\/section>/;
const newAboutStart = `export function AboutPage() { return <><PageHeader eyebrow="ABOUT THE WISDOM BHARAT" title="An invitation to grow from within." intro="A personal approach to mind, energy and conscious living."/><section className="section-pad"><div className="container-wide editorial-split"><div className="editorial-photo"><img src={assets.founder} alt="Life Coach PR, founder"/></div><div className="editorial-copy"><span className="eyebrow">MEET THE FOUNDER</span><h2>Life Coach PR</h2><p>Priya Ranjan Sahu, known as Life Coach PR, is the founder of The Wisdom Bharat. His work brings together NLP, Reiki, Garbhsanskar and life and high-performance coaching.</p><p>The original website describes him as an author, certified NLP practitioner, Reiki Master and Garbhsanskar guide. He is the author of <em>Awaken Your Ultimate High-Performance System</em>.</p><blockquote>“Healing is not magic — it’s inner alignment.”</blockquote><ActionLink>Book a Consultation</ActionLink></div></div></section><CertificateGallery />`;

code = code.replace(oldAboutRegex, newAboutStart);

// 3. Replace CertificateGallery with the elevated, premium design
const newGallery = `export function CertificateGallery() {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const credentials = [
    {
      id: "nlp",
      title: "Certified NLP Practitioner",
      institution: "Neuro-Linguistic Programming",
      description: "Advanced certification in identifying and reframing limiting beliefs, timeline therapy, and subconscious alignment for enduring human transformation.",
      image: assets.nlpCert,
      badge: "Verified Practitioner"
    },
    {
      id: "reiki-master",
      title: "Reiki Master & Teacher",
      institution: "Traditional Reiki Healing",
      description: "Mastery-level degree in Japanese energy healing, encompassing high-level energy alignment and practitioner attunements across Levels 1, 2, and 3.",
      image: assets.reikiMasterCert,
      badge: "Master Degree"
    },
    {
      id: "reiki-first",
      title: "Reiki First Degree",
      institution: "Traditional Usui Shiki Ryoho",
      description: "Foundation in hands-on holistic healing, energy harmonization, stress alleviation, and traditional meditative self-healing protocols.",
      image: assets.reikiCert,
      badge: "First Degree Lineage"
    }
  ];

  const cert = credentials[active];

  return (
    <section className="section-pad bg-muted/20 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-border">
          <div>
            <span className="eyebrow">CREDENTIALS &amp; ACCREDITATIONS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mt-2">
              Verified certifications.
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md">
            Authentic qualifications held by Life Coach PR across Neuro-Linguistic Programming and Traditional Reiki healing lineage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certificate Showcase Display Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div 
              onClick={() => setZoomed(true)} 
              className="relative bg-background border border-border p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer group rounded-sm shadow-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-border/70 text-xs">
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold tracking-wider uppercase text-[11px]">
                  <ShieldCheck size={16} /> Official Certificate Document
                </span>
                <span className="text-muted-foreground font-mono text-[11px] font-medium tracking-widest">
                  0{active + 1} / 0{credentials.length}
                </span>
              </div>

              <div className="w-full h-[360px] sm:h-[420px] md:h-[450px] flex items-center justify-center bg-muted/30 p-3 sm:p-5 rounded-sm border border-border/50 relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.01]" 
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-background text-foreground px-4 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-sm shadow-lg flex items-center gap-2 border border-border">
                    <ZoomIn size={16} /> Click to View Full Resolution
                  </span>
                </div>
              </div>

              <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-border/70">
                <p className="text-xs text-muted-foreground">
                  Click certificate to inspect high-resolution scan
                </p>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setActive((active - 1 + credentials.length) % credentials.length); 
                    }}
                    className="w-9 h-9 flex items-center justify-center border border-border bg-background hover:bg-muted text-foreground transition-colors rounded-sm"
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setActive((active + 1) % credentials.length); 
                    }}
                    className="w-9 h-9 flex items-center justify-center border border-border bg-background hover:bg-muted text-foreground transition-colors rounded-sm"
                    aria-label="Next certificate"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Certificate Selection Tabs & Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {credentials.map((c, i) => {
              const isSelected = active === i;
              return (
                <div 
                  key={c.id} 
                  onClick={() => setActive(i)}
                  className={\`p-6 border transition-all duration-300 cursor-pointer text-left relative rounded-sm \${
                    isSelected 
                      ? "bg-background border-primary shadow-sm ring-1 ring-primary/20" 
                      : "bg-background/60 border-border hover:border-primary/40 hover:bg-background"
                  }\`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-sm" />
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div className="pr-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-1">
                        {c.institution}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl text-foreground">
                        {c.title}
                      </h3>
                    </div>
                    <div className="w-14 h-11 shrink-0 bg-muted/60 border border-border p-1 rounded-sm overflow-hidden flex items-center justify-center">
                      <img src={c.image} alt={c.title} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-border/70">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {c.description}
                      </p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setZoomed(true); }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-primary hover:underline"
                      >
                        <ZoomIn size={14} /> View full resolution scan
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Credential summary trust metrics */}
            <div className="p-6 bg-background/80 border border-border flex items-center justify-between gap-4 mt-2 rounded-sm shadow-xs">
              <div>
                <p className="text-2xl font-display text-primary font-bold">100%</p>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold tracking-wider mt-0.5">Authentic lineage</p>
              </div>
              <div className="h-8 w-[1px] bg-border" />
              <div>
                <p className="text-2xl font-display text-primary font-bold">15+ Years</p>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold tracking-wider mt-0.5">Study &amp; Practice</p>
              </div>
              <div className="h-8 w-[1px] bg-border" />
              <div>
                <p className="text-2xl font-display text-primary font-bold">Master</p>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold tracking-wider mt-0.5">Degree Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {zoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md" 
          onClick={() => setZoomed(false)}
        >
          <div className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between pb-3 text-white mb-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block">
                  {cert.institution}
                </span>
                <h4 className="font-display text-lg text-white">
                  {cert.title}
                </h4>
              </div>
              <button 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase bg-white/10 hover:bg-white/20 px-3 py-2 rounded-sm"
                onClick={() => setZoomed(false)}
              >
                <X size={16} /> Close
              </button>
            </div>
            <div className="bg-black/40 border border-white/15 p-2 rounded-sm max-h-[85vh] flex items-center justify-center overflow-hidden">
              <img src={cert.image} alt={cert.title} className="max-w-full max-h-[80vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}`;

const galleryStart = code.indexOf("export function CertificateGallery()");
if (galleryStart !== -1) {
  code = code.substring(0, galleryStart) + newGallery;
  fs.writeFileSync("src/components/Pages.tsx", code, "utf8");
  console.log("Successfully replaced CertificateGallery with elevated design!");
} else {
  console.error("Could not find export function CertificateGallery()");
}
