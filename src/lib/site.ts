import nlp from "@/assets/nlp.jpg";
import reiki from "@/assets/reiki.jpg";
import garbhsanskar from "@/assets/garbhsanskar.jpg";
import coaching from "@/assets/coaching.jpg";
import yoga from "@/assets/home-yoga-nature.jpg";
import nlpCert from "@/assets/nlp-cert.png";
import reikiCert from "@/assets/reiki-cert.png";
import reikiMasterCert from "@/assets/reiki-master-cert.png";
import logoClean from "@/assets/logo-clean.png";

const founder = { url: "https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/blob-07898e5.png" };
const book = { url: "https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/BookCover.jpg" };

export const assets = { logo: logoClean, founder: founder.url, book: book.url, yoga, nlp, reiki, garbhsanskar, coaching, nlpCert, reikiCert, reikiMasterCert };
export const bookingUrl = "https://brand.thewisdombharat.com/widget/booking/ZVduiLYZzsRTOzyxDjC0";
export const whatsappUrl = "https://wa.me/919178112471";
export const email = "thewisdombharat@gmail.com";
export const bookUrl = "https://www.amazon.in/Awaken-Your-Ultimate-High-Performance-System/dp/B0CCMG3717";
// Wording follows the founder profile published at thewisdombharat.com.
export const founderAchievements = [
  { label: "Author", detail: "Awaken Your Ultimate High-Performance System" },
  { label: "Reiki Master", detail: "Reiki healing and training" },
  { label: "Certified NLP Practitioner", detail: "Neuro-Linguistic Programming" },
  { label: "10+ years", detail: "Experience in human transformation" },
  { label: "PhD in Reiki (continuing)", detail: "Advanced studies in progress" },
] as const;

export const testimonials = [
  {
    name: "Sasmita Pattnaik",
    profile: "Google Review",
    service: "9/4/2026",
    review: "A complete transformation which I can see in myself today.",
    rating: 5,
    initials: "SP"
  },
  {
    name: "Subhashree Sahu",
    profile: "Google Review",
    service: "1/9/2019",
    review: "I highly recommend Wisdom bharat to anyone looking for mental clarity and peace.",
    rating: 5,
    initials: "SS"
  },
  {
    name: "Shraddhashree Sahu",
    profile: "Google Review",
    service: "7/8/2026",
    review: "It is a supportive platform for personal growth and emotional healing.",
    rating: 5,
    initials: "SS"
  },
  {
    name: "Saswat Nayak",
    profile: "Google Review",
    service: "5/8/2026",
    review: "Priyaranjan has an incredible ability to inspire and bring clarity.",
    rating: 5,
    initials: "SN"
  },
  {
    name: "Kanchan Witore",
    profile: "Google Review",
    service: "5/8/2026",
    review: "Great experience. Sir helped me to heal in my life at a very crucial time.",
    rating: 4,
    initials: "KW"
  },
  {
    name: "Pankaj Modi",
    profile: "Google Review",
    service: "18/9/2026",
    review: "I did a meditation session and from then on it was a great experience.",
    rating: 5,
    initials: "PM"
  }
];

export const services = [
  { 
    title: "Neuro-Linguistic Programming (NLP)", 
    slug: "/services/nlp", 
    image: nlp, 
    eyebrow: "01 / MIND", 
    summary: "Reprogram deep-rooted beliefs and emotional blocks to create lasting transformation and true healing.", 
    detail: "NLP sessions focus on identifying and reframing beliefs, fears and emotional patterns. The practice utilizes techniques including anchoring, timeline therapy and subconscious reframing.", 
    introQuote: "Your mind holds the power to heal your body.",
    fullDescription: [
      "Through Neuro-Linguistic Programming (NLP), we identify and reprogram deep-rooted beliefs, fears, and emotional blocks that prevent true healing.",
      "Using techniques like anchoring, timeline therapy and subconscious reframing, we align your thoughts, emotions and energy to create lasting transformation.",
      "When blended with Reiki healing, this process restores balance, peace and harmony — helping you become the best version of yourself."
    ],
    closingQuote: "Heal the mind and the body follows.",
    points: ["Subconscious reframing", "Timeline therapy & anchoring", "Aligning thoughts, emotions, and energy"] 
  },
  { 
    title: "Reiki Healing", 
    slug: "/services/reiki", 
    image: reiki, 
    eyebrow: "02 / ENERGY", 
    summary: "The Science of Universal Life Energy. Overcome anxiety, stress, and fatigue by aligning your inner energy.", 
    detail: "Reiki is a Japanese energy healing practice offered by The Wisdom Bharat. Sessions create a quiet space for relaxation and reflection; Reiki training is also offered across Levels 1–3.", 
    introQuote: "In a world full of noise, pressure and imbalance, healing is not a luxury — it's a necessity.",
    fullDescription: [
      "As a Reiki Master, I use intuitive and guided healing techniques to help individuals overcome anxiety, stress, fatigue, relationship challenges and physical discomfort.",
      "We do this not by fighting your challenges, but by aligning the inner energy that creates them. It is a deeply restorative practice that invites profound space for rest, balance, and reconnection.",
      "We also offer comprehensive Reiki training across Levels 1, 2, and 3 for those wishing to master the practice themselves."
    ],
    closingQuote: "Because when your energy flows freely, your life begins to glow.",
    points: ["Guided intuitive healing", "Overcome stress and fatigue", "Reiki training, Levels 1–3"] 
  },
  { 
    title: "Garbhsanskar", 
    slug: "/services/garbhsanskar", 
    image: garbhsanskar, 
    eyebrow: "03 / BEGINNINGS", 
    summary: "Ancient Wisdom for Modern Mothers. Consciously nurture your baby and begin parenting before birth.", 
    detail: "Garbhsanskar guidance is designed for couples from pre-conception through pregnancy, bringing together meditation, affirmations, sound, and conscious parenting practices.", 
    introQuote: "Consciously Nurture Your Baby. Emotionally Prepare Yourself. Begin Parenting Before Birth.",
    fullDescription: [
      "Garbhsanskar is not just a practice; it is a sacred journey — a conscious connection between the mother, father, and the unborn child.",
      "Through simple yet powerful techniques, parents can nurture a happy, healthy, and high-vibration baby. Our holistic prenatal journey integrates Garbhsambad, guided meditation, positive affirmations, sound & mantra, NLP, Reiki, and conscious parenting.",
      "It is the science of soulful parenting — blending ancient rituals with modern psychology, helping families welcome their baby with awareness, joy and divine grace."
    ],
    closingQuote: "Welcome your child not just biologically — but spiritually, emotionally, and consciously.",
    points: ["Pre-conception and pregnancy guidance", "Guided meditation & affirmations", "Soulful parenting practices"] 
  },
  { 
    title: "Life & High-Performance Coaching", 
    slug: "/services/life-coaching", 
    image: coaching, 
    eyebrow: "04 / GROWTH", 
    summary: "Awaken Your Ultimate High-Performance Life with guided Mind, Body & Energy transformation.", 
    detail: "Life and high-performance coaching brings together mindset, habits and energy alignment. Sessions are designed to help you reflect on what matters and take purposeful steps forward.", 
    introQuote: "Unlock your true potential by mastering mindset, habits and energy alignment.",
    fullDescription: [
      "Our coaching framework blends proven strategies from NLP and ancient wisdom — blending science and spirituality to help you perform at your peak while staying grounded and fulfilled.",
      "Whether you're an entrepreneur, student or seeker of self-mastery, this personalized one-to-one coaching will help you build a high-performance lifestyle.",
      "Together, we build a foundation that supports continuous growth with balance, purpose and absolute joy."
    ],
    closingQuote: "Believe in yourself and all that you are.",
    points: ["Personalized one-to-one coaching", "Science meets spirituality", "High-performance lifestyle building"] 
  },
] as const;
export const programs = [
  { title: "Become Your Own Doctor", detail: "A 10-week (70-day) program listed on the original website." },
  { title: "1-on-1 NLP Counselling & Coaching", detail: "Individual guidance exploring mindset and personal patterns." },
  { title: "Reiki Healing & Training", detail: "Healing sessions and Reiki training across Levels 1–3." },
  { title: "Garbhsanskar Guidance", detail: "Conscious pregnancy support for parents and parents-to-be." },
];
export const faqs = [
  { q: "What can I expect from a consultation?", a: "A chance to discuss what you are looking for and explore which of the four offerings may be suitable. Use the booking link to see availability." },
  { q: "Do I need previous experience with NLP or Reiki?", a: "Not at all. Whether you are completely new to energy healing or have prior experience, we tailor every session to your comfort level and needs." },
  { q: "Is Garbhsanskar only for mothers?", a: "No. The Wisdom Bharat describes its Garbhsanskar guidance as a journey for both mothers and fathers, from pre-conception through pregnancy." },
  { q: "How does NLP (Neuro-Linguistic Programming) work?", a: "NLP identifies and reprograms deep-rooted beliefs, fears, and emotional blocks. Using techniques like anchoring and timeline therapy, we help align your thoughts to create lasting transformation." },
  { q: "What does a Reiki healing session involve?", a: "Reiki uses intuitive, guided healing techniques to help overcome anxiety, stress, fatigue, and physical discomfort by aligning your inner energy. It is a gentle, deeply restorative process." },
  { q: "Who can benefit from the High-Performance coaching?", a: "Our coaching is designed for entrepreneurs, students, professionals, and seekers of self-mastery who want to unlock their true potential while maintaining balance, purpose, and joy." },
  { q: "Are sessions conducted online or in person?", a: "We offer both! You can visit our center at Jayadev Vihar, Bhubaneswar, or we can arrange virtual sessions depending on the program and your location." },
  { q: "Are these services a substitute for medical care?", a: "No. Coaching, Reiki and Garbhsanskar guidance are not substitutes for medical treatment. Please consult a qualified healthcare professional for medical concerns." },
];
