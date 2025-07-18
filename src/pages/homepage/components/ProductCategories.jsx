import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Fire Extinguishers",
      description: "Professional-grade fire extinguishers for all fire classes and applications",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productCount: 45,
      startingPrice: "$29.99",
      features: ["ABC, CO2, Foam Types", "1-20 lb Capacity", "NFPA Certified"]
    },
    {
      id: 2,
      name: "Smoke Detectors",
      description: "Advanced smoke detection systems with wireless connectivity and monitoring",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productCount: 32,
      startingPrice: "$24.99",
      features: ["Photoelectric & Ionization", "Wireless Connectivity", "10-Year Battery"]
    },
    {
      id: 3,
      name: "Sprinkler Systems",
      description: "Complete sprinkler system components and installation kits",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productCount: 28,
      startingPrice: "$89.99",
      features: ["Wet & Dry Systems", "Commercial Grade", "Easy Installation"]
    },
    {
      id: 4,
      name: "Emergency Lighting",
      description: "Emergency exit signs and lighting systems for safe evacuation",
      image: "https://images.unsplash.com/photo-1586281010691-9b71b8e8e4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productCount: 38,
      startingPrice: "$19.99",
      features: ["LED Technology", "Battery Backup", "Code Compliant"]
    },
    {
      id: 5,
      name: "Fire Blankets",
      description: "High-quality fire blankets for kitchen and industrial applications",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productCount: 15,
      startingPrice: "$34.99",
      features: ["Fiberglass Material", "Multiple Sizes", "Easy Deployment"]
    },
    {
      id: 6,
      name: "Safety Accessories",
      description: "Complete range of fire safety accessories and maintenance tools",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productCount: 52,
      startingPrice: "$9.99",
      features: ["Mounting Brackets", "Inspection Tags", "Maintenance Tools"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            <Icon name="Package" size={16} className="mr-2" />
            Product Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Fire Safety Equipment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive selection of certified fire safety equipment and accessories 
            for residential, commercial, and industrial applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 group">
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-foreground">
                  {category.productCount} Products
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <div className="text-lg font-semibold text-foreground">
                      {category.startingPrice}
                    </div>
                  </div>
                  <Link to="/product-detail">
                    <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Need Help Choosing the Right Equipment?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our fire safety experts are here to help you select the perfect equipment for your specific needs. 
            Get personalized recommendations and professional installation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/service-offerings">
              <Button variant="default" iconName="MessageCircle" iconPosition="left">
                Consult an Expert
              </Button>
            </Link>
            <Link to="/product-detail">
              <Button variant="outline" iconName="Catalog" iconPosition="left">
                View Full Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;