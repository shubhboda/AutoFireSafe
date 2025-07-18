import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onRequestQuote, onScheduleService }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
      {/* Service Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg ${service.isEmergency ? 'bg-destructive/10' : 'bg-primary/10'}`}>
              <Icon 
                name={service.icon} 
                size={24} 
                className={service.isEmergency ? 'text-destructive' : 'text-primary'} 
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
              {service.isEmergency && (
                <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
                    24/7 Available
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-foreground font-mono">
              {service.priceRange}
            </div>
            <div className="text-xs text-muted-foreground">
              {service.duration}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{service.description}</p>

        {/* Key Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {service.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpanded}
          className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-smooth mb-4"
        >
          <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
          <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
        </button>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            onClick={() => onRequestQuote(service)}
            iconName="FileText"
            iconPosition="left"
            className="flex-1"
          >
            Request Quote
          </Button>
          <Button
            variant="outline"
            onClick={() => onScheduleService(service)}
            iconName="Calendar"
            iconPosition="left"
            className="flex-1"
          >
            Schedule Service
          </Button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border p-6 bg-muted/30">
          <div className="grid md:grid-cols-2 gap-6">
            {/* All Features */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Included Features</h4>
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification & Requirements */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Certification & Requirements</h4>
              <div className="space-y-2">
                {service.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Award" size={14} className="text-warning" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          {service.testimonial && (
            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {service.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground italic mb-2">
                    "{service.testimonial.content}"
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">{service.testimonial.author}</span>
                    <span className="mx-2">•</span>
                    <span>{service.testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;