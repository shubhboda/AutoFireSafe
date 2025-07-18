import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const handleEmergencyCall = () => {
    window.open('tel:911', '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Professional fire safety equipment and services"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Text Content */}
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Icon name="Shield" size={16} className="mr-2" />
                Certified Fire Safety Experts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect What Matters Most with
                <span className="text-red-400 block">Advanced Fire Safety</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Comprehensive fire safety solutions for residential, commercial, and industrial properties. 
                From equipment sales to professional installations and 24/7 emergency services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/service-offerings">
                  <Button 
                    variant="default" 
                    size="lg" 
                    iconName="Calculator" 
                    iconPosition="left"
                    className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Phone" 
                  iconPosition="left"
                  onClick={handleEmergencyCall}
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Emergency Services
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/80">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="mr-2 text-green-400" />
                  <span className="text-sm">24/7 Emergency Response</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" size={20} className="mr-2 text-yellow-400" />
                  <span className="text-sm">NFPA Certified</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={20} className="mr-2 text-blue-400" />
                  <span className="text-sm">10,000+ Customers</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Stats */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-sm text-gray-300">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div className="text-sm text-gray-300">Emergency Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">100%</div>
                      <div className="text-sm text-gray-300">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;