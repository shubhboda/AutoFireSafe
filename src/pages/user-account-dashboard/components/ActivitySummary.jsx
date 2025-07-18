import React from 'react';
import Icon from '../../../components/AppIcon';

const ActivitySummary = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'order': return 'ShoppingCart';
      case 'service': return 'Wrench';
      case 'document': return 'FileText';
      case 'payment': return 'CreditCard';
      case 'warranty': return 'Shield';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'order': return 'text-primary';
      case 'service': return 'text-warning';
      case 'document': return 'text-secondary';
      case 'payment': return 'text-success';
      case 'warranty': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${getActivityColor(activity.type)}`}>
              <Icon name={getActivityIcon(activity.type)} size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {formatDate(activity.timestamp)}
              </p>
            </div>
            {activity.status && (
              <span className={`text-xs px-2 py-1 rounded-full ${
                activity.status === 'completed' ? 'bg-success/10 text-success' :
                activity.status === 'pending'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
              }`}>
                {activity.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySummary;