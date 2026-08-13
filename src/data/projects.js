import project1 from '../assets/real_work/project_1.jpg';
import project2 from '../assets/real_work/project_2.jpg';
import project3 from '../assets/real_work/project_3.jpg';
import project4 from '../assets/real_work/project_4.jpg';
import project5 from '../assets/real_work/project_5.jpg';

export const projects = [
  {
    id: 1,
    title: 'ROYAL FACADE RESIDENCE',
    category: 'Architectural Elevation',
    filter: 'living',
    location: 'Faridabad, HR',
    year: '2025',
    image: project1,
    heroImage: project1,
    description: 'A stately multi-storey architectural elevation featuring neoclassical pillars, geometric gold CNC lattice panels, and warm integrated soffit lighting.',
    concept: 'Harmonizing classic European architectural motifs with modern Indian luxury. The façade features grand double-height columns, ornate balconies, and a distinctive sun emblem motif atop the stone frieze.',
    gallery: [
      project1,
      project2,
      project3,
    ],
    details: {
      area: '5,500 sq ft',
      duration: '4 weeks',
      style: 'Neoclassical Luxury',
      services: '3D Exterior Elevation, Architectural Visualization',
    },
  },
  {
    id: 2,
    title: 'THE SUN EMBLEM VILLA',
    category: 'Architectural Elevation',
    filter: 'living',
    location: 'Faridabad, HR',
    year: '2025',
    image: project2,
    heroImage: project2,
    description: 'An angular perspective highlight of a luxury multi-family residence with custom wrought-iron railings, stone cladding, and biophilic surrounding design.',
    concept: 'Designed to maximize natural light and street presence. The building utilizes premium travertine stone textures paired with brass-gold accent screens for privacy and shade.',
    gallery: [
      project2,
      project1,
      project5,
    ],
    details: {
      area: '6,200 sq ft',
      duration: '5 weeks',
      style: 'Modern Classic',
      services: '3D Exterior Render, Facade Design',
    },
  },
  {
    id: 3,
    title: 'LUXURY PALATIAL ELEVATION',
    category: 'Architectural Elevation',
    filter: 'commercial',
    location: 'Faridabad, HR',
    year: '2024',
    image: project3,
    heroImage: project3,
    description: 'Symmetrical elevation design emphasizing vertical proportion, recessed dark archways, and warm exterior ambient lighting.',
    concept: 'A balanced composition featuring ground-floor stilt parking, floating balconies with gold patterned screen highlights, and timeless stone detailing.',
    gallery: [
      project3,
      project1,
      project4,
    ],
    details: {
      area: '4,800 sq ft',
      duration: '3 weeks',
      style: 'Contemporary Neoclassical',
      services: '3D Visualization, Facade Lighting',
    },
  },
  {
    id: 4,
    title: 'GRAND CLASSIC RESIDENCE',
    category: 'Architectural Elevation',
    filter: 'living',
    location: 'Delhi NCR, India',
    year: '2024',
    image: project4,
    heroImage: project4,
    description: 'A dual-wing residential facade with fluted Corinthian pillars, textured stone panels, and lush balcony greenery.',
    concept: 'Designed for multi-generational living with separate wings anchored by a central illuminated entrance feature and warm wood ceiling accents.',
    gallery: [
      project4,
      project5,
      project1,
    ],
    details: {
      area: '7,000 sq ft',
      duration: '6 weeks',
      style: 'Classic Villa',
      services: '3D Architectural Render, Lighting Concept',
    },
  },
  {
    id: 5,
    title: 'MODERN ARCHITECTURAL MANSION',
    category: 'Architectural Elevation',
    filter: 'commercial',
    location: 'Faridabad, HR',
    year: '2025',
    image: project5,
    heroImage: project5,
    description: 'A multi-tier luxury elevation featuring glass balustrades, warm timber under-ceilings, and decorative brass screens.',
    concept: 'Combining slate grey render with warm wooden tones and brass lattice features. Large floor-to-ceiling openings create seamless indoor-outdoor connection.',
    gallery: [
      project5,
      project3,
      project2,
    ],
    details: {
      area: '8,500 sq ft',
      duration: '6 weeks',
      style: 'Ultra-Modern Luxury',
      services: '3D Exterior Render, Architectural Concept',
    },
  },
];

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
    title: '3D INTERIOR VISUALIZATION',
    description: 'Photorealistic interiors that communicate the final design before construction. We bring every material, texture, and light source to life with extraordinary precision.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    id: 2,
    number: '02',
    title: 'ARCHITECTURAL VISUALIZATION',
    description: 'High-end visual representations for architects and developers. From exterior façades to interior atriums, we create visuals that sell the vision.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 3,
    number: '03',
    title: 'PRODUCT VISUALIZATION',
    description: 'Detailed environments for furniture, materials and interior products. We place every product in its ideal context, showcasing quality and craftsmanship.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    id: 4,
    number: '04',
    title: 'COMMERCIAL SPACES',
    description: 'Visualization for offices, showrooms, hospitality and retail spaces. We help commercial clients make confident decisions through immersive visual storytelling.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understanding the space, floor plans, facade requirements, and visual direction with the client.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Developing architectural composition, stone textures, pillar details, gold lattice screens, and lighting schemes.',
  },
  {
    number: '03',
    title: 'VISUALIZE',
    description: 'Creating high-resolution photorealistic 3D renders capturing daylight reflections and warm night accent lighting.',
  },
  {
    number: '04',
    title: 'DELIVER',
    description: 'Delivering presentation-ready, ultra-high definition imagery for site execution and client presentations.',
  },
];

export const stats = [
  { number: '100+', label: 'ELEVATIONS' },
  { number: '50+', label: 'HAPPY CLIENTS' },
  { number: '15+', label: 'CITIES' },
  { number: '5+', label: 'YEARS EXPERIENCE' },
];
