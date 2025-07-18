import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceCategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'installation', label: 'Installation', icon: 'Wrench' },
    { id: 'maintenance', label: 'Maintenance', icon: 'Settings' },
    { id: 'inspection', label: 'Inspection', icon: 'Search' },
    { id: 'emergency', label: 'Emergency Response', icon: 'AlertTriangle' }
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex space-x-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-smooth ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Fixed Navigation */}
        <div className="hidden lg:flex items-center space-x-8 py-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg text-sm font-medium transition-smooth ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoryTabs;