import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="w-full sm:w-24 h-24 flex-shrink-0">
          <div className="w-full h-full bg-muted rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {item.description}
              </p>
              
              {/* Specifications */}
              {item.specifications && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.specifications.map((spec, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-3">
                <Icon 
                  name={item.inStock ? "CheckCircle" : "AlertCircle"} 
                  size={16} 
                  className={item.inStock ? "text-success" : "text-warning"} 
                />
                <span className={`text-sm font-medium ${item.inStock ? "text-success" : "text-warning"}`}>
                  {item.inStock ? "In Stock" : "Limited Stock"}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="text-xl font-bold text-foreground font-mono">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                ₹{item.price.toFixed(2)} each
              </div>
            </div>
          </div>

          {/* Quantity Controls and Remove */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">Quantity:</span>
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="p-2 hover:bg-muted transition-smooth"
                  disabled={item.quantity <= 1}
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="px-4 py-2 text-sm font-medium text-foreground min-w-[3rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="p-2 hover:bg-muted transition-smooth"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              iconName="Trash2"
              iconPosition="left"
              className="text-destructive hover:text-destructive"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;