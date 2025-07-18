import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Products', path: '/product-detail', icon: 'Package' },
    { label: 'Services', path: '/service-offerings', icon: 'Wrench' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const handleEmergencyContact = () => {
    window.open('tel:911', '_self');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <span className="text-xl font-semibold text-foreground">AutoFireSafe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link
              to="/shopping-cart-checkout"
              className="relative p-2 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Account Menu */}
            <div className="relative">
              <button
                onClick={toggleAccountMenu}
                className="flex items-center space-x-2 p-2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Icon name="User" size={20} />
                <Icon name="ChevronDown" size={16} />
              </button>

              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-md shadow-elevated z-60">
                  <div className="py-1">
                    <Link
                      to="/login-registration"
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/user-account-dashboard"
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <hr className="my-1 border-border" />
                    <button className="block w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth">
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Emergency Contact Button */}
            <Button
              variant="destructive"
              size="sm"
              onClick={handleEmergencyContact}
              iconName="Phone"
              iconPosition="left"
              className="hidden sm:flex"
            >
              Emergency
            </Button>

            {/* Mobile Emergency Button */}
            <Button
              variant="destructive"
              size="icon"
              onClick={handleEmergencyContact}
              className="sm:hidden"
            >
              <Icon name="Phone" size={16} />
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-smooth ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10 border-r-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <hr className="my-2 border-border" />
              
              <Link
                to="/shopping-cart-checkout"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Icon name="ShoppingCart" size={18} />
                  <span>Cart</span>
                </div>
                <span className="bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close account menu */}
      {isAccountMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsAccountMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;