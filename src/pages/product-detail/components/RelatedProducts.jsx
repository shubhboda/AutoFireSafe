import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ products, title = "Related Products" }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={12}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <Link 
          to="/product-detail" 
          className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
        >
          View All Products →
        </Link>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                    New
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
                    -{product.discount}%
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-foreground text-sm mb-1 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-foreground font-mono">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through font-mono">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-md ${
                    product.inStock 
                      ? 'bg-success/10 text-success' :'bg-destructive/10 text-destructive'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  iconName="ShoppingCart"
                  iconPosition="left"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-smooth">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                  New
                </div>
              )}
              {product.discount && (
                <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
                  -{product.discount}%
                </div>
              )}
              
              {/* Quick Actions Overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="flex space-x-2">
                  <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Icon name="Eye" size={16} />
                  </button>
                  <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Icon name="Heart" size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-foreground mb-2 line-clamp-2 hover:text-primary transition-smooth cursor-pointer">
                {product.name}
              </h3>
              
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-xs text-muted-foreground">
                  ({product.reviewCount})
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-baseline space-x-2">
                  <span className="font-semibold text-foreground font-mono">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through font-mono">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className={`text-xs px-2 py-1 rounded-md ${
                  product.inStock 
                    ? 'bg-success/10 text-success' :'bg-destructive/10 text-destructive'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                fullWidth
                iconName="ShoppingCart"
                iconPosition="left"
                disabled={!product.inStock}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;