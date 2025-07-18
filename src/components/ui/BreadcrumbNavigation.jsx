import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const BreadcrumbNavigation = ({ customBreadcrumbs = null, className = '' }) => {
  const location = useLocation();

  // Default breadcrumb mapping based on routes
  const routeBreadcrumbs = {
    '/homepage': [
      { label: 'Home', path: '/homepage' }
    ],
    '/product-detail': [
      { label: 'Home', path: '/homepage' },
      { label: 'Products', path: '/product-detail' }
    ],
    '/service-offerings': [
      { label: 'Home', path: '/homepage' },
      { label: 'Services', path: '/service-offerings' }
    ],
    '/shopping-cart-checkout': [
      { label: 'Home', path: '/homepage' },
      { label: 'Products', path: '/product-detail' },
      { label: 'Cart & Checkout', path: '/shopping-cart-checkout' }
    ],
    '/user-account-dashboard': [
      { label: 'Home', path: '/homepage' },
      { label: 'Account Dashboard', path: '/user-account-dashboard' }
    ],
    '/login-registration': [
      { label: 'Home', path: '/homepage' },
      { label: 'Sign In', path: '/login-registration' }
    ]
  };

  // Use custom breadcrumbs if provided, otherwise use route-based breadcrumbs
  const breadcrumbs = customBreadcrumbs || routeBreadcrumbs[location.pathname] || [
    { label: 'Home', path: '/homepage' }
  ];

  // Don't show breadcrumbs on homepage or if only one item
  if (location.pathname === '/homepage' || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <Icon 
                  name="ChevronRight" 
                  size={14} 
                  className="text-muted-foreground mx-2" 
                />
              )}
              
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;