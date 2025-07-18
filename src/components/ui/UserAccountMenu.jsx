import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const UserAccountMenu = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Mock authentication state - in real app this would come from context/auth provider
  useEffect(() => {
    const mockUser = {
      name: 'John Smith',
      email: 'john.smith@company.com',
      role: 'Safety Manager',
      avatar: null
    };
    setUser(mockUser);
    setIsAuthenticated(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsOpen(false);
    navigate('/login-registration');
  };

  const menuItems = [
    { label: 'Dashboard', path: '/user-account-dashboard', icon: 'LayoutDashboard' },
    { label: 'Order History', path: '/user-account-dashboard', icon: 'Package' },
    { label: 'Service Requests', path: '/service-offerings', icon: 'Wrench' },
    { label: 'Account Settings', path: '/user-account-dashboard', icon: 'Settings' },
    { label: 'Billing & Payments', path: '/user-account-dashboard', icon: 'CreditCard' },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Account Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 p-2 text-muted-foreground hover:text-foreground transition-smooth"
      >
        {isAuthenticated && user ? (
          <>
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-sm font-medium text-foreground">{user.name}</div>
              <div className="text-xs text-muted-foreground">{user.role}</div>
            </div>
          </>
        ) : (
          <Icon name="User" size={20} />
        )}
        <Icon name="ChevronDown" size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Account Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-md shadow-elevated z-70">
          {isAuthenticated && user ? (
            <>
              {/* User Info Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                    <div className="text-xs text-muted-foreground">{user.role}</div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:bg-muted transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name={item.icon} size={16} className="text-muted-foreground" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Sign Out */}
              <div className="border-t border-border p-2">
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-smooth"
                >
                  <Icon name="LogOut" size={16} className="text-muted-foreground" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            /* Guest Menu */
            <div className="p-4">
              <div className="text-sm text-muted-foreground mb-4">
                Sign in to access your account
              </div>
              <div className="space-y-2">
                <Link to="/login-registration" onClick={() => setIsOpen(false)}>
                  <Button variant="default" fullWidth>
                    Sign In
                  </Button>
                </Link>
                <Link to="/login-registration" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" fullWidth>
                    Create Account
                  </Button>
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  to="/service-offerings"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name="HelpCircle" size={16} />
                  <span>Need Help?</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-60"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default UserAccountMenu;