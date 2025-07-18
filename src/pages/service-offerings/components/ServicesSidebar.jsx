import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicesSidebar = ({ activeCategory, onCategoryChange, serviceStats }) => {
  const categories = [
    { 
      id: 'installation', 
      label: 'Installation Services', 
      icon: 'Wrench',
      count: serviceStats?.installation || 8,
      description: 'Professional equipment installation'
    },
    { 
      id: 'maintenance', 
      label: 'Maintenance & Repair', 
      icon: 'Settings',
      count: serviceStats?.maintenance || 6,
      description: 'Regular maintenance and repairs'
    },
    { 
      id: 'inspection', 
      label: 'Inspection & Testing', 
      icon: 'Search',
      count: serviceStats?.inspection || 5,
      description: 'Compliance inspections and testing'
    },
    { 
      id: 'emergency', 
      label: 'Emergency Response', 
      icon: 'AlertTriangle',
      count: serviceStats?.emergency || 4,
      description: '24/7 emergency services'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6">Service Categories</h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-smooth ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted text-foreground'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon 
                name={category.icon} 
                size={20} 
                className={category.id === 'emergency' && activeCategory !== category.id ? 'text-destructive' : 'currentColor'}
              />
              <div>
                <div className="font-medium">{category.label}</div>
                <div className={`text-xs ${
                  activeCategory === category.id 
                    ? 'text-primary-foreground/80' 
                    : 'text-muted-foreground'
                }`}>
                  {category.description}
                </div>
              </div>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full ${
              activeCategory === category.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {category.count}
            </div>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-medium text-foreground mb-3">Service Overview</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Services</span>
            <span className="font-medium text-foreground">23</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Emergency Available</span>
            <span className="font-medium text-success">24/7</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Response Time</span>
            <span className="font-medium text-foreground">&lt; 2 hours</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Phone" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">Need Help?</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Speak with our fire safety experts
        </p>
        <button 
          onClick={() => window.open('tel:1-800-FIRE-SAFE', '_self')}
          className="text-sm text-primary hover:text-primary/80 font-medium"
        >
          1-800-FIRE-SAFE
        </button>
      </div>
    </div>
  );
};

export default ServicesSidebar;