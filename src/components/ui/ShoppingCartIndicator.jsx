import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const ShoppingCartIndicator = ({ className = '' }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);

  // Mock cart data - in real app this would come from context/state management
  useEffect(() => {
    const mockCartItems = [
      {
        id: 1,
        name: 'Fire Extinguisher - ABC Type',
        price: 89.99,
        quantity: 2,
        image: '/assets/images/fire-extinguisher.jpg'
      },
      {
        id: 2,
        name: 'Smoke Detector - Photoelectric',
        price: 24.99,
        quantity: 1,
        image: '/assets/images/smoke-detector.jpg'
      }
    ];
    setCartItems(mockCartItems);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const toggleCartPreview = () => {
    setIsCartPreviewOpen(!isCartPreviewOpen);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className={`relative ${className}`}>
      {/* Cart Button */}
      <button
        onClick={toggleCartPreview}
        className="relative p-2 text-muted-foreground hover:text-foreground transition-smooth"
      >
        <Icon name="ShoppingCart" size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </button>

      {/* Cart Preview Dropdown */}
      {isCartPreviewOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-md shadow-elevated z-70">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Shopping Cart</h3>
              <button
                onClick={() => setIsCartPreviewOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="ShoppingCart" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Link to="/homepage" className="text-primary hover:underline text-sm mt-2 inline-block">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-2 hover:bg-muted rounded-md">
                      <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                        <Icon name="Package" size={20} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-sm font-medium text-foreground font-mono">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-smooth"
                      >
                        <Icon name="Trash2" size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="border-t border-border mt-4 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Total:</span>
                    <span className="text-lg font-semibold text-foreground font-mono">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <Link to="/shopping-cart-checkout" onClick={() => setIsCartPreviewOpen(false)}>
                      <Button variant="default" fullWidth>
                        View Cart & Checkout
                      </Button>
                    </Link>
                    <Link to="/homepage" onClick={() => setIsCartPreviewOpen(false)}>
                      <Button variant="outline" fullWidth>
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isCartPreviewOpen && (
        <div
          className="fixed inset-0 z-60"
          onClick={() => setIsCartPreviewOpen(false)}
        />
      )}
    </div>
  );
};

export default ShoppingCartIndicator;