/* ============================================
   Portfolio Gallery JavaScript
   Plaster and Rendering Solutions
   ============================================ */

// Project Data
const projects = [
    {
        id: 1,
        title: 'Modern Semi-Detached Renovation',
        service: 'Silicone Rendering',
        serviceKey: 'silicone',
        location: 'Grenoside, Sheffield',
        image: '/images/portfolio/IMG_3979.jpg',
        description: 'Premium silicone thin-coat rendering system with hydrophobic finish and self-cleaning technology.',
        beforeAfter: true,
    },
    {
        id: 2,
        title: 'Executive Home EWI Installation',
        service: 'EWI Systems',
        serviceKey: 'ewi',
        location: 'Sheffield South',
        image: '/images/portfolio/IMG_4040.jpg',
        description: '20-30% energy reduction with EWI systems. Improved EPC rating and exceptional thermal performance.',
        beforeAfter: true,
    },
    {
        id: 3,
        title: 'Stone-Effect Monocouche Finish',
        service: 'Monocouche Rendering',
        serviceKey: 'monocouche',
        location: 'City Centre, Sheffield',
        image: '/images/portfolio/IMG_4147.jpg',
        description: 'Beautiful stone-like finish with one-coat French rendering system. Cost-effective with stunning aesthetics.',
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

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Render Projects
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.serviceKey === filter);

    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);

        // Stagger animation
        setTimeout(() => {
            projectCard.style.animation = 'fadeIn 0.5s ease-out forwards';
        }, index * 50);
    });
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.service = project.serviceKey;

    const beforeAfterBadge = project.beforeAfter
        ? '<span class="before-after-badge">Before/After Available</span>'
        : '';

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}"
                 alt="${project.title} - ${project.service} in ${project.location}"
                 loading="lazy">
            <div class="project-image-overlay"></div>
            <span class="project-badge">${project.service}</span>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-location">📍 ${project.location}</p>
            <p class="project-description">${project.description}</p>
            ${beforeAfterBadge}
            <a href="#contact" class="project-link">
                View Project <span>→</span>
            </a>
        </div>
    `;

    return card;
}

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get filter value
        const filter = button.getAttribute('data-filter');

        // Render filtered projects
        renderProjects(filter);
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');

    // Smooth scroll for CTA links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals if you add them later
    }
});

// Responsive Grid Adjustment
function adjustGridColumns() {
    const width = window.innerWidth;
    const grid = document.querySelector('.projects-grid');

    if (width < 640) {
        grid.style.gridTemplateColumns = '1fr';
    } else if (width < 768) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (width < 1024) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
    }
}

window.addEventListener('resize', adjustGridColumns);
window.addEventListener('load', adjustGridColumns);

// Analytics (Optional - uncomment if you use Google Analytics)
/*
function trackProjectView(projectName) {
    if (window.gtag) {
        gtag('event', 'view_project', {
            'project_name': projectName
        });
    }
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.project-title').textContent;
        trackProjectView(title);
    });
});
*/
