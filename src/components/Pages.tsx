import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Mail, MapPin, Phone, Award, ZoomIn, Star, ChevronLeft, ChevronRight, ShieldCheck, X, Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ActionLink, BottomCTA, ExternalButton, SectionHeading } from "@/components/SiteShell";
import { address, assets, auraContent, auraFaqs, bookingUrl, bookUrl, email, faqs, founderAchievements, founderAwards, garbhaSanskarContent, garbhaSanskarFaqs, phoneHref, phoneNumber, programs, services, whatsappNumber, whatsappSecondaryNumber, whatsappSecondaryUrl, whatsappUrl, testimonials, videoTestimonials, type GoogleReview, type GoogleReviewScreenshot, googleReviewScreenshots } from "@/lib/site";

export function ServiceCards() { return <div className="service-grid">{services.map((s) => <Link className="service-card" to={s.slug} key={s.slug}><div className="service-image"><img src={s.image} alt={`${s.title} session`} className="object-top" loading="lazy" width={1024} height={682}/></div><div className="service-card-body"><span className="eyebrow">{s.eyebrow}</span><div className="service-card-title"><h3>{s.title}</h3><ArrowRight size={19}/></div><p>{s.summary}</p></div></Link>)}</div>; }

type FaqEntry = { readonly q: string; readonly a: string };

export function FaqList({
  limit,
  items,
  columns = 1,
}: {
  limit?: number;
  items?: readonly FaqEntry[];
  columns?: 1 | 2;
}) {
  const source = items ?? faqs;
  const list = limit ? source.slice(0, limit) : source;
  const isTwoCol = columns === 2 && list.length > 1;
  const triggerPadding = isTwoCol ? "py-4" : "py-5 sm:py-6";

  const renderItem = (f: FaqEntry, i: number) => (
    <AccordionItem value={`faq-${i}`} key={f.q} className="border-b border-border">
      <AccordionTrigger className={`${triggerPadding} text-left hover:no-underline gap-4 group`}>
        <span className="flex items-baseline gap-4 text-left">
          <span className="faq-num shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-semibold text-[15px] sm:text-base text-foreground group-hover:text-primary transition-colors">
            {f.q}
          </span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-5 pl-9 sm:pl-10 pr-4 text-muted-foreground text-[15px] leading-[1.75]">
        {f.a}
      </AccordionContent>
    </AccordionItem>
  );

  if (isTwoCol) {
    const splitIndex = Math.ceil(list.length / 2);
    const leftItems = list.slice(0, splitIndex);
    const rightItems = list.slice(splitIndex);

    return (
      <Accordion type="single" collapsible className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 items-start">
        <div className="border-t border-border">
          {leftItems.map((f, idx) => renderItem(f, idx))}
        </div>
        <div className="lg:border-t lg:border-border">
          {rightItems.map((f, idx) => renderItem(f, splitIndex + idx))}
        </div>
      </Accordion>
    );
  }

  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {list.map((f, i) => renderItem(f, i))}
    </Accordion>
  );
}
export function HomePage() { 
  return <>
    <section className="hero-video-section">
      <img
        src="/hero-video.gif"
        alt="The Wisdom Bharat peaceful dawn practice"
        className="hero-video-media"
        aria-hidden="true"
      />

      <div className="hero-video-overlay" aria-hidden="true" />

      <div className="container-wide relative z-10 w-full">
        <div className="hero-editorial">
          <span className="eyebrow hero-eyebrow">
            THE WISDOM BHARAT &bull; AWAKEN THE WISDOM WITHIN
          </span>
          <h1 className="hero-title">
            The Wisdom Bharat<span className="hero-period">.</span>
          </h1>
          <div className="hero-rule" />
          <p className="hero-slogan">
            Awaken the wisdom within. A considered space for mind, energy and conscious living.
          </p>
          <div className="hero-actions">
            <ActionLink>Book a Consultation</ActionLink>
          </div>
          <div className="hero-pillars">
            <span className="hero-pillar">01 &bull; MIND</span>
            <span className="hero-pillar-divider">/</span>
            <span className="hero-pillar">02 &bull; ENERGY</span>
            <span className="hero-pillar-divider">/</span>
            <span className="hero-pillar">03 &bull; CONSCIOUS LIVING</span>
          </div>
        </div>
      </div>

      <a href="#intro" className="hero-video-scroll" aria-label="Scroll to introduction">
        <ArrowDown size={18} />
        <span>DISCOVER MORE</span>
      </a>
    </section>
  <section id="intro" className="intro-section"><div className="container-wide intro-layout"><span className="eyebrow">A MORE INTENTIONAL WAY FORWARD</span><div><h2>Transformation begins when you make space to listen to yourself.</h2><p>At The Wisdom Bharat, ancient wisdom meets a personal approach to growth. Explore practices that support reflection, connection and purposeful change at your own pace.</p></div></div></section>
  <section className="section-pad services-section"><div className="container-wide"><div className="section-top"><SectionHeading eyebrow="OUR OFFERINGS" title="Five paths. One intention." description="Find the support that speaks to where you are right now."/><Link to="/services" className="text-link">View all services <ArrowRight size={17}/></Link></div><ServiceCards/></div></section>
  <section className="founder-band"><div className="container-wide founder-layout"><div className="founder-image-wrap"><img src={assets.founder} alt="Dr. Priya Ranjan Sahu, founder of The Wisdom Bharat" loading="lazy"/><span className="image-caption">DR. PRIYA RANJAN SAHU · FOUNDER</span></div><div className="founder-copy"><span className="eyebrow">THE PERSON BEHIND THE PRACTICE</span><h2>Meet Dr. Priya Ranjan Sahu.</h2><p className="lead">“I believe every human has the power to heal, grow, and awaken their ultimate potential, physically, mentally, and spiritually.”</p><p>Dr. Priya Ranjan Sahu (popularly known as Life Coach PR) brings together NLP, Reiki, Garbhsanskar and life coaching in a practice centred on personal growth and conscious living.</p><ActionLink to="/about">More about Dr. Priya Ranjan Sahu</ActionLink></div></div></section>
  <section className="section-pad garbh-highlight"><div className="container-wide highlight-layout"><div><span className="eyebrow">CONSCIOUS BEGINNINGS</span><h2>A thoughtful beginning for the journey ahead.</h2><p>Garbhsanskar offers parents a way to connect with themselves and each other from pre conception through pregnancy, drawing on reflection, affirmations, sound and ancient Indian wisdom.</p><Button asChild variant="outline" className="outline-link"><Link to="/services/garbhsanskar">Explore Garbhsanskar <ArrowRight size={16}/></Link></Button></div><img src={assets.garbhsanskar} alt="Pregnant couple meditating together representing Garbha Sanskar" loading="lazy" width={1024} height={682} className="object-cover object-center"/></div></section>
  <section className="section-pad programs-section"><div className="container-wide programs-layout"><div className="programs-intro"><SectionHeading eyebrow="DEEPER WORK" title="Explore our programs." description="Different ways to make space for sustained growth."/><Link to="/programs" className="text-link">All programs <ArrowRight size={17}/></Link></div><div className="program-index">{programs.map((p,i) => <Link to="/programs" className="program-index-link" key={p.title}><span className="program-index-number">0{i+1}</span><h3>{p.title}</h3><span className="program-index-arrow"><ArrowRight size={20} aria-hidden="true"/></span></Link>)}</div></div></section>
  <section className="book-band"><div className="container-wide book-layout"><div className="book-photo"><img src={assets.book} alt="Cover of Awaken Your Ultimate High Performance System by Dr. Priya Ranjan Sahu" loading="lazy"/></div><div className="book-copy"><span className="eyebrow">THE BOOK · BY DR. PRIYA RANJAN SAHU</span><h2>Awaken Your Ultimate High Performance System</h2><p>An invitation to rethink mindset, habits and energy alignment, and create a more purposeful way to perform and live.</p><ActionLink to="/the-book">Discover the book</ActionLink></div></div></section>
  <HomepageStories />
  <section className="section-pad process-section"><div className="container-wide"><SectionHeading eyebrow="HOW IT WORKS" title="A simple place to start."/><div className="steps-grid"><div><span>01</span><h3>Explore</h3><p>Read about our five offerings and find what resonates.</p></div><div><span>02</span><h3>Connect</h3><p>Book a consultation or get in touch with your questions.</p></div><div><span>03</span><h3>Begin</h3><p>Discuss a direction that feels right for you.</p></div></div></div></section>
  <section id="faq" className="section-pad faq-section"><div className="container-wide space-y-10"><SectionHeading eyebrow="GOOD TO KNOW" title="A few questions, answered."/><FaqList items={faqs} columns={2}/></div></section><BottomCTA/>
</>; }
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) { return <div className="page-header"><div className="container-wide"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{intro && <p>{intro}</p>}</div></div>; }
export function AboutPage() { return <><PageHeader eyebrow="ABOUT THE WISDOM BHARAT" title="An invitation to grow from within." intro="A personal approach to mind, energy and conscious living with Dr. Priya Ranjan Sahu."/><section className="section-pad"><div className="container-wide editorial-split"><div className="editorial-photo"><img src={assets.founder} alt="Dr. Priya Ranjan Sahu, founder of The Wisdom Bharat"/><span className="image-caption mt-3 block">DR. PRIYA RANJAN SAHU · FOUNDER</span></div><div className="editorial-copy"><span className="eyebrow">MEET THE FOUNDER</span><h2>Dr. Priya Ranjan Sahu</h2><p className="text-primary font-semibold tracking-wider text-xs uppercase mb-4">Founder · Author · Life Coach PR</p><p>Dr. Priya Ranjan Sahu, also known as Life Coach PR, is the founder of The Wisdom Bharat. His work brings together NLP, Reiki, Garbhsanskar and life and high performance coaching.</p><p>Dr. Priya Ranjan Sahu is an author, certified NLP practitioner, Reiki Master and Garbhsanskar guide. He is the author of <em>Awaken Your Ultimate High Performance System</em>.</p><blockquote>&ldquo;Healing is not magic, it&apos;s inner alignment.&rdquo;</blockquote><ActionLink>Book a Consultation</ActionLink></div></div></section><CertificateGallery /><section className="section-pad achievements-section"><div className="container-wide achievements-layout"><div><span className="eyebrow">THE FOUNDER’S JOURNEY</span><h2>Experience &amp; practice.</h2><p>Authentic credentials and qualifications held by Dr. Priya Ranjan Sahu across mind, energy and conscious living practices.</p></div><div className="achievements-list">{founderAchievements.map((achievement,i)=><div className="achievement" key={achievement.label}><span className="achievement-number">0{i+1}</span><div><h3>{achievement.label}</h3><p>{achievement.detail}</p></div></div>)}</div></div></section><section className="section-pad alternate"><div className="container-wide narrow-centered"><SectionHeading eyebrow="OUR OUTLOOK" title="When parents are awakened, the next generation is enlightened." centered/><p>The Wisdom Bharat’s vision is to help individuals and families approach life with more awareness, emotional balance and intention.</p></div></section><BottomCTA/></>; }
export function ServicesPage() { return <><PageHeader eyebrow="OUR OFFERINGS" title="Find your path forward." intro="Five distinct practices, each with space to meet you where you are."/><section className="section-pad"><div className="container-wide"><ServiceCards/></div></section><BottomCTA/></>; }
export function ServicePage({ index }: { index: number }) { 
  const s = services[index] as any; 
  if (!s) return null; 
  const isReiki = index === 1;
  return <><section className="service-hero"><div className="container-wide service-hero-grid"><div><span className="eyebrow">{s.eyebrow} &bull; THE WISDOM BHARAT</span><h1>{s.title}</h1><p>{s.summary}</p><ActionLink>Book a Consultation</ActionLink></div><img src={s.image} alt={s.title + " practice"} width={isReiki ? 1024 : 1024} height={isReiki ? 682 : 768} className={isReiki ? "max-w-[480px] lg:ml-auto !h-auto aspect-[3/2] object-cover object-center" : ""}/></div></section>
  <section className="section-pad"><div className="container-wide detail-layout"><div><span className="eyebrow">THE PRACTICE</span><h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug font-display text-foreground mt-4">{s.introQuote || "A space to begin."}</h3>{s.closingQuote && <p className="text-[var(--gold)] font-display text-2xl md:text-3xl mt-8 italic">"{s.closingQuote}"</p>}{isReiki && <figure className="mt-8 max-w-[380px] overflow-hidden border-b-4 border-primary bg-card"><img src={assets.reikiChakra} alt="Woman receiving chakra healing with colourful energy points during a Reiki session" width={800} height={600} loading="lazy" className="w-full aspect-[4/3] object-cover object-center block"/></figure>}</div><div><div className="prose prose-lg text-muted-foreground mb-12">{s.fullDescription ? s.fullDescription.map((p: string, i: number) => <p key={i} className="mb-6 leading-[1.8] text-[17px]">{p}</p>) : <p className="lead">{s.detail}</p>}</div><div className="point-list">{s.points.map((p: string) => <div key={p}><Check size={18}/><span>{p}</span></div>)}</div><p className="medical-note mt-12">These services are not a substitute for medical treatment.</p></div></div></section>
  <section className="section-pad alternate"><div className="container-wide"><div className="section-top"><SectionHeading eyebrow="EXPLORE MORE" title="Other ways to grow."/></div><div className="related-links">{services.filter((_,i) => i!==index).map(other => <Link key={other.slug} to={other.slug}>{other.title}<ArrowRight size={18}/></Link>)}</div></div></section><BottomCTA/></>; 
}
export function GarbhaSanskarPage() {
  const { hero, whatIs, approach, whoCanJoin, experience, whyChooseUs } = garbhaSanskarContent;
  return (
    <>
      <section className="service-hero py-12 md:py-16">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">03 / BEGINNINGS &bull; THE WISDOM BHARAT</span>
            <h1 className="!text-3xl sm:!text-4xl lg:!text-[44px] !leading-[1.14] !max-w-2xl !my-5">
              {hero.heading}
            </h1>
            <div className="space-y-4 mb-8 max-w-xl">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph} className="!mb-0 !max-w-xl text-base leading-[1.75] text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <ActionLink>Book a Consultation</ActionLink>
          </div>
          <div className="lg:col-span-5">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width={1024}
              height={796}
              className="w-full max-w-[440px] mx-auto lg:ml-auto lg:mr-0 !h-auto aspect-[4/3] object-cover object-[center_20%] block"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide intro-layout">
          <div>
            <span className="eyebrow">TRADITION &amp; WISDOM</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-[1.12]">
              {whatIs.heading}
            </h2>
          </div>
          <div className="space-y-5 max-w-2xl">
            {whatIs.paragraphs.map((paragraph) => (
              <p key={paragraph} className="!mt-0 text-[17px] leading-[1.8] text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad alternate">
        <div className="container-wide">
          <div className="section-top">
            <SectionHeading eyebrow="THE SIX PRACTICES" title={approach.heading} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {approach.practices.map((practice) => (
              <article
                key={practice.title}
                tabIndex={0}
                className="group flex flex-col sm:flex-row items-start gap-5 p-5 sm:p-6 rounded-[2px] border border-border/60 border-t-2 border-t-foreground/25 bg-background/50 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:bg-background hover:border-primary/30 hover:border-t-primary hover:shadow-[0_14px_32px_-12px_rgba(58,42,32,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:bg-background focus-visible:border-primary/30 focus-visible:border-t-primary active:bg-background/95 active:border-primary/35 motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <div className="w-full max-w-[260px] sm:w-40 md:w-36 lg:w-44 shrink-0 overflow-hidden rounded-[2px] border-b-2 border-primary/80 bg-background">
                  <img
                    src={practice.image}
                    alt={practice.imageAlt}
                    width={practice.width}
                    height={practice.height}
                    loading="lazy"
                    style={{ objectPosition: practice.objectPosition }}
                    className="w-full aspect-[4/3] object-cover block transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-display text-foreground mb-2 leading-snug transition-colors duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary group-focus-visible:text-primary motion-reduce:transition-none">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] sm:text-base leading-[1.7] transition-colors duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-foreground/85 motion-reduce:transition-none">
                    {practice.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="eyebrow">ELIGIBILITY</span>
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mt-3 mb-4 leading-[1.12]">
              {whoCanJoin.heading}
            </h2>
            <p className="text-muted-foreground text-[17px] leading-[1.75] mb-6">
              {whoCanJoin.introduction}
            </p>
            <div className="point-list !mt-0">
              {whoCanJoin.points.map((point) => (
                <div key={point}>
                  <Check size={18} className="shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">THE JOURNEY</span>
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mt-3 mb-4 leading-[1.12]">
              {experience.heading}
            </h2>
            <div className="point-list !mt-6">
              {experience.points.map((point) => (
                <div key={point}>
                  <Check size={18} className="shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alternate">
        <div className="container-wide editorial-split">
          <div className="editorial-photo relative">
            <img
              src={assets.founder}
              alt="Dr. Priya Ranjan Sahu, founder of The Wisdom Bharat"
              loading="lazy"
            />
            <span className="image-caption mt-3 block">DR. PRIYA RANJAN SAHU · FOUNDER</span>
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">THE GUIDANCE</span>
            <h2>{whyChooseUs.heading}</h2>
            {whyChooseUs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="mt-8">
              <ActionLink>Book a Consultation</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="section-top">
            <SectionHeading eyebrow="EXPLORE MORE" title="Other ways to grow." />
          </div>
          <div className="related-links">
            {services
              .filter((_, i) => i !== 2)
              .map((other) => (
                <Link key={other.slug} to={other.slug}>
                  {other.title}
                  <ArrowRight size={18} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section id="garbha-sanskar-faq" className="section-pad faq-section">
        <div className="container-wide faq-layout">
          <div>
            <SectionHeading eyebrow="GARBHA SANSKAR FAQ" title="Frequently Asked Questions" />
          </div>
          <FaqList items={garbhaSanskarFaqs} />
        </div>
      </section>

      <BottomCTA />
    </>
  );
}

export function AuraPage() {
  const {
    hero,
    whatIs,
    pillars,
    inclusions,
    whoCanJoin,
    journeyLevels,
    whyChooseUs,
    expectations,
    beginJourney,
    disclaimer,
  } = auraContent;

  return (
    <>
      {/* HERO SECTION */}
      <section className="service-hero py-10 md:py-12 lg:py-14">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">05 / TRANSFORMATION &bull; THE WISDOM BHARAT</span>
            <h1 className="!text-3xl sm:!text-4xl lg:!text-[38px] !leading-[1.15] !max-w-2xl !mt-2.5 !mb-3">
              {hero.heading}
            </h1>
            <p className="font-display text-lg sm:text-xl text-primary font-medium mb-3">
              {hero.subheading}
            </p>
            <div className="space-y-3 mb-4 max-w-xl text-[15px] sm:text-base leading-[1.65] text-muted-foreground">
              <p>{hero.paragraphs[0]}</p>
              <div>
                <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-2">
                  {hero.practicesIntro}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {hero.practices.map((practice) => (
                    <div
                      key={practice}
                      className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium bg-background/80 border border-border/70 px-2.5 py-1.5 rounded-[2px]"
                    >
                      <Check size={15} className="text-primary shrink-0" />
                      <span>{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p>{hero.paragraphs[1]}</p>
            </div>
            <div className="p-3 sm:p-3.5 mb-5 bg-card border-l-4 border-l-primary border border-border/70 rounded-[2px] max-w-xl shadow-xs">
              <p className="font-display italic text-foreground text-sm sm:text-base">
                &ldquo;{hero.tagline}&rdquo;
              </p>
            </div>
            <ActionLink>Book a Consultation</ActionLink>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2px] border-b-4 border-primary shadow-xs bg-card">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                width={800}
                height={600}
                className="w-full max-w-[440px] mx-auto lg:ml-auto lg:mr-0 !h-auto aspect-[4/3] object-cover object-center block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS AURA? */}
      <section className="py-12 md:py-14">
        <div className="container-wide grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">AWARENESS &bull; INTEGRATION</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display text-foreground leading-[1.18]">
              {whatIs.heading}
            </h2>
          </div>
          <div className="md:col-span-7 space-y-3.5 text-muted-foreground text-[15px] sm:text-base leading-[1.7]">
            {whatIs.paragraphs.map((paragraph) => (
              <p key={paragraph} className="!mt-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE FOUR PILLARS OF AURA */}
      <section className="py-12 md:py-14 bg-muted/30 border-y border-border/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow">A &bull; U &bull; R &bull; A</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display text-foreground leading-tight">
              {pillars.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              A structured combination of four complementary practices designed for personal transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {pillars.items.map((pillar) => (
              <article
                key={pillar.title}
                tabIndex={0}
                className="group flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-[2px] border border-border/70 border-t-2 border-t-primary bg-background/90 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:bg-background hover:border-primary/40 hover:border-t-primary hover:shadow-[0_14px_32px_-12px_rgba(58,42,32,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:scale-[1.02] focus-visible:bg-background focus-visible:border-primary/40 focus-visible:border-t-primary motion-reduce:transition-none motion-reduce:hover:scale-100 cursor-default"
              >
                <div className="w-full sm:w-36 md:w-40 shrink-0 overflow-hidden rounded-[2px] border-b-2 border-primary/80 bg-background">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    width={pillar.width}
                    height={pillar.height}
                    loading="lazy"
                    style={{ objectPosition: pillar.objectPosition }}
                    className="w-full aspect-[4/3] object-cover block transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-0.5">
                    PILLAR {pillar.letter}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display text-foreground mb-0.5 leading-snug transition-colors duration-[300ms] group-hover:text-primary group-focus-visible:text-primary motion-reduce:transition-none">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-foreground/85 mb-1.5 leading-snug">
                    {pillar.subtitle}
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2.5">
                    {pillar.lead}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                    {pillar.listIntro}
                  </p>
                  <div className="space-y-1">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-1.5 text-xs text-muted-foreground leading-snug">
                        <Check size={13} className="text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: WHAT IS INCLUDED & WHO CAN JOIN (UNIFIED CONTENT AREA) */}
      <section className="py-12 md:py-14">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* SECTION 3: WHAT IS INCLUDED */}
          <div className="flex flex-col justify-between p-5 sm:p-6 bg-card/60 border border-border/80 border-t-2 border-t-primary rounded-[2px] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:shadow-[0_14px_30px_-10px_rgba(58,42,32,0.12)]">
            <div>
              <span className="eyebrow">COMPREHENSIVE SUPPORT</span>
              <h2 className="text-2xl sm:text-3xl font-display text-foreground mt-2 mb-2 leading-tight">
                {inclusions.heading}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-4">
                {inclusions.introduction}
              </p>
              <div className="divide-y divide-border/60 border-y border-border/60 mb-4">
                {inclusions.points.map((point) => (
                  <div key={point} className="py-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-snug">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-border/40 mt-auto">
              <p className="text-xs text-muted-foreground italic">
                {inclusions.note}
              </p>
            </div>
          </div>

          {/* SECTION 4: WHO CAN JOIN */}
          <div className="flex flex-col justify-between p-5 sm:p-6 bg-card/60 border border-border/80 border-t-2 border-t-primary rounded-[2px] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:shadow-[0_14px_30px_-10px_rgba(58,42,32,0.12)]">
            <div>
              <span className="eyebrow">ELIGIBILITY &amp; READINESS</span>
              <h2 className="text-2xl sm:text-3xl font-display text-foreground mt-2 mb-2 leading-tight">
                {whoCanJoin.heading}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-1.5">
                {whoCanJoin.introduction}
              </p>
              <p className="text-foreground font-semibold text-xs sm:text-sm mb-3">
                {whoCanJoin.prompt}
              </p>
              <div className="divide-y divide-border/60 border-y border-border/60 mb-4">
                {whoCanJoin.points.map((point) => (
                  <div key={point} className="py-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-snug">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-border/40 mt-auto">
              <p className="text-xs text-muted-foreground font-medium">
                {whoCanJoin.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE AURA JOURNEY – FOUR LEVELS */}
      <section className="py-12 md:py-14 bg-muted/30 border-y border-border/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="eyebrow">PROGRESSIVE PATHWAY</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display text-foreground leading-tight">
              {journeyLevels.heading}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {journeyLevels.introduction}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {journeyLevels.levels.map((lvl) => (
              <div
                key={lvl.number}
                className="group p-4 sm:p-4.5 bg-background/90 border border-border/70 border-t-2 border-t-primary rounded-[2px] shadow-xs flex flex-col justify-start transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:bg-background hover:border-primary/40 hover:border-t-primary hover:shadow-[0_14px_28px_-10px_rgba(58,42,32,0.14)] motion-reduce:transition-none motion-reduce:hover:scale-100 cursor-default"
              >
                <span className="font-mono text-lg font-bold text-primary/70 mb-1.5 transition-colors duration-[300ms] group-hover:text-primary">
                  {lvl.number}
                </span>
                <h3 className="font-display text-base sm:text-lg text-foreground mb-1.5 leading-snug font-semibold transition-colors duration-[300ms] group-hover:text-primary">
                  {lvl.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-[13px] leading-relaxed">
                  {lvl.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4 sm:mt-5 italic max-w-xl mx-auto">
            {journeyLevels.note}
          </p>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE AURA AT THE WISDOM BHARAT? */}
      <section className="py-12 md:py-14">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="max-w-[280px] sm:max-w-[320px] mx-auto lg:w-full rounded-[2px] overflow-hidden border-b-4 border-primary shadow-xs">
              <img
                src={assets.founder}
                alt="Dr. Priya Ranjan Sahu, founder of The Wisdom Bharat"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover object-top block"
              />
            </div>
            <span className="text-center text-[11px] font-mono tracking-wider text-muted-foreground uppercase mt-2.5 block">
              DR. PRIYA RANJAN SAHU &bull; FOUNDER
            </span>
          </div>
          <div className="lg:col-span-8">
            <span className="eyebrow">THE FOUNDER &bull; METHOD</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground mt-2 mb-2 leading-tight">
              {whyChooseUs.heading}
            </h2>
            <p className="font-display italic text-foreground/90 text-base sm:text-lg mb-3 pl-3 border-l-2 border-primary">
              {whyChooseUs.lead}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              {whyChooseUs.approachIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {whyChooseUs.points.map((point) => (
                <div key={point} className="flex items-center gap-2 p-2 bg-card border border-border/70 rounded-[2px] text-xs font-medium text-foreground/90">
                  <Check size={15} className="text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
              {whyChooseUs.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <ActionLink>Book a Consultation</ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT CAN YOU EXPECT? */}
      <section className="py-12 md:py-14 bg-muted/30 border-y border-border/50">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <span className="eyebrow">OUTCOMES &bull; EXPERIENCE</span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display text-foreground">
            {expectations.heading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            {expectations.introduction}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-left mt-6 mb-4">
            {expectations.points.map((point) => (
              <div
                key={point}
                className="group p-3 sm:p-3.5 bg-background/90 border border-border/70 rounded-[2px] flex items-start gap-2.5 shadow-xs transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] hover:bg-background hover:border-primary/40 hover:shadow-[0_8px_18px_-6px_rgba(58,42,32,0.12)] motion-reduce:transition-none motion-reduce:hover:scale-100 cursor-default"
              >
                <Check size={16} className="text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs sm:text-sm text-foreground/90 leading-snug font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground italic mt-3 max-w-2xl mx-auto">
            {expectations.disclaimer}
          </p>
        </div>
      </section>

      {/* SECTION 9: DISCLAIMER */}
      <section className="py-6 bg-muted/20 border-b border-border/50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto p-3.5 sm:p-4 bg-background border border-primary/25 border-l-4 border-l-primary rounded-[2px] flex items-start gap-3 shadow-xs">
            <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
            <div className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground block mb-0.5 uppercase tracking-wider text-[11px]">
                Important Holistic Wellness Disclaimer
              </span>
              <p>{disclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BEGIN YOUR AURA JOURNEY (CTA SECTION) */}
      <section className="py-12 md:py-14 bg-[var(--dark-surface)] text-[var(--dark-text)]">
        <div className="container-wide max-w-3xl mx-auto px-4 text-center">
          <span className="eyebrow !text-[var(--gold)] text-xs">BEGIN YOUR PATH</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mt-2 mb-2 text-white">
            {beginJourney.heading}
          </h2>
          <p className="font-display text-base sm:text-lg text-[var(--gold)] italic mb-4">
            {beginJourney.subheading}
          </p>
          <div className="space-y-2.5 text-xs sm:text-sm text-stone-200/90 mb-6 leading-relaxed max-w-2xl mx-auto">
            {beginJourney.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="p-4 sm:p-5 bg-white/5 border border-white/10 rounded-[2px] max-w-lg mx-auto mb-5">
            <h3 className="font-display text-lg sm:text-xl text-white mb-1.5">
              {beginJourney.ctaHeader}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200/80 mb-4">
              {beginJourney.ctaDescription}
            </p>
            <ActionLink light>Book a Consultation</ActionLink>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">
            {beginJourney.tagline}
          </p>
        </div>
      </section>

      {/* SECTION 10: DEDICATED AURA FAQ SECTION */}
      <section id="aura-faq" className="py-12 md:py-14 bg-muted/40 border-t border-border/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="eyebrow">AURA ENERGY SCANNING FAQ</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Clear answers about the AURA Energy Scanning program, methodology, session formats, and expectations.
            </p>
          </div>
          <FaqList items={auraFaqs} columns={2} />
        </div>
      </section>

      {/* RELATED SERVICES LINKS */}
      <section className="py-10 md:py-12 bg-muted/20 border-t border-border/50">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="eyebrow">EXPLORE MORE</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-display text-foreground">
                Other ways to grow.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {services
              .filter((_, i) => i !== 4)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={other.slug}
                  className="p-3.5 sm:p-4 bg-background border border-border/70 rounded-[2px] flex items-center justify-between text-sm sm:text-base font-semibold text-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-xs group"
                >
                  <span className="group-hover:text-primary transition-colors">{other.title}</span>
                  <ArrowRight size={16} className="text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
export function ProgramsPage() { return <><PageHeader eyebrow="PROGRAMS" title="Make room for lasting change." intro="Explore the programs and sessions listed by The Wisdom Bharat."/><section className="section-pad"><div className="container-wide program-list">{programs.map((p,i) => <div className="program-row" key={p.title}><span className="eyebrow">0{i+1}</span><div><h2>{p.title}</h2><p>{p.detail}</p></div><Button asChild variant="outline" className="outline-link"><a href={bookingUrl} target="_blank" rel="noopener noreferrer">Enquire <ArrowRight size={16}/></a></Button></div>)}</div></section><BottomCTA/></>; }
export function BookPage() { return <><PageHeader eyebrow="THE BOOK" title="Ideas for a more intentional life."/><section className="section-pad"><div className="container-wide editorial-split book-page-layout"><div className="book-page-photo"><img src={assets.book} alt="Awaken Your Ultimate High Performance System by Dr. Priya Ranjan Sahu book cover"/></div><div className="editorial-copy"><span className="eyebrow">BY DR. PRIYA RANJAN SAHU</span><h2>Awaken Your Ultimate High Performance System</h2><p>A guide to exploring mindset, habits and energy alignment. In the book, Dr. Priya Ranjan Sahu (Life Coach PR) draws from NLP and ancient wisdom to consider high performance alongside balance and purpose.</p><ExternalButton href={bookUrl}>View on Amazon</ExternalButton></div></div></section><BottomCTA/></>; }

export function ContactPage() { const [sent,setSent]=useState(false); const [name,setName]=useState(""); const [from,setFrom]=useState(""); const [message,setMessage]=useState(""); function submit(e: FormEvent) { e.preventDefault(); const cleanName = name.trim().slice(0, 100); const cleanEmail = from.trim().slice(0, 120); const cleanMessage = message.trim().slice(0, 2000); if (!cleanName || !cleanEmail || !cleanMessage) return; const subject=encodeURIComponent(`Enquiry from ${cleanName}`); const body=encodeURIComponent(`Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`); window.location.href=`mailto:${email}?subject=${subject}&body=${body}`; setSent(true); } return <><PageHeader eyebrow="CONTACT" title="Let’s start a conversation." intro="Have a question or want to explore what’s right for you? We’d love to hear from you."/><section className="section-pad"><div className="container-wide contact-layout"><div className="contact-info"><span className="eyebrow">REACH OUT</span><h2>We’re here to listen.</h2><p>Use the form to compose an email, or contact us directly through the channels below.</p><a href={`mailto:${email}`}><Mail size={19}/>{email}</a><a href={phoneHref}><Phone size={19}/>{phoneNumber}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><ArrowRight size={19}/>WhatsApp: {whatsappNumber}</a><a href={whatsappSecondaryUrl} target="_blank" rel="noopener noreferrer"><ArrowRight size={19}/>Alternative WhatsApp: {whatsappSecondaryNumber}</a><div className="contact-address"><MapPin size={19}/><span className="whitespace-pre-line">{address}</span></div><div className="pt-4 mt-2 border-t border-border/60"><ActionLink>Book a Consultation</ActionLink></div></div><form className="contact-form" onSubmit={submit}><h3>Send an enquiry</h3><label htmlFor="name">Your name</label><input required maxLength={100} id="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name"/><label htmlFor="email">Email address</label><input required maxLength={120} id="email" type="email" value={from} onChange={e=>setFrom(e.target.value)} placeholder="you@example.com"/><label htmlFor="message">Your message</label><textarea required maxLength={2000} id="message" rows={6} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us a little about what you’re looking for"/><Button type="submit" className="action-link">Compose email <ArrowRight size={17}/></Button>{sent && <p role="status" className="form-note">Your email app should open with your message ready to send. Please send it there to complete your enquiry.</p>}</form></div></section></>; }
export function BookingPage() { 
  return (
    <>
      <PageHeader 
        eyebrow="BOOK A CONSULTATION" 
        title="Take the first step." 
        intro="Schedule your private 1 on 1 session with Dr. Priya Ranjan Sahu, or get in touch before you decide."
      />
      <section className="section-pad">
        <div className="container-wide">
          <div className="booking-layout">
            <div>
              <span className="eyebrow">YOUR NEXT STEP</span>
              <h2>Let’s talk about what matters to you.</h2>
              <p>
                A consultation is a chance to explore your goals, energy alignment and personal growth directly with Dr. Priya Ranjan Sahu. Select your date and time to confirm your session.
              </p>

              {/* Author Highlight Card - featuring Dr. Priya Ranjan Sahu's photo instead of brand logo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-card border border-border rounded-sm shadow-sm mb-8 max-w-xl">
                <img 
                  src={assets.founder} 
                  alt="Dr. Priya Ranjan Sahu" 
                  className="w-24 h-24 rounded-full object-cover object-[56%_38%] border-2 border-primary/50 shrink-0 shadow-md"
                />
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-1">
                    Direct Consultation
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Dr. Priya Ranjan Sahu
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Founder, Author, Certified NLP Practitioner &amp; Reiki Master
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    Available Online &amp; In Person at CellCity Kendujhar &amp; Jayadev Vihar, Bhubaneswar, Odisha
                  </p>
                </div>
              </div>

              <div>
                <ExternalButton href={bookingUrl}>Open booking calendar</ExternalButton>
                <p className="booking-note mt-3 text-xs text-muted-foreground">
                  Booking opens in a new tab on the appointment platform.
                </p>
              </div>
            </div>

            <div className="booking-aside">
              <h3>Prefer to ask first?</h3>
              <p>Send a message and we’ll help you find a starting point.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp ({whatsappNumber}) <ArrowRight size={17}/>
              </a>
              <a href={whatsappSecondaryUrl} target="_blank" rel="noopener noreferrer">
                Alternative WhatsApp ({whatsappSecondaryNumber}) <ArrowRight size={17}/>
              </a>
              <a href={phoneHref}>
                Call {phoneNumber} <ArrowRight size={17}/>
              </a>
              <a href={`mailto:${email}`}>
                Email us ({email}) <ArrowRight size={17}/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  ); 
}
export function PrivacyPage() { return <><PageHeader eyebrow="LEGAL" title="Privacy Policy"/><section className="section-pad"><article className="container-wide legal-copy"><p>At The Wisdom Bharat, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use and safeguard your information when you visit our website or enroll in our programs.</p><h2>Information we collect</h2><p>We may collect your name, contact details (such as email and phone), information shared during registrations, consultations or form submissions, payment information if you purchase a service or course, and usage data such as pages visited and browser type.</p><h2>How we use information</h2><p>We use this data to communicate with you about programs, sessions or offers; provide healing or coaching services; improve our website and customer experience; and maintain records for internal and legal purposes.</p><h2>Information security</h2><p>Your information is stored securely. We never sell or share your data with unauthorized third parties.</p><h2>Cookies</h2><p>We may use cookies to enhance website performance and personalize user experience.</p><h2>Your rights</h2><p>You can request correction or deletion of your personal data at any time by writing to <a href={`mailto:${email}`}>{email}</a>.</p><h2>Contact</h2><p>For any concerns, email <a href={`mailto:${email}`}>{email}</a> or call <a href={phoneHref}>{phoneNumber}</a> (WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{whatsappNumber}</a>).</p></article></section></>; }
export function TermsPage() { return <><PageHeader eyebrow="LEGAL" title="Terms & Conditions"/><section className="section-pad"><article className="container-wide legal-copy"><h2>1. Acceptance of terms</h2><p>By accessing or using our website or enrolling in any program, you agree to these terms.</p><h2>2. Services</h2><p>We offer educational, coaching and healing services including NLP, Reiki, Garbhsanskar and wellness courses. These are not a substitute for medical treatment.</p><h2>3. Payment & refunds</h2><p>All payments are non refundable unless specifically mentioned. In case of technical or scheduling issues, sessions may be rescheduled.</p><h2>4. User conduct</h2><p>You agree to provide accurate information and not misuse the website or its content.</p><h2>5. Confidentiality</h2><p>All client information shared during coaching or healing sessions is kept strictly confidential.</p><h2>6. Limitation of liability</h2><p>The Wisdom Bharat is not responsible for any health or emotional outcomes resulting from misuse or non implementation of the guidance provided.</p><h2>7. Updates to terms</h2><p>We reserve the right to update these terms at any time. Continued use of the website implies acceptance of updated terms.</p></article></section></>; }


function AwardsCarousel({
  isZoomOpen,
  onZoomAward,
}: {
  isZoomOpen: boolean;
  onZoomAward: (awardIndex: number) => void;
}) {
  const count = founderAwards.length;
  const awardSlides = [...founderAwards, ...founderAwards];
  const initialIndex = count;

  const [carouselRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    duration: 28,
    startIndex: initialIndex,
  });

  const [selectedSnap, setSelectedSnap] = useState<number>(initialIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedSnap(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused || isZoomOpen || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => window.clearInterval(timer);
  }, [emblaApi, isPaused, isZoomOpen, prefersReducedMotion, selectedSnap]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollToRealIndex = useCallback(
    (targetRealIdx: number) => {
      if (!emblaApi) return;
      const optionA = targetRealIdx;
      const optionB = targetRealIdx + count;
      const distA = Math.abs(optionA - selectedSnap);
      const distB = Math.abs(optionB - selectedSnap);
      emblaApi.scrollTo(distA <= distB ? optionA : optionB);
    },
    [emblaApi, count, selectedSnap],
  );

  const activeRealIndex = ((selectedSnap % count) + count) % count;

  return (
    <div
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Awards & Recognitions"
    >
      <div className="relative overflow-hidden py-2">
        <div ref={carouselRef} className="overflow-hidden px-1 sm:px-3">
          <div className="flex items-stretch -ml-3 sm:-ml-4">
            {awardSlides.map((award, slideIdx) => {
              const isActive = slideIdx === selectedSnap;
              const realIdx = slideIdx % count;

              return (
                <div
                  key={`${award.id}-${slideIdx}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${realIdx + 1} of ${count}: ${award.title}`}
                  className="min-w-0 shrink-0 grow-0 basis-[76%] sm:basis-[58%] md:basis-[52%] lg:basis-[50%] pl-3 sm:pl-4 flex"
                >
                  <article
                    onClick={() => {
                      if (isActive) {
                        onZoomAward(realIdx);
                      } else {
                        emblaApi?.scrollTo(slideIdx);
                      }
                    }}
                    className={`group w-full flex flex-col text-left rounded-sm p-3.5 sm:p-4 border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none cursor-pointer ${
                      isActive
                        ? "bg-background border-primary/45 shadow-[0_14px_30px_-14px_rgba(58,42,32,0.16)] scale-100 opacity-100 z-10 hover:border-primary/70"
                        : "bg-background/85 border-border/75 scale-[0.86] sm:scale-[0.88] opacity-55 hover:opacity-80 z-0"
                    }`}
                  >
                    <div className="w-full h-[165px] sm:h-[185px] md:h-[195px] flex items-center justify-center bg-muted/30 p-2.5 rounded-sm border border-border/60 border-b-2 border-b-primary/75 relative overflow-hidden mb-3">
                      <img
                        src={award.image}
                        alt={award.alt}
                        width={award.width}
                        height={award.height}
                        loading="lazy"
                        className={`max-h-full max-w-full w-auto h-auto object-contain drop-shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                          isActive ? "group-hover:scale-[1.03] motion-reduce:group-hover:scale-100" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-background text-foreground px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase rounded-sm shadow-md flex items-center gap-1.5 border border-border">
                            <ZoomIn size={13} /> View Full Resolution
                          </span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg sm:text-xl text-foreground mb-1.5 leading-snug">
                      {award.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-[13px] leading-[1.6] flex-1">
                      {award.description}
                    </p>

                    <div className="w-full mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between gap-2 text-[11px]">
                      {isActive ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onZoomAward(realIdx);
                          }}
                          className="inline-flex items-center gap-1.5 font-semibold tracking-wider uppercase text-primary hover:underline cursor-pointer"
                        >
                          <ZoomIn size={13} /> View Full Resolution
                        </button>
                      ) : (
                        <span className="text-muted-foreground font-medium tracking-wide">
                          Click to inspect
                        </span>
                      )}
                      <span className="font-mono text-muted-foreground">{award.date}</span>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous award"
          className="absolute left-1.5 sm:left-3 top-[92px] sm:top-[104px] z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/95 border border-border text-foreground shadow-sm hover:border-primary hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next award"
          className="absolute right-1.5 sm:right-3 top-[92px] sm:top-[104px] z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/95 border border-border text-foreground shadow-sm hover:border-primary hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Select award">
          {founderAwards.map((award, idx) => {
            const isSelected = activeRealIndex === idx;
            return (
              <button
                key={award.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View ${award.title}`}
                onClick={() => scrollToRealIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                }`}
              />
            );
          })}
        </div>
        <span className="text-[11px] font-mono text-muted-foreground tracking-widest">
          0{activeRealIndex + 1} / 0{count}
        </span>
      </div>
    </div>
  );
}

export function CertificateGallery() {
  const [active, setActive] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const credentials = [
    {
      id: "nlp",
      title: "Certified NLP Practitioner",
      institution: "Neuro Linguistic Programming",
      description: "Advanced certification in identifying and reframing limiting beliefs, timeline therapy, and subconscious alignment for enduring human transformation.",
      image: assets.nlpCert,
      badge: "Verified Practitioner"
    },
    {
      id: "reiki-master",
      title: "Reiki Master & Teacher",
      institution: "Traditional Reiki Healing",
      description: "Mastery level degree in Japanese energy healing, encompassing high level energy alignment and practitioner attunements across Levels 1, 2, and 3.",
      image: assets.reikiMasterCert,
      badge: "Master Degree"
    },
    {
      id: "reiki-first",
      title: "Reiki First Degree",
      institution: "Traditional Usui Shiki Ryoho",
      description: "Foundation in hands on holistic healing, energy harmonization, stress alleviation, and traditional meditative self healing protocols.",
      image: assets.reikiCert,
      badge: "First Degree Lineage"
    }
  ];

  const modalItems = [
    ...credentials.map((c) => ({
      title: c.title,
      subtitle: c.institution,
      image: c.image,
      alt: c.title,
    })),
    ...founderAwards.map((a) => ({
      title: a.title,
      subtitle: a.date,
      image: a.image,
      alt: a.alt,
    })),
  ];

  useEffect(() => {
    if (zoomedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedIndex(null);
      if (e.key === "ArrowLeft") setZoomedIndex((prev) => (prev === null ? null : (prev - 1 + modalItems.length) % modalItems.length));
      if (e.key === "ArrowRight") setZoomedIndex((prev) => (prev === null ? null : (prev + 1) % modalItems.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomedIndex, modalItems.length]);

  const cert = credentials[active]!;
  const zoomedItem = zoomedIndex !== null ? modalItems[zoomedIndex] : null;

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
            Authentic qualifications held by Dr. Priya Ranjan Sahu across Neuro Linguistic Programming and Traditional Reiki healing lineage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certificate Showcase Display Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div 
              onClick={() => setZoomedIndex(active)} 
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
                  className={`p-6 border transition-all duration-300 cursor-pointer text-left relative rounded-sm ${
                    isSelected 
                      ? "bg-background border-primary shadow-sm ring-1 ring-primary/20" 
                      : "bg-background/60 border-border hover:border-primary/40 hover:bg-background"
                  }`}
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
                        onClick={(e) => { e.stopPropagation(); setZoomedIndex(active); }}
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
                <p className="text-2xl font-display text-primary font-bold">PhD</p>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold tracking-wider mt-0.5">Degree Level</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Awards & Recognitions Subsection */}
        <div className="mt-12 pt-10 border-t border-border">
          <div className="mb-6">
            <span className="eyebrow">RECOGNITIONS</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground mt-2">
              Awards &amp; Recognitions
            </h3>
          </div>

          <AwardsCarousel
            isZoomOpen={zoomedIndex !== null}
            onZoomAward={(awardIdx) => setZoomedIndex(credentials.length + awardIdx)}
          />
        </div>
      </div>

      {zoomedItem && zoomedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          onClick={() => setZoomedIndex(null)}
        >
          <div className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between gap-4 pb-3 text-white mb-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block">
                  {zoomedItem.subtitle}
                </span>
                <h4 className="font-display text-lg text-white">
                  {zoomedItem.title}
                </h4>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setZoomedIndex((zoomedIndex - 1 + modalItems.length) % modalItems.length)}
                  className="w-9 h-9 inline-flex items-center justify-center text-white/85 hover:text-white bg-white/10 hover:bg-white/20 rounded-sm transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomedIndex((zoomedIndex + 1) % modalItems.length)}
                  className="w-9 h-9 inline-flex items-center justify-center text-white/85 hover:text-white bg-white/10 hover:bg-white/20 rounded-sm transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase bg-white/10 hover:bg-white/20 px-3 py-2 rounded-sm"
                  onClick={() => setZoomedIndex(null)}
                >
                  <X size={16} /> Close
                </button>
              </div>
            </div>
            <div className="bg-black/40 border border-white/15 p-2 rounded-sm max-h-[85vh] flex items-center justify-center overflow-hidden">
              <img src={zoomedItem.image} alt={zoomedItem.alt} className="max-w-full max-h-[80vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================================
// Scalable Video Testimonial Player with Non-Glitching Pre-Seek State Preservation
// ============================================================================
function VideoTestimonialPlayer({
  video,
  onPlayStateChange,
}: {
  video: (typeof videoTestimonials)[0];
  onPlayStateChange?: (isPlaying: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isSeekingRef = useRef(false);
  const wasPlayingBeforeSeekRef = useRef(false);
  const lastSeekTimeRef = useRef<number>(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPos, setHoverPos] = useState<number | null>(null);
  const controlsTimeoutRef = useRef<any>(null);

  // Sync fullscreen state with document fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fsEl = document.fullscreenElement || (document as any).webkitFullscreenElement;
      setIsFullscreen(fsEl === containerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Notify parent of play state changes
  useEffect(() => {
    onPlayStateChange?.(isPlaying);
  }, [isPlaying, onPlayStateChange]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      onPlayStateChange?.(false);
    };
  }, [onPlayStateChange]);

  // Format seconds to mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Reset playback if the video source changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    onPlayStateChange?.(false);
    setCurrentTime(0);
    setDuration(0);
  }, [video.id, video.videoUrl, onPlayStateChange]);

  // Controls auto-hide timer
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        if (!isSeekingRef.current) setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    resetControlsTimeout();
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    // If currently seeking or just released seek within 250ms, do NOT toggle playback!
    if (isSeekingRef.current) return;
    if (Date.now() - lastSeekTimeRef.current < 250) return;

    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      const p = v.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          onPlayStateChange?.(true);
        }).catch(() => {
          // If browser policy prevents unmuted play without direct user activation, attempt muted playback
          v.muted = true;
          setIsMuted(true);
          v.play()
            .then(() => {
              setIsPlaying(true);
              onPlayStateChange?.(true);
            })
            .catch(() => {
              setIsPlaying(false);
              onPlayStateChange?.(false);
            });
        });
      }
    } else {
      v.pause();
      setIsPlaying(false);
      onPlayStateChange?.(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const c = containerRef.current;
    const v = videoRef.current;
    if (!c) return;

    const isFs = !!(document.fullscreenElement || (document as any).webkitFullscreenElement);

    if (!isFs) {
      if (c.requestFullscreen) {
        c.requestFullscreen().catch(() => {});
      } else if ((c as any).webkitRequestFullscreen) {
        (c as any).webkitRequestFullscreen();
      } else if (v && (v as any).webkitEnterFullscreen) {
        (v as any).webkitEnterFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  // Progress/Seek timeline calculation from PointerEvent
  const calculateTargetTime = (clientX: number) => {
    const timeline = timelineRef.current;
    const v = videoRef.current;
    if (!timeline || !v || !v.duration) return 0;
    const rect = timeline.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const ratio = offsetX / rect.width;
    return ratio * v.duration;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const v = videoRef.current;
    if (!v || !v.duration) return;

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}

    isSeekingRef.current = true;
    // PRESERVE PLAYBACK STATE BEFORE SEEKING:
    // If playing before seek -> wasPlayingBeforeSeek = true
    // If paused before seek -> wasPlayingBeforeSeek = false
    wasPlayingBeforeSeekRef.current = !v.paused && !v.ended;

    const targetTime = calculateTargetTime(e.clientX);
    v.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const timeline = timelineRef.current;
    const v = videoRef.current;
    if (timeline && v && v.duration) {
      const rect = timeline.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setHoverPos((offsetX / rect.width) * 100);
      setHoverTime((offsetX / rect.width) * v.duration);
    }

    if (!isSeekingRef.current) return;
    e.stopPropagation();
    e.preventDefault();

    const targetTime = calculateTargetTime(e.clientX);
    if (v) {
      v.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSeekingRef.current) return;
    e.stopPropagation();
    e.preventDefault();

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    isSeekingRef.current = false;
    lastSeekTimeRef.current = Date.now();

    const v = videoRef.current;
    if (v) {
      // PRESERVE STATE:
      // If was playing before seek -> continue playing smoothly from new position!
      // If was paused before seek -> remain paused at new position!
      if (wasPlayingBeforeSeekRef.current) {
        const p = v.play();
        if (p !== undefined) {
          p.then(() => {
            setIsPlaying(true);
            onPlayStateChange?.(true);
          }).catch(() => {
            setIsPlaying(false);
            onPlayStateChange?.(false);
          });
        }
      } else {
        v.pause();
        setIsPlaying(false);
        onPlayStateChange?.(false);
      }
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={resetControlsTimeout}
      onTouchStart={resetControlsTimeout}
      className={`relative w-full aspect-[9/16] rounded-lg overflow-hidden bg-black shadow-lg border border-white/10 group select-none mx-auto video-card-container ${
        isFullscreen
          ? "!max-w-none !max-h-none !aspect-auto !w-full !h-full !rounded-none !border-none flex items-center justify-center"
          : "max-w-[215px] sm:max-w-[225px] max-h-[370px] sm:max-h-[385px]"
      }`}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        poster={video.posterUrl}
        playsInline
        preload="metadata"
        className={`w-full h-full cursor-pointer ${
          isFullscreen ? "object-contain" : "object-cover"
        }`}
        onClick={togglePlay}
        onPlay={() => {
          setIsPlaying(true);
          onPlayStateChange?.(true);
        }}
        onPause={() => {
          setIsPlaying(false);
          onPlayStateChange?.(false);
        }}
        onTimeUpdate={() => {
          if (!isSeekingRef.current && videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            setDuration(videoRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          onPlayStateChange?.(false);
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
      />

      {/* Play Overlay Button before first play or when paused */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 flex flex-col items-center justify-between p-3.5 sm:p-4 cursor-pointer transition-opacity duration-300"
        >
          <div className="w-full flex justify-between items-center text-white/90">
            <span className="text-[9px] font-bold tracking-[0.18em] uppercase bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
              Client Video
            </span>
            <span className="text-[11px] font-mono text-white/90 bg-black/50 px-1.5 py-0.5 rounded">
              {formatTime(duration)}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={`Play testimonial video by ${video.name}`}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-108 border border-white/20 cursor-pointer"
          >
            <Play size={22} className="fill-current translate-x-0.5" />
          </button>

          <div className="text-center w-full">
            <p className="text-white text-xs font-semibold tracking-wide drop-shadow-sm">
              Click to play with sound
            </p>
            <p className="text-white/70 text-[10px] mt-0.5">
              Drag progress bar to seek
            </p>
          </div>
        </div>
      )}

      {/* Floating Bottom Control Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2.5 pt-6 transition-opacity duration-300 flex flex-col gap-1.5 ${
          isFullscreen ? "max-w-2xl mx-auto pb-5 px-4" : ""
        } ${
          showControls || !isPlaying ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrubber / Progress Bar */}
        <div
          ref={timelineRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onPointerLeave={() => {
            setHoverTime(null);
            setHoverPos(null);
          }}
          className="relative w-full h-4 flex items-center cursor-pointer group/timeline touch-none"
        >
          {/* Background Track */}
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden transition-all duration-150 group-hover/timeline:h-1.5">
            {/* Fill Track */}
            <div
              className="h-full bg-primary rounded-full relative"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Draggable Scrubber Knob */}
          <div
            className="absolute w-3 h-3 bg-white rounded-full shadow-md border border-black/20 pointer-events-none transition-transform duration-100 group-hover/timeline:scale-125"
            style={{ left: `calc(${progressPercent}% - 6px)` }}
          />

          {/* Hover Time Tooltip */}
          {hoverPos !== null && hoverTime !== null && (
            <div
              className="absolute -top-6 text-[9px] font-mono text-white bg-black/85 px-1 py-0.5 rounded pointer-events-none -translate-x-1/2 border border-white/10"
              style={{ left: `${hoverPos}%` }}
            >
              {formatTime(hoverTime)}
            </div>
          )}
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1 hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={15} className="fill-current" /> : <Play size={15} className="fill-current" />}
            </button>

            <span className="font-mono text-[10px] sm:text-[11px] text-white/90">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleMute}
              className="p-1 hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1 hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label={isFullscreen ? "Exit fullscreen" : "Toggle fullscreen"}
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Scalable Video Testimonials Carousel - Compact Editorial Redesign
// ============================================================================
function VideoTestimonialsCarousel() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const count = videoTestimonials.length;
  const currentVideo = videoTestimonials[activeVideoIndex] || videoTestimonials[0]!;

  const handleNextVideo = () => {
    setIsVideoPlaying(false);
    setActiveVideoIndex((prev) => (prev + 1) % count);
  };

  const handlePrevVideo = () => {
    setIsVideoPlaying(false);
    setActiveVideoIndex((prev) => (prev - 1 + count) % count);
  };

  // Automatically advance testimonials when video is NOT playing
  useEffect(() => {
    if (isVideoPlaying || count <= 1) return;

    const timer = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % count);
    }, 4500);

    return () => clearInterval(timer);
  }, [isVideoPlaying, count, activeVideoIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) touchStartXRef.current = touch.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touch = e.changedTouches[0];
    const diff = touchStartXRef.current - (touch?.clientX ?? 0);
    if (diff > 45 && count > 1) {
      handleNextVideo();
    } else if (diff < -45 && count > 1) {
      handlePrevVideo();
    }
    touchStartXRef.current = null;
  };

  const getShortName = (name: string, location?: string) => {
    if (name.startsWith("Dr.")) return name;
    if (name.startsWith("Sub Inspector")) return "SI R. N.";
    if (name === "Client Experience" && location) {
      return location.split(",")[0]!.trim();
    }
    return name.split(" ")[0];
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Two-Column Showcase Card */}
      <div
        className="relative bg-background border border-border/80 rounded-xl shadow-xs overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle Animated Progress Line Showing Active Auto-Carousel Timer */}
        {!isVideoPlaying && count > 1 && (
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-primary/15 overflow-hidden z-20 pointer-events-none">
            <div
              key={activeVideoIndex}
              className="h-full bg-primary rounded-full"
              style={{
                animation: "carouselProgress 4500ms linear forwards",
              }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Left Column: Video Player (~42-45% width: 5 of 12 cols = 41.7%) */}
          <div className="md:col-span-5 bg-stone-950 flex items-center justify-center p-3 sm:p-3.5 shrink-0">
            <VideoTestimonialPlayer
              key={currentVideo.id}
              video={currentVideo}
              onPlayStateChange={setIsVideoPlaying}
            />
          </div>

          {/* Right Column: Editorial Testimonial Content (~55-58% width: 7 of 12 cols = 58.3%) */}
          <div className="md:col-span-7 p-4 sm:p-5 md:p-6 flex flex-col justify-center h-full bg-background/50">
            <div key={currentVideo.id} className="transition-opacity duration-300 animate-in fade-in-50">
              {/* Top Row: Eyebrow + Unified Primary Navigation Control */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-primary uppercase bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                  {currentVideo.service || "Client Experience"}
                </span>

                {/* Subtle Unified Navigation: ‹ 05 / 05 › */}
                {count > 1 && (
                  <div className="flex items-center gap-1 shrink-0 bg-background border border-border/80 rounded-full px-2 py-0.5 shadow-2xs">
                    <button
                      type="button"
                      onClick={handlePrevVideo}
                      aria-label="Previous video testimonial"
                      className="w-6 h-6 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="text-[11px] font-mono font-medium text-muted-foreground px-1 tracking-wider">
                      {String(activeVideoIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextVideo}
                      aria-label="Next video testimonial"
                      className="w-6 h-6 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Client Name */}
              <h3 className="font-display text-xl sm:text-2xl md:text-[26px] text-foreground font-medium tracking-tight mb-1">
                {currentVideo.name}
              </h3>

              {/* Location & Authenticity Tag */}
              {(currentVideo.location || currentVideo.countryFlag) && (
                <p className="text-[11px] text-muted-foreground tracking-wider uppercase font-semibold mb-2.5 flex items-center gap-1.5 flex-wrap">
                  {currentVideo.location && <span>{currentVideo.location}</span>}
                  {currentVideo.countryFlag && <span>{currentVideo.countryFlag}</span>}
                  <span className="text-border">&bull;</span>
                  <span className="text-primary font-medium">Verified Client Experience</span>
                </p>
              )}

              {/* Testimonial Quote */}
              {currentVideo.quote && (
                <blockquote className="relative my-2.5 pl-3 border-l-2 border-primary/60 italic font-display text-base sm:text-lg text-foreground/90 leading-snug">
                  "{currentVideo.quote}"
                </blockquote>
              )}

              {/* Supporting Description */}
              {currentVideo.detail && (
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4 mt-1.5">
                  {currentVideo.detail}
                </p>
              )}
            </div>

            {/* Bottom Row: Authenticity Indicator Only (No duplicate nav) */}
            <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-primary shrink-0" />
                <span className="text-[11px] sm:text-xs">Authentic client video recording</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Media Carousel Thumbnail Strip */}
      {count > 1 && (
        <div className="mt-3.5">
          <div className="flex items-start gap-2.5 sm:gap-3 overflow-x-auto pb-1 pt-0.5 justify-start sm:justify-center no-scrollbar">
            {videoTestimonials.map((v, i) => {
              const isActive = i === activeVideoIndex;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setIsVideoPlaying(false);
                    setActiveVideoIndex(i);
                  }}
                  className="group flex flex-col items-center shrink-0 cursor-pointer focus:outline-none"
                  aria-label={`Watch ${v.name}'s testimonial video`}
                >
                  {/* Thumbnail Poster Box: 60px wide by 80px tall */}
                  <div
                    className={`relative w-[60px] h-[80px] rounded-md overflow-hidden bg-black transition-all duration-200 ${
                      isActive
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-102 shadow-xs"
                        : "border border-border/80 opacity-70 group-hover:opacity-100 group-hover:border-primary/50"
                    }`}
                  >
                    {v.posterUrl ? (
                      <img
                        src={v.posterUrl}
                        alt={v.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-stone-900">
                        <Play size={14} />
                      </div>
                    )}
                    {/* Play Badge Indicator */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-colors ${
                        isActive ? "bg-primary/25" : "bg-black/35 group-hover:bg-black/15"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-black/60 text-white/90 group-hover:scale-110"
                        } transition-transform`}
                      >
                        <Play size={10} className="fill-current translate-x-0.2" />
                      </div>
                    </div>
                  </div>

                  {/* Client Name Below */}
                  <span
                    className={`text-[11px] mt-1 text-center truncate max-w-[66px] block transition-colors leading-tight ${
                      isActive
                        ? "font-semibold text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {getShortName(v.name, v.location)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Google Business Reviews Compact Carousel (3 Cards Desktop / Responsive)
// ============================================================================
function GoogleReviewsCarousel() {
  const screenshots = googleReviewScreenshots;
  const total = screenshots.length;
  // Tripled array for seamless infinite wrap
  const loopedScreenshots = [...screenshots, ...screenshots, ...screenshots];
  const [slideIndex, setSlideIndex] = useState(total); // start at middle block
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedReview, setSelectedReview] = useState<GoogleReviewScreenshot | null>(null);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) {
          setItemsPerView(3);
        } else if (window.innerWidth >= 640) {
          setItemsPerView(2);
        } else {
          setItemsPerView(1);
        }
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev - 1);
  };

  const handleDotClick = (targetIndex: number) => {
    setIsTransitioning(true);
    setSlideIndex(total + targetIndex);
  };

  // Autoplay every 4.5 seconds; pauses on hover and resets timer on manual slide change
  useEffect(() => {
    if (isHovered || selectedReview) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, selectedReview, slideIndex]);

  // Seamless wrap without transition when reaching clone boundaries
  const handleTransitionEnd = () => {
    if (slideIndex >= total * 2) {
      setIsTransitioning(false);
      setSlideIndex(slideIndex - total);
    } else if (slideIndex < total) {
      setIsTransitioning(false);
      setSlideIndex(slideIndex + total);
    }
  };

  useEffect(() => {
    if (isTransitioning) return undefined;
    const raf = requestAnimationFrame(() => {
      setIsTransitioning(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    setIsHovered(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false);
    if (touchStartXRef.current === null) return;
    const touch = e.changedTouches[0];
    const diffX = touchStartXRef.current - (touch?.clientX ?? 0);
    const diffY = (touchStartYRef.current || 0) - (touch?.clientY ?? 0);

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const currentDisplayPosition = ((slideIndex % total) + total) % total;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-6xl mx-auto"
    >
      {/* Google Trust Banner Header - Compact and Streamlined */}
      <div className="mb-4 p-3 sm:p-4 bg-background border border-border/80 rounded-xl shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/80 border border-border flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl sm:text-2xl text-foreground">4.6</span>
              <div className="flex gap-0.5" aria-label="Rated 4.6 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i === 4
                        ? "fill-[var(--gold)]/30 text-[var(--gold)]/30"
                        : "fill-[var(--gold)] text-[var(--gold)]"
                    }
                  />
                ))}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider font-medium mt-0.5">
              GOOGLE BUSINESS REVIEWS &bull; THE WISDOM BHARAT
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
          <a
            href="https://maps.app.goo.gl/EWznU1UXJmdHHJtPA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors uppercase py-1.5 px-3 rounded border border-primary/30 hover:border-primary"
          >
            <span>View on Google</span>
            <ExternalLink size={12} />
          </a>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Google reviews"
              className="w-8 h-8 rounded-full border border-border bg-background hover:bg-secondary flex items-center justify-center text-foreground transition-colors cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <span className="text-[11px] font-mono text-muted-foreground px-1.5">
              {String(currentDisplayPosition + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Google reviews"
              className="w-8 h-8 rounded-full border border-border bg-background hover:bg-secondary flex items-center justify-center text-foreground transition-colors cursor-pointer"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* 3-Column Sliding Carousel Container */}
      <div className="relative">
        <div
          className="overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex"
            style={{
              transform: `translateX(-${slideIndex * (100 / itemsPerView)}%)`,
              transition: isTransitioning ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            }}
          >
            {loopedScreenshots.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="shrink-0 px-2 sm:px-2.5 flex"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="h-[235px] sm:h-[245px] w-full bg-background border border-border/70 rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all duration-300">
                  {/* Top Row: Google Logo/Label & Rating */}
                  <div className="flex items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                        Google Review
                      </span>
                    </div>

                    <div className="flex gap-0.5 shrink-0" aria-label={`Rated ${item.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          size={12}
                          className={
                            sIdx < item.rating
                              ? "fill-[var(--gold)] text-[var(--gold)]"
                              : "fill-muted/30 text-muted/30"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text Body */}
                  <div className="my-2 flex-1 min-h-0 flex flex-col justify-center">
                    <blockquote className="text-xs sm:text-[13px] text-foreground/85 leading-relaxed line-clamp-4 italic font-serif">
                      &ldquo;{item.reviewText}&rdquo;
                    </blockquote>
                    {item.reviewText.length > 110 && (
                      <button
                        onClick={() => setSelectedReview(item)}
                        className="text-[11px] font-medium text-primary hover:underline text-left mt-1 self-start inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Read full review</span>
                        <ArrowRight size={11} />
                      </button>
                    )}
                  </div>

                  {/* Bottom Row: Reviewer profile image, name, date, and external link */}
                  <div className="pt-2.5 border-t border-border/50 flex items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={item.avatarUrl}
                        alt={item.reviewerName}
                        className="w-8 h-8 rounded-full object-cover border border-border/80 shrink-0 shadow-2xs"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-xs text-foreground truncate leading-tight">
                          {item.reviewerName}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                          {item.dateText} {item.badgeText ? `· ${item.badgeText}` : ""}
                        </p>
                      </div>
                    </div>

                    <a
                      href={item.googleMapsUri || "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-secondary shrink-0"
                      aria-label={`View ${item.reviewerName}'s review on Google Maps`}
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Navigation Below Cards */}
      <div className="mt-3.5 flex items-center justify-center gap-1.5">
        {screenshots.map((review, dIdx) => (
          <button
            key={review.id}
            onClick={() => handleDotClick(dIdx)}
            aria-label={`Jump to review by ${review.reviewerName}`}
            className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
              dIdx === currentDisplayPosition
                ? "w-6 bg-primary"
                : "w-1.5 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Full Review Modal Dialog */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="relative w-full max-w-lg bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1.5 rounded-full hover:bg-secondary transition-colors cursor-pointer"
              aria-label="Close review dialog"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedReview.avatarUrl}
                alt={selectedReview.reviewerName}
                className="w-12 h-12 rounded-full object-cover border border-border shrink-0 shadow-xs"
              />
              <div>
                <h4 className="font-semibold text-base text-foreground">{selectedReview.reviewerName}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={
                          i < selectedReview.rating
                            ? "fill-[var(--gold)] text-[var(--gold)]"
                            : "fill-muted/30 text-muted/30"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">&bull; {selectedReview.dateText}</span>
                </div>
              </div>
            </div>

            {/* Full Text */}
            <blockquote className="text-sm sm:text-base text-foreground leading-relaxed italic border-l-2 border-primary/40 pl-4 py-1 mb-5">
              &ldquo;{selectedReview.reviewText}&rdquo;
            </blockquote>

            {/* Authentic Screenshot Proof */}
            {selectedReview.imageUrl && (
              <div className="mb-5 rounded-lg overflow-hidden border border-border/70 bg-white p-2 text-center">
                <img
                  src={selectedReview.imageUrl}
                  alt={selectedReview.altText}
                  className="w-auto max-w-full max-h-[220px] mx-auto object-contain"
                />
              </div>
            )}

            {/* Footer link */}
            <div className="flex items-center justify-between pt-3 border-t border-border/60">
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                Verified Google Business Review
              </span>
              <a
                href={selectedReview.googleMapsUri || "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Homepage Section Entry: Showcasing Video Stories & Google Reviews
// ============================================================================
export function HomepageStories() {
  return (
    <section id="experiences" className="section-pad stories-showcase bg-card/30 border-y border-border/60">
      <div className="container-wide">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow block mb-3">REAL EXPERIENCES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight mb-3">
            Stories deserve to be shared honestly.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Hear directly from people who have experienced The Wisdom Bharat.
          </p>
        </div>

        {/* 1. VIDEO TESTIMONIALS */}
        <div className="mb-12 md:mb-14">
          <div className="text-center mb-5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-1">
              01 &bull; VIDEO STORIES
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
              Watch Client Experiences
            </h3>
          </div>

          <VideoTestimonialsCarousel />
        </div>

        {/* 2. GOOGLE BUSINESS REVIEWS */}
        <div>
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-1">
              02 &bull; GOOGLE BUSINESS REVIEWS
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
              Verified Client Feedback
            </h3>
          </div>

          <GoogleReviewsCarousel />
        </div>
      </div>
    </section>
  );
}
