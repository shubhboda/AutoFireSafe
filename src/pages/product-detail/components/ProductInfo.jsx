import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProductInfo = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      variant: selectedVariant,
      quantity
    });
  };

  const calculateBulkPrice = () => {
    if (quantity >= 10) return product.price * 0.9; // 10% discount
    if (quantity >= 5) return product.price * 0.95; // 5% discount
    return product.price;
  };

  const finalPrice = calculateBulkPrice();
  const savings = (product.price - finalPrice) * quantity;

  return (
    <div className="space-y-6">
      {/* Product Title & Model */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {product.name}
        </h1>
        <p className="text-muted-foreground">
          Model: <span className="font-mono">{product.model}</span>
        </p>
      </div>

      {/* Certification Badges */}
      <div className="flex flex-wrap gap-2">
        {product.certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-md text-xs font-medium"
          >
            <Icon name="Shield" size={14} />
            <span>{cert}</span>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="bg-muted/50 p-4 rounded-lg">
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-3xl font-bold text-foreground font-mono">
            ${finalPrice.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">per unit</span>
          {finalPrice < product.price && (
            <span className="text-sm text-muted-foreground line-through font-mono">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        {savings > 0 && (
          <div className="text-sm text-success font-medium">
            You save ${savings.toFixed(2)} with bulk pricing!
          </div>
        )}

        {/* Bulk Pricing Info */}
        <div className="mt-2 text-xs text-muted-foreground">
          <div>5-9 units: 5% discount</div>
          <div>10+ units: 10% discount</div>
        </div>
      </div>

      {/* Variant Selection */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Select Variant:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className={`p-3 border rounded-md text-sm transition-smooth ${
                  selectedVariant?.id === variant.id
                    ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-muted-foreground'
                }`}
              >
                <div className="font-medium">{variant.name}</div>
                <div className="text-xs text-muted-foreground">
                  +${variant.priceModifier.toFixed(2)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Quantity:
        </label>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted transition-smooth"
          >
            <Icon name="Minus" size={16} />
          </button>
          <span className="text-lg font-medium font-mono w-12 text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted transition-smooth"
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <Icon 
          name={product.inStock ? "CheckCircle" : "XCircle"} 
          size={16} 
          className={product.inStock ? "text-success" : "text-destructive"} 
        />
        <span className={`text-sm font-medium ${
          product.inStock ? "text-success" : "text-destructive"
        }`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Add to Cart Button */}
      <div className="space-y-3">
        <Button
          variant="default"
          size="lg"
          fullWidth
          onClick={handleAddToCart}
          disabled={!product.inStock}
          iconName="ShoppingCart"
          iconPosition="left"
        >
          Add to Cart - ${(finalPrice * quantity).toFixed(2)}
        </Button>
        
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" fullWidth iconName="Heart" iconPosition="left">
            Save for Later
          </Button>
          <Button variant="outline" fullWidth iconName="Share2" iconPosition="left">
            Share Product
          </Button>
        </div>
      </div>

      {/* Quick Info */}
      <div className="bg-muted/30 p-4 rounded-lg space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="Truck" size={16} className="text-muted-foreground" />
          <span>Free shipping on orders over $500</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="RotateCcw" size={16} className="text-muted-foreground" />
          <span>30-day return policy</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="Shield" size={16} className="text-muted-foreground" />
          <span>2-year manufacturer warranty</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;