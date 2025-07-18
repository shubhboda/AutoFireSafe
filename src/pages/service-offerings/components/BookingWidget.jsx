import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BookingWidget = ({ service, isOpen, onClose, type = 'quote' }) => {
  const [formData, setFormData] = useState({
    propertyType: '',
    squareFootage: '',
    currentEquipment: '',
    urgencyLevel: '',
    preferredDate: '',
    preferredTime: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const propertyTypeOptions = [
    { value: 'office', label: 'Office Building' },
    { value: 'retail', label: 'Retail Space' },
    { value: 'warehouse', label: 'Warehouse/Industrial' },
    { value: 'restaurant', label: 'Restaurant/Food Service' },
    { value: 'healthcare', label: 'Healthcare Facility' },
    { value: 'residential', label: 'Residential Building' },
    { value: 'educational', label: 'Educational Institution' },
    { value: 'other', label: 'Other' }
  ];

  const urgencyOptions = [
    { value: 'immediate', label: 'Immediate (Emergency)' },
    { value: 'urgent', label: 'Urgent (Within 24 hours)' },
    { value: 'standard', label: 'Standard (Within 1 week)' },
    { value: 'flexible', label: 'Flexible (Within 1 month)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert(`${type === 'quote' ? 'Quote request' : 'Service appointment'} submitted successfully! We'll contact you within 24 hours.`);
    
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${service?.isEmergency ? 'bg-destructive/10' : 'bg-primary/10'}`}>
              <Icon 
                name={service?.icon || 'FileText'} 
                size={20} 
                className={service?.isEmergency ? 'text-destructive' : 'text-primary'} 
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {type === 'quote' ? 'Request Quote' : 'Schedule Service'}
              </h2>
              <p className="text-sm text-muted-foreground">{service?.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Property Information */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Property Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Property Type"
                options={propertyTypeOptions}
                value={formData.propertyType}
                onChange={(value) => handleInputChange('propertyType', value)}
                required
              />
              <Input
                label="Square Footage"
                type="number"
                placeholder="e.g., 5000"
                value={formData.squareFootage}
                onChange={(e) => handleInputChange('squareFootage', e.target.value)}
                required
              />
            </div>
            <Input
              label="Current Equipment Status"
              type="text"
              placeholder="Describe existing fire safety equipment"
              value={formData.currentEquipment}
              onChange={(e) => handleInputChange('currentEquipment', e.target.value)}
              className="mt-4"
            />
          </div>

          {/* Service Details */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Service Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Urgency Level"
                options={urgencyOptions}
                value={formData.urgencyLevel}
                onChange={(value) => handleInputChange('urgencyLevel', value)}
                required
              />
              {type === 'schedule' && (
                <>
                  <Input
                    label="Preferred Date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  <Input
                    label="Preferred Time"
                    type="time"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="md:col-span-1"
                  />
                </>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Smith"
                value={formData.contactName}
                onChange={(e) => handleInputChange('contactName', e.target.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                required
              />
            </div>
            <Input
              label="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              required
              className="mt-4"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Notes
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              rows={4}
              placeholder="Any specific requirements or additional information..."
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName={type === 'quote' ? 'FileText' : 'Calendar'}
              iconPosition="left"
              className="flex-1"
            >
              {type === 'quote' ? 'Submit Quote Request' : 'Schedule Service'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingWidget;