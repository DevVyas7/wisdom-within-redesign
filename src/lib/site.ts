import nlp from "@/assets/nlp-session.jpg";
import reiki from "@/assets/reiki.jpg";
import garbhsanskar from "@/assets/garbhsanskar.jpg";
import coaching from "@/assets/coaching.jpg";
import yoga from "@/assets/home-yoga-nature.jpg";
import nlpCert from "@/assets/nlp-cert.png";
import reikiCert from "@/assets/reiki-cert.png";
import reikiMasterCert from "@/assets/reiki-master-cert.png";
import logoClean from "@/assets/logo-clean.png";
const heroVideo = "/hero-video.mp4";
const heroGif = "/hero-video.gif";
const garbhasanskarHero = "/images/client-updates/garbhasanskar-hero.jpg";
const guidedMeditation = "/images/client-updates/guided-meditation.jpg";
const positiveAffirmations = "/images/client-updates/positive-affirmations.jpg";
const positiveSoundMantra = "/images/client-updates/positive-sound-mantra.jpg";
const reikiWellness = "/images/client-updates/reiki-wellness.jpg";
const reikiChakra = "/images/client-updates/reiki-chakra.jpg";
const reikiHealing = "/images/client-updates/reiki-healing.jpg";
const consciousParenting = "/images/client-updates/conscious-parenting.jpg";
const awardVedicResearchIama = "/images/client-updates/award-vedic-research-iama.jpg";
const awardExcellenceVedicResearch = "/images/client-updates/award-excellence-vedic-research.jpg";
const awardMedalOfHonour = "/images/client-updates/award-medal-of-honour.jpg";

const certNlpPractitioner = "/images/certificates/Certificate_NLP_pract_BC_PR.jpg";
const certVedicReikiL1 = "/images/certificates/L1-Priya Ranjan Sahu.png";
const certVedicReikiL2 = "/images/certificates/L2-Certificate_Priya Ranjan Sahu.jpg";
const certVedicReikiL3 = "/images/certificates/L3-Priya Ranjan Sahu.png";
const certReikiMasterRishikesh = "/images/certificates/Master Certificate.jpg";
const certGarbhsanskar = "/images/certificates/certificate-garbhsanskar.jpg";

const founder = { url: "/images/client-updates/founder-phd-convocation.jpg" };
const book = { url: "https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/BookCover.jpg" };

export const assets = {
  logo: logoClean,
  founder: founder.url,
  founderConvocation: founder.url,
  book: book.url,
  yoga,
  nlp,
  reiki: reikiHealing,
  reikiHealing,
  reikiChakra,
  garbhsanskar: consciousParenting,
  garbhsanskar2: consciousParenting,
  garbhasanskarHero,
  guidedMeditation,
  positiveAffirmations,
  positiveSoundMantra,
  reikiWellness,
  consciousParenting,
  awardVedicResearchIama,
  awardExcellenceVedicResearch,
  awardMedalOfHonour,
  certNlpPractitioner,
  certVedicReikiL1,
  certVedicReikiL2,
  certVedicReikiL3,
  certReikiMasterRishikesh,
  certGarbhsanskar,
  coaching,
  nlpCert,
  reikiCert,
  reikiMasterCert,
  heroVideo,
  heroGif,
};
export const bookingUrl = "https://brand.thewisdombharat.com/widget/booking/ZVduiLYZzsRTOzyxDjC0";
export const phoneNumber = "+91 94370 85701";
export const phoneHref = "tel:+919437085701";
export const whatsappNumber = "+91 9178112471";
export const whatsappUrl = "https://wa.me/919178112471";
export const whatsappSecondaryNumber = "+91 94370 85701";
export const whatsappSecondaryUrl = "https://wa.me/919437085701";
export const email = "TheWisdombharat@gmail.com";
export const address = "CellCity Kendujhar &\nJayadev Vihar, Bhubaneswar\nOdisha";
export const socialLinks = {
  instagram: "https://www.instagram.com/_the_wisdom._.bharat._?mdxt=amRuZjF1ZzFpZjFn",
  youtube: "https://www.youtube.com/@thewisdombharat",
} as const;
export const bookUrl = "https://www.amazon.in/Awaken-Your-Ultimate-High-Performance-System/dp/B0CCMG3717";
export const founderAchievements = [
  { label: "Author", detail: "Awaken Your Ultimate High Performance System" },
  { label: "Reiki Master", detail: "Reiki healing and training" },
  { label: "Certified NLP Practitioner", detail: "Neuro Linguistic Programming" },
  { label: "10+ years", detail: "Experience in human transformation" },
  { label: "PhD in Reiki", detail: "Doctorate in Reiki" },
] as const;

export const founderCertificates = [
  {
    id: "nlp-practitioner-cert",
    title: "NLP Practitioner Certification",
    category: "Neuro-Linguistic Programming",
    discipline: "NLP",
    stage: "Foundational Qualification",
    institution: "Dr. Yogendra Singh Rathore (Inner Wellness Coach | NLP Mentor)",
    recipient: "PRIYA RANJAN SAHU",
    description:
      "Completed NLP Workshop Training & demonstrated the competence and skill of NLP practitioner (Batch of Jan'23). Provides the right to use the title of NLP practitioner or Coach.",
    image: certNlpPractitioner,
    alt: "NLP Practitioner Certification awarded to Priya Ranjan Sahu by Dr. Yogendra Singh Rathore",
    width: 723,
    height: 1024,
    date: "January 2023",
  },
  {
    id: "vedic-reiki-level-1",
    title: "Online Level -I Vedic-Usui Reiki™",
    category: "Vedic-Usui Reiki",
    discipline: "Reiki",
    stage: "Level 1",
    stepNumber: "01",
    institution: "Siddhartha Bhardwaj Foundation™",
    recipient: "Priya Ranjan Sahu",
    description:
      "Certificate of Completion for Online Level -I Vedic-Usui Reiki™. Attunement and knowledge of Vedic Concepts behind Reiki provided by Dr. Siddhartha Bhardwaj (Course Mentor & Reiki Grandmaster).",
    image: certVedicReikiL1,
    alt: "Certificate of Completion for Online Level -I Vedic-Usui Reiki awarded to Priya Ranjan Sahu by Siddhartha Bhardwaj Foundation",
    width: 1024,
    height: 638,
    date: "19-01-2025",
  },
  {
    id: "vedic-reiki-level-2",
    title: "Online Level -II Vedic-Usui Reiki™",
    category: "Vedic-Usui Reiki",
    discipline: "Reiki",
    stage: "Level 2",
    stepNumber: "02",
    institution: "Siddhartha Bhardwaj Foundation™",
    recipient: "Priya Ranjan Sahu",
    description:
      "Certificate of Completion for Online Level -II Vedic-Usui Reiki™. Intermediate attunement and knowledge of Vedic Concepts behind Reiki provided by Dr. Siddhartha Bhardwaj (Course Mentor & Reiki Grandmaster).",
    image: certVedicReikiL2,
    alt: "Certificate of Completion for Online Level -II Vedic-Usui Reiki awarded to Priya Ranjan Sahu by Siddhartha Bhardwaj Foundation",
    width: 1024,
    height: 723,
    date: "09/03/2025",
  },
  {
    id: "vedic-reiki-level-3",
    title: "Online Level -III Vedic-Usui Reiki™ (Master Level)",
    category: "Vedic-Usui Reiki",
    discipline: "Reiki",
    stage: "Level 3",
    stepNumber: "03",
    institution: "Siddhartha Bhardwaj Foundation™",
    recipient: "Priya Ranjan Sahu",
    description:
      "Certificate of Completion for Online Level -III Vedic-Usui Reiki™ (Master Level). Master Level attunement and Vedic Concepts behind Reiki provided by Dr. Siddhartha Bhardwaj (Course Mentor & Reiki Grandmaster).",
    image: certVedicReikiL3,
    alt: "Certificate of Completion for Online Level -III Vedic-Usui Reiki Master Level awarded to Priya Ranjan Sahu by Siddhartha Bhardwaj Foundation",
    width: 1024,
    height: 723,
    date: "06-04-2025",
  },
  {
    id: "reiki-master-rishikesh",
    title: "Certificate of Achievement – Reiki-Master Level",
    category: "Traditional Reiki Master Level",
    discipline: "Reiki",
    stage: "Master Level",
    stepNumber: "04",
    institution: "Healing Hands Reiki School (Reiki School India), Laxman Jhula, Rishikesh",
    recipient: "PRIYA RANJAN SAHU",
    description:
      "Certificate of Achievement for successfully completing Reiki-Master Level initiation and instruction, demonstrating proficiency in natural healing Art & Science. Held at Rishikesh, S.No.: 339.",
    image: certReikiMasterRishikesh,
    alt: "Healing Hands Reiki School Rishikesh Certificate of Achievement Reiki-Master Level presented to Priya Ranjan Sahu",
    width: 713,
    height: 1024,
    date: "21 June 2025",
  },
] as const;

export const garbhaSanskarCertificate = {
  id: "garbhsanskar-cert",
  title: "Certificate of Garbhsanskar",
  category: "Garbhsanskar Workshop",
  discipline: "Garbhsanskar",
  recipient: "Dr. Priya Ranjan Sahu",
  institution: "VedicVibe LLP (Dr. Shruti Singhal, Founder & CEO)",
  description:
    "Presented to Dr. Priya Ranjan Sahu for active participation in 10 Days Highly Effective Online Workshops of Garbhsanskar organised by VedicVibe LLP.",
  image: certGarbhsanskar,
  alt: "Certificate of Garbhsanskar presented to Dr. Priya Ranjan Sahu for active participation in 10 Days Highly Effective Online Workshops of Garbhsanskar organised by VedicVibe LLP",
  width: 1024,
  height: 723,
} as const;

export const archivalCertificates = [
  {
    id: "archival-nlp",
    title: "Certified NLP Practitioner",
    institution: "Neuro Linguistic Programming",
    description: "Advanced certification in identifying and reframing limiting beliefs, timeline therapy, and subconscious alignment for enduring human transformation.",
    image: nlpCert,
    alt: "NLP Practitioner Certificate Lineage Record",
    date: "Lineage Record",
    badge: "Verified Practitioner",
  },
  {
    id: "archival-reiki-master",
    title: "Reiki Master & Teacher",
    institution: "Traditional Reiki Healing",
    description: "Mastery level degree in Japanese energy healing, encompassing high level energy alignment and practitioner attunements across Levels 1, 2, and 3.",
    image: reikiMasterCert,
    alt: "Reiki Master & Teacher Lineage Record",
    date: "Lineage Record",
    badge: "Master Lineage",
  },
  {
    id: "archival-reiki-first",
    title: "Reiki First Degree",
    institution: "Traditional Usui Shiki Ryoho",
    description: "Foundation in hands on holistic healing, energy harmonization, stress alleviation, and traditional meditative self healing protocols.",
    image: reikiCert,
    alt: "Reiki First Degree Lineage Record",
    date: "Lineage Record",
    badge: "First Degree Lineage",
  },
] as const;

export const founderAwards = [
  {
    id: "vedic-research-iama",
    title: "Vedic Research Recognition & Academic Participation",
    category: "Academic Recognition",
    institution: "Shree Maharshi College of Vedic Astrology & IAMA Open University, Florida, USA",
    recipient: "Dr. Priya Ranjan Sahu",
    description:
      "Recognition from Shree Maharshi College of Vedic Astrology, Udaipur, for contributions towards Vedic Research Studies, dated 27 September 2026. The accompanying certificate recognises participation in the inaugural ceremony of IAMA Open University, Florida, USA, on 27 September 2026.",
    image: awardVedicResearchIama,
    alt: "Shree Maharshi College of Vedic Astrology Udaipur recognition and IAMA Open University Florida USA inaugural participation certificates presented to Dr. Priya Ranjan Sahu",
    width: 1024,
    height: 721,
    date: "27 September 2026",
  },
  {
    id: "award-of-excellence-vedic-research",
    title: "Award of Excellence – Vedic Research",
    category: "Vedic Research Ceremony",
    institution: "Shree Maharshi College of Vedic Astrology",
    recipient: "Dr. Priya Ranjan Sahu",
    description:
      "Award presented by Shree Maharshi College of Vedic Astrology for the Ph.D. Vedic Research Ceremony, September 2026.",
    image: awardExcellenceVedicResearch,
    alt: "Shree Maharshi College of Vedic Astrology Award of Excellence plaque for Ph.D. Vedic Research Ceremony September 2026",
    width: 884,
    height: 1024,
    date: "September 2026",
  },
  {
    id: "medal-of-honour-vedic-study",
    title: "Medal of Honour – Doctorate of Philosophy in Vedic Study",
    category: "Doctorate of Philosophy in Vedic Study",
    institution: "Ph.D. Convocation Ceremony",
    recipient: "Dr. Priya Ranjan Sahu",
    description:
      "A Medal of Honour bearing the title “Doctorate of Philosophy in Vedic Study”, dated 2026.",
    image: awardMedalOfHonour,
    alt: "Medal of Honour bearing the title Doctorate of Philosophy in Vedic Study dated 2026",
    width: 928,
    height: 1024,
    date: "2026",
  },
] as const;

export interface GoogleAuthorAttribution {
  displayName: string;
  uri?: string;
  photoURI?: string;
}

export interface GoogleReview {
  name: string;
  profile: string;
  service: string;
  review: string;
  rating: number;
  initials?: string;
  avatarUrl?: string;
  authorAttribution?: GoogleAuthorAttribution;
}

export interface GoogleReviewScreenshot {
  id: string;
  reviewerName: string;
  avatarUrl: string;
  imageUrl: string;
  altText: string;
  rating: number;
  dateText: string;
  badgeText?: string;
  reviewText: string;
  isOwnerResponse?: boolean;
  googleMapsUri?: string;
  width?: number;
  height?: number;
}

export const googleReviewsUrl =
  "https://www.google.com/maps/place/THE+WISDOM+BHARAT/@21.6344042,85.6065279,17z/data=!4m8!3m7!1s0x3a1f0502f6393a7f:0x5465b1128cfdd27e!8m2!3d21.6344042!4d85.6065279!9m1!1b1!16s%2Fg%2F11h12rzzkk";

export const googleReviewScreenshots: GoogleReviewScreenshot[] = [
  {
    id: "sasmita-pattnaik",
    reviewerName: "Sasmita Pattnaik",
    avatarUrl: "/google-reviews/avatars/sasmita.png",
    imageUrl: "/google-reviews/review-1.png",
    altText: "Authentic Google review from Sasmita Pattnaik",
    width: 566,
    height: 475,
    rating: 5,
    dateText: "5 months ago",
    badgeText: "6 reviews",
    reviewText: "A complete transformation which I can see in myself today is only because of Priyaranjan, a very good friend of mine since so many years helped me to get myself back today when it was next to impossible for me to recover.The healing journey where he supported me with one sentence everytime he said to me \" Don't worry everything will be fine\" has changed my entire life today where I got myself back from the traumatic phase.Thank you so much Universe and reiki energies I am grateful to have a friend,guide,mentor and healer like priyaranjan in my life.",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "saswat-nayak",
    reviewerName: "Saswat Nayak",
    avatarUrl: "/google-reviews/avatars/saswat-nayak.png",
    imageUrl: "/google-reviews/review-2.png",
    altText: "Authentic Google review from Saswat Nayak",
    width: 581,
    height: 288,
    rating: 5,
    dateText: "a month ago",
    badgeText: "3 reviews",
    reviewText: "Priyaranjan has an incredible ability to inspire and bring clarity during difficult times. His guidance helped me stay motivated, calm, and relaxed when I needed it the most.Thank you 🙏 ...",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "subhashree-sahu",
    reviewerName: "Subhashree Sahu",
    avatarUrl: "/google-reviews/avatars/subhashree.png",
    imageUrl: "/google-reviews/review-3.png",
    altText: "Authentic Google review from Subhashree Sahu",
    width: 568,
    height: 245,
    rating: 5,
    dateText: "Edited a month ago",
    badgeText: "Local Guide · 41 reviews",
    reviewText: "I highly recommend Wisdom bharat to anyone looking for meaningful learning and a holistic approach to healing and self development.",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "saswat-kumar-sahoo",
    reviewerName: "Saswat Kumar Sahoo",
    avatarUrl: "/google-reviews/avatars/saswat-sahoo.png",
    imageUrl: "/google-reviews/review-4.png",
    altText: "Authentic Google review from Saswat Kumar Sahoo",
    width: 560,
    height: 219,
    rating: 5,
    dateText: "a month ago",
    badgeText: "1 review",
    reviewText: "A Very Good Initiative my Brother. Wishing You All The Very Best....😊 ...",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "shraddhashree-sahu",
    reviewerName: "Shraddhashree Sahu",
    avatarUrl: "/google-reviews/avatars/shraddhashree.png",
    imageUrl: "/google-reviews/review-5.png",
    altText: "Authentic Google review from Shraddhashree Sahu",
    width: 568,
    height: 527,
    rating: 5,
    dateText: "a month ago",
    badgeText: "3 reviews",
    reviewText: "It is a supportive platform for personal growth, emotional healing, and self-understanding. The sessions offer a safe space to reflect, combining life coaching, NLP, and healing practices in a meaningful way.✨ I appreciate the positive environment and focus on inner strength and self-awareness. It's a journey of confidence and transformation.✨ I highly recommend The Wisdom Bharat to anyone feeling stuck or seeking a more peaceful, purposeful life.Thank you, The Wisdom Bharat, for creating a space for healing and growth.🌿✨",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "kanchan-witore",
    reviewerName: "Kanchan Witore",
    avatarUrl: "/google-reviews/avatars/kanchan.png",
    imageUrl: "/google-reviews/review-6.png",
    altText: "Authentic Google review from Kanchan Witore",
    width: 588,
    height: 205,
    rating: 4,
    dateText: "a month ago",
    badgeText: "3 reviews",
    reviewText: "Great experience.Sir helped me to heal in my life at very crucial time.always thankful",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "pankaj-modi",
    reviewerName: "Pankaj Modi",
    avatarUrl: "/google-reviews/avatars/pankaj.png",
    imageUrl: "/google-reviews/review-7.png",
    altText: "Authentic Google review from Pankaj Modi",
    width: 585,
    height: 324,
    rating: 5,
    dateText: "a week ago",
    badgeText: "Local Guide · 5 reviews",
    reviewText: "I did a meditation session and from the second day itself I saw a change. I used to feel tired after waking up in the morning but after attending one session of Sir, there was a change in my body energy and I felt fresh after waking up in the morning. Thank you Sir, Thank you Sir",
    googleMapsUri: googleReviewsUrl,
  },
  {
    id: "dibyajyoti-sahoo",
    reviewerName: "DibyaJyoti Sahoo",
    avatarUrl: "/google-reviews/avatars/dibyajyoti.png",
    imageUrl: "/google-reviews/review-8.png",
    altText: "Authentic Google review from DibyaJyoti Sahoo",
    width: 589,
    height: 354,
    rating: 5,
    dateText: "4 weeks ago",
    badgeText: "3 reviews",
    reviewText: "Thank you, DibyaJyoti Sahoo, for the 5-star rating! We're thrilled you had a great experience and appreciate your support. We look forward to serving you again soon.",
    isOwnerResponse: true,
    googleMapsUri: googleReviewsUrl,
  },
];

export interface VideoTestimonial {
  id: string;
  name: string;
  location?: string;
  countryFlag?: string;
  service?: string;
  videoUrl: string;
  posterUrl: string;
  quote?: string;
  detail?: string;
}

export const testimonials: GoogleReview[] = [
  {
    name: "Sasmita Pattnaik",
    profile: "Google Review",
    service: "9/4/2026",
    review: "A complete transformation which I can see in myself today.",
    rating: 5,
    initials: "SP",
    authorAttribution: {
      displayName: "Sasmita Pattnaik",
      uri: googleReviewsUrl,
    }
  },
  {
    name: "Subhashree Sahu",
    profile: "Google Review",
    service: "1/9/2019",
    review: "I highly recommend Wisdom bharat to anyone looking for mental clarity and peace.",
    rating: 5,
    initials: "SS",
    authorAttribution: {
      displayName: "Subhashree Sahu",
      uri: googleReviewsUrl,
    }
  },
  {
    name: "Shraddhashree Sahu",
    profile: "Google Review",
    service: "7/8/2026",
    review: "It is a supportive platform for personal growth and emotional healing.",
    rating: 5,
    initials: "SS",
    authorAttribution: {
      displayName: "Shraddhashree Sahu",
      uri: googleReviewsUrl,
    }
  },
  {
    name: "Saswat Nayak",
    profile: "Google Review",
    service: "5/8/2026",
    review: "Dr. Priya Ranjan Sahu has an incredible ability to inspire and bring clarity.",
    rating: 5,
    initials: "SN",
    authorAttribution: {
      displayName: "Saswat Nayak",
      uri: googleReviewsUrl,
    }
  },
  {
    name: "Kanchan Witore",
    profile: "Google Review",
    service: "5/8/2026",
    review: "Great experience. Sir helped me to heal in my life at a very crucial time.",
    rating: 4,
    initials: "KW",
    authorAttribution: {
      displayName: "Kanchan Witore",
      uri: googleReviewsUrl,
    }
  },
  {
    name: "Pankaj Modi",
    profile: "Google Review",
    service: "18/9/2026",
    review: "I did a meditation session and from then on it was a great experience.",
    rating: 5,
    initials: "PM",
    authorAttribution: {
      displayName: "Pankaj Modi",
      uri: googleReviewsUrl,
    }
  }
];

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "greesha-mandewal",
    name: "Greesha Mandewal",
    location: "Canada",
    countryFlag: "🇨🇦",
    service: "Aura Scanning Testimony",
    videoUrl: "/greesha-mandewal-testimony.mp4",
    posterUrl: "/greesha-mandewal-poster.jpg",
    quote: "Aura scanning gave me deep clarity and inner peace.",
    detail: "Recorded firsthand client testimony sharing her authentic healing journey and aura scanning experience with Dr. Priya Ranjan Sahu."
  },
  {
    id: "reiki-maharashtra",
    name: "Client Experience",
    location: "Maharashtra, India",
    countryFlag: "🇮🇳",
    service: "Reiki Healing Session",
    videoUrl: "/testimony-1.mp4",
    posterUrl: "/testimony-1-poster.jpg",
    quote: "Felt a profound sense of lightness and emotional release.",
    detail: "Authentic client testimony from Maharashtra sharing her remote Reiki healing session and inner shift with Dr. Priya Ranjan Sahu."
  },
  {
    id: "punam-west-bengal",
    name: "Punam",
    location: "West Bengal, India",
    countryFlag: "🇮🇳",
    service: "Reiki Session Feedback",
    videoUrl: "/testimony-2.mp4",
    posterUrl: "/testimony-2-poster.jpg",
    quote: "The positive energy and healing made a noticeable difference.",
    detail: "Punam from West Bengal sharing her personal feedback following a transformative Reiki healing session."
  },
  {
    id: "sub-inspector-rn-odisha",
    name: "Sub Inspector R. N.",
    location: "Odisha, India",
    countryFlag: "🇮🇳",
    service: "Reiki Session Feedback",
    videoUrl: "/testimony-3.mp4",
    posterUrl: "/testimony-3-poster.jpg",
    quote: "Brought clarity, relief from stress, and restored inner balance.",
    detail: "Law enforcement officer Sub Inspector R. N. from Odisha reflecting on his Reiki healing feedback and peace of mind."
  },
  {
    id: "dr-surbhi-uttar-pradesh",
    name: "Dr. Surbhi",
    location: "Uttar Pradesh, India",
    countryFlag: "🇮🇳",
    service: "Reiki Session Feedback",
    videoUrl: "/testimony-4.mp4",
    posterUrl: "/testimony-4-poster.jpg",
    quote: "A deeply grounding experience that helped release mental tension.",
    detail: "Dr. Surbhi from Uttar Pradesh sharing her professional and holistic experience following her personalized Reiki session."
  }
];

const serviceNlpImage = encodeURI("/service images/NLP IMG.jpg");
const serviceReikiImage = reikiHealing;
const serviceGarbhsanskarImage = garbhasanskarHero;
const serviceCoachingImage = encodeURI("/service images/LIFE & HIGH PERFORMANCE IMG.jpg");
const serviceAuraImage = reikiChakra;

export interface ServicePackage {
  id: string;
  name: string;
  duration?: string;
  price: string;
  priceNumber: number;
  badge?: string;
  featured?: boolean;
  previewSummary: string;
  inclusions: readonly string[];
  paymentUrl?: string;
}

export const paymentConfig = {
  merchantName: "The Wisdom Bharat",
  beneficiaryName: "PRIYA RANJAN SAHU",
  primaryUpiId: "thewisdombharat561576.rzp@rxairtel", // Official Razorpay Merchant VPA from QR
  secondaryUpiId: "9692117171@cnrb", // Direct VPA
  mcc: "7298", // Health & Personal Wellness services
  qrImage: "/images/payments/razorpay-upi-qr.jpg",
  // Strict domain allowlist to prevent arbitrary redirects
  allowedDomains: [
    "pages.razorpay.com",
    "rzp.io",
    "api.razorpay.com",
    "thewisdombharat.com",
  ],
  // Master payment URLs (can be populated with direct Razorpay payment page URLs)
  urls: {
    "introductory-session": "",
    "basic-healing": "",
    "deep-healing": "",
    "pro-healing": "",
    "consultation": "",
  } as Record<string, string>,
};

/**
 * Generates an audit session token for payment tracking
 */
export function createPaymentSessionRef(packageId: string): string {
  const ts = Math.floor(Date.now() / 1000);
  const nonce = Math.random().toString(36).substring(2, 6).toUpperCase();
  const cleanId = packageId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
  return `WB-${cleanId}-${ts}-${nonce}`;
}

/**
 * Validates that a target URL is strictly hosted on approved Razorpay domains
 * and appends secure tracking parameters (package, amount, session token).
 */
export function buildSecurePaymentUrl(
  targetUrl: string,
  params: { packageId: string; packageName: string; amount: number; sessionRef?: string }
): string {
  if (!targetUrl) return "";
  try {
    const url = new URL(targetUrl);
    const isAllowed = paymentConfig.allowedDomains.some(
      (d) => url.hostname === d || url.hostname.endsWith(`.${d}`)
    );
    if (!isAllowed) {
      console.warn("Blocked untrusted payment redirect to:", targetUrl);
      return "";
    }
    const token = params.sessionRef || createPaymentSessionRef(params.packageId);
    url.searchParams.set("pkg_id", params.packageId);
    url.searchParams.set("pkg_name", params.packageName);
    url.searchParams.set("amount", String(params.amount));
    url.searchParams.set("currency", "INR");
    url.searchParams.set("source", "thewisdombharat_web");
    url.searchParams.set("ref", token);
    return url.toString();
  } catch {
    return "";
  }
}

/**
 * Builds a strict, validated UPI intent URI for instant 1-click mobile payment apps (GPay, PhonePe, Paytm, BHIM)
 */
export function buildUpiPayUri(params: {
  amount: number;
  packageId: string;
  packageName: string;
  sessionRef?: string;
}): string {
  const token = params.sessionRef || createPaymentSessionRef(params.packageId);
  const note = `The Wisdom Bharat - ${params.packageName.slice(0, 25)} (${token})`;
  return `upi://pay?pa=${paymentConfig.primaryUpiId}&pn=${encodeURIComponent(paymentConfig.merchantName)}&mc=${paymentConfig.mcc}&am=${params.amount}&cu=INR&tn=${encodeURIComponent(note)}`;
}

export const auraPackages: readonly ServicePackage[] = [
  {
    id: "introductory-session",
    name: "Introductory AURA Session",
    price: "₹2,006/-",
    priceNumber: 2006,
    badge: "Special Webinar Offer",
    previewSummary: "Personalised counselling, AURA scanning, diagnostic report and a complimentary healing session.",
    inclusions: [
      "AURA Scanning",
      "45-minute personalised counselling",
      "AURA report",
      "One complimentary healing session",
    ],
  },
  {
    id: "basic-healing",
    name: "Basic Healing Package",
    duration: "1 Month",
    price: "₹14,993/-",
    priceNumber: 14993,
    previewSummary: "AURA scanning & review, Reiki sessions, NLP guided meditation, lifestyle guidance and support.",
    inclusions: [
      "AURA scanning and review",
      "Reiki healing sessions",
      "NLP guided meditation",
      "Lifestyle guidance",
      "Personalised support",
    ],
  },
  {
    id: "deep-healing",
    name: "Deep Healing Package",
    duration: "2 Months",
    price: "₹25,991/-",
    priceNumber: 25991,
    previewSummary: "Scanning & progress reviews, Reiki sessions, NLP meditation, chakra guidance and lifestyle support.",
    inclusions: [
      "AURA scanning and progress review",
      "Reiki healing sessions",
      "NLP guided meditation",
      "Chakra awareness and guidance",
      "Lifestyle guidance and personalised support",
    ],
  },
  {
    id: "pro-healing",
    name: "Pro Healing Package",
    duration: "3 Months",
    price: "₹35,990/-",
    priceNumber: 35990,
    featured: true,
    previewSummary: "Regular reviews, Reiki healing, NLP meditation, chakra guidance and ongoing personalised support.",
    inclusions: [
      "AURA scanning and regular reviews",
      "Reiki healing sessions",
      "NLP guided meditation",
      "Chakra awareness and guidance",
      "Lifestyle guidance",
      "Ongoing personalised support",
    ],
  },
] as const;

export const services = [
  { 
    title: "NLP Guided Meditation", 
    slug: "/services/nlp", 
    image: serviceNlpImage, 
    eyebrow: "01 / MIND", 
    summary: "Reprogram deep rooted beliefs and emotional blocks to create lasting transformation and true healing.", 
    detail: "NLP sessions focus on identifying and reframing beliefs, fears and emotional patterns. The practice utilizes techniques including anchoring, timeline therapy and subconscious reframing.", 
    introQuote: "Your mind holds the power to heal your body.",
    fullDescription: [
      "Through Neuro Linguistic Programming (NLP), we identify and reprogram deep rooted beliefs, fears, and emotional blocks that prevent true healing.",
      "Using techniques like anchoring, timeline therapy and subconscious reframing, we align your thoughts, emotions and energy to create lasting transformation.",
      "When blended with Reiki healing, this process restores balance, peace and harmony, helping you become the best version of yourself."
    ],
    closingQuote: "Heal the mind and the body follows.",
    points: ["Subconscious reframing", "Timeline therapy & anchoring", "Aligning thoughts, emotions, and energy"] 
  },
  { 
    title: "Reiki Healing", 
    slug: "/services/reiki", 
    image: serviceReikiImage, 
    eyebrow: "02 / ENERGY", 
    summary: "The Science of Universal Life Energy. Overcome anxiety, stress, and fatigue by aligning your inner energy.", 
    detail: "Reiki is a Japanese energy healing practice offered by The Wisdom Bharat. Sessions create a quiet space for relaxation and reflection.", 
    introQuote: "In a world full of noise, pressure and imbalance, healing is not a luxury, it's a necessity.",
    fullDescription: [
      "As a Reiki Master, I use intuitive and guided healing techniques to help individuals overcome anxiety, stress, fatigue, relationship challenges and physical discomfort.",
      "We do this not by fighting your challenges, but by aligning the inner energy that creates them. It is a deeply restorative practice that invites profound space for rest, balance, and reconnection."
    ],
    closingQuote: "Because when your energy flows freely, your life begins to glow.",
    points: ["Guided intuitive healing", "Overcome stress and fatigue", "Restorative space and inner balance"] 
  },
  { 
    title: "Garbhsanskar", 
    slug: "/services/garbhsanskar", 
    image: serviceGarbhsanskarImage, 
    eyebrow: "03 / BEGINNINGS", 
    summary: "Ancient Wisdom for Modern Mothers. Consciously nurture your baby and begin parenting before birth.", 
    detail: "Garbhsanskar guidance is designed for couples from pre conception through pregnancy, bringing together meditation, affirmations, sound, and conscious parenting practices.", 
    introQuote: "Consciously Nurture Your Baby. Emotionally Prepare Yourself. Begin Parenting Before Birth.",
    fullDescription: [
      "Garbhsanskar is not just a practice; it is a sacred journey, a conscious connection between the mother, father, and the unborn child.",
      "Through simple yet powerful techniques, parents can nurture a happy, healthy, and high vibration baby. Our holistic prenatal journey integrates Garbhsambad, guided meditation, positive affirmations, sound & mantra, NLP, Reiki, and conscious parenting.",
      "It is the science of soulful parenting, blending ancient rituals with modern psychology, helping families welcome their baby with awareness, joy and divine grace."
    ],
    closingQuote: "Welcome your child not just biologically, but spiritually, emotionally, and consciously.",
    points: ["Pre conception and pregnancy guidance", "Guided meditation & affirmations", "Soulful parenting practices"] 
  },
  { 
    title: "Lifestyle & Conscious Living Practices", 
    slug: "/services/life-coaching", 
    image: serviceCoachingImage, 
    eyebrow: "04 / GROWTH", 
    summary: "Awaken Your Ultimate High Performance Life with guided Mind, Body & Energy transformation.", 
    detail: "Life and high performance coaching brings together mindset, habits and energy alignment. Sessions are designed to help you reflect on what matters and take purposeful steps forward.", 
    introQuote: "Unlock your true potential by mastering mindset, habits and energy alignment.",
    fullDescription: [
      "Our coaching framework blends proven strategies from NLP and ancient wisdom, blending science and spirituality to help you perform at your peak while staying grounded and fulfilled.",
      "Whether you're an entrepreneur, student or seeker of self mastery, this personalized one to one coaching will help you build a high performance lifestyle.",
      "Together, we build a foundation that supports continuous growth with balance, purpose and absolute joy."
    ],
    closingQuote: "Believe in yourself and all that you are.",
    points: ["Personalized one to one coaching", "Science meets spirituality", "High performance lifestyle building"] 
  },
  {
    title: "AURA Energy Scanning",
    slug: "/services/aura",
    image: serviceAuraImage,
    eyebrow: "05 / TRANSFORMATION",
    summary: "Activate Your Energy. Rebalance Your Chakras. Awaken Your Awareness. Your journey from inner awareness to personal transformation.",
    detail: "AURA Energy Scanning brings together four complementary practices: NLP & Mind Programming, Universal Energy – Reiki Healing, Chakra Healing & Awareness, and Guided Meditation.",
    introQuote: "Activate Your Energy. Rebalance Your Chakras. Awaken Your Awareness.",
    fullDescription: [
      "AURA Energy Scanning is a holistic wellness and personal-transformation program by The Wisdom Bharat, designed to help individuals explore their inner potential, develop positive mental patterns, cultivate spiritual awareness and build a mindful lifestyle.",
      "AURA Energy Scanning brings together four complementary practices: NLP & Mind Programming, Universal Energy – Reiki Healing, Chakra Healing & Awareness, and Guided Meditation.",
      "Through a structured combination of these practices, AURA Energy Scanning encourages individuals to develop greater self-awareness, emotional balance, positive thinking, relaxation and a deeper connection with themselves."
    ],
    closingQuote: "Your Journey from Inner Awareness to Personal Transformation",
    points: [
      "NLP & Mind Programming",
      "Universal Energy – Reiki Healing",
      "Chakra Healing & Awareness",
      "Guided Meditation"
    ],
    packages: auraPackages
  },
] as const;
export const programs = [
  { title: "1 on 1 NLP Counselling & Coaching", detail: "Individual guidance exploring mindset and personal patterns." },
  { title: "Reiki Healing", detail: "Guided energy healing sessions for deep relaxation and inner alignment." },
  { title: "Garbhsanskar Guidance", detail: "Conscious pregnancy support for parents and parents to be." },
];
export const faqs = [
  {
    q: "What can I expect from an initial consultation?",
    a: "During your initial consultation, we understand your concerns, personal goals and expectations. Based on your needs, we suggest suitable healing, meditation or personal-development practices.",
  },
  {
    q: "What services does The Wisdom Bharat offer?",
    a: "We offer a range of holistic wellness and personal-development services, including Reiki Healing, AURA Scanning & Healing, Garbha Sanskar, Chakra Healing, NLP Guided Meditation and personalised wellness programs.",
  },
  {
    q: "Do I need previous experience with NLP, Reiki or meditation?",
    a: "Not at all! Our sessions are designed for beginners as well as those who already have experience. Every practice is explained and guided step by step.",
  },
  {
    q: "What is Reiki Healing, and how does it work?",
    a: "Reiki is a complementary energy-based wellness practice traditionally associated with relaxation and spiritual well-being. A practitioner uses gentle hand placements or works without physical contact, depending on the session and individual preference.",
  },
  {
    q: "What is AURA Scanning & Healing?",
    a: "AURA Scanning & Healing is a holistic wellness offering at The Wisdom Bharat that combines aura-related assessment, chakra awareness, Reiki practices and guided meditation to support self-awareness and personal well-being.",
  },
  {
    q: "Can I take Reiki Healing sessions online?",
    a: "Yes! We offer online and distance Reiki sessions. You can participate from the comfort of your home after discussing the session process with our team.",
  },
  {
    q: "What is Garbha Sanskar, and who can benefit from it?",
    a: "Garbha Sanskar is a traditional Indian approach to conscious prenatal nurturing. Our program supports couples planning for pregnancy and expecting parents through meditation, affirmations, NLP-based mind programming, Reiki-based wellness practices and conscious parenting guidance.",
  },
  {
    q: "Is Garbha Sanskar only for expecting mothers?",
    a: "No. Fathers and partners are equally encouraged to participate. We believe conscious parenting is a shared journey that begins before birth.",
  },
  {
    q: "What is NLP Guided Meditation?",
    a: "NLP Guided Meditation combines guided visualisation, positive language patterns and mind-programming techniques to encourage self-awareness, positive thinking and supportive mental habits.",
  },
  {
    q: "What is Chakra Healing?",
    a: "Chakra Healing is a holistic spiritual wellness practice based on the traditional concept of energy centres in the body. It may incorporate meditation, visualisation, affirmations and Reiki-based practices.",
  },
  {
    q: "Can I book a session for emotional well-being or stress management?",
    a: "Yes. We offer guided meditation, Reiki-based wellness support and personalised practices that may help support relaxation, emotional awareness and self-reflection.",
  },
  {
    q: "Are your sessions available online and offline?",
    a: "Yes. Depending on the service and availability, we offer both online and offline sessions. Please contact our team for details.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on your individual goals, chosen service and preferences. After an initial consultation, we can suggest a suitable session plan.",
  },
  {
    q: "Are the sessions personalised?",
    a: "Yes. We understand that every individual has different experiences and expectations. Our approach focuses on understanding your needs and suggesting appropriate practices.",
  },
  {
    q: "Can I join if I am completely new to spiritual healing?",
    a: "Absolutely! You do not need any prior spiritual or healing experience. We welcome everyone interested in exploring meditation, self-awareness and holistic wellness.",
  },
  {
    q: "How can I book a consultation or healing session?",
    a: "You can contact us through our website, WhatsApp or official contact number. Our team will guide you through the consultation and booking process.",
  },
  {
    q: "Are these services a replacement for medical treatment?",
    a: "No. Reiki, aura-related practices, NLP Guided Meditation, Chakra Healing and other services are complementary holistic wellness and personal-development offerings. They do not diagnose, cure or replace medical or mental healthcare, medication or professional treatment.",
  },
  {
    q: "Who is the founder of The Wisdom Bharat?",
    a: "The Wisdom Bharat was founded by Dr. Priya Ranjan Sahu (Life Coach PR), a Reiki PhD holder, author, NLP practitioner, public speaker and healing and life coach. His vision is to encourage personal transformation, self-awareness and conscious living through holistic wellness practices.",
  },
] as const;

export const garbhaSanskarFaqs = [
  {
    q: "When should we start Garbha Sanskar?",
    a: "You can begin while planning for pregnancy or during any trimester, with practices adapted to your individual circumstances.",
  },
  {
    q: "Can couples join before conception?",
    a: "Yes. Couples can participate in preparation practices focused on mindfulness, emotional readiness and conscious parenting.",
  },
  {
    q: "Can I join during the third trimester?",
    a: "Yes. The practices can be adapted to the stage of pregnancy.",
  },
  {
    q: "Are online sessions available?",
    a: "Yes. Personalised online guidance and sessions can be arranged.",
  },
  {
    q: "Does Garbha Sanskar guarantee a particular type of baby or pregnancy outcome?",
    a: "No. Garbha Sanskar is a nurturing and wellness-oriented approach. It does not guarantee a baby's intelligence, personality, health or birth outcome.",
  },
  {
    q: "Can Garbha Sanskar replace medical care?",
    a: "No. This program is complementary wellness and personal-development support. It does not replace antenatal check-ups, medical advice or treatment.",
  },
] as const;

export const garbhaSanskarContent = {
  hero: {
    heading: "Consciously Nurture Your Baby. Emotionally Prepare Yourself. Begin Parenting Before Birth.",
    paragraphs: [
      "Garbha Sanskar is a holistic prenatal nurturing program designed to support expecting parents in creating a positive, peaceful and nurturing environment during pregnancy.",
      "At The Wisdom Bharat, we combine traditional Garbha Sanskar wisdom with guided meditation, affirmations, NLP techniques, Reiki-based wellness practices, positive sound and conscious parenting guidance.",
      "Our approach encourages parents to nurture their emotional well-being, develop a deeper connection with their baby and embrace parenthood consciously.",
    ],
    image: garbhasanskarHero,
    imageAlt: "Pregnant woman in orange saree meditating during Garbha Sanskar practice",
  },
  whatIs: {
    heading: "What is Garbha Sanskar?",
    paragraphs: [
      "Garbha Sanskar is an ancient Indian tradition that emphasises the importance of a mother's thoughts, emotions, environment and lifestyle during pregnancy.",
      "The word Garbha means womb, while Sanskar refers to nurturing, values and positive impressions.",
      "It encourages parents to create a loving, peaceful and supportive environment for the developing baby while also preparing themselves emotionally and mentally for parenthood.",
      "At The Wisdom Bharat, we present this traditional wisdom through a structured, contemporary and holistic approach.",
    ],
  },
  approach: {
    heading: "Our Holistic Garbha Sanskar Approach",
    practices: [
      {
        title: "1. Guided Meditation",
        description: "Relaxation and mindfulness practices to encourage calmness, self-awareness and emotional balance.",
        image: guidedMeditation,
        imageAlt: "Pregnant woman meditating on the terrace in white clothing",
        width: 1024,
        height: 682,
        objectPosition: "center 22%",
      },
      {
        title: "2. Positive Affirmations",
        description: "Encouraging positive thoughts, confidence, gratitude and emotional connection with the baby.",
        image: positiveAffirmations,
        imageAlt: "Pregnant woman meditating indoors in traditional beige clothing",
        width: 1024,
        height: 682,
        objectPosition: "center 20%",
      },
      {
        title: "3. Positive Sound & Mantra",
        description: "Incorporating soothing music, traditional mantras and mindful listening into the prenatal journey.",
        image: positiveSoundMantra,
        imageAlt: "Pregnant woman wearing headphones outdoors",
        width: 1024,
        height: 681,
        objectPosition: "center 18%",
      },
      {
        title: "4. Reiki-Based Wellness Support",
        description: "Gentle, complementary relaxation and spiritual wellness practices for the expecting mother.",
        image: reikiWellness,
        imageAlt: "Reiki practitioner performing a session with a woman lying down",
        width: 980,
        height: 653,
        objectPosition: "center 22%",
      },
      {
        title: "5. NLP & Mind Programming",
        description: "Guided techniques for positive thinking, supportive beliefs, emotional awareness and mental preparation.",
        image: reikiChakra,
        imageAlt: "Woman receiving chakra healing with colourful energy points",
        width: 800,
        height: 600,
        objectPosition: "center center",
      },
      {
        title: "6. Garbhsambad & Conscious Parenting",
        description: "Developing a loving connection with the baby through communication, gratitude and mindful parenting practices.",
        image: consciousParenting,
        imageAlt: "Pregnant couple meditating together during Garbhsambad and conscious parenting",
        width: 1024,
        height: 682,
        objectPosition: "center 22%",
      },
    ],
  },
  whoCanJoin: {
    heading: "Who Can Join?",
    introduction: "Our Garbha Sanskar program is designed for:",
    points: [
      "Couples planning to conceive.",
      "Women preparing for pregnancy.",
      "Expecting mothers in their first, second or third trimester.",
      "Couples who wish to develop conscious parenting habits.",
      "Parents seeking emotional and spiritual preparation for parenthood.",
    ],
  },
  experience: {
    heading: "What Will You Experience?",
    points: [
      "Personalised Garbha Sanskar guidance.",
      "Guided meditation and relaxation sessions.",
      "Positive affirmation practices.",
      "NLP-based guided mind programming.",
      "Reiki-based wellness support.",
      "Garbhsambad and bonding activities.",
      "Guidance for partners to participate in the journey.",
    ],
  },
  whyChooseUs: {
    heading: "Why Choose The Wisdom Bharat?",
    paragraphs: [
      "At The Wisdom Bharat, we believe parenting begins before birth.",
      "Our approach integrates traditional Indian wisdom with contemporary personal-development and holistic wellness practices.",
      "The program is guided by Dr. Priya Ranjan Sahu, PhD in Reiki, Author, NLP Practitioner and Life & Healing Coach.",
      "Our intention is to help parents approach pregnancy with greater awareness, positivity, emotional preparedness and conscious connection.",
    ],
  },
  certificate: garbhaSanskarCertificate,
} as const;

export const auraFaqs = [
  {
    q: "What does AURA stand for?",
    a: "AURA represents Activate Universal Energy, Rebalance Chakras and Awaken Awareness. It brings together NLP and mind programming, Reiki, chakra practices and guided meditation.",
  },
  {
    q: "Do I need previous Reiki experience?",
    a: "No. AURA Energy Scanning is open to beginners as well as individuals who already have experience with Reiki or meditation.",
  },
  {
    q: "What is AURA Scanning?",
    a: "AURA Scanning is an aura-related wellness assessment offered as part of the program to encourage personal reflection and energy awareness. It is not a medical or scientifically validated diagnostic test.",
  },
  {
    q: "Is AURA Energy Scanning available online?",
    a: "Yes. Online guidance and sessions are available, depending on the selected program.",
  },
  {
    q: "How long does the AURA Energy Scanning program take?",
    a: "The duration depends on the selected level and program package. Please contact us for current details.",
  },
  {
    q: "Can I join AURA Energy Scanning if I have never meditated?",
    a: "Absolutely. Guided practices are suitable for beginners, and you can gradually develop your own meditation routine.",
  },
  {
    q: "Does AURA Energy Scanning help with emotional challenges?",
    a: "AURA Energy Scanning incorporates mindfulness, meditation, positive affirmations and self-awareness practices that may support emotional well-being. It is not a substitute for mental healthcare.",
  },
  {
    q: "What is the difference between Reiki and AURA Energy Scanning?",
    a: "Reiki is one of the practices included in AURA Energy Scanning. AURA Energy Scanning is a broader structured program that combines Reiki with NLP-based mind programming, chakra practices and meditation.",
  },
  {
    q: "Are personal sessions included?",
    a: "Personal one-to-one and group sessions may be included depending on the selected program level.",
  },
  {
    q: "How can I enrol in AURA Energy Scanning?",
    a: "You can book an initial consultation with Dr. PRIYA RANJAN SAHU through The Wisdom Bharat website to understand the program and available options.",
  },
] as const;

export const auraContent = {
  hero: {
    heading: "AURA Energy Scanning – Activate, Universal Energy, Rebalance Chakras, Awaken Awareness",
    subheading: "Your Journey from Inner Awareness to Personal Transformation",
    paragraphs: [
      "AURA Energy Scanning is a holistic wellness and personal-transformation program by The Wisdom Bharat, designed to help individuals explore their inner potential, develop positive mental patterns, cultivate spiritual awareness and build a mindful lifestyle.",
      "Through a structured combination of these practices, AURA Energy Scanning encourages individuals to develop greater self-awareness, emotional balance, positive thinking, relaxation and a deeper connection with themselves.",
    ],
    practicesIntro: "AURA Energy Scanning brings together four complementary practices:",
    practices: [
      "NLP & Mind Programming",
      "Universal Energy – Reiki Healing",
      "Chakra Healing & Awareness",
      "Guided Meditation",
    ],
    tagline: "Activate Your Energy. Rebalance Your Chakras. Awaken Your Awareness.",
    image: reikiChakra,
    imageAlt: "Woman receiving chakra healing with colourful energy points representing AURA Energy Scanning",
  },
  whatIs: {
    heading: "What is AURA Energy Scanning?",
    paragraphs: [
      "AURA Energy Scanning is a structured holistic wellness and personal-development journey that integrates traditional energy-based practices with contemporary mind-programming techniques.",
      "At The Wisdom Bharat, we believe that personal transformation begins with awareness.",
      "AURA Energy Scanning provides an opportunity to explore your thought patterns, develop mindfulness, experience Reiki-based practices, understand the traditional chakra system and establish positive daily habits.",
      "It is not just a single healing session; it is a guided journey towards greater self-awareness and conscious living.",
    ],
  },
  pillars: {
    heading: "The Four Pillars of AURA Energy Scanning",
    items: [
      {
        letter: "A",
        title: "A – NLP & Mind Programming",
        subtitle: "Transform Your Thoughts. Develop a Positive Mindset.",
        lead: "The mind plays an important role in how we perceive ourselves and respond to everyday situations.",
        listIntro: "This component focuses on:",
        points: [
          "Understanding limiting beliefs.",
          "Exploring negative thought patterns.",
          "Positive affirmations.",
          "Mind programming techniques.",
          "Guided visualisation.",
          "Building confidence and self-awareness.",
        ],
        image: positiveAffirmations,
        imageAlt: "Woman meditating indoors in traditional beige clothing during NLP and mind programming",
        width: 1024,
        height: 682,
        objectPosition: "center 20%",
      },
      {
        letter: "U",
        title: "U – Universal Energy: Reiki Healing",
        subtitle: "Connect with Inner Peace and Spiritual Wellness.",
        lead: "Reiki is a traditional Japanese energy-based spiritual wellness practice.",
        listIntro: "This component introduces:",
        points: [
          "Reiki-based healing sessions.",
          "Energy awareness practices.",
          "Personal relaxation and mindfulness.",
          "Spiritual wellness guidance.",
          "Self-care and positive daily practices.",
        ],
        image: reikiHealing,
        imageAlt: "Reiki practitioner performing a healing session with hands gently placed for relaxation",
        width: 1024,
        height: 682,
        objectPosition: "center center",
      },
      {
        letter: "R",
        title: "R – Rebalance Chakras",
        subtitle: "Explore Your Energy Centres. Cultivate Inner Awareness.",
        lead: "Based on the traditional chakra system, this component introduces the seven major chakras and their associated qualities.",
        listIntro: "The practices may include:",
        points: [
          "Seven Chakra Awareness.",
          "Guided Chakra Meditation.",
          "Chakra-focused affirmations.",
          "Reiki-based chakra practices.",
          "Visualisation and mindfulness.",
        ],
        image: reikiChakra,
        imageAlt: "Woman receiving chakra healing with colourful energy points",
        width: 800,
        height: 600,
        objectPosition: "center center",
      },
      {
        letter: "A",
        title: "A – Awaken Awareness Through Meditation",
        subtitle: "Develop Mindfulness. Discover Your Inner Self.",
        lead: "Meditation provides an opportunity to slow down, observe your thoughts and develop greater awareness.",
        listIntro: "This component includes:",
        points: [
          "Guided meditation.",
          "Mindfulness practices.",
          "Breathing awareness.",
          "Relaxation techniques.",
          "Gratitude and positive thinking.",
          "Daily meditation guidance.",
        ],
        image: guidedMeditation,
        imageAlt: "Woman meditating in a peaceful outdoor setting on a terrace",
        width: 1024,
        height: 682,
        objectPosition: "center 22%",
      },
    ],
  },
  inclusions: {
    heading: "What is Included in the AURA Energy Scanning Program?",
    introduction: "Depending on the selected program level, participants may receive:",
    points: [
      "Personalised AURA assessment and scanner report.",
      "Chakra awareness and Reiki practices.",
      "NLP-based guided meditation.",
      "Personalised one-to-one sessions.",
      "Group healing and meditation sessions.",
      "Biweekly progress analysis.",
      "Sunday group Q&A and guidance.",
      "AURA wellness kit.",
      "Ongoing practice guidance.",
    ],
    note: "The exact inclusions depend on the selected program.",
  },
  whoCanJoin: {
    heading: "Who Can Join AURA Energy Scanning?",
    introduction: "AURA Energy Scanning is designed for individuals who wish to explore holistic wellness and personal development.",
    prompt: "You may consider joining if you:",
    points: [
      "Want to develop greater self-awareness.",
      "Wish to work on negative thought patterns and limiting beliefs.",
      "Want to explore Reiki and chakra-based practices.",
      "Are interested in meditation and mindfulness.",
      "Wish to develop a positive mindset.",
      "Want to explore spiritual growth.",
      "Are looking for a structured personal-development journey.",
    ],
    note: "No previous experience with Reiki, NLP or meditation is necessary.",
  },
  journeyLevels: {
    heading: "The AURA Energy Scanning Journey – Four Levels",
    introduction: "We offer a progressive journey through four program levels:",
    levels: [
      {
        number: "01",
        name: "LEVEL 1 – DISCOVERY",
        description: "Begin understanding yourself, your thought patterns and your energy awareness.",
      },
      {
        number: "02",
        name: "LEVEL 2 – HEALING",
        description: "Explore Reiki, chakra awareness, meditation and positive mind-programming practices.",
      },
      {
        number: "03",
        name: "LEVEL 3 – TRANSFORMATION",
        description: "Develop consistent practices, strengthen self-awareness and work towards positive personal changes.",
      },
      {
        number: "04",
        name: "LEVEL 4 – MASTERY",
        description: "Deepen your understanding and establish a sustainable personal wellness and meditation practice.",
      },
    ],
    note: "Each level offers a different stage of learning and personal exploration.",
  },
  whyChooseUs: {
    heading: "Why Choose AURA Energy Scanning at The Wisdom Bharat?",
    lead: "AURA Energy Scanning combines multiple holistic practices within one structured program.",
    approachIntro: "Our approach brings together:",
    points: [
      "Traditional Reiki and chakra practices.",
      "NLP-based mind programming.",
      "Guided meditation and mindfulness.",
      "Individual and group guidance.",
      "Structured progress reviews.",
      "Personalised wellness support.",
    ],
    paragraphs: [
      "The program is guided by Dr. PRIYA RANJAN SAHU (Life Coach PR), Founder of The Wisdom Bharat, PhD in Reiki, Author, Reiki Healer and NLP Practitioner.",
      "His approach integrates spiritual wisdom, personal-development practices and a research-oriented understanding of mind-body programming.",
    ],
  },
  expectations: {
    heading: "What Can You Expect?",
    introduction: "AURA Energy Scanning is designed to encourage you to:",
    points: [
      "Become more aware of your thoughts and emotions.",
      "Explore positive thinking and mindfulness.",
      "Develop a regular meditation practice.",
      "Understand Reiki and the traditional chakra system.",
      "Build a deeper connection with yourself.",
      "Take an active role in your personal growth.",
    ],
    disclaimer: "Individual experiences vary. AURA Energy Scanning does not promise guaranteed healing, medical outcomes or specific life results.",
  },
  beginJourney: {
    heading: "Begin Your AURA Energy Scanning Journey",
    subheading: "Your Transformation Begins with Awareness.",
    paragraphs: [
      "You do not have to understand everything before beginning.",
      "Take the first step towards exploring your mind, energy awareness and inner potential.",
    ],
    ctaHeader: "Book Your Personalised AURA Energy Scanning Consultation with Dr. PRIYA RANJAN SAHU.",
    ctaDescription: "Explore the program, understand the available levels and discover which approach may suit your requirements.",
    tagline: "The Wisdom Bharat – Mind. Energy. Awareness. Transformation.",
  },
  disclaimer: "AURA Energy Scanning is a holistic wellness, spiritual and personal-development program. Reiki, aura-related assessments, chakra practices, NLP and meditation are not medical diagnostic or treatment methods. They do not replace professional medical or mental healthcare.",
} as const;
