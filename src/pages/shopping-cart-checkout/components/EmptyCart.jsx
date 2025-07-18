import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyCart = () => {
  const suggestedProducts = [
    {
      id: 1,
      name: 'Fire Extinguisher - ABC Type',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      category: 'Fire Extinguishers'
    },
    {
      id: 2,
      name: 'Smoke Detector - Photoelectric',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      category: 'Detection Systems'
    },
    {
      id: 3,
      name: 'Emergency Exit Sign',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      category: 'Safety Signs'
    }
  ];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto">
        {/* Empty Cart Icon */}
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
        </div>

        {/* Empty Cart Message */}
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground mb-8">
          Looks like you haven't added any fire safety equipment to your cart yet. 
          Browse our products to find the perfect safety solutions for your needs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/product-detail">
            <Button variant="default" iconName="Package" iconPosition="left">
              Browse Products
            </Button>
          </Link>
          <Link to="/service-offerings">
            <Button variant="outline" iconName="Wrench" iconPosition="left">
              View Services
            </Button>
          </Link>
        </div>

        {/* Suggested Products */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Popular Fire Safety Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {suggestedProducts.map((product) => (
              <div key={product.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="w-full h-32 bg-muted rounded-md overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-medium text-foreground line-clamp-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground font-mono">
                      ${product.price}
                    </span>
                    <Button size="sm" variant="outline">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="HelpCircle" size={20} className="text-primary" />
            <span className="font-medium text-foreground">Need Help?</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Our fire safety experts are here to help you choose the right equipment for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="ghost" size="sm" iconName="Phone" iconPosition="left">
              Call (555) 123-4567
            </Button>
            <Button variant="ghost" size="sm" iconName="MessageCircle" iconPosition="left">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;