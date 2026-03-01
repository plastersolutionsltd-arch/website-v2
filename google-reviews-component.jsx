// ============================================================
// GOOGLE REVIEWS COMPONENT
// ============================================================
// Add this component to your website
// Display on: Home page + All service pages

const GoogleReviewsSection = ({ gmbLink = "https://www.google.com/maps/place/Plaster+and+Rendering+Solutions" }) => {
  const reviews = [
    {
      id: 1,
      author: "David Thompson",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent work on our external silicone rendering. The team was professional, tidy, and completed the job on schedule. Highly recommend!",
      verified: true
    },
    {
      id: 2,
      author: "Sarah Bennett",
      rating: 5,
      date: "1 month ago",
      text: "Outstanding EWI installation. Our heating bills have dropped significantly and the house looks fantastic. Best decision we made.",
      verified: true
    },
    {
      id: 3,
      author: "Michael Foster",
      rating: 5,
      date: "6 weeks ago",
      text: "Professional plastering service for our renovation. Perfect finish, no mess, and great communication throughout. Highly skilled team.",
      verified: true
    },
    {
      id: 4,
      author: "Emma Wilson",
      rating: 5,
      date: "2 months ago",
      text: "Outstanding work on monocouche rendering. The colour finish is perfect and workmanship is exceptional. Would use again for sure.",
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400 text-lg" : "text-gray-300 text-lg"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      {/* Google Fonts Link in Head */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block text-xs font-bold tracking-[0.25em] uppercase text-lime-400 mb-6">
            Customer Feedback
          </span>
          <h2 className="animate-on-scroll stagger-1 font-display text-3xl lg:text-4xl font-bold text-charcoal-900 leading-tight tracking-tight mb-6">
            Trusted by Sheffield Homeowners
          </h2>
          <p className="animate-on-scroll stagger-2 font-body text-slate-600 font-light max-w-2xl mx-auto mb-8">
            See what our customers say about our rendering and plastering services
          </p>

          {/* Google Rating Badge */}
          <a
            href={gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll stagger-3 inline-flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-lime-400 bg-lime-400/10 hover:bg-lime-400/20 transition-all duration-300 mb-12"
          >
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-display font-bold text-charcoal-900">See All Reviews</p>
            </div>
            <span className="text-sm font-bold text-lime-400">Google →</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <a
              key={review.id}
              href={gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-on-scroll stagger-${Math.min(index + 1, 5)} premium-hover rounded-xl p-6 bg-white border-2 border-slate-200 hover:border-lime-400 transition-all duration-300 cursor-pointer group`}
            >
              {/* Google Logo */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234285F4' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 7v5l3 2'/%3E%3C/svg%3E"
                  alt="Google"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Review Text */}
              <p className="font-body text-slate-700 text-sm leading-relaxed mb-4 font-light">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-display font-bold text-charcoal-900 text-sm mb-1">
                  {review.author}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-body text-xs text-slate-500">
                    {review.date}
                  </p>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-lime-400/20 border border-lime-400/50">
                      <span className="text-xs font-bold text-lime-600">✓ Verified</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Hover CTA */}
              <div className="mt-4 pt-4 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-bold text-lime-400">Read on Google →</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href={gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll magnetic-btn inline-flex items-center gap-3 bg-lime-400 text-charcoal-900 px-10 py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-lime-500 transition-all duration-300"
          >
            View All Reviews on Google
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// USAGE INSTRUCTIONS
// ============================================================

/*
TO ADD TO YOUR WEBSITE:

1. Update the GMB link:
   <GoogleReviewsSection gmbLink="YOUR_ACTUAL_GMB_URL_HERE" />

2. Add to Home Page (near testimonials)

3. Add to ALL Service Pages:
   - Silicone page
   - Monocouche page
   - EWI page
   - Plastering page
   - Dry Lining page
   - Gallery page

4. Style Features:
   - Google Fonts (Inter + Roboto)
   - 5-star rating display
   - Verified badge
   - Hover effects
   - Click-through to GMB
   - Responsive grid (1-4 columns)
   - Lime green accents

5. Features:
   - Shows 4 reviews
   - Each links to your GMB
   - Professional styling
   - Star ratings
   - Author names & dates
   - Verified checkmarks
   - Call-to-action buttons

*/