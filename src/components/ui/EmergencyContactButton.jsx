import React, { useState } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const EmergencyContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const emergencyContacts = [
    { label: 'Fire Emergency', number: '911', icon: 'Flame' },
    { label: 'Fire Safety Hotline', number: '1-800-FIRE-911', icon: 'Phone' },
    { label: 'Emergency Services', number: '1-800-EMERGENCY', icon: 'AlertTriangle' },
  ];

  const handleEmergencyCall = (number) => {
    window.open(`tel:${number}`, '_self');
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed top-20 right-4 z-100">
      {/* Main Emergency Button */}
      <div className="relative">
        <Button
          variant="destructive"
          size="lg"
          onClick={toggleExpanded}
          iconName="Phone"
          iconPosition="left"
          className="shadow-elevated animate-pulse hover:animate-none"
        >
          <span className="hidden sm:inline">Emergency</span>
          <Icon name="ChevronDown" size={16} className={`ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </Button>

        {/* Expanded Emergency Options */}
        {isExpanded && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-md shadow-elevated">
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                Emergency Contacts
              </div>
              {emergencyContacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleEmergencyCall(contact.number)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-muted rounded-md transition-smooth"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={contact.icon} size={18} className="text-destructive" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {contact.label}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {contact.number}
                      </div>
                    </div>
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                </button>
              ))}
            </div>
            <div className="border-t border-border p-2">
              <div className="text-xs text-muted-foreground px-2">
                For immediate fire emergencies, call 911
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-90"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default EmergencyContactButton;