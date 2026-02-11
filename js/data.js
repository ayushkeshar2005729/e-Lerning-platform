/**
 * E-Learn Platform Data Structure
 * 
 * This file contains all course and lesson data for the e-learning platform.
 * Structure: courses array → each course has lessons array → each lesson has video & content
 * 
 * To add a new course:
 *   1. Add a new object to the courses array
 *   2. Populate id, title, description, instructor, image, duration, lessons array
 *   3. For each lesson, add: id, title, description, videoId (YouTube), content, duration
 */

const courses = [
  {
    id: 1,
    title: "Digital Printing Basics",
    description: "Master the fundamentals of digital printing including inkjet, laser, and offset printing techniques.",
    instructor: "John Doe",
    category: "Printing Technology",
    level: "Beginner",
    rating: 4.8,
    students: 2450,
    image: "📘",
    duration: "3 hours",
    lessons: [
      {
        id: 1,
        title: "Introduction to Inkjet Printing",
        description: "Learn the basics of inkjet technology and its applications",
        videoId: "qz0aGYrrlhU",
        duration: "12 min",
        content: `
          <h2>Introduction to Inkjet Printing</h2>
          <p>Inkjet printing is a digital printing technology that uses tiny droplets of ink to create images on various media. It is widely used for both home and commercial printing.</p>
          
          <h3>Key Concepts:</h3>
          <ul>
            <li><strong>Resolution:</strong> Measured in DPI (dots per inch), typically 300-1200 DPI for professional printing</li>
            <li><strong>Color Models:</strong> CMYK for traditional printing, RGB for digital displays</li>
            <li><strong>Paper Types:</strong> Glossy, matte, and specialized coated papers</li>
          </ul>
          
          <h3>Advantages:</h3>
          <ul>
            <li>Low initial investment compared to offset printing</li>
            <li>Quick turnaround time for small batches</li>
            <li>Excellent color reproduction</li>
            <li>No setup costs for design changes</li>
          </ul>
          
          <h3>Common Applications:</h3>
          <p>Business cards, brochures, banners, photo prints, packaging, and specialty items like mugs and T-shirts.</p>
        `
      },
      {
        id: 2,
        title: "Inkjet Printer Types",
        description: "Explore different types of inkjet printers and their specifications",
        videoId: "qz0aGYrrlhU",
        duration: "15 min",
        content: `
          <h2>Inkjet Printer Types</h2>
          <p>There are several types of inkjet printers, each designed for specific applications and use cases.</p>
          
          <h3>1. Consumer/Home Printers</h3>
          <ul>
            <li>Compact design for office or home use</li>
            <li>4-6 ink colors (CMYK + light cyan/magenta)</li>
            <li>Print speed: 10-15 pages per minute</li>
            <li>Price range: $50-200</li>
          </ul>
          
          <h3>2. Professional Photo Printers</h3>
          <ul>
            <li>12-13 ink colors for superior color accuracy</li>
            <li>Supports wide-format media up to 44 inches</li>
            <li>Gamma correction and advanced color management</li>
            <li>Price range: $1,000-5,000</li>
          </ul>
          
          <h3>3. Large Format/Plotters</h3>
          <ul>
            <li>For engineering drawings, posters, and banners</li>
            <li>Print widths up to 64 inches</li>
            <li>Vector graphics optimization</li>
            <li>Price range: $3,000-20,000+</li>
          </ul>
          
          <h3>4. 3D Inkjet Printers</h3>
          <ul>
            <li>Prints color on 3D objects</li>
            <li>Uses binder and color jet technology</li>
            <li>Applications in prototyping and custom products</li>
          </ul>
        `
      },
      {
        id: 3,
        title: "Color Technology in Inkjet",
        description: "Understand color models and ink mixing in inkjet printing",
        videoId: "qz0aGYrrlhU",
        duration: "18 min",
        content: `
          <h2>Color Technology in Inkjet Printing</h2>
          <p>Color reproduction is fundamental to inkjet printing. Understanding color models and ink technology ensures high-quality results.</p>
          
          <h3>Color Models</h3>
          <p><strong>CMYK (Subtractive):</strong> Used for print. Colors created by mixing Cyan, Magenta, Yellow, and Black.</p>
          <p><strong>RGB (Additive):</strong> Used for screens. Red, Green, Blue light combined create colors.</p>
          
          <h3>Ink Technologies</h3>
          <ul>
            <li><strong>Dye-based inks:</strong> Vibrant colors, less water-resistant, suitable for photo printing</li>
            <li><strong>Pigment-based inks:</strong> More durable, better archival quality, ideal for fine art</li>
            <li><strong>Reactive inks:</strong> Bond chemically with fabric, used for textile printing</li>
            <li><strong>UV-curable inks:</strong> Solidify under UV light, used for specialty applications</li>
          </ul>
          
          <h3>Color Gamut and Accuracy</h3>
          <p>Professional printers achieve 95%+ of the Adobe RGB color space. ICC color profiles ensure consistent output across different paper types.</p>
          
          <h3>Halftoning and Dithering</h3>
          <p>Since inkjet uses discrete dots, algorithms like halftoning and dithering simulate continuous tone and smooth color gradients.</p>
        `
      }
    ]
  },
  {
    id: 2,
    title: "Laser Printing Mastery",
    description: "Comprehensive guide to laser printing technology, maintenance, and optimization for businesses.",
    instructor: "Jane Smith",
    category: "Printing Technology",
    level: "Intermediate",
    rating: 4.9,
    students: 1820,
    image: "🖨️",
    duration: "4 hours",
    lessons: [
      {
        id: 1,
        title: "Laser Technology Fundamentals",
        description: "Understanding how laser printing works at a technical level",
        videoId: "qz0aGYrrlhU",
        duration: "20 min",
        content: `
          <h2>Laser Technology Fundamentals</h2>
          <p>Laser printing uses electrostatic processes to fuse toner onto paper with exceptional quality and speed.</p>
          
          <h3>How Laser Printing Works</h3>
          <ol>
            <li><strong>Charging:</strong> Corona wire charges the photoconductor drum to -600V</li>
            <li><strong>Exposure:</strong> Laser beam writes the image, reducing charge to -100V where print needed</li>
            <li><strong>Development:</strong> Negatively charged toner particles attract to exposed areas</li>
            <li><strong>Transfer:</strong> Paper receives toner via transfer roller</li>
            <li><strong>Fusing:</strong> Heat and pressure bond toner permanently to paper</li>
          </ol>
          
          <h3>Advantages Over Inkjet</h3>
          <ul>
            <li>Higher speed (40-100 ppm for monochrome)</li>
            <li>Lower cost per page</li>
            <li>Consistent output quality</li>
            <li>Better for high-volume printing</li>
          </ul>
        `
      },
      {
        id: 2,
        title: "Color Laser Printers",
        description: "Exploring color laser printing technology and applications",
        videoId: "qz0aGYrrlhU",
        duration: "17 min",
        content: `
          <h2>Color Laser Printing</h2>
          <p>Color laser printers extend the capabilities of monochrome systems, ideal for marketing materials and professional documents.</p>
          
          <h3>Technology Overview</h3>
          <p>Color laser printers use either tandem or carousel architecture to apply CMYK toner in succession.</p>
          
          <h3>Print Speed and Quality</h3>
          <ul>
            <li>Speed: 30-35 ppm (slightly slower than monochrome)</li>
            <li>Resolution: 600-2400 DPI</li>
            <li>Color accuracy within 2-3 Delta E</li>
            <li>Excellent for presentations, reports, and marketing materials</li>
          </ul>
          
          <h3>Cost Considerations</h3>
          <p>Higher toner costs but ideal for medium-volume color printing needs.</p>
        `
      },
      {
        id: 3,
        title: "Maintenance and Troubleshooting",
        description: "Keep your laser printer running smoothly with proper maintenance",
        videoId: "qz0aGYrrlhU",
        duration: "22 min",
        content: `
          <h2>Laser Printer Maintenance & Troubleshooting</h2>
          
          <h3>Regular Maintenance Schedule</h3>
          <ul>
            <li><strong>Weekly:</strong> Check toner levels, remove jams</li>
            <li><strong>Monthly:</strong> Clean pickup rollers, inspect transfer belt</li>
            <li><strong>Quarterly:</strong> Replace toner cartridges, clean photoconductor</li>
            <li><strong>Annually:</strong> Full service by technician</li>
          </ul>
          
          <h3>Common Issues & Solutions</h3>
          <table>
            <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
            <tr><td>Faded Prints</td><td>Low toner</td><td>Replace toner cartridge</td></tr>
            <tr><td>Paper Jams</td><td>Paper quality/moisture</td><td>Use proper paper, clear jam</td></tr>
            <tr><td>Streaks</td><td>Dirty drum</td><td>Clean photoconductor</td></tr>
          </table>
          
          <h3>Extending Printer Life</h3>
          <p>Use genuine supplies, maintain optimal temperature (65-75°F), and follow recommended duty cycles.</p>
        `
      }
    ]
  },
  {
    id: 3,
    title: "Offset Printing Essentials",
    description: "Learn offset printing for high-volume production and professional publishing.",
    instructor: "Robert Chen",
    category: "Printing Technology",
    level: "Advanced",
    rating: 4.7,
    students: 1250,
    image: "📰",
    duration: "5 hours",
    lessons: [
      {
        id: 1,
        title: "Offset Press Operations",
        description: "Master the offset printing process and equipment",
        videoId: "qz0aGYrrlhU",
        duration: "25 min",
        content: `
          <h2>Offset Press Operations</h2>
          <p>Offset printing is the industry standard for high-volume production, offering exceptional quality and consistency.</p>
          
          <h3>Key Process Steps</h3>
          <ol>
            <li>Plate preparation from digital files</li>
            <li>Mounting plate on cylinder</li>
            <li>Register and tension setup</li>
            <li>Ink and dampening solution adjustment</li>
            <li>Color matching and profiling</li>
            <li>Press run with quality checks</li>
          </ol>
          
          <h3>Equipment Types</h3>
          <ul>
            <li><strong>Sheet-fed:</strong> 17x22" up to 40x56" formats</li>
            <li><strong>Web:</strong> Continuous roll printing</li>
            <li><strong>Sheetless:</strong> Direct imaging technology</li>
          </ul>
        `
      },
      {
        id: 2,
        title: "Color Separations and Halftoning",
        description: "Professional techniques for color reproduction",
        videoId: "qz0aGYrrlhU",
        duration: "28 min",
        content: `
          <h2>Color Separations and Halftoning</h2>
          <p>Proper color separation and halftoning are critical for professional offset printing results.</p>
          
          <h3>CMYK Separations</h3>
          <p>Images are separated into Cyan, Magenta, Yellow, and Black plates for precise color control.</p>
          
          <h3>Halftone Screens</h3>
          <ul>
            <li>Lines per inch (LPI): 85-300 LPI depending on paper and application</li>
            <li>Screen angles: Optimize to prevent moiré patterns</li>
            <li>Dot shapes: Round, square, diamond, or custom</li>
          </ul>
          
          <h3>Spot Colors vs. Process Colors</h3>
          <p>Pantone spot colors for precise branding; process colors for photographic reproduction.</p>
        `
      },
      {
        id: 3,
        title: "Quality Control & Finishing",
        description: "Ensure perfect results through QC and professional finishing",
        videoId: "qz0aGYrrlhU",
        duration: "20 min",
        content: `
          <h2>Quality Control & Finishing</h2>
          
          <h3>Press Check Procedures</h3>
          <ul>
            <li>Compare first sheets to contract proofs</li>
            <li>Check register (alignment) within 0.5mm</li>
            <li>Verify color density with densitometer</li>
            <li>Monitor dot gain throughout run</li>
          </ul>
          
          <h3>Finishing Operations</h3>
          <ul>
            <li><strong>Cutting:</strong> Trim to final size</li>
            <li><strong>Folding:</strong> Brochures, booklets</li>
            <li><strong>Binding:</strong> Perfect, saddle stitch, comb</li>
            <li><strong>Coating:</strong> Matte, gloss, or UV varnish</li>
            <li><strong>Lamination:</strong> Protective layer</li>
          </ul>
          
          <h3>Waste and Sustainability</h3>
          <p>Minimize waste through accurate make-ready, optimize ink usage, and recycle paper scraps.</p>
        `
      }
    ]
  },
  {
    id: 4,
    title: "Digital Design for Print",
    description: "Learn design principles and software skills for professional print-ready files.",
    instructor: "Emily Rodriguez",
    category: "Design & Prepress",
    level: "Beginner",
    rating: 4.6,
    students: 3100,
    image: "🎨",
    duration: "6 hours",
    lessons: [
      {
        id: 1,
        title: "Print Design Fundamentals",
        description: "Essential design principles for print media",
        videoId: "qz0aGYrrlhU",
        duration: "19 min",
        content: `
          <h2>Print Design Fundamentals</h2>
          
          <h3>Key Design Principles</h3>
          <ul>
            <li><strong>Balance:</strong> Symmetrical and asymmetrical layouts</li>
            <li><strong>Contrast:</strong> Color, size, and weight differences</li>
            <li><strong>Hierarchy:</strong> Guide viewer through content priority</li>
            <li><strong>Proximity:</strong> Group related elements</li>
            <li><strong>White Space:</strong> Breathing room in design</li>
          </ul>
          
          <h3>Color Theory for Print</h3>
          <p>Use CMYK color space for print projects. Avoid RGB which cannot reproduce all colors in CMYK.</p>
          
          <h3>Typography</h3>
          <ul>
            <li>Choose legible fonts for body text (serif or sans-serif)</li>
            <li>Use display fonts strategically for headlines</li>
            <li>Maintain 1.5x line height for readability</li>
          </ul>
        `
      },
      {
        id: 2,
        title: "File Preparation and Export",
        description: "Create print-ready files with correct specifications",
        videoId: "qz0aGYrrlhU",
        duration: "21 min",
        content: `
          <h2>File Preparation and Export</h2>
          
          <h3>Resolution Requirements</h3>
          <ul>
            <li><strong>Offset/Digital Printing:</strong> 300 DPI minimum</li>
            <li><strong>Newspaper:</strong> 200-250 DPI</li>
            <li><strong>Large Format:</strong> 100-150 DPI (viewing distance considered)</li>
          </ul>
          
          <h3>Bleeds and Trim Marks</h3>
          <ul>
            <li>Add 0.125"-0.25" bleed beyond trim edge</li>
            <li>Include crop marks for cutter alignment</li>
            <li>Keep important content 0.25" from edge</li>
          </ul>
          
          <h3>PDF Export Best Practices</h3>
          <ul>
            <li>Convert all fonts to outlines</li>
            <li>Embed images at 300 DPI</li>
            <li>Use PDF/X-1a standard for print</li>
            <li>Create separations if using spot colors</li>
          </ul>
        `
      },
      {
        id: 3,
        title: "Design Software Overview",
        description: "Introduction to industry-standard design tools",
        videoId: "qz0aGYrrlhU",
        duration: "23 min",
        content: `
          <h2>Design Software Overview</h2>
          
          <h3>Adobe Creative Suite</h3>
          <ul>
            <li><strong>InDesign:</strong> Professional layout and typesetting</li>
            <li><strong>Illustrator:</strong> Vector graphics and logos</li>
            <li><strong>Photoshop:</strong> Photo editing and raster graphics</li>
          </ul>
          
          <h3>Open Source Alternatives</h3>
          <ul>
            <li><strong>Inkscape:</strong> Vector graphics equivalent to Illustrator</li>
            <li><strong>GIMP:</strong> Photo editing alternative to Photoshop</li>
            <li><strong>Scribus:</strong> Desktop publishing for InDesign-like work</li>
          </ul>
          
          <h3>Workflow</h3>
          <p>Design in dedicated software → Export PDF → Send to printer. Always provide both design files and PDF for flexibility.</p>
        `
      }
    ]
  }
];

/**
 * Helper function to get a course by ID
 */
function getCourseById(courseId) {
  return courses.find(course => course.id === parseInt(courseId));
}

/**
 * Helper function to get a lesson by course ID and lesson ID
 */
function getLessonById(courseId, lessonId) {
  const course = getCourseById(courseId);
  if (!course) return null;
  return course.lessons.find(lesson => lesson.id === parseInt(lessonId));
}

/**
 * Helper function to get all courses
 */
function getAllCourses() {
  return courses;
}

/**
 * Helper function to get unique categories
 */
function getCategories() {
  return [...new Set(courses.map(course => course.category))];
}
