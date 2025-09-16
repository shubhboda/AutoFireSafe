import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ServiceRequests = ({ serviceRequests, onScheduleService, onViewDetails }) => {
  const [statusFilter, setStatusFilter] = useState('all');

  const statusOptions = [
    { value: 'all', label: 'All Requests' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'text-primary bg-primary/10';
      case 'in-progress': return 'text-warning bg-warning/10';
      case 'completed': return 'text-success bg-success/10';
      case 'cancelled': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getServiceIcon = (type) => {
    switch (type) {
      case 'inspection': return 'Search';
      case 'maintenance': return 'Wrench';
      case 'installation': return 'Settings';
      case 'repair': return 'Tool';
      default: return 'Wrench';
    }
  };

  const filteredRequests = serviceRequests.filter(request => 
    statusFilter === 'all' || request.status === statusFilter
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground">Service Requests</h2>
          <div className="flex gap-3">
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
              placeholder="Filter by status"
              className="w-48"
            />
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              iconPosition="left"
              onClick={onScheduleService}
            >
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
      
      <div className="divide-y divide-border">
        {filteredRequests.length === 0 ? (
          <div className="p-8 text-center">
            <Icon name="Wrench" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No service requests found</p>
            <Button
              variant="outline"
              onClick={onScheduleService}
              iconName="Plus"
              iconPosition="left"
            >
              Schedule Your First Service
            </Button>
          </div>
        ) : (
          filteredRequests.map((request) => (
            <div key={request.id} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name={getServiceIcon(request.type)} size={20} className="text-muted-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-foreground">{request.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{request.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {request.scheduledDate ? formatDate(request.scheduledDate) : 'Not scheduled'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{request.location}</span>
                      </div>
                      {request.technician && (
                        <div className="flex items-center space-x-2">
                          <Icon name="User" size={14} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{request.technician}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <Icon name="IndianRupee" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground font-mono">₹{request.cost.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewDetails(request.id)}
                  >
                    View Details
                  </Button>
                  {request.status === 'scheduled' && (
                    <Button
                      variant="default"
                      size="sm"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Contact Tech
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceRequests;