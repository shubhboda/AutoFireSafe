import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProfileManagement = ({ profile, onUpdateProfile, onAddAddress, onUpdateAddress, onDeleteAddress }) => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: 'User' },
    { id: 'business', label: 'Business Info', icon: 'Building' },
    { id: 'addresses', label: 'Addresses', icon: 'MapPin' },
    { id: 'payments', label: 'Payment Methods', icon: 'CreditCard' },
    { id: 'security', label: 'Security', icon: 'Shield' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          disabled={!isEditing}
          required
        />
        <Input
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          disabled={!isEditing}
          required
        />
      </div>
      
      <Input
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        disabled={!isEditing}
        required
      />
      
      <Input
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        disabled={!isEditing}
        required
      />
      
      <Input
        label="Job Title"
        type="text"
        value={formData.jobTitle}
        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
        disabled={!isEditing}
      />
    </div>
  );

  const renderBusinessInfo = () => (
    <div className="space-y-4">
      <Input
        label="Company Name"
        type="text"
        value={formData.company}
        onChange={(e) => handleInputChange('company', e.target.value)}
        disabled={!isEditing}
        required
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Tax ID"
          type="text"
          value={formData.taxId}
          onChange={(e) => handleInputChange('taxId', e.target.value)}
          disabled={!isEditing}
        />
        <Select
          label="Industry"
          options={[
            { value: 'manufacturing', label: 'Manufacturing' },
            { value: 'healthcare', label: 'Healthcare' },
            { value: 'education', label: 'Education' },
            { value: 'retail', label: 'Retail' },
            { value: 'hospitality', label: 'Hospitality' },
            { value: 'other', label: 'Other' }
          ]}
          value={formData.industry}
          onChange={(value) => handleInputChange('industry', value)}
          disabled={!isEditing}
        />
      </div>
      
      <Input
        label="Website"
        type="url"
        value={formData.website}
        onChange={(e) => handleInputChange('website', e.target.value)}
        disabled={!isEditing}
      />
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-foreground">Saved Addresses</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={onAddAddress}
        >
          Add Address
        </Button>
      </div>
      
      <div className="space-y-3">
        {formData.addresses.map((address) => (
          <div key={address.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-foreground">{address.label}</h4>
                  {address.isDefault && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {address.street}<br />
                  {address.city}, {address.state} {address.zipCode}<br />
                  {address.country}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onUpdateAddress(address.id)}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <Icon name="Edit" size={16} />
                </button>
                <button
                  onClick={() => onDeleteAddress(address.id)}
                  className="text-muted-foreground hover:text-destructive transition-smooth"
                >
                  <Icon name="Trash2" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPaymentMethods = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-foreground">Payment Methods</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
        >
          Add Payment Method
        </Button>
      </div>
      
      <div className="space-y-3">
        {formData.paymentMethods.map((method) => (
          <div key={method.id} className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name="CreditCard" size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    •••• •••• •••• {method.lastFour}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.brand} • Expires {method.expiryMonth}/{method.expiryYear}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {method.isDefault && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    Default
                  </span>
                )}
                <button className="text-muted-foreground hover:text-destructive transition-smooth">
                  <Icon name="Trash2" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-4">
      <div className="border border-border rounded-lg p-4">
        <h3 className="text-lg font-medium text-foreground mb-4">Change Password</h3>
        <div className="space-y-4">
          <Input
            label="Current Password"
            type="password"
            placeholder="Enter current password"
          />
          <Input
            label="New Password"
            type="password"
            placeholder="Enter new password"
          />
          <Input
            label="Confirm New Password"
            type="password"
            placeholder="Confirm new password"
          />
          <Button variant="default" size="sm">
            Update Password
          </Button>
        </div>
      </div>
      
      <div className="border border-border rounded-lg p-4">
        <h3 className="text-lg font-medium text-foreground mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground">Secure your account with 2FA</p>
            <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
          </div>
          <Button variant="outline" size="sm">
            Enable 2FA
          </Button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'personal': return renderPersonalInfo();
      case 'business': return renderBusinessInfo();
      case 'addresses': return renderAddresses();
      case 'payments': return renderPaymentMethods();
      case 'security': return renderSecurity();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 border-b lg:border-b-0 lg:border-r border-border">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Profile Settings</h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-foreground">
                {sections.find(s => s.id === activeSection)?.label}
              </h3>
              {(activeSection === 'personal' || activeSection === 'business') && (
                <div className="flex space-x-2">
                  {isEditing ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={handleSave}
                      >
                        Save Changes
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Edit"
                      iconPosition="left"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;