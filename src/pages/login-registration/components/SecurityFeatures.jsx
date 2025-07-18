import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'SSL Encryption',
      description: 'All data transmitted with 256-bit SSL encryption'
    },
    {
      icon: 'Lock',
      title: 'Secure Authentication',
      description: 'Multi-factor authentication available for enhanced security'
    },
    {
      icon: 'Eye',
      title: 'Privacy Protection',
      description: 'Your personal information is never shared with third parties'
    },
    {
      icon: 'AlertTriangle',
      title: 'Account Protection',
      description: 'Automatic lockout protection against unauthorized access attempts'
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'GDPR Compliant',
    'CCPA Compliant',
    'PCI DSS Level 1'
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="ShieldCheck" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Security</h3>
        <p className="text-muted-foreground">
          Your data is protected with industry-leading security measures
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name={feature.icon} size={16} className="text-success" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <h4 className="font-semibold text-foreground mb-4 text-center">Compliance Standards</h4>
        <div className="grid grid-cols-2 gap-2">
          {complianceStandards.map((standard, index) => (
            <div key={index} className="flex items-center space-x-2 text-xs">
              <Icon name="CheckCircle" size={14} className="text-success" />
              <span className="text-muted-foreground">{standard}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-md">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-success" />
          <span className="text-sm font-medium text-foreground">Data Protection</span>
        </div>
        <p className="text-xs text-muted-foreground">
          We follow strict data protection protocols and regularly undergo security audits to ensure your information remains safe and secure.
        </p>
      </div>
    </div>
  );
};

export default SecurityFeatures;