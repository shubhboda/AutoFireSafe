import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: '256-bit SSL Encryption',
      description: 'Your data is protected with bank-level security'
    },
    {
      icon: 'Lock',
      title: 'Secure Payment Processing',
      description: 'PCI DSS compliant payment handling'
    },
    {
      icon: 'CheckCircle',
      title: 'Verified Merchant',
      description: 'Trusted by thousands of businesses'
    }
  ];

  const paymentLogos = [
    { name: 'Visa', icon: 'CreditCard' },
    { name: 'Mastercard', icon: 'CreditCard' },
    { name: 'American Express', icon: 'CreditCard' },
    { name: 'PayPal', icon: 'Wallet' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Icon name="Shield" size={20} className="text-success" />
        Secure Checkout
      </h3>

      {/* Security Features */}
      <div className="space-y-3 mb-6">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Icon name={feature.icon} size={16} className="text-success mt-0.5" />
            <div>
              <div className="text-sm font-medium text-foreground">
                {feature.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="border-t border-border pt-4">
        <div className="text-sm font-medium text-foreground mb-3">
          Accepted Payment Methods
        </div>
        <div className="flex items-center gap-3">
          {paymentLogos.map((payment, index) => (
            <div
              key={index}
              className="w-10 h-6 bg-muted rounded flex items-center justify-center"
              title={payment.name}
            >
              <Icon name={payment.icon} size={14} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Signals */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={12} />
            <span>Session expires in 15 minutes</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Users" size={12} />
            <span>Trusted by 10,000+ customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;