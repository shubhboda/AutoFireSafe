import React from 'react';
import Icon from '../../../components/AppIcon';

const BusinessBenefits = () => {
  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Commercial Pricing',
      description: 'Access exclusive bulk pricing and volume discounts for business customers'
    },
    {
      icon: 'Calendar',
      title: 'Service Scheduling',
      description: 'Priority booking for inspections, maintenance, and emergency services'
    },
    {
      icon: 'Headphones',
      title: 'Dedicated Support',
      description: '24/7 dedicated business support line with fire safety experts'
    },
    {
      icon: 'FileText',
      title: 'Compliance Documentation',
      description: 'Automated compliance reports and certification tracking'
    },
    {
      icon: 'Package',
      title: 'Bulk Ordering',
      description: 'Streamlined ordering process for multiple locations and large quantities'
    },
    {
      icon: 'Shield',
      title: 'Extended Warranties',
      description: 'Enhanced warranty coverage and priority replacement services'
    }
  ];

  const certifications = [
    { name: 'NFPA Certified', icon: 'Award' },
    { name: 'UL Listed', icon: 'CheckCircle' },
    { name: 'FM Approved', icon: 'Shield' },
    { name: 'OSHA Compliant', icon: 'FileCheck' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Building2" size={32} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Business Account Benefits</h3>
        <p className="text-muted-foreground">
          Unlock exclusive features designed for fire safety professionals
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name={benefit.icon} size={16} className="text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <h4 className="font-semibold text-foreground mb-4 text-center">Trusted Certifications</h4>
        <div className="grid grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2 text-xs">
              <Icon name={cert.icon} size={14} className="text-success" />
              <span className="text-muted-foreground">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-md">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Lock" size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Secure & Encrypted</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Your business information is protected with enterprise-grade SSL encryption and secure data handling practices.
        </p>
      </div>
    </div>
  );
};

export default BusinessBenefits;