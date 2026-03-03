/**
 * SEO Configuration for P&R Solutions Website
 * Defines routing, metadata, and SEO for each service page
 */

const seoRoutesConfig = {
  services: {
    silicone: {
      id: 'silicone',
      slug: '/silicone-render/',
      displayName: 'Silicone Render',

      // SEO Meta Tags
      seo: {
        title: 'Silicone Render Sheffield | Premium Rendering Services | P&R Solutions',
        description: 'Professional silicone rendering services in Sheffield with 25-year warranty. Weather-resistant, self-cleaning, breathable external render. Free quote 07595 399525',
        keywords: ['silicone render Sheffield', 'silicone rendering Sheffield', 'external rendering Sheffield', 'self-cleaning render', 'premium render Sheffield', 'weather-resistant render'],
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/silicone-render/',
      },

      // Open Graph for Social
      og: {
        title: 'Premium Silicone Rendering in Sheffield',
        description: '25-year warranty on silicone render installation. Weather-resistant & self-cleaning.',
        image: 'https://www.plasterandrenderingsolutions.co.uk/images/hero/silicone-service.jpeg',
      },

      // Schema.org LocalService markup
      schema: {
        '@type': 'Service',
        'name': 'Silicone Render',
        'description': 'Professional silicone rendering services with 25-year warranty. Self-cleaning, hydrophobic, breathable external render system.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Plaster and Rendering Solutions Limited',
          'telephone': '07595399525',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Sheffield',
            'addressRegion': 'South Yorkshire',
            'addressCountry': 'GB'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Sheffield'
        },
        'serviceType': 'External Rendering',
        'priceRange': '££'
      }
    },

    monocouche: {
      id: 'monocouche',
      slug: '/monocouche-render/',
      displayName: 'Monocouche Render',

      seo: {
        title: 'Monocouche Render Sheffield | Single-Coat Rendering | P&R Solutions',
        description: 'Professional monocouche rendering services in Sheffield. Single-coat application, 20-25 year durability, rapid installation. Free quote.',
        keywords: ['monocouche render Sheffield', 'single-coat render', 'monocouche rendering Sheffield', 'durable render Sheffield', 'rapid render application'],
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/monocouche-render/',
      },

      og: {
        title: 'Monocouche Rendering in Sheffield',
        description: 'Single-coat render system with 20-25 year durability. Rapid application, exceptional finish.',
        image: 'https://www.plasterandrenderingsolutions.co.uk/images/hero/monocouche-service.jpeg',
      },

      schema: {
        '@type': 'Service',
        'name': 'Monocouche Render',
        'description': 'Single-coat monocouche rendering system combining base coat and finish in one application. Durable, weather-resistant, rapid installation.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Plaster and Rendering Solutions Limited',
          'telephone': '07595399525',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Sheffield',
            'addressRegion': 'South Yorkshire',
            'addressCountry': 'GB'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Sheffield'
        },
        'serviceType': 'External Rendering',
        'priceRange': '££'
      }
    },

    plastering: {
      id: 'plastering',
      slug: '/internal-plastering/',
      displayName: 'Internal Plastering',

      seo: {
        title: 'Internal Plastering Sheffield | Float & Skim Services | P&R Solutions',
        description: 'Professional internal plastering services in Sheffield. Float, skim, re-plastering for walls & ceilings. Expert finishing. Free quote 07595 399525',
        keywords: ['plasterer Sheffield', 'internal plastering Sheffield', 'float and skim Sheffield', 'plasterboard finishing', 'wall plastering Sheffield'],
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/internal-plastering/',
      },

      og: {
        title: 'Internal Plastering Services in Sheffield',
        description: 'Expert float and skim plastering. Professional wall and ceiling finishing.',
        image: 'https://www.plasterandrenderingsolutions.co.uk/images/hero/plasteringhero.jpeg',
      },

      schema: {
        '@type': 'Service',
        'name': 'Internal Plastering',
        'description': 'Professional internal plastering services including float and skim, skimming, and re-plastering for walls and ceilings.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Plaster and Rendering Solutions Limited',
          'telephone': '07595399525',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Sheffield',
            'addressRegion': 'South Yorkshire',
            'addressCountry': 'GB'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Sheffield'
        },
        'serviceType': 'Internal Plastering',
        'priceRange': '££'
      }
    },

    ewi: {
      id: 'ewi',
      slug: '/external-wall-insulation/',
      displayName: 'External Wall Insulation',

      seo: {
        title: 'External Wall Insulation (EWI) Sheffield | Energy Efficiency | P&R Solutions',
        description: 'Professional EWI installation in Sheffield. Thermal insulation systems, energy-efficient, improve property value. 25-35% heating savings.',
        keywords: ['EWI Sheffield', 'external wall insulation Sheffield', 'thermal insulation Sheffield', 'energy efficiency Sheffield', 'building insulation'],
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/external-wall-insulation/',
      },

      og: {
        title: 'External Wall Insulation in Sheffield',
        description: 'Energy-efficient EWI systems. Thermal insulation, heating savings, improved property value.',
        image: 'https://www.plasterandrenderingsolutions.co.uk/images/hero/ewi-service.jpeg',
      },

      schema: {
        '@type': 'Service',
        'name': 'External Wall Insulation (EWI)',
        'description': 'Energy-efficient external wall insulation systems designed to reduce heating costs, improve thermal performance, and increase property value.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Plaster and Rendering Solutions Limited',
          'telephone': '07595399525',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Sheffield',
            'addressRegion': 'South Yorkshire',
            'addressCountry': 'GB'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Sheffield'
        },
        'serviceType': 'Energy Efficiency Services',
        'priceRange': '£££'
      }
    },

    drylining: {
      id: 'drylining',
      slug: '/dry-lining/',
      displayName: 'Dry Lining',

      seo: {
        title: 'Dry Lining Sheffield | Professional Boarding Services | P&R Solutions',
        description: 'Professional dry lining and boarding services in Sheffield. Internal walls, ceilings, stud work. Expert installation & finishing.',
        keywords: ['dry lining Sheffield', 'dry lining services Sheffield', 'plasterboard installation', 'internal boarding Sheffield'],
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/dry-lining/',
      },

      og: {
        title: 'Dry Lining Services in Sheffield',
        description: 'Professional dry lining and boarding. Internal walls, ceilings, expert finishing.',
        image: 'https://www.plasterandrenderingsolutions.co.uk/images/hero/drylining-service.jpg',
      },

      schema: {
        '@type': 'Service',
        'name': 'Dry Lining',
        'description': 'Professional dry lining and boarding services for internal walls and ceilings including plasterboard installation and finishing.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Plaster and Rendering Solutions Limited',
          'telephone': '07595399525',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Sheffield',
            'addressRegion': 'South Yorkshire',
            'addressCountry': 'GB'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Sheffield'
        },
        'serviceType': 'Internal Finishing',
        'priceRange': '££'
      }
    }
  },

  pages: {
    home: {
      slug: '/',
      seo: {
        title: 'Sheffield Plasterer | Plastering, Rendering & Silicone Render | P&R Solutions',
        description: 'Professional plasterer in Sheffield offering plastering, rendering & silicone render services. 25-year warranty. Free quote 07595 399525',
        keywords: ['plasterer Sheffield', 'plastering Sheffield', 'rendering Sheffield', 'silicone render Sheffield'],
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/',
      }
    },
    contact: {
      slug: '/contact/',
      seo: {
        title: 'Contact P&R Solutions | Sheffield Plasterer | Free Quote',
        description: 'Contact Plaster and Rendering Solutions Limited in Sheffield. Get a free quote for plastering and rendering services.',
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/contact/',
      }
    },
    faq: {
      slug: '/faq/',
      seo: {
        title: 'FAQ | Plastering & Rendering Questions | P&R Solutions Sheffield',
        description: 'Frequently asked questions about plastering, rendering, silicone render, EWI, and dry lining services in Sheffield.',
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/faq/',
      }
    },
    privacy: {
      slug: '/privacy/',
      seo: {
        title: 'Privacy Policy | P&R Solutions Sheffield',
        description: 'Privacy policy for Plaster and Rendering Solutions Limited.',
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/privacy/',
      }
    },
    terms: {
      slug: '/terms/',
      seo: {
        title: 'Terms of Service | P&R Solutions Sheffield',
        description: 'Terms of service for Plaster and Rendering Solutions Limited.',
        canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/terms/',
      }
    }
  }
};

// Export for use in HTML
window.seoRoutesConfig = seoRoutesConfig;
