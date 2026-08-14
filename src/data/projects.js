// Image modules from organized subfolders
const exteriorModules = import.meta.glob('../assets/photos/exterior/*.jpg', { eager: true, import: 'default' });
const interiorModules = import.meta.glob('../assets/photos/interior/*.jpg', { eager: true, import: 'default' });
const realWorkModules = import.meta.glob('../assets/real_work/*.jpg', { eager: true, import: 'default' });

function getImg(key) {
  if (key.startsWith('photos/exterior/')) {
    return exteriorModules[`../assets/${key}`] || Object.values(exteriorModules)[0];
  }
  if (key.startsWith('photos/interior/')) {
    return interiorModules[`../assets/${key}`] || Object.values(interiorModules)[0];
  }
  if (key.startsWith('real_work/')) {
    return realWorkModules[`../assets/${key}`] || Object.values(realWorkModules)[0];
  }
  return '';
}

// Auto-generate exterior projects from photos/exterior/ folder
// Auto-generate exterior projects from photos/exterior/ folder
const exteriorKeys = Object.keys(exteriorModules).filter((k) => !k.includes('(1)')).sort();
const autoExteriorProjects = exteriorKeys.map((path, i) => {
  const filename = path.split('/').pop();
  return {
    id: 1000 + i,
    title: `EXTERIOR ELEVATION ${String(i + 1).padStart(2, '0')}`,
    category: 'Architectural Elevation',
    filter: 'elevation',
    mainCategory: 'exterior',
    location: 'Faridabad, HR',
    year: '2025',
    imageKey: `photos/exterior/${filename}`,
    heroImageKey: `photos/exterior/${filename}`,
    description: 'Architectural elevation and facade design featuring premium stone cladding, CNC lattice screens, and precision exterior lighting.',
    concept: 'Stately exterior facade engineered with high precision, warm ambient lighting, and rich material finishes.',
    galleryKeys: [`photos/exterior/${filename}`],
    details: {
      area: '4,000–8,000 sq ft',
      duration: '3–5 weeks',
      style: 'Luxury Facade',
      services: 'Architectural Elevation, 3D Exterior Render',
    },
  };
});

// Auto-generate interior projects from photos/interior/ folder (filtering duplicate OS copies)
const interiorKeys = Object.keys(interiorModules).filter((k) => !k.includes('(1)')).sort();

// User-verified category map — each filename mapped to its correct category
const interiorCategoryMap = {
  '6337009540292875832.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875835.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875868.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875869.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875870.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875871.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875872.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875874.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875875.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875876.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875877.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875878.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875879.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875880.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875881.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875882.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875883.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875884.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875885.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875886.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875887.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875888.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875889.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875890.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875891.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875892.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875893.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875894.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875895.jpg': { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING' },
  '6337009540292875896.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875897.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875898.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
  '6337009540292875899.jpg': { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'BEDROOM SUITE' },
};

// Per-category counters for sequential numbering
const catCounters = {};

const autoInteriorProjects = interiorKeys.map((path, i) => {
  const filename = path.split('/').pop();
  const cat = interiorCategoryMap[filename] || { filter: 'living', category: 'Living Space Design', title: 'INTERIOR DESIGN' };
  catCounters[cat.filter] = (catCounters[cat.filter] || 0) + 1;
  const num = String(catCounters[cat.filter]).padStart(2, '0');
  return {
    id: 2000 + i,
    title: `${cat.title} ${num}`,
    category: cat.category,
    filter: cat.filter,
    mainCategory: 'interior',
    location: 'Faridabad, HR',
    year: '2025',
    imageKey: `photos/interior/${filename}`,
    heroImageKey: `photos/interior/${filename}`,
    description: 'Bespoke interior design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.',
    concept: 'Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.',
    galleryKeys: [`photos/interior/${filename}`],
    details: {
      area: '1,500–4,000 sq ft',
      duration: '3–5 weeks',
      style: cat.filter === 'bedroom' ? 'Contemporary Luxury' : 'Modern Luxury',
      services: `3D Interior Visualization, ${cat.category}`,
    },
  };
});

// rawProjects — real_work folder removed by user, no hand-curated entries

// Resolve images for auto-generated projects
const resolvedExterior = autoExteriorProjects.map(p => ({
  ...p,
  image: getImg(p.imageKey),
  heroImage: getImg(p.heroImageKey),
  gallery: p.galleryKeys.map(k => getImg(k)),
}));

const resolvedInterior = autoInteriorProjects.map(p => ({
  ...p,
  image: getImg(p.imageKey),
  heroImage: getImg(p.heroImageKey),
  gallery: p.galleryKeys.map(k => getImg(k)),
}));

// Final merged list: auto exterior + auto interior
export const projects = [
  ...resolvedExterior,
  ...resolvedInterior,
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
