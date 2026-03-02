// ============================================
// Example Homepage with Portfolio Gallery
// Plaster and Rendering Solutions
// ============================================
//
// Replace YOUR_HOMEPAGE_FILE (pages/index.jsx or similar)
// with this content structure
//
// ============================================

'use client'; // If using Next.js App Router

// ============================================
// IMPORTS - ADD THESE TWO NEW IMPORTS
// ============================================
import PortfolioGallery from '@/components/sections/PortfolioGallery';
import AboutUsSection from '@/components/sections/AboutUsSection';

// Keep your existing imports
import HeroSection from '@/components/sections/HeroSection';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import ServiceComparison from '@/components/sections/ServiceComparison';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

// ============================================
// MAIN HOME PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <>
      {/* 1. Hero Section - Existing */}
      <HeroSection />

      {/* 2. About Us Section - UPDATED with hero image */}
      {/* 🆕 ADDED: AboutUsSection component with hero image */}
      <AboutUsSection />

      {/* 3. What We Offer - Existing */}
      <WhatWeOffer />

      {/* 4. Service Comparison - Existing */}
      <ServiceComparison />

      {/* 5. Portfolio Gallery - NEW */}
      {/* 🆕 ADDED: New portfolio gallery with 6 featured projects */}
      {/* Features: Service filtering, location-based display, responsive design */}
      <PortfolioGallery />

      {/* 6. Testimonials - Existing */}
      <Testimonials />

      {/* 7. CTA Section - Existing */}
      <CTASection />

      {/* 8. Footer - Existing */}
      <Footer />
    </>
  );
}

// ============================================
// WHAT CHANGED
// ============================================
//
// ADDED:
// 1. Import PortfolioGallery from '@/components/sections/PortfolioGallery'
// 2. Import AboutUsSection from '@/components/sections/AboutUsSection'
// 3. <AboutUsSection /> component (replaces old About Us)
// 4. <PortfolioGallery /> component (new, between comparisons and testimonials)
//
// NO OTHER CHANGES NEEDED!
//
// ============================================

// ============================================
// IF YOUR HOMEPAGE LOOKS DIFFERENT
// ============================================
//
// Your homepage might have different structure.
// Just follow these rules:
//
// 1. Add the 2 new imports at the top
// 2. Add <AboutUsSection /> to replace your old About Us
// 3. Add <PortfolioGallery /> after comparison tables
// 4. Keep everything else the same
//
// ============================================
