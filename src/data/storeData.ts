export interface ProductGear {
  id: string;
  category: 'cameras' | 'lenses' | 'video-gimbals' | 'audio-lighting' | 'accessories';
  title: string;
  subtitle: string;
  specs: string[];
  idealFor: string;
  badge?: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
  verifiedVisit: boolean;
}

export interface StoreService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  points: string[];
}

export const STORE_INFO = {
  name: "Gadget Zone Delhi",
  hubTitle: "DSLR CAMERA HUB Delhi",
  tagline: "DSLR CAMERA HUB Delhi • Cameras, Lenses & Pro Electronics",
  legalNotice: "Gadget Zone_Delhi",
  founders: [
    {
      name: "Ayush Jain",
      title: "Co-Founder",
      phone: "+91 99997 52220",
      phoneRaw: "+919999752220",
      whatsappNumber: "919999752220",
      whatsappUrl: "https://wa.me/919999752220",
    },
    {
      name: "Vaibhav",
      title: "Co-Founder",
      phone: "+91 97165 29933",
      phoneRaw: "+919716529933",
      whatsappNumber: "919716529933",
      whatsappUrl: "https://wa.me/919716529933",
    },
  ],
  policies: {
    cod: "COD Not Available",
    prepaid: "Prepaid Delivery Available",
    bestRate: "Best Rate Guaranteed",
    deliveryScope: "Express delivery across Delhi NCR & All India with safe shockproof packing",
  },
  // Primary contact
  phone: "+91 97165 29933",
  phoneRaw: "+919716529933",
  phoneAyush: "+91 99997 52220",
  phoneAyushRaw: "+919999752220",
  phoneVaibhav: "+91 97165 29933",
  phoneVaibhavRaw: "+919716529933",
  whatsappNumber: "919716529933",
  whatsappUrl: "https://wa.me/919716529933",
  whatsappAyushUrl: "https://wa.me/919999752220",
  mapsUrl: "https://maps.app.goo.gl/TUmHygcXYiqvBxXe7",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Gadget+Zone_Delhi,+Satanam+Marg,+East+Azad+Nagar,+Shahdara,+Delhi,+110051&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: "Satanam Marg, East Azad Nagar, Shahdara, Delhi - 110051",
  landmark: "Near East Azad Nagar Metro Station (Pink Line), Shahdara, Delhi",
  locationCoords: {
    lat: 28.6662,
    lng: 77.2839,
  },
  city: "Delhi",
  state: "Delhi NCR",
  country: "India",
  openingHours: "Monday to Sunday: 10:30 AM – 8:30 PM",
  timingDays: "All 7 Days Open",
  hoursSummary: "10:30 AM - 8:30 PM (Mon - Sun)",
  rating: 4.9,
  ratingCount: "150+",
  instagramUrl: "https://www.instagram.com/gadgetzone_delhi?igsi=Yzk4eWRvZGRyazJv",
  instagramHandle: "@gadgetzone_delhi",
  instagramUsername: "gadgetzone_delhi",
  instagramTagline: "Daily camera unboxing, live sensor testing & customer delivery videos",
  featuredReelUrl: "https://www.instagram.com/reel/DBg7_MPS5cb/?igsi=ZDdvNWgzamYxNmVq",
  featuredReelEmbedUrl: "https://www.instagram.com/reel/DBg7_MPS5cb/embed/",
  featuredReelId: "DBg7_MPS5cb",
};

export const GEAR_CATEGORIES = [
  { id: 'all', label: 'All Equipment' },
  { id: 'cameras', label: 'Cameras & Bodies' },
  { id: 'lenses', label: 'Lenses & Optics' },
  { id: 'video-gimbals', label: 'Cinema & Gimbals' },
  { id: 'audio-lighting', label: 'Audio & Studio' },
  { id: 'accessories', label: 'Drones & Accessories' },
];

export const PRODUCTS_SERVICES_DATA: ProductGear[] = [
  {
    id: 'mirrorless-pro',
    category: 'cameras',
    title: 'Full-Frame & APS-C Mirrorless Bodies',
    subtitle: 'Sony Alpha, Canon EOS R, Nikon Z & Fujifilm series',
    specs: ['4K/8K Video Support', 'Dual Card Slots', 'Advanced Eye-AF', 'High Dynamic Range'],
    idealFor: 'Wedding cinematographers, studio portraits & commercial content creators',
    badge: 'High Demand',
    iconName: 'Camera',
  },
  {
    id: 'dslr-systems',
    category: 'cameras',
    title: 'Professional DSLR Systems',
    subtitle: 'Workhorse cameras for rugged fieldwork and extended battery life',
    specs: ['Optical Viewfinders', 'Long Battery Endurance', 'Weather-Sealed', 'EF / F Mount Native'],
    idealFor: 'Events, sports, wildlife & educational photography',
    badge: 'Reliable Workhorse',
    iconName: 'Camera',
  },
  {
    id: 'prime-lenses',
    category: 'lenses',
    title: 'Fast Aperture Prime Lenses',
    subtitle: '24mm, 35mm, 50mm, 85mm & 135mm f/1.4 - f/1.8 primes',
    specs: ['Ultra-wide f/1.4 - f/1.8', 'Creamy Bokeh & Separation', 'Low-Light Mastery', 'Razor Sharp Edge-to-Edge'],
    idealFor: 'Portraits, candid street frames & cinematic low-light scenes',
    badge: 'Must-Have for Creators',
    iconName: 'Disc',
  },
  {
    id: 'zoom-telephoto',
    category: 'lenses',
    title: 'Pro Zoom & Telephoto Optics',
    subtitle: '16-35mm, 24-70mm f/2.8 & 70-200mm f/2.8 versatile zooms',
    specs: ['Constant f/2.8 Aperture', 'Fast Linear AF Motors', 'Optical Image Stabilization', 'Weather Resistant'],
    idealFor: 'Weddings, press events, sports & wildlife expeditions',
    badge: 'Pro Tier',
    iconName: 'Focus',
  },
  {
    id: 'gimbals-stabilizers',
    category: 'video-gimbals',
    title: '3-Axis Motorized Gimbals & Rigs',
    subtitle: 'DJI Ronin & Zhiyun stabilizing systems with focus wheels',
    specs: ['Payloads up to 4.5kg', 'ActiveTrack AI Tracking', 'Quick-Release Plates', '12h Battery Runtime'],
    idealFor: 'Smooth cinematic tracking shots, music videos & reels',
    badge: 'Creator Essential',
    iconName: 'Activity',
  },
  {
    id: 'studio-lighting',
    category: 'audio-lighting',
    title: 'COB Video Lights & Studio Strobes',
    subtitle: 'Daylight & Bi-color continuous lights (60W to 300W) with softboxes',
    specs: ['CRI 96+ Accurate Color', 'Bowens Mount Compatible', 'App Wireless Control', 'Silent Cooling Fans'],
    idealFor: 'YouTube studios, podcasts, fashion shoots & interviews',
    badge: 'In-Store Demo',
    iconName: 'Zap',
  },
  {
    id: 'wireless-mics',
    category: 'audio-lighting',
    title: 'Dual Wireless Mic Systems & Shotguns',
    subtitle: 'Compact 2.4GHz wireless transmitters, receivers & on-camera mics',
    specs: ['200m Stable Range', 'On-Board Backup Recording', 'Noise Cancellation', 'USB-C & Lightning Compatible'],
    idealFor: 'Vloggers, documentary makers & interview setups',
    badge: 'Top Pick',
    iconName: 'Mic',
  },
  {
    id: 'accessories-gear',
    category: 'accessories',
    title: 'High-Speed Media, Power & Drone Gear',
    subtitle: 'V90 SDXC, CFexpress Type A/B, NP-FZ100 / LP-E6NH batteries & ND Filters',
    specs: ['Read speeds up to 1700MB/s', 'Original Grade Batteries', 'Variable ND2-ND400', 'Rugged Hard Cases'],
    idealFor: 'Uninterrupted shooting sessions without memory bottlenecks',
    badge: 'Daily Stock',
    iconName: 'HardDrive',
  },
];

export const STORE_SERVICES: StoreService[] = [
  {
    id: 'hands-on-testing',
    title: 'In-Store Hands-On Testing',
    description: 'Test any camera body or lens with your own SD card. Verify auto-focus speed, ergonomics, and image clarity in person before taking a decision.',
    iconName: 'CheckCircle2',
    points: ['Bring your memory card', 'Mount test lenses on your body', 'Inspect sensor and glass in good lighting'],
  },
  {
    id: 'expert-consultation',
    title: 'Honest Creator-to-Creator Advice',
    description: 'No misleading sales pitches. We help you choose the exact focal length, sensor size, and gear package suited for your specific shooting needs and budget.',
    iconName: 'Sparkles',
    points: ['Wedding & event gear guides', 'Vlogging kit planning', 'Budget-optimized options'],
  },
  {
    id: 'gear-exchange',
    title: 'Upgrade & Exchange Guidance',
    description: 'Looking to transition from DSLR to mirrorless or upgrade your zoom range? Consult with us for smooth gear transitions.',
    iconName: 'RefreshCw',
    points: ['Fair evaluation', 'Smooth transition advice', 'Mount adapter recommendations'],
  },
  {
    id: 'instant-support',
    title: 'Instant WhatsApp Availability',
    description: 'Need to check if a specific lens, battery, or body is in stock right now? Message us directly on WhatsApp for real-time response.',
    iconName: 'MessageSquare',
    points: ['Fast response in minutes', 'Live photo/video of gear on request', 'Store directions guidance'],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: '100% Tested Equipment',
    description: 'Every unit is physically checked for sensor clarity, mechanical shutter accuracy, and optical sharpness.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Try Before You Buy',
    description: 'Experience the weight, balance, and focus tracking in your own hands at our Delhi store before finalizing.',
    icon: 'Eye',
  },
  {
    title: 'Central Delhi Convenience',
    description: 'Easily accessible from major Delhi NCR transit points with smooth landmark navigation.',
    icon: 'Navigation',
  },
  {
    title: 'Transparent Deals',
    description: 'Clear, straightforward pricing with no hidden charges or forced accessory bundles.',
    icon: 'Coins',
  },
  {
    title: 'Direct WhatsApp Line',
    description: 'Connect directly with the store owner for custom requirements, stock queries, and reservations.',
    icon: 'PhoneCall',
  },
  {
    title: 'Creator Community Hub',
    description: 'Whether you are a beginner picking your first 50mm or a pro rigging a cinema camera, you get respectful, passionate support.',
    icon: 'Users',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Aman Sharma',
    role: 'Wedding Cinematographer, Delhi',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Visited Gadget Zone to pick up a fast prime lens for my Sony setup. The store staff allowed me to take multiple test shots on my own SD card. Genuine equipment, fair deal, and very humble behavior. Highly recommended in Delhi!',
    highlight: 'Allowed in-store test shots with own SD card',
    verifiedVisit: true,
  },
  {
    id: 'rev-2',
    author: 'Rohit Verma',
    role: 'Commercial Photographer',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Connected on WhatsApp first to check stock for Canon RF gear. Received instant reply with clear availability. Visited the same afternoon and closed the deal smoothly. Transparent and trustworthy store.',
    highlight: 'Instant WhatsApp response & quick stock check',
    verifiedVisit: true,
  },
  {
    id: 'rev-3',
    author: 'Priya Mehra',
    role: 'Content Creator & Vlogger',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'I was confused between two wireless mic kits and a gimbal. They patiently explained the pros and cons according to my mobile/mirrorless workflow without pushing the pricier one. Great store experience in Delhi.',
    highlight: 'Patient, honest guidance without hard selling',
    verifiedVisit: true,
  },
  {
    id: 'rev-4',
    author: 'Vikram Singh',
    role: 'Independent Filmmaker',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Great place for camera gear and accessories. Clean environment, well-maintained equipment, and genuine advice. Will definitely visit again for my next lens upgrade.',
    highlight: 'Clean environment & well-maintained gear',
    verifiedVisit: true,
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'Can I test cameras and lenses before buying at Gadget Zone Delhi?',
    a: 'Yes, absolutely! We encourage customers to bring their own SD cards and camera bodies. You can test auto-focus speed, check glass sharpness, and inspect the sensor in-store before making any commitment.',
  },
  {
    q: 'How do I check if a specific camera model or lens is in stock right now?',
    a: 'You can tap our WhatsApp button or call us at +91 97165 29933. We respond quickly with live stock availability, pricing, and ready-to-test units.',
  },
  {
    q: 'What are the store timings and days open?',
    a: 'Gadget Zone Delhi is open all 7 days of the week, from 10:30 AM to 8:30 PM.',
  },
  {
    q: 'Where is the store located and how can I navigate there?',
    a: 'We are situated in Delhi. You can click the "Get Directions" button on this page to open our exact Google Maps location directly in your Google Maps app.',
  },
  {
    q: 'What payment modes are accepted at the store?',
    a: 'We accept UPI (Google Pay, PhonePe, Paytm), Bank Transfers (NEFT/IMPS), Debit/Credit Cards, and Cash.',
  },
];
