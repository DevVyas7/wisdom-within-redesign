import nlp from "@/assets/nlp.jpg";
import reiki from "@/assets/reiki.jpg";
import garbhsanskar from "@/assets/garbhsanskar.jpg";
import coaching from "@/assets/coaching.jpg";
import logo from "@/assets/wisdom-logo.jpg.asset.json";
import founder from "@/assets/founder-pr.jpg.asset.json";
import book from "@/assets/wisdom-book.jpg.asset.json";

export const assets = { logo: logo.url, founder: founder.url, book: book.url, nlp, reiki, garbhsanskar, coaching };
export const bookingUrl = "https://brand.thewisdombharat.com/widget/booking/ZVduiLYZzsRTOzyxDjC0";
export const whatsappUrl = "https://wa.me/919178112471";
export const email = "thewisdombharat@gmail.com";
export const bookUrl = "https://www.amazon.in/Awaken-Your-Ultimate-High-Performance-System/dp/B0CCMG3717";
export const services = [
  { title: "NLP", slug: "/services/nlp", image: nlp, eyebrow: "01 / MIND", summary: "Explore patterns of thought and build new perspectives through Neuro-Linguistic Programming.", detail: "NLP sessions focus on identifying and reframing beliefs, fears and emotional patterns. The original practice describes techniques including anchoring, timeline therapy and subconscious reframing.", points: ["Explore limiting beliefs", "Develop new thought patterns", "Work toward clarity and self-awareness"] },
  { title: "Reiki", slug: "/services/reiki", image: reiki, eyebrow: "02 / ENERGY", summary: "A gentle energy practice inviting space for rest, balance and reconnection.", detail: "Reiki is a Japanese energy healing practice offered by The Wisdom Bharat. Sessions create a quiet space for relaxation and reflection; Reiki training is also offered across Levels 1–3.", points: ["One-to-one Reiki sessions", "A calm and restorative setting", "Reiki training, Levels 1–3"] },
  { title: "Garbhsanskar", slug: "/services/garbhsanskar", image: garbhsanskar, eyebrow: "03 / BEGINNINGS", summary: "A conscious prenatal journey for parents, rooted in Indian wisdom and connection.", detail: "Garbhsanskar guidance is designed for couples from pre-conception through pregnancy, bringing together meditation, affirmations, sound, and conscious parenting practices.", points: ["Pre-conception and pregnancy guidance", "Meditation and positive affirmations", "Connection and bonding for both parents"] },
  { title: "Life & High-Performance Coaching", slug: "/services/life-coaching", image: coaching, eyebrow: "04 / GROWTH", summary: "One-to-one support for greater clarity, purpose and intentional performance.", detail: "Life and high-performance coaching brings together mindset, habits and energy alignment. Sessions are designed to help you reflect on what matters and take purposeful steps forward.", points: ["Personalized one-to-one sessions", "Mindset and habit exploration", "A focus on purpose and performance"] },
] as const;
export const programs = [
  { title: "Become Your Own Doctor", detail: "A 10-week (70-day) program listed on the original website." },
  { title: "1-on-1 NLP Counselling & Coaching", detail: "Individual guidance exploring mindset and personal patterns." },
  { title: "Reiki Healing & Training", detail: "Healing sessions and Reiki training across Levels 1–3." },
  { title: "Garbhsanskar Guidance", detail: "Conscious pregnancy support for parents and parents-to-be." },
];
export const faqs = [
  { q: "What can I expect from a consultation?", a: "A chance to discuss what you are looking for and explore which of the four offerings may be suitable. Use the booking link to see availability." },
  { q: "Do I need previous experience with NLP or Reiki?", a: "You can get in touch to discuss your experience and any questions before booking a session." },
  { q: "Is Garbhsanskar only for mothers?", a: "No. The Wisdom Bharat describes its Garbhsanskar guidance as a journey for both mothers and fathers, from pre-conception through pregnancy." },
  { q: "Are these services a substitute for medical care?", a: "No. Coaching, Reiki and Garbhsanskar guidance are not substitutes for medical treatment. Please consult a qualified healthcare professional for medical concerns." },
];
