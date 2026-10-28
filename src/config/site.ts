export const site = {
  name: "Petraslynn LLC",
  tagline: "Expert Lawn Care & Landscaping",
  phone: "+1 321-516-4475",
  phoneRaw: "+13215164475",
  email: "petraslynn@proton.me",
  address: {
    street: "748 Victor Street",
    city: "Aurora",
    state: "CO",
    zip: "80011",
  },
  city: "Aurora",
  state: "CO",
  hours: [
    { day: "Monday", time: "7:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "7:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "7:00 AM – 6:00 PM" },
    { day: "Thursday", time: "7:00 AM – 6:00 PM" },
    { day: "Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  serviceAreas: [
    "Aurora",
    "Denver",
    "Centennial",
    "Englewood",
    "Parker",
    "Littleton",
    "Greenwood Village",
    "Commerce City",
  ],
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
} as const;

export interface Service {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing & Edging",
    icon: "Scissors",
    short: "Clean cuts and crisp edges for a polished look.",
    description:
      "Our core mowing service is tuned for Colorado's cool-season grasses. We adjust blade height by season, alternate patterns to prevent soil compaction, and finish every visit with precision power edging along all hardscapes.",
    features: [
      "Weekly and bi-weekly schedules",
      "Seasonal mowing height adjustment",
      "Power edging along driveways and walks",
      "Clipping cleanup and disposal",
    ],
    image:
      "https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    slug: "hedge-trimming",
    title: "Hedge & Shrub Pruning",
    icon: "Sparkles",
    short: "Sculpted shrubs and hedges that define your yard.",
    description:
      "Keep ornamentals healthy and shaped to perfection. We prune each species at the optimal time for Colorado's climate — promoting dense growth, removing deadwood, and maintaining clean lines that frame your property.",
    features: [
      "Hand and power precision shearing",
      "Species-specific pruning timing",
      "Deadwood and sucker removal",
      "Shape restoration for overgrown shrubs",
    ],
    image:
      "https://images.pexels.com/photos/38936349/pexels-photo-38936349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    slug: "yard-cleanup",
    title: "Seasonal Yard Cleanup",
    icon: "Leaf",
    short: "Spring and fall cleanups that reset your landscape.",
    description:
      "Colorado's seasons demand preparation. Our comprehensive cleanup service clears leaves, removes dead growth, cleans beds, and preps your property for winter dormancy or spring green-up — leaving your yard pristine.",
    features: [
      "Leaf and debris removal",
      "Bed cleaning and mulch refresh",
      "Gutter clearing",
      "Winterization and spring prep",
    ],
    image:
      "https://images.pexels.com/photos/9620215/pexels-photo-9620215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    slug: "irrigation",
    title: "Irrigation & Sprinkler Service",
    icon: "Droplets",
    short: "Efficient watering systems for Colorado's dry climate.",
    description:
      "Water conservation is critical on the Front Range. We install, repair, and optimize sprinkler systems with smart controllers, zone tuning, and leak detection — keeping your landscape lush while minimizing water waste.",
    features: [
      "Sprinkler installation and repair",
      "Smart controller integration",
      "Zone optimization for coverage",
      "Winterization and spring activation",
    ],
    image:
      "https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    slug: "landscape-design",
    title: "Landscape Design & Build",
    icon: "Trees",
    short: "Custom outdoor spaces built for Colorado living.",
    description:
      "Transform your property with a custom landscape design. We handle concept through installation — xeriscaping, hardscapes, planting, lighting, and drainage — creating outdoor environments that thrive in Colorado's unique conditions.",
    features: [
      "Custom landscape planning",
      "Xeriscape and water-wise design",
      "Stone patios and retaining walls",
      "Plant and tree installation",
    ],
    image:
      "https://images.pexels.com/photos/39117267/pexels-photo-39117267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    slug: "turf-care",
    title: "Turf Care & Fertilization",
    icon: "Shovel",
    short: "Science-backed treatments for a thick, green lawn.",
    description:
      "Colorado soils need targeted care. Our fertilization and weed control program is built for Front Range grass types — delivering timed nutrient applications, pre-emergent weed control, and aeration for a lawn that stays vibrant all season.",
    features: [
      "Custom fertilization schedule",
      "Pre- and post-emergent weed control",
      "Core aeration and overseeding",
      "Soil testing and pH amendment",
    ],
    image:
      "https://images.pexels.com/photos/37554739/pexels-photo-37554739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    url: "https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Suburban Lawn Mowing",
    category: "Mowing",
  },
  {
    url: "https://images.pexels.com/photos/38936349/pexels-photo-38936349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Precision Hedge Trimming",
    category: "Trimming",
  },
  {
    url: "https://images.pexels.com/photos/9620215/pexels-photo-9620215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Fall Leaf Cleanup",
    category: "Cleanup",
  },
  {
    url: "https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Sprinkler Installation",
    category: "Irrigation",
  },
  {
    url: "https://images.pexels.com/photos/39117267/pexels-photo-39117267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Stone Pathway Design",
    category: "Design",
  },
  {
    url: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Complete Property Care",
    category: "Full Service",
  },
  {
    url: "https://images.pexels.com/photos/9229824/pexels-photo-9229824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Riding Mower Service",
    category: "Mowing",
  },
  {
    url: "https://images.pexels.com/photos/38936351/pexels-photo-38936351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Hedge Sculpting",
    category: "Trimming",
  },
  {
    url: "https://images.pexels.com/photos/20805905/pexels-photo-20805905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Park Leaf Clearing",
    category: "Cleanup",
  },
  {
    url: "https://images.pexels.com/photos/32974053/pexels-photo-32974053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Smart Sprinkler System",
    category: "Irrigation",
  },
  {
    url: "https://images.pexels.com/photos/28156382/pexels-photo-28156382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Garden Path Design",
    category: "Design",
  },
  {
    url: "https://images.pexels.com/photos/4079768/pexels-photo-4079768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Commercial Maintenance",
    category: "Full Service",
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Karen Mitchell",
    location: "Aurora, CO",
    rating: 5,
    text: "Petraslynn took over our lawn last spring and the difference was immediate. The mowing is always clean, the edging is sharp, and they never leave a blade of grass on the sidewalk. Worth every penny.",
  },
  {
    name: "James Patterson",
    location: "Denver, CO",
    rating: 5,
    text: "We had Petraslynn design and install a xeriscape front yard. They understood Colorado's water constraints and created something beautiful that also cut our water bill in half. Professional from start to finish.",
  },
  {
    name: "Theresa Alvarez",
    location: "Centennial, CO",
    rating: 5,
    text: "The fall cleanup was incredible. They cleared every leaf, cleaned the beds, and prepped the yard for winter. When spring came, our lawn came back greener than ever. I will not use anyone else.",
  },
  {
    name: "Daniel Okafor",
    location: "Parker, CO",
    rating: 5,
    text: "Their irrigation team upgraded our old sprinkler system with a smart controller and fixed three leaks we did not even know about. Coverage is perfect now and our water usage dropped noticeably.",
  },
  {
    name: "Rachel Steinberg",
    location: "Englewood, CO",
    rating: 5,
    text: "I have used three other lawn companies in Aurora. Petraslynn is the first one that actually communicates, shows up on the scheduled day, and does what they promised. The fertilization program is excellent.",
  },
  {
    name: "Marcus Webb",
    location: "Littleton, CO",
    rating: 5,
    text: "From the quote to the finished landscape installation, everything was seamless. They built a stone retaining wall and planted everything we discussed. The crew was respectful and the work is top quality.",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What areas does Petraslynn LLC serve?",
    answer:
      "We serve Aurora and the greater Denver metro area, including Denver, Centennial, Englewood, Parker, Littleton, Greenwood Village, and Commerce City. If you are nearby but not sure if we cover your neighborhood, give us a call and we will let you know.",
  },
  {
    question: "Do you offer one-time services or only recurring plans?",
    answer:
      "Both. We offer one-time services such as seasonal cleanups, landscape installations, and sprinkler repairs, as well as recurring weekly or bi-weekly maintenance plans for mowing, edging, and general lawn care. You choose what fits your needs.",
  },
  {
    question: "How much does lawn care cost?",
    answer:
      "Pricing depends on your property size, the services you need, and visit frequency. We provide free, no-obligation quotes tailored to your specific property. Fill out our quote form or call us for an accurate estimate.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Petraslynn LLC is fully licensed and insured to operate in Colorado. We carry liability insurance so you can have peace of mind when our team is working on your property.",
  },
  {
    question: "What happens if it snows on my scheduled service day?",
    answer:
      "Colorado weather can change quickly. If snow or freezing conditions prevent us from completing your service on the scheduled day, we will reschedule for the next available day at no additional cost. We monitor conditions and communicate proactively.",
  },
  {
    question: "Do you provide commercial lawn care services?",
    answer:
      "Absolutely. We service commercial properties including office parks, retail centers, HOAs, and medical facilities. Our commercial plans are fully customizable and can include everything from mowing to complete landscape management.",
  },
  {
    question: "Can you work with my existing irrigation system?",
    answer:
      "Yes. We can inspect, repair, upgrade, and maintain existing sprinkler systems. Whether you need a simple head replacement or a full system overhaul with a smart controller, our irrigation team can handle it.",
  },
  {
    question: "How do I get started with Petraslynn LLC?",
    answer:
      "Getting started is easy. You can fill out our online quote request form, call us directly, or send us an email. We will schedule a free property assessment, discuss your goals, and provide a detailed estimate — usually within 24 to 48 hours.",
  },
];
