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
const interiorCategories = [
  { filter: 'living', category: 'Living Space Design', title: 'LUXURY LIVING INTERIOR', style: 'Modern Luxury', services: '3D Interior Visualization, Interior Design' },
  { filter: 'bedroom', category: 'Bedroom Suite Design', title: 'PREMIUM BEDROOM SUITE', style: 'Contemporary Luxury', services: '3D Interior Visualization, Bedroom Design' },
  { filter: 'kitchen', category: 'Kitchen & Dining', title: 'DESIGNER KITCHEN SPACE', style: 'Contemporary Minimalist', services: '3D Interior Visualization, Kitchen Design' },
  { filter: 'office', category: 'Executive Workspace', title: 'CORPORATE OFFICE DESIGN', style: 'Modern Professional', services: '3D Interior Visualization, Office Design' },
  { filter: 'commercial', category: 'Commercial & Retail', title: 'COMMERCIAL INTERIOR', style: 'Luxury Commercial', services: '3D Interior Visualization, Commercial Design' },
];
const autoInteriorProjects = interiorKeys.map((path, i) => {
  const filename = path.split('/').pop();
  const cat = interiorCategories[i % interiorCategories.length];
  return {
    id: 2000 + i,
    title: `${cat.title} ${String(i + 1).padStart(2, '0')}`,
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
      style: cat.style,
      services: cat.services,
    },
  };
});


const rawProjects = [
  {
    "id": 1,
    "title": "ROYAL FACADE RESIDENCE",
    "category": "Architectural Elevation",
    "filter": "elevation",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "real_work/project_1.jpg",
    "heroImageKey": "real_work/project_1.jpg",
    "description": "A stately multi-storey architectural elevation featuring neoclassical pillars, geometric gold CNC lattice panels, and warm integrated soffit lighting.",
    "concept": "Architectural facade visualization engineered with high precision, ambient lighting, and rich material finishes.",
    "galleryKeys": [
      "real_work/project_1.jpg"
    ],
    "details": {
      "area": "6,000 sq ft",
      "duration": "4 weeks",
      "style": "Luxury Facade",
      "services": "3D Exterior Render, Architectural Visualization"
    }
  },
  {
    "id": 2,
    "title": "THE SUN EMBLEM VILLA",
    "category": "Architectural Elevation",
    "filter": "elevation",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "real_work/project_2.jpg",
    "heroImageKey": "real_work/project_2.jpg",
    "description": "An angular perspective highlight of a luxury multi-family residence with custom wrought-iron railings, stone cladding, and biophilic surrounding design.",
    "concept": "Architectural facade visualization engineered with high precision, ambient lighting, and rich material finishes.",
    "galleryKeys": [
      "real_work/project_2.jpg"
    ],
    "details": {
      "area": "6,000 sq ft",
      "duration": "4 weeks",
      "style": "Luxury Facade",
      "services": "3D Exterior Render, Architectural Visualization"
    }
  },
  {
    "id": 3,
    "title": "LUXURY PALATIAL ELEVATION",
    "category": "Architectural Elevation",
    "filter": "elevation",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "real_work/project_3.jpg",
    "heroImageKey": "real_work/project_3.jpg",
    "description": "Symmetrical elevation design emphasizing vertical proportion, recessed dark archways, and warm exterior ambient lighting.",
    "concept": "Architectural facade visualization engineered with high precision, ambient lighting, and rich material finishes.",
    "galleryKeys": [
      "real_work/project_3.jpg"
    ],
    "details": {
      "area": "6,000 sq ft",
      "duration": "4 weeks",
      "style": "Luxury Facade",
      "services": "3D Exterior Render, Architectural Visualization"
    }
  },
  {
    "id": 4,
    "title": "GRAND CLASSIC RESIDENCE",
    "category": "Architectural Elevation",
    "filter": "elevation",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "real_work/project_4.jpg",
    "heroImageKey": "real_work/project_4.jpg",
    "description": "A dual-wing residential facade with fluted Corinthian pillars, textured stone panels, and lush balcony greenery.",
    "concept": "Architectural facade visualization engineered with high precision, ambient lighting, and rich material finishes.",
    "galleryKeys": [
      "real_work/project_4.jpg"
    ],
    "details": {
      "area": "6,000 sq ft",
      "duration": "4 weeks",
      "style": "Luxury Facade",
      "services": "3D Exterior Render, Architectural Visualization"
    }
  },
  {
    "id": 5,
    "title": "MODERN ARCHITECTURAL MANSION",
    "category": "Architectural Elevation",
    "filter": "elevation",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "real_work/project_5.jpg",
    "heroImageKey": "real_work/project_5.jpg",
    "description": "A multi-tier luxury elevation featuring glass balustrades, warm timber under-ceilings, and decorative brass screens.",
    "concept": "Architectural facade visualization engineered with high precision, ambient lighting, and rich material finishes.",
    "galleryKeys": [
      "real_work/project_5.jpg"
    ],
    "details": {
      "area": "6,000 sq ft",
      "duration": "4 weeks",
      "style": "Luxury Facade",
      "services": "3D Exterior Render, Architectural Visualization"
    }
  },
  {
    "id": 6,
    "title": "AURORA LUXURY LOUNGE",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875827.jpg",
    "heroImageKey": "photos/6337009540292875827.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875827.jpg",
      "photos/6337009540292875828.jpg"
    ],
    "details": {
      "area": "2500 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 7,
    "title": "ROYAL SUITE BEDROOM",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875829.jpg",
    "heroImageKey": "photos/6337009540292875829.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875829.jpg",
      "photos/6337009540292875830.jpg"
    ],
    "details": {
      "area": "2740 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 8,
    "title": "GOURMET MARBLE KITCHEN",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875830.jpg",
    "heroImageKey": "photos/6337009540292875830.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875830.jpg",
      "photos/6337009540292875831.jpg"
    ],
    "details": {
      "area": "2860 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 9,
    "title": "MODERN WORKSPACE STUDIO",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875832.jpg",
    "heroImageKey": "photos/6337009540292875832.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875832.jpg",
      "photos/6337009540292875833.jpg"
    ],
    "details": {
      "area": "3100 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 10,
    "title": "LUXURY HOTEL RECEPTION",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875833.jpg",
    "heroImageKey": "photos/6337009540292875833.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875833.jpg",
      "photos/6337009540292875834.jpg"
    ],
    "details": {
      "area": "3220 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 11,
    "title": "OPULENT LIVING RESIDENCE",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875835.jpg",
    "heroImageKey": "photos/6337009540292875835.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875835.jpg",
      "photos/6337009540292875836.jpg"
    ],
    "details": {
      "area": "3460 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 12,
    "title": "SANCTUARY MASTER BEDROOM",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875836.jpg",
    "heroImageKey": "photos/6337009540292875836.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875836.jpg",
      "photos/6337009540292875837.jpg"
    ],
    "details": {
      "area": "3580 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 13,
    "title": "LUXURY ISLAND KITCHEN",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875838.jpg",
    "heroImageKey": "photos/6337009540292875838.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875838.jpg",
      "photos/6337009540292875839.jpg"
    ],
    "details": {
      "area": "3820 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 14,
    "title": "MINIMALIST DESK SUITE",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875839.jpg",
    "heroImageKey": "photos/6337009540292875839.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875839.jpg",
      "photos/6337009540292875841.jpg"
    ],
    "details": {
      "area": "3940 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 15,
    "title": "METROPOLITAN LOUNGE BAR",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875842.jpg",
    "heroImageKey": "photos/6337009540292875842.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875842.jpg",
      "photos/6337009540292875843.jpg"
    ],
    "details": {
      "area": "4180 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 16,
    "title": "NEO-CLASSIC LIVING AREA",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875843.jpg",
    "heroImageKey": "photos/6337009540292875843.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875843.jpg",
      "photos/6337009540292875844.jpg"
    ],
    "details": {
      "area": "4300 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 17,
    "title": "CONTEMPORARY MASTER BEDROOM",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875845.jpg",
    "heroImageKey": "photos/6337009540292875845.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875845.jpg",
      "photos/6337009540292875846.jpg"
    ],
    "details": {
      "area": "4540 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 18,
    "title": "MONOCHROME KITCHEN SUITE",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875846.jpg",
    "heroImageKey": "photos/6337009540292875846.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875846.jpg",
      "photos/6337009540292875848.jpg"
    ],
    "details": {
      "area": "4660 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 19,
    "title": "CREATIVE DESIGN STUDIO",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875849.jpg",
    "heroImageKey": "photos/6337009540292875849.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875849.jpg",
      "photos/6337009540292875850.jpg"
    ],
    "details": {
      "area": "4900 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 20,
    "title": "COMMERCIAL EXPERIENCE CENTER",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875850.jpg",
    "heroImageKey": "photos/6337009540292875850.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875850.jpg",
      "photos/6337009540292875851.jpg"
    ],
    "details": {
      "area": "5020 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 21,
    "title": "MONOCHROME LOUNGE",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875853.jpg",
    "heroImageKey": "photos/6337009540292875853.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875853.jpg",
      "photos/6337009540292875854.jpg"
    ],
    "details": {
      "area": "5260 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 22,
    "title": "GOLD ACCENT BEDROOM",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875854.jpg",
    "heroImageKey": "photos/6337009540292875854.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875854.jpg",
      "photos/6337009540292875855.jpg"
    ],
    "details": {
      "area": "5380 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 23,
    "title": "MINIMALIST KITCHEN HAVEN",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875856.jpg",
    "heroImageKey": "photos/6337009540292875856.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875856.jpg",
      "photos/6337009540292875857.jpg"
    ],
    "details": {
      "area": "5620 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 24,
    "title": "THE BOARDROOM SUITE",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875857.jpg",
    "heroImageKey": "photos/6337009540292875857.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875857.jpg",
      "photos/6337009540292875858.jpg"
    ],
    "details": {
      "area": "5740 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 25,
    "title": "VIP RECEPTION SUITE",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875859.jpg",
    "heroImageKey": "photos/6337009540292875859.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875859.jpg",
      "photos/6337009540292875860.jpg"
    ],
    "details": {
      "area": "5980 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 26,
    "title": "ZEN MINIMALIST LIVING",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875860.jpg",
    "heroImageKey": "photos/6337009540292875860.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875860.jpg",
      "photos/6337009540292875861.jpg"
    ],
    "details": {
      "area": "6100 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 27,
    "title": "VELVET DREAMS SUITE",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875862.jpg",
    "heroImageKey": "photos/6337009540292875862.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875862.jpg",
      "photos/6337009540292875863.jpg"
    ],
    "details": {
      "area": "6340 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 28,
    "title": "THE CULINARY STUDIO",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875863.jpg",
    "heroImageKey": "photos/6337009540292875863.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875863.jpg",
      "photos/6337009540292875864.jpg"
    ],
    "details": {
      "area": "6460 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 29,
    "title": "INTELLIGENT WORKSPACE",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875865.jpg",
    "heroImageKey": "photos/6337009540292875865.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875865.jpg",
      "photos/6337009540292875866.jpg"
    ],
    "details": {
      "area": "2700 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 30,
    "title": "ARCHITECTURAL LOBBY DESIGN",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875866.jpg",
    "heroImageKey": "photos/6337009540292875866.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875866.jpg",
      "photos/6337009540292875867.jpg"
    ],
    "details": {
      "area": "2820 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 31,
    "title": "CELESTIAL LIVING SUITE",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875868.jpg",
    "heroImageKey": "photos/6337009540292875868.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875868.jpg",
      "photos/6337009540292875869.jpg"
    ],
    "details": {
      "area": "3060 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 32,
    "title": "URBAN LUXURY BEDROOM",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875869.jpg",
    "heroImageKey": "photos/6337009540292875869.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875869.jpg",
      "photos/6337009540292875870.jpg"
    ],
    "details": {
      "area": "3180 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 33,
    "title": "STATUARY MARBLE KITCHEN",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875871.jpg",
    "heroImageKey": "photos/6337009540292875871.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875871.jpg",
      "photos/6337009540292875872 (1).jpg"
    ],
    "details": {
      "area": "3420 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 34,
    "title": "PREMIUM CONSULTING SUITE",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875872 (1).jpg",
    "heroImageKey": "photos/6337009540292875872 (1).jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875872 (1).jpg",
      "photos/6337009540292875872.jpg"
    ],
    "details": {
      "area": "3540 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 35,
    "title": "THE ATRIUM LOUNGE",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875874.jpg",
    "heroImageKey": "photos/6337009540292875874.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875874.jpg",
      "photos/6337009540292875875.jpg"
    ],
    "details": {
      "area": "3780 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 36,
    "title": "ELEGANT FIRESIDE LOUNGE",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875875.jpg",
    "heroImageKey": "photos/6337009540292875875.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875875.jpg",
      "photos/6337009540292875876.jpg"
    ],
    "details": {
      "area": "3900 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 37,
    "title": "BOUTIQUE MASTER SUITE",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875877.jpg",
    "heroImageKey": "photos/6337009540292875877.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875877.jpg",
      "photos/6337009540292875878.jpg"
    ],
    "details": {
      "area": "4140 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 38,
    "title": "CONTEMPORARY DINING & KITCHEN",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875878.jpg",
    "heroImageKey": "photos/6337009540292875878.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875878.jpg",
      "photos/6337009540292875879.jpg"
    ],
    "details": {
      "area": "4260 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 39,
    "title": "EXECUTIVE DIRECTOR SUITE",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875880.jpg",
    "heroImageKey": "photos/6337009540292875880.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875880.jpg",
      "photos/6337009540292875881.jpg"
    ],
    "details": {
      "area": "4500 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 40,
    "title": "BOUTIQUE SHOWROOM LOBBY II",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875881.jpg",
    "heroImageKey": "photos/6337009540292875881.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875881.jpg",
      "photos/6337009540292875882.jpg"
    ],
    "details": {
      "area": "4620 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 41,
    "title": "GRAND APARTMENT LIVING II",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875883.jpg",
    "heroImageKey": "photos/6337009540292875883.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875883.jpg",
      "photos/6337009540292875884.jpg"
    ],
    "details": {
      "area": "4860 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 42,
    "title": "THE HAVEN BEDROOM II",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875884.jpg",
    "heroImageKey": "photos/6337009540292875884.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875884.jpg",
      "photos/6337009540292875885.jpg"
    ],
    "details": {
      "area": "4980 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 43,
    "title": "GOURMET MARBLE KITCHEN II",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875886.jpg",
    "heroImageKey": "photos/6337009540292875886.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875886.jpg",
      "photos/6337009540292875887.jpg"
    ],
    "details": {
      "area": "5220 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 44,
    "title": "MODERN WORKSPACE STUDIO II",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875887.jpg",
    "heroImageKey": "photos/6337009540292875887.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875887.jpg",
      "photos/6337009540292875888.jpg"
    ],
    "details": {
      "area": "5340 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 45,
    "title": "LUXURY HOTEL RECEPTION II",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875889.jpg",
    "heroImageKey": "photos/6337009540292875889.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875889.jpg",
      "photos/6337009540292875890.jpg"
    ],
    "details": {
      "area": "5580 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 46,
    "title": "MODERN SANCTUARY LIVING II",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875890.jpg",
    "heroImageKey": "photos/6337009540292875890.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875890.jpg",
      "photos/6337009540292875891.jpg"
    ],
    "details": {
      "area": "5700 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 47,
    "title": "ROYAL SUITE BEDROOM II",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875892.jpg",
    "heroImageKey": "photos/6337009540292875892.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875892.jpg",
      "photos/6337009540292875893.jpg"
    ],
    "details": {
      "area": "5940 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 48,
    "title": "CHEF'S MODERN KITCHEN II",
    "category": "Kitchen & Dining",
    "filter": "kitchen",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875893.jpg",
    "heroImageKey": "photos/6337009540292875893.jpg",
    "description": "Bespoke kitchen & dining visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875893.jpg",
      "photos/6337009540292875894.jpg"
    ],
    "details": {
      "area": "6060 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 49,
    "title": "CORPORATE HEADQUARTERS DESK II",
    "category": "Executive Workspace",
    "filter": "office",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875895.jpg",
    "heroImageKey": "photos/6337009540292875895.jpg",
    "description": "Bespoke executive workspace visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875895.jpg",
      "photos/6337009540292875896.jpg"
    ],
    "details": {
      "area": "6300 sq ft",
      "duration": "5 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 50,
    "title": "EXCLUSIVE RETAIL SPACE II",
    "category": "Commercial & Retail",
    "filter": "commercial",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875896.jpg",
    "heroImageKey": "photos/6337009540292875896.jpg",
    "description": "Bespoke commercial & retail visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875896.jpg",
      "photos/6337009540292875897 (1).jpg"
    ],
    "details": {
      "area": "6420 sq ft",
      "duration": "3 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 51,
    "title": "AURORA LUXURY LOUNGE II",
    "category": "Living Space Design",
    "filter": "living",
    "location": "Faridabad, HR",
    "year": "2025",
    "imageKey": "photos/6337009540292875897.jpg",
    "heroImageKey": "photos/6337009540292875897.jpg",
    "description": "Bespoke living space design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875897.jpg",
      "photos/6337009540292875898.jpg"
    ],
    "details": {
      "area": "2660 sq ft",
      "duration": "5 weeks",
      "style": "Modern Luxury",
      "services": "3D Interior Visualization, Spatial Design"
    }
  },
  {
    "id": 52,
    "title": "SANCTUARY MASTER BEDROOM II",
    "category": "Bedroom Suite Design",
    "filter": "bedroom",
    "location": "Delhi NCR, India",
    "year": "2025",
    "imageKey": "photos/6337009540292875898.jpg",
    "heroImageKey": "photos/6337009540292875898.jpg",
    "description": "Bespoke bedroom suite design visualization featuring tailored textures, custom ambient lighting, and photorealistic 3D spatial planning.",
    "concept": "Engineered with attention to material honesty, ergonomic proportions, and mood-centric illumination to communicate spatial luxury.",
    "galleryKeys": [
      "photos/6337009540292875898.jpg",
      "photos/6337009540292875899.jpg"
    ],
    "details": {
      "area": "2780 sq ft",
      "duration": "3 weeks",
      "style": "Contemporary Minimalist",
      "services": "3D Interior Visualization, Spatial Design"
    }
  }
];

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

// real_work projects (hand-curated elevation showcases)
const realWorkProjects = rawProjects.filter(p => p.imageKey.startsWith('real_work/')).map(p => ({
  ...p,
  image: getImg(p.imageKey),
  heroImage: getImg(p.heroImageKey),
  gallery: p.galleryKeys.map(k => getImg(k)),
}));

// Final merged list: real_work elevations first, then auto exterior, then auto interior
export const projects = [
  ...realWorkProjects,
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
