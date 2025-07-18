import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyServiceSection = ({ onEmergencyContact }) => {
  const emergencyServices = [
    {
      title: "Fire Suppression System Failure",
      description: "Immediate response for malfunctioning sprinkler systems, fire pumps, or suppression equipment",
      responseTime: "< 2 hours",
      icon: "Flame"
    },
    {
      title: "Emergency Equipment Repair",
      description: "Critical repairs for fire extinguishers, alarms, and detection systems",
      responseTime: "< 4 hours",
      icon: "Wrench"
    },
    {
      title: "Code Compliance Emergency",
      description: "Urgent compliance issues requiring immediate attention for inspections",
      responseTime: "< 6 hours",
      icon: "AlertTriangle"
    }
  ];

  const handleEmergencyCall = () => {
    window.open('tel:1-800-FIRE-911', '_self');
  };

  return (
    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-destructive/10 rounded-lg">
          <Icon name="AlertTriangle" size={24} className="text-destructive" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Emergency Fire Safety Services</h2>
          <div className="flex items-center space-x-2 mt-1">
            <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
              24/7 Available
            </span>
            <span className="text-sm text-muted-foreground">• Immediate Response</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {emergencyServices.map((service, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name={service.icon} size={20} className="text-destructive" />
              <h3 className="font-medium text-foreground text-sm">{service.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} className="text-success" />
              <span className="text-xs font-medium text-success">{service.responseTime}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Phone" size={20} className="text-destructive" />
          <div>
            <div className="font-medium text-foreground">Emergency Hotline</div>
            <div className="text-sm text-muted-foreground">Available 24/7 for immediate assistance</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="destructive"
            onClick={handleEmergencyCall}
            iconName="Phone"
            iconPosition="left"
          >
            Call Now: 1-800-FIRE-911
          </Button>
          <Button
            variant="outline"
            onClick={onEmergencyContact}
            iconName="MessageSquare"
            iconPosition="left"
          >
            Emergency Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServiceSection;