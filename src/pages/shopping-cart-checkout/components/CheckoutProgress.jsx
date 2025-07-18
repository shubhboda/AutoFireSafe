import React from 'react';
import Icon from '../../../components/AppIcon';

const CheckoutProgress = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, title: 'Cart Review', icon: 'ShoppingCart' },
    { id: 2, title: 'Shipping', icon: 'Truck' },
    { id: 3, title: 'Payment', icon: 'CreditCard' },
    { id: 4, title: 'Confirmation', icon: 'CheckCircle' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                  step.id < currentStep
                    ? 'bg-success text-success-foreground'
                    : step.id === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <Icon
                  name={step.id < currentStep ? 'Check' : step.icon}
                  size={16}
                />
              </div>
              <span
                className={`text-xs font-medium mt-2 ${
                  step.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {step.title}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  step.id < currentStep ? 'bg-success' : 'bg-border'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgress;