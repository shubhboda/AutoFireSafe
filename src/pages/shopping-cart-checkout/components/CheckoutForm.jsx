import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const CheckoutForm = ({ onSubmit, isProcessing }) => {
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    
    // Billing Information
    billingDifferent: false,
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    billingCountry: 'US',
    
    // Payment Information
    paymentMethod: 'credit_card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Additional Options
    saveInfo: false,
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [activeSection, setActiveSection] = useState('shipping');

  const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'CA', label: 'California' },
    { value: 'FL', label: 'Florida' },
    { value: 'NY', label: 'New York' },
    { value: 'TX', label: 'Texas' },
    // Add more states as needed
  ];

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'MX', label: 'Mexico' }
  ];

  const paymentMethods = [
    { value: 'credit_card', label: 'Credit Card', icon: 'CreditCard' },
    { value: 'paypal', label: 'PayPal', icon: 'Wallet' },
    { value: 'business_account', label: 'Business Account', icon: 'Building' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateSection = (section) => {
    const newErrors = {};
    
    if (section === 'shipping') {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    }
    
    if (section === 'payment') {
      if (formData.paymentMethod === 'credit_card') {
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
        if (!formData.cvv) newErrors.cvv = 'CVV is required';
        if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
      }
      if (!formData.terms) newErrors.terms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSectionComplete = (section) => {
    if (validateSection(section)) {
      const sections = ['shipping', 'billing', 'payment'];
      const currentIndex = sections.indexOf(section);
      if (currentIndex < sections.length - 1) {
        setActiveSection(sections[currentIndex + 1]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSection('shipping') && validateSection('payment')) {
      onSubmit(formData);
    }
  };

  const renderSectionHeader = (section, title, icon, isComplete) => (
    <button
      type="button"
      onClick={() => setActiveSection(section)}
      className={`w-full flex items-center justify-between p-4 border rounded-lg transition-smooth ${
        activeSection === section
          ? 'border-primary bg-primary/5'
          : isComplete
          ? 'border-success bg-success/5' :'border-border bg-card hover:bg-muted'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon 
          name={isComplete ? "CheckCircle" : icon} 
          size={20} 
          className={isComplete ? "text-success" : activeSection === section ? "text-primary" : "text-muted-foreground"} 
        />
        <span className={`font-medium ${activeSection === section ? "text-primary" : isComplete ? "text-success" : "text-foreground"}`}>
          {title}
        </span>
      </div>
      <Icon 
        name={activeSection === section ? "ChevronUp" : "ChevronDown"} 
        size={16} 
        className="text-muted-foreground" 
      />
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Shipping Information */}
      <div className="space-y-4">
        {renderSectionHeader('shipping', 'Shipping Information', 'Truck', formData.firstName && formData.lastName && formData.address)}
        
        {activeSection === 'shipping' && (
          <div className="space-y-4 p-4 border border-border rounded-lg bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                error={errors.firstName}
                required
              />
              <Input
                label="Last Name"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                error={errors.lastName}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
            
            <Input
              label="Company (Optional)"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
            
            <Input
              label="Street Address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              error={errors.address}
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="City"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                error={errors.city}
                required
              />
              <Select
                label="State"
                options={stateOptions}
                value={formData.state}
                onChange={(value) => handleInputChange('state', value)}
                error={errors.state}
                required
              />
              <Input
                label="ZIP Code"
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                error={errors.zipCode}
                required
              />
            </div>
            
            <Button
              type="button"
              onClick={() => handleSectionComplete('shipping')}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Continue to Payment
            </Button>
          </div>
        )}
      </div>

      {/* Payment Information */}
      <div className="space-y-4">
        {renderSectionHeader('payment', 'Payment Information', 'CreditCard', formData.paymentMethod && formData.terms)}
        
        {activeSection === 'payment' && (
          <div className="space-y-4 p-4 border border-border rounded-lg bg-card">
            {/* Payment Method Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Payment Method</label>
              <div className="grid grid-cols-1 gap-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.value}
                    className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-smooth ${
                      formData.paymentMethod === method.value
                        ? 'border-primary bg-primary/5' :'border-border hover:bg-muted'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={formData.paymentMethod === method.value}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      className="sr-only"
                    />
                    <Icon name={method.icon} size={20} className="text-muted-foreground" />
                    <span className="font-medium text-foreground">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Credit Card Fields */}
            {formData.paymentMethod === 'credit_card' && (
              <div className="space-y-4">
                <Input
                  label="Cardholder Name"
                  type="text"
                  value={formData.cardName}
                  onChange={(e) => handleInputChange('cardName', e.target.value)}
                  error={errors.cardName}
                  required
                />
                
                <Input
                  label="Card Number"
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  error={errors.cardNumber}
                  required
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    type="text"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    placeholder="MM/YY"
                    error={errors.expiryDate}
                    required
                  />
                  <Input
                    label="CVV"
                    type="text"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    placeholder="123"
                    error={errors.cvv}
                    required
                  />
                </div>
              </div>
            )}

            {/* PayPal */}
            {formData.paymentMethod === 'paypal' && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Wallet" size={20} className="text-primary" />
                  <span className="font-medium text-foreground">PayPal Payment</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  You will be redirected to PayPal to complete your payment securely.
                </p>
              </div>
            )}

            {/* Business Account */}
            {formData.paymentMethod === 'business_account' && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Building" size={20} className="text-primary" />
                  <span className="font-medium text-foreground">Business Account Billing</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This order will be billed to your registered business account. Net 30 terms apply.
                </p>
              </div>
            )}

            {/* Checkboxes */}
            <div className="space-y-3">
              <Checkbox
                label="Save my information for faster checkout"
                checked={formData.saveInfo}
                onChange={(e) => handleInputChange('saveInfo', e.target.checked)}
              />
              
              <Checkbox
                label="Subscribe to our newsletter for safety tips and product updates"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
              />
              
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                checked={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.checked)}
                error={errors.terms}
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              loading={isProcessing}
              iconName="Lock"
              iconPosition="left"
              fullWidth
              className="mt-6"
            >
              {isProcessing ? 'Processing...' : 'Complete Order'}
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;