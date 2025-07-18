import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import EmergencyContactButton from '../../components/ui/EmergencyContactButton';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import BusinessBenefits from './components/BusinessBenefits';
import SecurityFeatures from './components/SecurityFeatures';
import Icon from '../../components/AppIcon';

const LoginRegistration = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const breadcrumbs = [
    { label: 'Home', path: '/homepage' },
    { label: 'Sign In', path: '/login-registration' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sign In | AutoFireSafe - Fire Safety Equipment & Services</title>
        <meta name="description" content="Sign in to your AutoFireSafe account for exclusive business pricing, service scheduling, and dedicated support. Create an account to access commercial fire safety solutions." />
        <meta name="keywords" content="fire safety login, business account, commercial pricing, fire equipment, safety services" />
      </Helmet>

      <Header />
      <EmergencyContactButton />

      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} className="mb-8" />

        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={40} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Access Your Fire Safety Account
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sign in to manage your fire safety equipment, schedule services, and access exclusive business pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg shadow-soft overflow-hidden">
                {/* Tab Navigation */}
                <div className="border-b border-border">
                  <nav className="flex">
                    <button
                      onClick={() => handleTabSwitch('login')}
                      className={`flex-1 px-6 py-4 text-sm font-medium transition-smooth ${
                        activeTab === 'login' ?'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="LogIn" size={16} />
                        <span>Sign In</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleTabSwitch('register')}
                      className={`flex-1 px-6 py-4 text-sm font-medium transition-smooth ${
                        activeTab === 'register' ?'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="UserPlus" size={16} />
                        <span>Create Account</span>
                      </div>
                    </button>
                  </nav>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8">
                  {activeTab === 'login' ? (
                    <LoginForm onSwitchToRegister={() => handleTabSwitch('register')} />
                  ) : (
                    <RegistrationForm onSwitchToLogin={() => handleTabSwitch('login')} />
                  )}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card border border-border rounded-lg">
                  <Icon name="Shield" size={24} className="text-success mx-auto mb-2" />
                  <div className="text-xs font-medium text-foreground">SSL Secured</div>
                </div>
                <div className="text-center p-4 bg-card border border-border rounded-lg">
                  <Icon name="Award" size={24} className="text-primary mx-auto mb-2" />
                  <div className="text-xs font-medium text-foreground">NFPA Certified</div>
                </div>
                <div className="text-center p-4 bg-card border border-border rounded-lg">
                  <Icon name="Clock" size={24} className="text-warning mx-auto mb-2" />
                  <div className="text-xs font-medium text-foreground">24/7 Support</div>
                </div>
                <div className="text-center p-4 bg-card border border-border rounded-lg">
                  <Icon name="Users" size={24} className="text-secondary mx-auto mb-2" />
                  <div className="text-xs font-medium text-foreground">10K+ Customers</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {activeTab === 'login' ? <SecurityFeatures /> : <BusinessBenefits />}
              
              {/* Quick Links */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/homepage"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <Icon name="Home" size={16} />
                    <span>Back to Homepage</span>
                  </a>
                  <a
                    href="/product-detail"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <Icon name="Package" size={16} />
                    <span>Browse Products</span>
                  </a>
                  <a
                    href="/service-offerings"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <Icon name="Wrench" size={16} />
                    <span>View Services</span>
                  </a>
                  <a
                    href="tel:1-800-FIRE-911"
                    className="flex items-center space-x-2 text-sm text-destructive hover:text-destructive/80 transition-smooth"
                  >
                    <Icon name="Phone" size={16} />
                    <span>Emergency Support</span>
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">support@autofiresafe.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">1-800-FIRE-SAFE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AutoFireSafe. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-foreground transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginRegistration;