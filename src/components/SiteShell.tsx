import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Instagram, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, bookingUrl, email, services, whatsappUrl } from "@/lib/site";

const links = [
  { label: "Home", to: "/" }, { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" }, { label: "The Book", to: "/the-book" },
  { label: "Testimonials", to: "/testimonials" }, { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return <>
    <div className="topline"><span>THE WISDOM BHARAT <span className="text-gold mx-3">✦</span> AWAKEN THE WISDOM WITHIN</span><span className="hidden sm:inline">BHUBANESWAR, INDIA</span></div>
    <header className="site-header">
      <div className="container-wide header-inner">
        <Link to="/" aria-label="The Wisdom Bharat home" onClick={() => setOpen(false)} className="brand"><img src={assets.logo} alt="The Wisdom Bharat logo" /><span>THE WISDOM<br/><b>BHARAT</b></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.slice(0,2).map(l => <Link key={l.to} to={l.to} activeProps={{ className: "active" }}>{l.label}</Link>)}
          <div className="nav-dropdown"><Link to="/services" activeProps={{ className: "active" }}>Services <ChevronDown size={13}/></Link><div className="dropdown-panel">{services.map(s => <Link key={s.slug} to={s.slug}>{s.title}</Link>)}</div></div>
          {links.slice(2).map(l => <Link key={l.to} to={l.to} activeProps={{ className: "active" }}>{l.label}</Link>)}
        </nav>
        <Button asChild className="header-cta hidden xl:inline-flex"><Link to="/book-consultation">Book a Consultation <ArrowRight size={15}/></Link></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.slice(0,2).map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <div className="mobile-service-row"><Link to="/services" onClick={() => setOpen(false)}>Services</Link><Button variant="ghost" size="icon" aria-label="Toggle services" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown size={18}/></Button></div>
        {servicesOpen && <div className="mobile-subnav">{services.map(s => <Link key={s.slug} to={s.slug} onClick={() => setOpen(false)}>{s.title}</Link>)}</div>}
        {links.slice(2).map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <Link className="mobile-book" to="/book-consultation" onClick={() => setOpen(false)}>Book a Consultation <ArrowRight size={17}/></Link>
      </nav>}
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="container-wide footer-grid">
      <div><Link to="/" className="footer-brand"><img src={assets.logo} alt=""/><span>THE WISDOM<br/><b>BHARAT</b></span></Link><p>Awaken the wisdom within.</p><p>Mind. Energy. Conscious living.</p></div>
      <div><h3>Explore</h3><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/programs">Programs</Link><Link to="/the-book">The Book</Link><Link to="/testimonials">Testimonials</Link></div>
      <div><h3>Support</h3><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><Link to="/book-consultation">Book a Consultation</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms & Conditions</Link></div>
      <div><h3>Get in touch</h3><p>Jayadev Vihar, Bhubaneswar<br/>Odisha, India</p><a href="tel:+919437085701"><Phone size={15}/> +91 94370 85701</a><a href={`mailto:${email}`}><Mail size={15}/> {email}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowRight size={14}/></a><a href="https://www.instagram.com/thewisdombharat/" target="_blank" rel="noopener noreferrer"><Instagram size={15}/> Instagram</a></div>
    </div><div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} The Wisdom Bharat. All rights reserved.</span><span>Awaken The Wisdom Within</span></div></footer>
  </>;
}
export function ActionLink({ to = "/book-consultation", children, light = false }: { to?: "/book-consultation" | "/services" | "/about" | "/programs" | "/the-book" | "/testimonials" | "/contact"; children: React.ReactNode; light?: boolean }) {
  return <Button asChild className={light ? "action-link light" : "action-link"}><Link to={to}>{children}<ArrowRight size={17}/></Link></Button>;
}
export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) { return <div className={`section-heading ${centered ? "centered" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
export function BottomCTA() { return <section className="bottom-cta"><div className="container-wide bottom-cta-inner"><div><span className="eyebrow">A CONVERSATION IS A BEGINNING</span><h2>Ready to begin your journey?</h2><p>Let’s find the right place to start, together.</p></div><ActionLink light>Book a Consultation</ActionLink></div></section>; }
export function ExternalButton({ href, children }: { href: string; children: React.ReactNode }) { return <Button asChild className="action-link"><a href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowRight size={17}/></a></Button>; }
export { bookingUrl };
