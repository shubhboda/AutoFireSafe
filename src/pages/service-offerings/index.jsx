import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import EmergencyContactButton from '../../components/ui/EmergencyContactButton';
import ServiceCategoryTabs from './components/ServiceCategoryTabs';
import ServiceCard from './components/ServiceCard';
import BookingWidget from './components/BookingWidget';
import EmergencyServiceSection from './components/EmergencyServiceSection';
import ServicesSidebar from './components/ServicesSidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServiceOfferings = () => {
  const [activeCategory, setActiveCategory] = useState('installation');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingType, setBookingType] = useState('quote');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Mock services data
  const servicesData = {
    installation: [
      {
        id: 'inst-1',
        name: 'Fire Sprinkler System Installation',
        description: 'Complete design and installation of wet, dry, or pre-action sprinkler systems for commercial and industrial properties.',
        icon: 'Droplets',
        priceRange: '$8,000 - $25,000',
        duration: '3-7 days',
        isEmergency: false,
        features: [
          'System design and engineering',
          'Permit acquisition and filing',
          'Professional installation',
          'System testing and commissioning',
          'Code compliance certification',
          '2-year warranty on installation'
        ],
        certifications: [
          'NFPA 13 Certified Installation',
          'Licensed Fire Protection Contractor',
          'NICET Level III Technicians',
          'Local Fire Department Approved'
        ],
        testimonial: {
          content: 'AutoFireSafe completed our warehouse sprinkler installation ahead of schedule and under budget. Their team was professional and knowledgeable throughout the entire process.',
          author: 'Michael Rodriguez',
          company: 'Industrial Solutions Inc.'
        }
      },
      {
        id: 'inst-2',
        name: 'Fire Alarm System Installation',
        description: 'Advanced fire detection and alarm systems with monitoring capabilities for comprehensive fire safety coverage.',
        icon: 'Bell',
        priceRange: '$3,500 - $15,000',
        duration: '2-5 days',
        isEmergency: false,
        features: [
          'Addressable fire alarm panels',
          'Smoke and heat detectors',
          'Manual pull stations',
          'Notification appliances',
          'Central monitoring integration',
          'Mobile app connectivity'
        ],
        certifications: [
          'NFPA 72 Compliant Systems',
          'UL Listed Components',
          'FCC Certified Wireless',
          'ADA Compliant Installation'
        ],
        testimonial: {
          content: 'The new fire alarm system gives us peace of mind. The mobile alerts and professional monitoring service are excellent features.',
          author: 'Sarah Chen',
          company: 'Metro Office Complex'
        }
      }
    ],
    maintenance: [
      {
        id: 'maint-1',
        name: 'Annual Fire System Inspection',
        description: 'Comprehensive annual inspection and testing of all fire protection systems to ensure compliance and optimal performance.',
        icon: 'CheckCircle',
        priceRange: '$500 - $2,500',
        duration: '4-8 hours',
        isEmergency: false,
        features: [
          'Complete system functionality testing',
          'Visual inspection of all components',
          'Water flow and pressure testing',
          'Alarm and notification testing',
          'Detailed compliance report',
          'Deficiency correction recommendations'
        ],
        certifications: [
          'NFPA 25 Inspection Standards',
          'State Licensed Inspectors',
          'Insurance Company Approved',
          'AHJ Recognized Reports'
        ],
        testimonial: {
          content: 'Their thorough inspection process caught several issues before they became major problems. The detailed reports are very helpful for our records.',
          author: 'David Thompson',
          company: 'Healthcare Partners'
        }
      },
      {
        id: 'maint-2',
        name: 'Fire Extinguisher Service',
        description: 'Monthly, quarterly, and annual service for all types of portable fire extinguishers including recharging and replacement.',
        icon: 'Shield',
        priceRange: '$25 - $150',
        duration: '30 minutes - 2 hours',
        isEmergency: false,
        features: [
          'Monthly visual inspections',
          'Annual maintenance service',
          'Hydrostatic testing',
          'Recharging and refilling',
          'Tag and documentation',
          'Emergency replacement service'
        ],
        certifications: [
          'NFPA 10 Service Standards',
          'Certified Fire Equipment Technicians',
          'DOT Hazmat Certified',
          'Manufacturer Authorized Service'
        ],
        testimonial: {
          content: 'Reliable service with detailed tracking. They handle all our locations and keep perfect records for our insurance requirements.',
          author: 'Jennifer Walsh',
          company: 'Retail Chain Management'
        }
      }
    ],
    inspection: [
      {
        id: 'insp-1',
        name: 'Code Compliance Assessment',
        description: 'Detailed evaluation of fire safety systems and building features to ensure full compliance with local fire codes.',
        icon: 'FileCheck',
        priceRange: '$800 - $3,000',
        duration: '1-2 days',
        isEmergency: false,
        features: [
          'Comprehensive code analysis',
          'Gap assessment and reporting',
          'Correction priority ranking',
          'Cost estimation for upgrades',
          'AHJ coordination assistance',
          'Follow-up compliance verification'
        ],
        certifications: [
          'ICC Fire Inspector Certified',
          'NFPA Code Specialist',
          'Local AHJ Recognized',
          'Professional Engineer Sealed'
        ],
        testimonial: {
          content: 'The compliance assessment was thorough and the recommendations were practical and cost-effective. Great preparation for our official inspection.',
          author: 'Robert Kim',
          company: 'Manufacturing Solutions'
        }
      }
    ],
    emergency: [
      {
        id: 'emerg-1',
        name: 'Emergency System Repair',
        description: 'Immediate response for critical fire protection system failures requiring urgent attention to maintain safety.',
        icon: 'AlertTriangle',
        priceRange: '$200 - $5,000',
        duration: '2-24 hours',
        isEmergency: true,
        features: [
          '24/7 emergency response',
          'Rapid diagnostic assessment',
          'Temporary system bypass',
          'Emergency parts inventory',
          'Priority repair scheduling',
          'Post-repair system testing'
        ],
        certifications: [
          '24/7 Emergency Response Team',
          'Licensed Emergency Contractors',
          'Insurance Approved Repairs',
          'Rapid Response Certified'
        ],
        testimonial: {
          content: 'When our sprinkler system failed on a weekend, they had a technician on-site within 90 minutes. Excellent emergency service.',
          author: 'Lisa Martinez',
          company: 'Downtown Hotel Group'
        }
      },
      {
        id: 'emerg-2',
        name: 'Fire Watch Services',
        description: 'Trained fire watch personnel to provide temporary fire safety coverage when systems are offline or during high-risk activities.',
        icon: 'Eye',
        priceRange: '$35 - $65/hour',
        duration: 'As needed',
        isEmergency: true,
        features: [
          'Certified fire watch personnel',
          'Continuous monitoring coverage',
          'Detailed hourly logs',
          'Emergency response capability',
          'AHJ notification compliance',
          'Insurance documentation'
        ],
        certifications: [
          'State Certified Fire Watch',
          'OSHA Safety Trained',
          'Background Checked Personnel',
          'Insurance Bonded Service'
        ],
        testimonial: {
          content: 'Professional fire watch service during our system upgrade. The personnel were knowledgeable and maintained excellent documentation.',
          author: 'Thomas Anderson',
          company: 'Tech Campus Management'
        }
      }
    ]
  };

  const serviceStats = {
    installation: servicesData.installation.length,
    maintenance: servicesData.maintenance.length,
    inspection: servicesData.inspection.length,
    emergency: servicesData.emergency.length
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleRequestQuote = (service) => {
    setSelectedService(service);
    setBookingType('quote');
    setIsBookingOpen(true);
  };

  const handleScheduleService = (service) => {
    setSelectedService(service);
    setBookingType('schedule');
    setIsBookingOpen(true);
  };

  const handleEmergencyContact = () => {
    alert('Emergency chat feature would be implemented here. For immediate assistance, please call 1-800-FIRE-911.');
  };

  const closeBookingWidget = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  const currentServices = servicesData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fire Safety Services - Professional Installation & Maintenance | AutoFireSafe</title>
        <meta name="description" content="Professional fire safety services including installation, maintenance, inspection, and emergency response. 24/7 availability with certified technicians." />
      </Helmet>

      <Header />
      <EmergencyContactButton />

      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNavigation />

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon name="Wrench" size={28} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Fire Safety Services</h1>
              <p className="text-muted-foreground">Professional installation, maintenance, and emergency response services</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-success" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>24/7 Emergency Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-warning" />
              <span>Fully Insured & Bonded</span>
            </div>
          </div>
        </div>

        {/* Emergency Services Section */}
        <EmergencyServiceSection onEmergencyContact={handleEmergencyContact} />

        {/* Service Category Tabs */}
        <ServiceCategoryTabs 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <ServicesSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              serviceStats={serviceStats}
            />
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {activeCategory === 'installation' && 'Installation Services'}
                {activeCategory === 'maintenance' && 'Maintenance & Repair'}
                {activeCategory === 'inspection' && 'Inspection & Testing'}
                {activeCategory === 'emergency' && 'Emergency Response'}
              </h2>
              <p className="text-muted-foreground">
                {currentServices.length} service{currentServices.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {currentServices.length > 0 ? (
              <div className="grid gap-6">
                {currentServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onRequestQuote={handleRequestQuote}
                    onScheduleService={handleScheduleService}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Wrench" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No Services Available</h3>
                <p className="text-muted-foreground mb-4">
                  Services for this category are currently being updated.
                </p>
                <Button
                  variant="outline"
                  onClick={() => handleCategoryChange('installation')}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  View Installation Services
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need Custom Fire Safety Solutions?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our fire safety experts can design and implement custom solutions tailored to your specific requirements. 
            Contact us for a comprehensive consultation and detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              onClick={() => window.open('tel:1-800-FIRE-SAFE', '_self')}
              iconName="Phone"
              iconPosition="left"
            >
              Call for Consultation
            </Button>
            <Button
              variant="outline"
              onClick={handleEmergencyContact}
              iconName="MessageSquare"
              iconPosition="left"
            >
              Start Live Chat
            </Button>
          </div>
        </div>
      </main>

      {/* Booking Widget */}
      <BookingWidget
        service={selectedService}
        isOpen={isBookingOpen}
        onClose={closeBookingWidget}
        type={bookingType}
      />
    </div>
  );
};

export default ServiceOfferings;