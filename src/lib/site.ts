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
const garbhsanskar2 = encodeURI("/service images/GARBHASANSKAR_2 IMG.jpg");

const founder = { url: "https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/blob-07898e5.png" };
const book = { url: "https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/BookCover.jpg" };

export const assets = { logo: logoClean, founder: founder.url, book: book.url, yoga, nlp, reiki, garbhsanskar: garbhsanskar2, garbhsanskar2, coaching, nlpCert, reikiCert, reikiMasterCert, heroVideo, heroGif };
export const bookingUrl = "https://brand.thewisdombharat.com/widget/booking/ZVduiLYZzsRTOzyxDjC0";
export const whatsappUrl = "https://wa.me/919178112471";
export const email = "thewisdombharat@gmail.com";
export const bookUrl = "https://www.amazon.in/Awaken-Your-Ultimate-High-Performance-System/dp/B0CCMG3717";
// Wording follows the founder profile published at thewisdombharat.com.
export const founderAchievements = [
  { label: "Author", detail: "Awaken Your Ultimate High Performance System" },
  { label: "Reiki Master", detail: "Reiki healing and training" },
  { label: "Certified NLP Practitioner", detail: "Neuro Linguistic Programming" },
  { label: "10+ years", detail: "Experience in human transformation" },
  { label: "PhD in Reiki (continuing)", detail: "Advanced studies in progress" },
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
    googleMapsUri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
      uri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
      uri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
      uri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
      uri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
      uri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
      uri: "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
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
const serviceReikiImage = encodeURI("/service images/REIKI IMG.jpg");
const serviceGarbhsanskarImage = encodeURI("/service images/GARBHASANSKAR IMG.jpg");
const serviceCoachingImage = encodeURI("/service images/LIFE & HIGH PERFORMANCE IMG.jpg");

export const services = [
  { 
    title: "NLP", 
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
    detail: "Reiki is a Japanese energy healing practice offered by The Wisdom Bharat. Sessions create a quiet space for relaxation and reflection; Reiki training is also offered across Levels 1 to 3.", 
    introQuote: "In a world full of noise, pressure and imbalance, healing is not a luxury, it's a necessity.",
    fullDescription: [
      "As a Reiki Master, I use intuitive and guided healing techniques to help individuals overcome anxiety, stress, fatigue, relationship challenges and physical discomfort.",
      "We do this not by fighting your challenges, but by aligning the inner energy that creates them. It is a deeply restorative practice that invites profound space for rest, balance, and reconnection.",
      "We also offer comprehensive Reiki training across Levels 1, 2, and 3 for those wishing to master the practice themselves."
    ],
    closingQuote: "Because when your energy flows freely, your life begins to glow.",
    points: ["Guided intuitive healing", "Overcome stress and fatigue", "Reiki training, Levels 1 to 3"] 
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
    title: "Life & High Performance Coaching", 
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
] as const;
export const programs = [
  { title: "Become Your Own Doctor", detail: "A 10 week (70 day) program listed on the original website." },
  { title: "1 on 1 NLP Counselling & Coaching", detail: "Individual guidance exploring mindset and personal patterns." },
  { title: "Reiki Healing & Training", detail: "Healing sessions and Reiki training across Levels 1 to 3." },
  { title: "Garbhsanskar Guidance", detail: "Conscious pregnancy support for parents and parents to be." },
];
export const faqs = [
  { q: "What can I expect from a consultation?", a: "A chance to discuss what you are looking for and explore which of the four offerings may be suitable. Use the booking link to see availability." },
  { q: "Do I need previous experience with NLP or Reiki?", a: "Not at all. Whether you are completely new to energy healing or have prior experience, we tailor every session to your comfort level and needs." },
  { q: "Is Garbhsanskar only for mothers?", a: "No. The Wisdom Bharat describes its Garbhsanskar guidance as a journey for both mothers and fathers, from pre conception through pregnancy." },
  { q: "How does NLP (Neuro Linguistic Programming) work?", a: "NLP identifies and reprograms deep rooted beliefs, fears, and emotional blocks. Using techniques like anchoring and timeline therapy, we help align your thoughts to create lasting transformation." },
  { q: "What does a Reiki healing session involve?", a: "Reiki uses intuitive, guided healing techniques to help overcome anxiety, stress, fatigue, and physical discomfort by aligning your inner energy. It is a gentle, deeply restorative process." },
  { q: "Who can benefit from the High Performance coaching?", a: "Our coaching is designed for entrepreneurs, students, professionals, and seekers of self mastery who want to unlock their true potential while maintaining balance, purpose, and joy." },
  { q: "Are sessions conducted online or in person?", a: "We offer both! You can visit our center at Jayadev Vihar, Bhubaneswar, or we can arrange virtual sessions depending on the program and your location." },
  { q: "Are these services a substitute for medical care?", a: "No. Coaching, Reiki and Garbhsanskar guidance are not substitutes for medical treatment. Please consult a qualified healthcare professional for medical concerns." },
];
