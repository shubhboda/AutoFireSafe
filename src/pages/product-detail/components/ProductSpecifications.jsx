import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductSpecifications = ({ specifications }) => {
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    technical: false,
    installation: false,
    maintenance: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const specSections = [
    {
      key: 'general',
      title: 'General Specifications',
      icon: 'Info',
      specs: specifications.general
    },
    {
      key: 'technical',
      title: 'Technical Details',
      icon: 'Settings',
      specs: specifications.technical
    },
    {
      key: 'installation',
      title: 'Installation Requirements',
      icon: 'Wrench',
      specs: specifications.installation
    },
    {
      key: 'maintenance',
      title: 'Maintenance Guidelines',
      icon: 'Calendar',
      specs: specifications.maintenance
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Product Specifications</h2>
      
      <div className="space-y-3">
        {specSections.map((section) => (
          <div key={section.key} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-center space-x-3">
                <Icon name={section.icon} size={20} className="text-primary" />
                <span className="font-medium text-foreground">{section.title}</span>
              </div>
              <Icon 
                name="ChevronDown" 
                size={20} 
                className={`text-muted-foreground transition-transform ${
                  expandedSections[section.key] ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedSections[section.key] && (
              <div className="p-4 bg-card">
                <div className="grid gap-3">
                  {section.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-start py-2 border-b border-border last:border-b-0">
                      <span className="text-sm text-muted-foreground font-medium">
                        {spec.label}:
                      </span>
                      <span className="text-sm text-foreground text-right max-w-xs">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparison Tool */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="GitCompare" size={20} className="text-primary" />
          <span className="font-medium text-foreground">Compare Products</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Compare specifications with similar products to make the best choice.
        </p>
        <button className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth">
          Start Comparison →
        </button>
      </div>
    </div>
  );
};

export default ProductSpecifications;