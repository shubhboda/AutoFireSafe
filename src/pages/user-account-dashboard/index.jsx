import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import EmergencyContactButton from '../../components/ui/EmergencyContactButton';
import WelcomeSection from './components/WelcomeSection';
import DashboardTabs from './components/DashboardTabs';
import ActivitySummary from './components/ActivitySummary';
import DashboardWidgets from './components/DashboardWidgets';
import OrderHistory from './components/OrderHistory';
import ServiceRequests from './components/ServiceRequests';
import SavedItems from './components/SavedItems';
import ProfileManagement from './components/ProfileManagement';
import DocumentsSection from './components/DocumentsSection';

const UserAccountDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  // Mock user data
  const [user] = useState({
    name: "Shubham Boda",
    email: "shubham.boda@safetycorp.in",
    company: "SafetyCorp Industries",
    role: "Safety Manager",
    memberSince: "March 2022",
    firstName: "Shubham",
    lastName: "Boda",
    phone: "+91 98765 43210",
    jobTitle: "Safety Manager",
    taxId: "12-3456789",
    industry: "manufacturing",
    website: "https://safetycorp.in",
    addresses: [
      {
        id: 1,
        label: "Main Office",
        street: "1234 Industrial Blvd",
        city: "Mumbai",
        state: "MH",
        zipCode: "400001",
        country: "India",
        isDefault: true
      },
      {
        id: 2,
        label: "Warehouse",
        street: "5678 Storage Way",
        city: "Mumbai",
        state: "MH",
        zipCode: "400002",
        country: "India",
        isDefault: false
      }
    ],
    paymentMethods: [
      {
        id: 1,
        brand: "Visa",
        lastFour: "4242",
        expiryMonth: "12",
        expiryYear: "2025",
        isDefault: true
      },
      {
        id: 2,
        brand: "Mastercard",
        lastFour: "8888",
        expiryMonth: "08",
        expiryYear: "2026",
        isDefault: false
      }
    ]
  });

  const [accountStatus] = useState({
    status: 'active',
    label: 'Active Account',
    message: 'Your account is in good standing. Next service inspection due in 30 days.'
  });

  // Mock activity data
  const [activities] = useState([
    {
      id: 1,
      type: 'order',
      description: 'Order #ORD-2024-001 has been shipped',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: 'completed'
    },
    {
      id: 2,
      type: 'service',
      description: 'Fire extinguisher inspection scheduled for July 25th',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      status: 'pending'
    },
    {
      id: 3,
      type: 'warranty',
      description: 'Smoke detector warranty expires in 30 days',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      status: 'pending'
    },
    {
      id: 4,
      type: 'document',
      description: 'Fire safety certificate downloaded',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      status: 'completed'
    },
    {
      id: 5,
      type: 'payment',
      description: 'Payment processed for service request #SRV-2024-003',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      status: 'completed'
    }
  ]);

  // Mock dashboard widgets
  const [widgets] = useState([
    {
      id: 1,
      type: 'orders',
      value: '12',
      label: 'Active Orders',
      subtitle: '3 pending delivery',
      trend: { direction: 'up', value: '+2', period: 'this month' },
      action: { type: 'view_orders', label: 'View Orders' }
    },
    {
      id: 2,
      type: 'services',
      value: '3',
      label: 'Upcoming Services',
      subtitle: 'Next: July 25th',
      urgent: true,
      action: { type: 'schedule_service', label: 'Schedule Service' }
    },
    {
      id: 3,
      type: 'warranties',
      value: '2',
      label: 'Expiring Warranties',
      subtitle: 'Within 30 days',
      urgent: true,
      action: { type: 'view_warranties', label: 'View Details' }
    },
    {
      id: 4,
      type: 'maintenance',
      value: '5',
      label: 'Maintenance Due',
      subtitle: 'Equipment inspections',
      trend: { direction: 'down', value: '-1', period: 'this week' },
      action: { type: 'schedule_maintenance', label: 'Schedule Now' }
    }
  ]);

  // Mock orders data
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      date: new Date('2024-07-15'),
      status: 'shipped',
      total: 1249.99,
      items: [
        { name: 'Fire Extinguisher - ABC Type', quantity: 4 },
        { name: 'Smoke Detector - Photoelectric', quantity: 8 },
        { name: 'Emergency Exit Sign', quantity: 2 }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: new Date('2024-07-10'),
      status: 'completed',
      total: 899.50,
      items: [
        { name: 'Fire Blanket - Commercial Grade', quantity: 6 },
        { name: 'Carbon Monoxide Detector', quantity: 4 }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: new Date('2024-07-05'),
      status: 'processing',
      total: 2150.00,
      items: [
        { name: 'Sprinkler System Components', quantity: 1 },
        { name: 'Fire Alarm Control Panel', quantity: 1 }
      ]
    }
  ]);

  // Mock service requests
  const [serviceRequests] = useState([
    {
      id: 'SRV-2024-001',
      title: 'Annual Fire Extinguisher Inspection',
      description: 'Comprehensive inspection of all fire extinguishers in main facility',
      type: 'inspection',
      status: 'scheduled',
      scheduledDate: new Date('2024-07-25T10:00:00'),
      location: 'Main Office - 1234 Industrial Blvd',
      technician: 'John Smith',
      cost: 450.00
    },
    {
      id: 'SRV-2024-002',
      title: 'Smoke Detector Maintenance',
      description: 'Battery replacement and functionality testing',
      type: 'maintenance',
      status: 'completed',
      scheduledDate: new Date('2024-07-12T14:00:00'),
      location: 'Warehouse - 5678 Storage Way',
      technician: 'Sarah Johnson',
      cost: 280.00
    },
    {
      id: 'SRV-2024-003',
      title: 'Emergency Lighting Installation',
      description: 'Install new emergency lighting system in east wing',
      type: 'installation',
      status: 'in-progress',
      scheduledDate: new Date('2024-07-20T09:00:00'),
      location: 'Main Office - East Wing',
      technician: 'Mike Davis',
      cost: 1200.00
    }
  ]);

  // Mock saved items
  const [savedItems] = useState([
    {
      id: 1,
      name: 'Advanced Fire Suppression System',
      category: 'Fire Suppression',
      price: 2499.99,
      originalPrice: 2799.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Smoke Detection Network',
      category: 'Detection Systems',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
      rating: 4.6,
      reviews: 89,
      inStock: true
    },
    {
      id: 3,
      name: 'Industrial Fire Extinguisher Set',
      category: 'Fire Extinguishers',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      rating: 4.9,
      reviews: 156,
      inStock: false
    }
  ]);

  // Mock documents
  const [documents] = useState([
    {
      id: 1,
      name: 'Fire Safety Certificate 2024',
      description: 'Annual fire safety compliance certificate',
      type: 'certificate',
      category: 'certificates',
      format: 'pdf',
      size: 2048576,
      issuedDate: new Date('2024-01-15'),
      expiryDate: new Date('2025-01-15'),
      status: 'valid',
      isExpiring: false
    },
    {
      id: 2,
      name: 'Fire Extinguisher Warranty',
      description: 'Warranty documentation for ABC fire extinguishers',
      type: 'warranty',
      category: 'warranties',
      format: 'pdf',
      size: 1024768,
      issuedDate: new Date('2024-03-10'),
      expiryDate: new Date('2024-08-10'),
      status: 'expiring',
      isExpiring: true
    },
    {
      id: 3,
      name: 'Maintenance Report - July 2024',
      description: 'Monthly maintenance and inspection report',
      type: 'maintenance',
      category: 'maintenance',
      format: 'pdf',
      size: 3145728,
      issuedDate: new Date('2024-07-01'),
      expiryDate: null,
      status: 'valid',
      isExpiring: false
    },
    {
      id: 4,
      name: 'Invoice #INV-2024-001',
      description: 'Service invoice for fire extinguisher inspection',
      type: 'invoice',
      category: 'invoices',
      format: 'pdf',
      size: 512000,
      issuedDate: new Date('2024-07-12'),
      expiryDate: null,
      status: 'valid',
      isExpiring: false
    }
  ]);

  const handleEmergencyContact = () => {
    window.open('tel:911', '_self');
  };

  const handleQuickAction = (actionType, widgetId) => {
    switch (actionType) {
      case 'view_orders': setActiveTab('orders');
        break;
      case 'schedule_service': navigate('/service-offerings');
        break;
      case 'view_warranties': setActiveTab('documents');
        break;
      case 'schedule_maintenance': navigate('/service-offerings');
        break;
      default:
        console.log('Quick action:', actionType, widgetId);
    }
  };

  const handleReorder = (orderId) => {
    console.log('Reordering:', orderId);
    navigate('/shopping-cart-checkout');
  };

  const handleViewOrderDetails = (orderId) => {
    console.log('Viewing order details:', orderId);
  };

  const handleScheduleService = () => {
    navigate('/service-offerings');
  };

  const handleViewServiceDetails = (serviceId) => {
    console.log('Viewing service details:', serviceId);
  };

  const handleAddToCart = (itemId) => {
    console.log('Adding to cart:', itemId);
    navigate('/shopping-cart-checkout');
  };

  const handleRemoveFromSaved = (itemId) => {
    console.log('Removing from saved:', itemId);
  };

  const handleUpdateProfile = (profileData) => {
    console.log('Updating profile:', profileData);
  };

  const handleAddAddress = () => {
    console.log('Adding new address');
  };

  const handleUpdateAddress = (addressId) => {
    console.log('Updating address:', addressId);
  };

  const handleDeleteAddress = (addressId) => {
    console.log('Deleting address:', addressId);
  };

  const handleDownloadDocument = (documentId) => {
    console.log('Downloading document:', documentId);
  };

  const handleRequestDocument = () => {
    console.log('Requesting new document');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <DashboardWidgets 
              widgets={widgets} 
              onQuickAction={handleQuickAction} 
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <OrderHistory 
                  orders={orders.slice(0, 3)} 
                  onReorder={handleReorder}
                  onViewDetails={handleViewOrderDetails}
                />
              </div>
              <div>
                <ActivitySummary activities={activities} />
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <OrderHistory 
            orders={orders} 
            onReorder={handleReorder}
            onViewDetails={handleViewOrderDetails}
          />
        );
      case 'services':
        return (
          <ServiceRequests 
            serviceRequests={serviceRequests}
            onScheduleService={handleScheduleService}
            onViewDetails={handleViewServiceDetails}
          />
        );
      case 'saved':
        return (
          <SavedItems 
            savedItems={savedItems}
            onAddToCart={handleAddToCart}
            onRemoveFromSaved={handleRemoveFromSaved}
          />
        );
      case 'profile':
        return (
          <ProfileManagement 
            profile={user}
            onUpdateProfile={handleUpdateProfile}
            onAddAddress={handleAddAddress}
            onUpdateAddress={handleUpdateAddress}
            onDeleteAddress={handleDeleteAddress}
          />
        );
      case 'documents':
        return (
          <DocumentsSection 
            documents={documents}
            onDownload={handleDownloadDocument}
            onRequestDocument={handleRequestDocument}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EmergencyContactButton />
      
      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNavigation />
        
        <div className="space-y-6">
          <WelcomeSection 
            user={user}
            accountStatus={accountStatus}
            onEmergencyContact={handleEmergencyContact}
          />
          
          <DashboardTabs 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default UserAccountDashboard;