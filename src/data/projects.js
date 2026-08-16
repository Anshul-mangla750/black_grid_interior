export const multiImageProjects = [
  {
    id: "modern-courtyard-residence",
    title: "Modern Courtyard Residence",
    category: "Residential",
    filter: "elevation",
    mainCategory: "exterior",
    location: "Gurugram, India",
    year: "2025",
    image: "/images/projects/modern-courtyard-residence/exterior.jpg",
    heroImage: "/images/projects/modern-courtyard-residence/exterior.jpg",
    description: "A contemporary residence focused on natural light, clean geometry, exposed concrete, warm teak wood, and indoor-outdoor living.",
    concept: "Engineered around a serene private courtyard to maximize daylight while retaining thermal comfort and architectural privacy.",
    images: [
      "/images/projects/modern-courtyard-residence/exterior.jpg",
      "/images/projects/modern-courtyard-residence/living-room.jpg",
      "/images/projects/modern-courtyard-residence/bedroom.jpg",
      "/images/projects/modern-courtyard-residence/courtyard.jpg"
    ],
    galleryKeys: [],
    details: {
      area: "6,500 sq ft",
      duration: "6 months",
      style: "Modern Indian Minimalist",
      services: "Architecture, Interior Design & Courtyard Landscape"
    }
  },
  {
    id: "urban-luxury-villa",
    title: "Urban Luxury Villa",
    category: "Residential",
    filter: "living",
    mainCategory: "interior",
    location: "New Delhi, India",
    year: "2025",
    image: "/images/projects/urban-luxury-villa/exterior.jpg",
    heroImage: "/images/projects/urban-luxury-villa/exterior.jpg",
    description: "A double-height urban villa featuring white travertine stone accent walls, custom brass lattice screens, and tailored luxury furnishings.",
    concept: "Designed to combine monumental architectural presence with soft ambient warm illumination and cozy interior proportions.",
    images: [
      "/images/projects/urban-luxury-villa/exterior.jpg",
      "/images/projects/urban-luxury-villa/living-room.jpg",
      "/images/projects/urban-luxury-villa/bedroom.jpg",
      "/images/projects/urban-luxury-villa/kitchen.jpg"
    ],
    galleryKeys: [],
    details: {
      area: "8,200 sq ft",
      duration: "8 months",
      style: "Modern Luxury",
      services: "Full Turnkey Interior Architecture & Styling"
    }
  },
  {
    id: "contemporary-family-residence",
    title: "Contemporary Family Residence",
    category: "Residential",
    filter: "living",
    mainCategory: "interior",
    location: "Faridabad, India",
    year: "2025",
    image: "/images/projects/contemporary-family-residence/exterior.jpg",
    heroImage: "/images/projects/contemporary-family-residence/exterior.jpg",
    description: "A sprawling contemporary home integrating biophilic interior gardens, warm wood paneling, and custom acoustic ceiling layouts.",
    concept: "Spatial zoning tailored for modern family living with high visual harmony across natural stone textures and warm ambient lighting.",
    images: [
      "/images/projects/contemporary-family-residence/exterior.jpg",
      "/images/projects/contemporary-family-residence/living-room.jpg",
      "/images/projects/contemporary-family-residence/bedroom.jpg",
      "/images/projects/contemporary-family-residence/dining.jpg"
    ],
    galleryKeys: [],
    details: {
      area: "5,400 sq ft",
      duration: "5 months",
      style: "Warm Contemporary",
      services: "Interior Architecture & 3D Visualization"
    }
  },
  {
    id: "minimalist-garden-house",
    title: "Minimalist Garden House",
    category: "Residential",
    filter: "elevation",
    mainCategory: "exterior",
    location: "Noida, India",
    year: "2024",
    image: "/images/projects/minimalist-garden-house/exterior.jpg",
    heroImage: "/images/projects/minimalist-garden-house/exterior.jpg",
    description: "A minimalist pavilion home surrounded by landscaped gardens, stone reflection pools, and floor-to-ceiling glass facades.",
    concept: "Emphasizes visual transparency, clean horizontal geometry, and seamless transition between indoor spaces and landscaped gardens.",
    images: [
      "/images/projects/minimalist-garden-house/exterior.jpg",
      "/images/projects/minimalist-garden-house/living-room.jpg",
      "/images/projects/minimalist-garden-house/bedroom.jpg",
      "/images/projects/minimalist-garden-house/garden.jpg"
    ],
    galleryKeys: [],
    details: {
      area: "4,800 sq ft",
      duration: "4 months",
      style: "Biophilic Minimalist",
      services: "Architectural Elevation & Landscaping"
    }
  },
  {
    id: "modern-weekend-residence",
    title: "Modern Weekend Residence",
    category: "Residential",
    filter: "bedroom",
    mainCategory: "interior",
    location: "Gurugram, India",
    year: "2024",
    image: "/images/projects/modern-weekend-residence/exterior.jpg",
    heroImage: "/images/projects/modern-weekend-residence/exterior.jpg",
    description: "A private architectural retreat featuring panoramic terrace views, bespoke timber woodwork, and luxury relaxation master suites.",
    concept: "Crafted for peaceful weekend escapes with tranquil neutral tones, architectural fireplace accents, and seamless outdoor connectivity.",
    images: [
      "/images/projects/modern-weekend-residence/exterior.jpg",
      "/images/projects/modern-weekend-residence/living-room.jpg",
      "/images/projects/modern-weekend-residence/bedroom.jpg",
      "/images/projects/modern-weekend-residence/terrace.jpg"
    ],
    galleryKeys: [],
    details: {
      area: "4,200 sq ft",
      duration: "4 months",
      style: "Resort Minimal",
      services: "Interior Architecture & Custom Furnishings"
    }
  }
];

export const projects = multiImageProjects.map((p) => ({
  ...p,
  gallery: p.images,
}));

export const testimonials = [
  {
    id: 1,
    text: 'The 3D elevation renders provided by Black Grid Interiors allowed us to visualize the exact stone texture and brass details before construction. Phenomenal quality!',
    author: 'Rajesh Kumar',
    role: 'Principal Architect',
    company: 'Studio RK Architecture',
  },
  {
    id: 2,
    text: 'Black Grid Interiors transformed our architectural elevation into stunning photorealistic imagery. Their work elevated our entire project presentation.',
    author: 'Priya Sharma',
    role: 'Interior Designer',
    company: 'Atelier Priya',
  },
  {
    id: 3,
    text: 'Working with Black Grid Interiors was seamless. They captured the exact mood, lighting, and facade proportions we envisioned.',
    author: 'Arjun Mehta',
    role: 'Real Estate Developer',
    company: 'Meridian Developments',
  },
];

export const services = [
  {
    id: 1,
    number: '01',
    title: 'INTERIOR DESIGN & TURNKEY DECOR',
    description: 'Bespoke interior design, custom furniture curation, material selection, acoustic integration, and complete aesthetic styling for luxury residences and apartments.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    id: 2,
    number: '02',
    title: 'INTERIOR ARCHITECTURE & SPATIAL PLANNING',
    description: 'Structural spatial planning, wall layout optimization, ceiling lighting design, 2D working floor plans, and comprehensive interior architecture engineering.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 3,
    number: '03',
    title: 'COMMERCIAL INTERIOR DESIGN & HOSPITALITY',
    description: 'High-impact commercial interior design for luxury corporate offices, retail showrooms, boutique hotels, restaurants, and executive reception lounges.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 4,
    number: '04',
    title: '3D VISUALIZATION & ARCHITECTURAL RENDERING',
    description: 'Hyper-photorealistic 3D interior & exterior renders, lighting simulations, material moodboards, and 360° virtual walkthroughs for pre-construction clarity.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 5,
    number: '05',
    title: 'ARCHITECTURAL ELEVATION & FACADE DESIGN',
    description: 'Stately exterior elevation concepts, CNC brass lattice screens, neoclassical and modern facade detailing, stone cladding, and exterior illumination.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    id: 6,
    number: '06',
    title: 'LANDSCAPE ARCHITECTURE & TERRAIN LIGHTING',
    description: 'Biophilic terrace design, outdoor garden landscapes, exterior facade lighting engineering, and site terrain planning.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'DISCOVER & CONSULT',
    description: 'Analyzing site conditions, structural floor plans, architectural elevation requirements, and client design aspirational goals.',
  },
  {
    number: '02',
    title: 'ARCHITECTURAL SCHEMATICS',
    description: 'Developing spatial layouts, exterior facade proportions, stone textures, CNC screen accents, and lighting concepts.',
  },
  {
    number: '03',
    title: 'HIGH-FIDELITY VISUALIZATION',
    description: 'Engineering ultra-high resolution 3D renders capturing daylight reflections, night accent lighting, and exact material specifications.',
  },
  {
    number: '04',
    title: 'EXECUTION & DELIVERY',
    description: 'Delivering detailed architectural working drawings, presentation renders, and site execution guidelines for seamless realization.',
  },
];

export const stats = [
  { number: '7+', label: 'YEARS OF EXPERIENCE' },
  { number: '250+', label: 'INTERIOR DESIGNS' },
  { number: '180+', label: '3D VISUALIZATIONS' },
  { number: '120+', label: 'COMMERCIAL SPACES' },
];
