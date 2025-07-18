import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationBadges = () => {
  const certifications = [
    {
      id: 1,
      name: "NFPA Certified",
      description: "National Fire Protection Association Certified Technicians",
      icon: "Award",
      color: "text-red-600"
    },
    {
      id: 2,
      name: "UL Listed",
      description: "Underwriters Laboratories Listed Equipment Only",
      icon: "CheckCircle",
      color: "text-blue-600"
    },
    {
      id: 3,
      name: "OSHA Compliant",
      description: "Occupational Safety and Health Administration Compliant",
      icon: "Shield",
      color: "text-green-600"
    },
    {
      id: 4,
      name: "Licensed & Insured",
      description: "Fully Licensed and Insured Fire Safety Professionals",
      icon: "FileCheck",
      color: "text-purple-600"
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: "Fire Department Partnership",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Official partner with local fire departments"
    },
    {
      id: 2,
      name: "Insurance Provider Network",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Approved by major insurance providers"
    },
    {
      id: 3,
      name: "Building Code Authority",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Certified by building code authorities"
    },
    {
      id: 4,
      name: "Emergency Services",
      logo: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Integrated with emergency response systems"
    }
  ];

  const guarantees = [
    {
      id: 1,
      title: "24/7 Emergency Response",
      description: "Round-the-clock emergency support and rapid response guarantee",
      icon: "Clock"
    },
    {
      id: 2,
      title: "100% Satisfaction Guarantee",
      description: "Complete satisfaction guaranteed or your money back",
      icon: "ThumbsUp"
    },
    {
      id: 3,
      title: "Lifetime Support",
      description: "Ongoing support and maintenance for all installed systems",
      icon: "Heart"
    },
    {
      id: 4,
      title: "Compliance Assurance",
      description: "Full compliance with all local and federal fire safety regulations",
      icon: "CheckSquare"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warning/10 rounded-full text-warning text-sm font-medium mb-4">
            <Icon name="Award" size={16} className="mr-2" />
            Trust & Certifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certified Excellence You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certifications, partnerships, and guarantees ensure you receive the highest quality 
            fire safety solutions backed by industry-leading standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-soft transition-shadow">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4`}>
                <Icon name={cert.icon} size={24} className={cert.color} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Partnerships Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Trusted Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerships.map((partner) => (
              <div key={partner.id} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center group-hover:shadow-soft transition-shadow">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-foreground text-sm mb-1">{partner.name}</h4>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Guarantees to You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((guarantee) => (
              <div key={guarantee.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={guarantee.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{guarantee.title}</h4>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icon name="Users" size={16} className="mr-2 text-primary" />
              <span>10,000+ Satisfied Customers</span>
            </div>
            <div className="flex items-center">
              <Icon name="Calendar" size={16} className="mr-2 text-primary" />
              <span>15+ Years in Business</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={16} className="mr-2 text-primary" />
              <span>Serving 50+ Cities</span>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" size={16} className="mr-2 text-primary" />
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;