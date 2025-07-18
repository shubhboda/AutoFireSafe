import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'orders', label: 'Orders', icon: 'Package' },
    { id: 'services', label: 'Services', icon: 'Wrench' },
    { id: 'saved', label: 'Saved Items', icon: 'Heart' },
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'documents', label: 'Documents', icon: 'FileText' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="overflow-x-auto">
        <nav className="flex space-x-1 p-1 min-w-max lg:min-w-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-smooth whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DashboardTabs;