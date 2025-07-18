import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import EmergencyContactButton from '../../components/ui/EmergencyContactButton';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductSpecifications from './components/ProductSpecifications';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';
import TechnicalDocuments from './components/TechnicalDocuments';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    name: "FireGuard Pro ABC Fire Extinguisher",
    model: "FG-ABC-5LB-2024",
    price: 89.99,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop"
    ],
    certifications: ["UL Listed", "NFPA Approved", "DOT Certified", "ISO 9001"],
    variants: [
      { id: 1, name: "5 lb Standard", priceModifier: 0 },
      { id: 2, name: "10 lb Heavy Duty", priceModifier: 25.00 },
      { id: 3, name: "2.5 lb Compact", priceModifier: -15.00 }
    ],
    description: `The FireGuard Pro ABC Fire Extinguisher is a versatile, multi-purpose fire suppression device designed for Class A, B, and C fires. \n\nFeaturing advanced dry chemical technology, this extinguisher provides reliable protection for homes, offices, and commercial spaces. \n\nWith its durable construction and easy-to-use design, it meets all major safety standards and regulations.`,
    features: [
      "Multi-purpose ABC dry chemical agent",
      "Pressure gauge for easy monitoring",
      "Corrosion-resistant aluminum cylinder",
      "Easy-grip handle with safety pin",
      "Wall mounting bracket included",
      "6-year manufacturer warranty"
    ]
  };

  const specifications = {
    general: [
      { label: "Type", value: "ABC Dry Chemical" },
      { label: "Capacity", value: "5 lbs (2.3 kg)" },
      { label: "Discharge Time", value: "13-15 seconds" },
      { label: "Effective Range", value: "14-16 feet" },
      { label: "Operating Temperature", value: "-65°F to 120°F" },
      { label: "Cylinder Material", value: "Aluminum" },
      { label: "Weight", value: "8.5 lbs total" },
      { label: "Dimensions", value: "15.5\" H x 5.25\" W" }
    ],
    technical: [
      { label: "Agent Type", value: "Monoammonium Phosphate" },
      { label: "Working Pressure", value: "195 PSI" },
      { label: "Test Pressure", value: "390 PSI" },
      { label: "Valve Type", value: "Squeeze Grip" },
      { label: "Hose Length", value: "8 inches" },
      { label: "Nozzle Type", value: "Fixed" },
      { label: "Refillable", value: "Yes" },
      { label: "Service Life", value: "12 years" }
    ],
    installation: [
      { label: "Mounting Height", value: "3.5 to 5 feet from floor" },
      { label: "Wall Clearance", value: "Minimum 6 inches" },
      { label: "Mounting Hardware", value: "Included bracket and screws" },
      { label: "Installation Time", value: "5-10 minutes" },
      { label: "Tools Required", value: "Drill, screwdriver, level" },
      { label: "Surface Types", value: "Drywall, concrete, metal" }
    ],
    maintenance: [
      { label: "Visual Inspection", value: "Monthly" },
      { label: "Professional Service", value: "Annually" },
      { label: "Hydrostatic Test", value: "Every 12 years" },
      { label: "Recharge After Use", value: "Immediately" },
      { label: "Storage Temperature", value: "40°F to 120°F" },
      { label: "Service Provider", value: "Certified technician required" }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Michael Johnson",
      rating: 5,
      title: "Excellent quality and easy to use",
      content: `Purchased this for our office building and couldn't be happier. The build quality is outstanding and the pressure gauge makes it easy to monitor. Installation was straightforward with the included mounting bracket. \n\nHighly recommend for any commercial or residential application.`,
      date: "2024-07-10",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      author: "Sarah Chen",
      rating: 4,
      title: "Great value for the price",
      content: `Good fire extinguisher with all the necessary certifications. The aluminum construction feels solid and the grip is comfortable. \n\nOnly minor complaint is that it's slightly heavier than expected, but that's probably due to the quality construction.`,
      date: "2024-07-05",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      author: "Robert Martinez",
      rating: 5,
      title: "Professional grade equipment",
      content: `As a facility manager, I've installed dozens of these units across our properties. Consistent quality, reliable performance, and excellent customer service from AutoFireSafe. \n\nThe UL listing and NFPA approval give us confidence in regulatory compliance.`,
      date: "2024-06-28",
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      author: "Lisa Thompson",
      rating: 4,
      title: "Easy installation, peace of mind",
      content: `Installed this in our home kitchen area. The instructions were clear and installation took about 10 minutes. \n\nThe pressure gauge is a nice feature that lets us check the status at a glance. Feel much safer having this available.`,
      date: "2024-06-20",
      verified: true,
      helpful: 6
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Smoke Detector - Photoelectric Sensor",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      inStock: true,
      isNew: false,
      discount: 17
    },
    {
      id: 3,
      name: "Fire Blanket - Emergency Response",
      price: 34.99,
      rating: 5,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=300&fit=crop",
      inStock: true,
      isNew: true
    },
    {
      id: 4,
      name: "Carbon Monoxide Detector",
      price: 39.99,
      rating: 4,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      inStock: false
    },
    {
      id: 5,
      name: "Emergency Exit Sign - LED",
      price: 19.99,
      rating: 4,
      reviewCount: 67,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=300&fit=crop",
      inStock: true
    }
  ];

  const technicalDocuments = [
    {
      name: "Product Installation Guide",
      type: "PDF",
      size: 2048000,
      category: "installation",
      lastUpdated: "2024-07-15"
    },
    {
      name: "Technical Specifications Sheet",
      type: "PDF",
      size: 1536000,
      category: "specifications",
      lastUpdated: "2024-07-10"
    },
    {
      name: "UL Certification Document",
      type: "PDF",
      size: 3072000,
      category: "certifications",
      lastUpdated: "2024-06-30"
    },
    {
      name: "NFPA Compliance Certificate",
      type: "PDF",
      size: 2560000,
      category: "certifications",
      lastUpdated: "2024-06-30"
    },
    {
      name: "Maintenance Schedule Template",
      type: "XLSX",
      size: 512000,
      category: "maintenance",
      lastUpdated: "2024-07-01"
    },
    {
      name: "Service Manual",
      type: "PDF",
      size: 4096000,
      category: "maintenance",
      lastUpdated: "2024-07-05"
    }
  ];

  const breadcrumbs = [
    { label: 'Home', path: '/homepage' },
    { label: 'Products', path: '/product-detail' },
    { label: 'Fire Extinguishers', path: '/product-detail' },
    { label: product.name, path: '/product-detail' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'specifications', label: 'Specifications', icon: 'Settings' },
    { id: 'reviews', label: 'Reviews', icon: 'Star' },
    { id: 'documents', label: 'Documents', icon: 'FileText' }
  ];

  const handleAddToCart = (productData) => {
    console.log('Adding to cart:', productData);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  const handleBuyNow = () => {
    navigate('/shopping-cart-checkout');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EmergencyContactButton />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} className="mb-6" />

        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Information */}
          <div>
            <ProductInfo product={product} onAddToCart={handleAddToCart} />
            
            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="default" 
                  fullWidth 
                  onClick={handleBuyNow}
                  iconName="CreditCard"
                  iconPosition="left"
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="border-b border-border mb-6">
            <div className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-smooth ${
                    activeTab === tab.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Product Description */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Product Description</h2>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Certifications & Compliance</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="bg-success/5 border border-success/20 rounded-lg p-4 text-center">
                        <Icon name="Shield" size={24} className="text-success mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">{cert}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <ProductSpecifications specifications={specifications} />
            )}

            {activeTab === 'reviews' && (
              <CustomerReviews 
                reviews={reviews} 
                averageRating={4.5} 
                totalReviews={reviews.length} 
              />
            )}

            {activeTab === 'documents' && (
              <TechnicalDocuments documents={technicalDocuments} />
            )}
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />

        {/* Success Message */}
        {isAddedToCart && (
          <div className="fixed bottom-4 right-4 bg-success text-success-foreground px-4 py-3 rounded-lg shadow-elevated flex items-center space-x-2 z-50">
            <Icon name="CheckCircle" size={20} />
            <span>Product added to cart!</span>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;