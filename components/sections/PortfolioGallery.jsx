// ============================================================
// PORTFOLIO GALLERY COMPONENT
// Plaster and Rendering Solutions
// ============================================================
// Uses: React + Tailwind CSS with custom color scheme
// Add this component to index.html in the appropriate section

const PortfolioGallery = () => {
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Semi-Detached Renovation',
      service: 'Silicone Rendering',
      serviceKey: 'silicone',
      location: 'Grenoside, Sheffield',
      image: '/images/portfolio/IMG_3979.jpg',
      description: 'Premium silicone thin-coat rendering with hydrophobic finish and self-cleaning technology.',
      beforeAfter: true,
    },
    {
      id: 2,
      title: 'Executive Home EWI Installation',
      service: 'EWI Systems',
      serviceKey: 'ewi',
      location: 'Sheffield South',
      image: '/images/portfolio/IMG_4040.jpg',
      description: '20-30% energy reduction with EWI systems. Improved EPC rating and thermal performance.',
      beforeAfter: true,
    },
    {
      id: 3,
      title: 'Stone-Effect Monocouche Finish',
      service: 'Monocouche Rendering',
      serviceKey: 'monocouche',
      location: 'City Centre, Sheffield',
      image: '/images/portfolio/IMG_4147.jpg',
      description: 'Beautiful stone-like finish with one-coat French rendering. Cost-effective with stunning aesthetics.',
      beforeAfter: true,
    },
    {
      id: 4,
      title: 'Comprehensive Renovation Project',
      service: 'Silicone Rendering',
      serviceKey: 'silicone',
      location: 'Hallam, Sheffield',
      image: '/images/portfolio/IMG_3508.jpg',
      description: 'Multi-service project combining rendering and insulation for complete property transformation.',
      beforeAfter: false,
    },
    {
      id: 5,
      title: 'Internal Plastering Finish',
      service: 'Internal Plastering',
      serviceKey: 'internal',
      location: 'East Sheffield',
      image: '/images/portfolio/IMG_4020.jpg',
      description: 'Professional glass-smooth internal plastering delivering paint-ready finishes in 3-5 days.',
      beforeAfter: false,
    },
    {
      id: 6,
      title: 'Dry Lining & Board Installation',
      service: 'Dry Lining & Boarding',
      serviceKey: 'drying',
      location: 'Rotherham Border',
      image: '/images/portfolio/IMG_3555.jpg',
      description: 'Fire-resistant boards with acoustic options. Fast installation with exceptional finish quality.',
      beforeAfter: false,
    },
  ];

  const filterOptions = ['all', 'silicone', 'ewi', 'monocouche', 'internal', 'drying'];
  const filterLabels = {
    all: 'All Projects',
    silicone: 'Silicone Rendering',
    ewi: 'EWI Systems',
    monocouche: 'Monocouche',
    internal: 'Internal Plastering',
    drying: 'Dry Lining',
  };

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.serviceKey === selectedFilter);

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-lime-500 font-semibold tracking-widest uppercase mb-4">OUR WORK</p>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-display">
            Project Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcase of completed projects across Sheffield with stunning transformations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-lime-500 text-white scale-105 shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-2 border-slate-200'
              }`}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.service} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {project.service}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4">
                  📍 {project.location}
                </p>

                <p className="text-slate-700 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {project.beforeAfter && (
                  <div className="inline-block bg-lime-50 border border-lime-300 px-3 py-1 rounded-lg mb-4">
                    <span className="text-lime-700 text-xs font-semibold">Before/After Available</span>
                  </div>
                )}

                <a href="#contact" className="text-lime-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-4 font-display">
            Ready to Transform Your Property?
          </h3>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Get a free consultation and site survey. We'll analyze your specific property and recommend the ideal solution.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-lime-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 hover:scale-105"
          >
            Request Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};
