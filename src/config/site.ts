export const site = {
  name: "Lentra LLC",
  tagline: "Lawn Care & Landscaping",
  description:
    "Lentra LLC is a licensed and insured lawn care and landscaping company in San Antonio, Texas, offering precision mowing, hedge and shrub trimming, mulching, aeration, seasonal cleanups and custom landscape design.",
  phone: "+1 210 924 2087",
  phoneRaw: "+12109242087",
  email: "info@lentrallc.org",
  address: {
    street: "205 Briggs St",
    city: "San Antonio",
    state: "TX",
    zip: "78211",
  },
  hours: [
    { day: "Monday", time: "7:00 AM to 6:00 PM" },
    { day: "Tuesday", time: "7:00 AM to 6:00 PM" },
    { day: "Wednesday", time: "7:00 AM to 6:00 PM" },
    { day: "Thursday", time: "7:00 AM to 6:00 PM" },
    { day: "Friday", time: "7:00 AM to 6:00 PM" },
    { day: "Saturday", time: "8:00 AM to 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  hoursShort: "Mon to Fri 7 AM to 6 PM, Sat 8 AM to 4 PM",
  serviceAreas: [
    "San Antonio",
    "New Braunfels",
    "Schertz",
    "Converse",
    "Live Oak",
    "Universal City",
    "Windcrest",
    "Alamo Heights",
    "Terrell Hills",
    "Olmos Park",
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
export const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`;
export const mapsEmbedUrl = `${mapsUrl}&output=embed`;

export interface Service {
  slug: string;
  title: string;
  icon: "Scissors" | "Trees" | "Layers" | "Wind" | "Leaf" | "Flower2";
  short: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const services: Service[] = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing & Edging",
    icon: "Scissors",
    short: "Precision mowing and crisp edging for a polished, striped finish.",
    description:
      "Our signature service. We mow at the right height for your grass, from St. Augustine to Bermuda, edge every walk and drive with a clean line, and blow off every clipping before we leave.",
    features: ["Height set for your grass type", "Sharp sidewalk and drive edging", "Clippings cleared every visit", "Weekly or every other week"],
    price: "From $35 per visit",
    image: pexels(4162011),
  },
  {
    slug: "hedge-trimming",
    title: "Hedge & Shrub Trimming",
    icon: "Trees",
    short: "Sculpted hedges and healthy shrubs that frame your home.",
    description:
      "We shape hedges, shrubs and ornamentals to encourage dense, healthy growth, remove dead wood and keep the clean lines that give your property real curb appeal.",
    features: ["Precision shaping", "Dead branch removal", "Growth promoting cuts", "Seasonal maintenance"],
    price: "From $45 per visit",
    image: pexels(38936349),
  },
  {
    slug: "mulching",
    title: "Mulching & Bed Care",
    icon: "Layers",
    short: "Fresh mulch and tidy beds that hold moisture through Texas heat.",
    description:
      "We weed and prepare your beds, lay premium mulch at the proper depth and cut a clean border. Mulch locks in moisture during long summers, keeps weeds down and gives the whole yard a finished look.",
    features: ["Bed weeding and preparation", "Premium mulch options", "Weed barrier installation", "Clean border definition"],
    price: "From $150",
    image: pexels(39117267),
  },
  {
    slug: "aeration",
    title: "Aeration & Overseeding",
    icon: "Wind",
    short: "Core aeration and overseeding for a thicker, healthier lawn.",
    description:
      "Compacted clay soil chokes grass roots. Core aeration opens the ground so water and nutrients reach the roots, and overseeding fills thin and bare patches for a fuller lawn.",
    features: ["Core aeration", "Overseeding", "Compaction relief", "Better water absorption"],
    price: "From $120",
    image: pexels(39625998),
  },
  {
    slug: "leaf-removal",
    title: "Leaf Removal & Cleanup",
    icon: "Leaf",
    short: "Seasonal cleanups that leave your property spotless.",
    description:
      "Leaves and storm debris smother turf and invite pests. We clear leaves, sticks and debris from lawns and beds and haul it all away, so your yard is ready for the next season.",
    features: ["Complete leaf removal", "Storm debris clearing", "Gutter cleaning option", "Spring and fall cleanups"],
    price: "From $75",
    image: pexels(9620215),
  },
  {
    slug: "landscape-design",
    title: "Landscape Design",
    icon: "Flower2",
    short: "Outdoor spaces designed and built around the way you live.",
    description:
      "From first sketch to final planting, we design and install landscapes suited to South Texas: drought tolerant plantings, stone work, drainage and a maintenance plan that keeps it beautiful.",
    features: ["Custom landscape design", "Plant and tree installation", "Stone and hardscape work", "Drainage solutions"],
    price: "Custom quote",
    image: pexels(3280078),
  },
];

export interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

export const galleryCategories = ["All", "Lawn Mowing", "Landscaping", "Hedge Care", "Cleanup"] as const;

export const galleryImages: GalleryImage[] = [
  { url: pexels(280222), caption: "Striped Front Lawn", category: "Lawn Mowing" },
  { url: pexels(3280078), caption: "Formal Garden Design", category: "Landscaping" },
  { url: pexels(38936351), caption: "Hedge Sculpting", category: "Hedge Care" },
  { url: pexels(27397124), caption: "Estate Hedgerows", category: "Hedge Care" },
  { url: pexels(9620215), caption: "Fall Leaf Cleanup", category: "Cleanup" },
  { url: pexels(8143675), caption: "Poolside Lawn", category: "Lawn Mowing" },
  { url: pexels(39117267), caption: "Stepping Stone Path", category: "Landscaping" },
  { url: pexels(4079768), caption: "Grounds Maintenance", category: "Cleanup" },
  { url: pexels(4162011), caption: "Weekly Mowing", category: "Lawn Mowing" },
  { url: pexels(7546775), caption: "Backyard Renovation", category: "Landscaping" },
  { url: pexels(20805905), caption: "Leaf Clearing", category: "Cleanup" },
  { url: pexels(4920288), caption: "Evergreen Trimming", category: "Hedge Care" },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria R.",
    location: "San Antonio, TX",
    rating: 5,
    text: "Lentra has cared for our lawn for over two years. Always on time, always professional, and our yard has never looked better. The edging is razor sharp every single time.",
  },
  {
    name: "James T.",
    location: "Alamo Heights, TX",
    rating: 5,
    text: "We hired them for a full landscape redesign and they exceeded every expectation. The team was knowledgeable and courteous, and the result transformed our entire front yard.",
  },
  {
    name: "Patricia L.",
    location: "Converse, TX",
    rating: 5,
    text: "Reliable, fairly priced, and they genuinely care about the work. The mulching made our flower beds look like a magazine cover. I recommend Lentra to all my neighbors.",
  },
  {
    name: "Robert K.",
    location: "Live Oak, TX",
    rating: 5,
    text: "After trying three other companies, Lentra is the one I kept. They show up when they say they will and the quality is consistently excellent. Worth every penny.",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What areas does Lentra LLC serve?",
    answer:
      "We serve San Antonio and nearby communities including New Braunfels, Schertz, Converse, Live Oak, Universal City, Windcrest, Alamo Heights, Terrell Hills and Olmos Park. If you are close by but not sure we cover your street, give us a call.",
  },
  {
    question: "Do you offer single visits or only recurring plans?",
    answer:
      "Both. We offer single visits such as cleanups, aeration and mulching, along with weekly, every other week and monthly maintenance plans. You choose what fits your property.",
  },
  {
    question: "How much does lawn care cost?",
    answer:
      "Pricing depends on your property size, the services you need and how often we visit. Mowing starts from $35 per visit. Every estimate is free with no obligation, so request a quote for an exact price.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Lentra LLC is fully licensed and insured in Texas, and we carry liability coverage to protect your property and our crew.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "No. As long as we can reach the yard, we complete the work and send you a note when we are finished.",
  },
  {
    question: "What happens if it rains on my scheduled day?",
    answer:
      "We watch the forecast closely. If weather prevents service, we move your visit to the next available day at no extra cost and let you know right away.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check and all major credit cards. Recurring customers can set up automatic payments for convenience.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out our online quote form, call us, or send an email. We will review your property, discuss your goals and send a detailed estimate, usually within one business day.",
  },
];
