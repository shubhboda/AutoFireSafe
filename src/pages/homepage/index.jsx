import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedServices from './components/FeaturedServices';
import ProductCategories from './components/ProductCategories';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CertificationBadges from './components/CertificationBadges';
import NewsletterSignup from './components/NewsletterSignup';
import LiveChatWidget from './components/LiveChatWidget';
import EmergencyContactButton from '../../components/ui/EmergencyContactButton';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import ScrollToTop from '../../components/ScrollToTop';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AutoFireSafe - Professional Fire Safety Equipment & Services</title>
        <meta name="description" content="Comprehensive fire safety solutions for residential, commercial, and industrial properties. Professional equipment, installation, maintenance, and 24/7 emergency services." />
        <meta name="keywords" content="fire safety, fire extinguishers, smoke detectors, sprinkler systems, fire safety equipment, emergency services, NFPA certified" />
        <meta property="og:title" content="AutoFireSafe - Professional Fire Safety Equipment & Services" />
        <meta property="og:description" content="Protect what matters most with advanced fire safety solutions. Professional equipment, installation, and 24/7 emergency services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autofiresafe.com" />
        <link rel="canonical" href="https://autofiresafe.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Services */}
          <FeaturedServices />

          {/* Product Categories */}
          <ProductCategories />

          {/* Customer Testimonials */}
          <TestimonialsCarousel />

          {/* Certifications & Trust Signals */}
          <CertificationBadges />

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-md">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">AutoFireSafe</span>
                </div>
                <p className="text-background/80 mb-4 text-sm leading-relaxed">
                  Professional fire safety solutions for residential, commercial, and industrial properties. 
                  Protecting lives and property with certified equipment and expert services.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-background/60 hover:text-background transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-background/60 hover:text-background transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-background/60 hover:text-background transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/service-offerings" className="text-background/80 hover:text-background transition-colors">Fire Extinguisher Services</a></li>
                  <li><a href="/service-offerings" className="text-background/80 hover:text-background transition-colors">Smoke Detector Installation</a></li>
                  <li><a href="/service-offerings" className="text-background/80 hover:text-background transition-colors">Sprinkler System Maintenance</a></li>
                  <li><a href="/service-offerings" className="text-background/80 hover:text-background transition-colors">Fire Safety Consulting</a></li>
                  <li><a href="/service-offerings" className="text-background/80 hover:text-background transition-colors">Emergency Repair Services</a></li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold mb-4">Products</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/product-detail" className="text-background/80 hover:text-background transition-colors">Fire Extinguishers</a></li>
                  <li><a href="/product-detail" className="text-background/80 hover:text-background transition-colors">Smoke Detectors</a></li>
                  <li><a href="/product-detail" className="text-background/80 hover:text-background transition-colors">Sprinkler Systems</a></li>
                  <li><a href="/product-detail" className="text-background/80 hover:text-background transition-colors">Emergency Lighting</a></li>
                  <li><a href="/product-detail" className="text-background/80 hover:text-background transition-colors">Safety Accessories</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <svg className="w-4 h-4 mt-0.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-background/80">123 Safety Street<br />Fire City, FC 12345</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-background/80">(555) 123-FIRE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-background/80">info@autofiresafe.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-background/80">24/7 Emergency Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-background/60 mb-4 md:mb-0">
                © {new Date().getFullYear()} AutoFireSafe. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Fixed Elements */}
        <EmergencyContactButton />
        <LiveChatWidget />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Homepage;