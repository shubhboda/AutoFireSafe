import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      icon: "Flame",
      title: "Fire Extinguisher Services",
      description: "Professional inspection, maintenance, and refilling of all types of fire extinguishers with certified technicians.",
      features: ["Monthly Inspections", "Refill Services", "Compliance Reports"],
      price: "Starting at $25/month"
    },
    {
      id: 2,
      icon: "AlertTriangle",
      title: "Smoke Detector Installation",
      description: "Complete smoke detection system installation and monitoring for residential and commercial properties.",
      features: ["Wireless Systems", "24/7 Monitoring", "Mobile Alerts"],
      price: "Starting at $150/unit"
    },
    {
      id: 3,
      icon: "Droplets",
      title: "Sprinkler System Maintenance",
      description: "Comprehensive sprinkler system testing, maintenance, and emergency repair services for all property types.",
      features: ["System Testing", "Pipe Inspection", "Emergency Repairs"],
      price: "Starting at $200/visit"
    },
    {
      id: 4,
      icon: "Shield",
      title: "Fire Safety Consulting",
      description: "Expert fire safety assessments and compliance consulting to ensure your property meets all safety regulations.",
      features: ["Safety Audits", "Compliance Planning", "Training Programs"],
      price: "Starting at $300/consultation"
    },
    {
      id: 5,
      icon: "Wrench",
      title: "Emergency Repair Services",
      description: "24/7 emergency repair services for all fire safety equipment with rapid response guarantee.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Parts"],
      price: "Starting at $150/hour"
    },
    {
      id: 6,
      icon: "FileText",
      title: "Compliance Documentation",
      description: "Complete documentation services for fire safety compliance, inspections, and regulatory requirements.",
      features: ["Digital Records", "Compliance Tracking", "Automated Reminders"],
      price: "Starting at $50/month"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon name="Star" size={16} className="mr-2" />
            Featured Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Fire Safety Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From equipment maintenance to emergency services, we provide complete fire safety solutions 
            tailored to your specific needs and regulatory requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300 group">
              {/* Service Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-medium text-foreground">
                  {service.price}
                </span>
                <Link to="/service-offerings">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/service-offerings">
            <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;