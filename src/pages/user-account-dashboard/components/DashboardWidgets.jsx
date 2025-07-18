import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardWidgets = ({ widgets, onQuickAction }) => {
  const getWidgetIcon = (type) => {
    switch (type) {
      case 'orders': return 'Package';
      case 'services': return 'Calendar';
      case 'warranties': return 'Shield';
      case 'maintenance': return 'AlertTriangle';
      default: return 'Info';
    }
  };

  const getWidgetColor = (type) => {
    switch (type) {
      case 'orders': return 'text-primary bg-primary/10';
      case 'services': return 'text-warning bg-warning/10';
      case 'warranties': return 'text-destructive bg-destructive/10';
      case 'maintenance': return 'text-secondary bg-secondary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {widgets.map((widget) => (
        <div key={widget.id} className="bg-card border border-border rounded-lg p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getWidgetColor(widget.type)}`}>
              <Icon name={getWidgetIcon(widget.type)} size={24} />
            </div>
            {widget.urgent && (
              <span className="w-3 h-3 bg-destructive rounded-full animate-pulse"></span>
            )}
          </div>
          
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground">{widget.value}</h3>
            <p className="text-sm text-muted-foreground">{widget.label}</p>
            {widget.subtitle && (
              <p className="text-xs text-muted-foreground mt-1">{widget.subtitle}</p>
            )}
          </div>
          
          {widget.trend && (
            <div className="flex items-center space-x-2 mb-4">
              <Icon 
                name={widget.trend.direction === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                size={14} 
                className={widget.trend.direction === 'up' ? 'text-success' : 'text-destructive'} 
              />
              <span className={`text-xs ${widget.trend.direction === 'up' ? 'text-success' : 'text-destructive'}`}>
                {widget.trend.value}
              </span>
              <span className="text-xs text-muted-foreground">{widget.trend.period}</span>
            </div>
          )}
          
          {widget.action && (
            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={() => onQuickAction(widget.action.type, widget.id)}
            >
              {widget.action.label}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardWidgets;