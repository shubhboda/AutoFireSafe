import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WelcomeSection = ({ user, accountStatus, onEmergencyContact }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10';
      case 'pending': return 'text-warning bg-warning/10';
      case 'expired': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return 'CheckCircle';
      case 'pending': return 'Clock';
      case 'expired': return 'AlertTriangle';
      default: return 'Info';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Welcome back, {user.name}
            </h1>
            <p className="text-muted-foreground mt-1">{user.company}</p>
            <p className="text-sm text-muted-foreground">{user.role}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(accountStatus.status)}`}>
                <Icon name={getStatusIcon(accountStatus.status)} size={12} className="mr-1" />
                {accountStatus.label}
              </span>
              <span className="text-xs text-muted-foreground">
                Member since {user.memberSince}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="destructive"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            onClick={onEmergencyContact}
          >
            Emergency Contact
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Support Chat
          </Button>
        </div>
      </div>
      
      {accountStatus.message && (
        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-sm text-muted-foreground">{accountStatus.message}</p>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;